/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import path from "path";
import { App, Stack, Duration } from "aws-cdk-lib";
import {
  InstanceClass,
  InstanceSize,
  InstanceType,
  InterfaceVpcEndpointAwsService,
  Port,
  SecurityGroup,
  SubnetSelection,
  SubnetType,
  Vpc,
} from "aws-cdk-lib/aws-ec2";
import { Runtime } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { RetentionDays } from "aws-cdk-lib/aws-logs";
import { Secret } from "aws-cdk-lib/aws-secretsmanager";
import {
  RabbitMqBrokerCluster,
  RabbitMqBrokerEngineVersion,
  RabbitMqEventSource,
} from "../../src";

const app = new App({
  treeMetadata: false,
});

const stack = new Stack(app, "RabbitMqBrokerClusterTestStack");

const queueName = "user-events";

const vpc = new Vpc(stack, "RabbitMqBrokerVpc", {
  subnetConfiguration: [
    {
      cidrMask: 24,
      name: "ingress",
      subnetType: SubnetType.PUBLIC,
      mapPublicIpOnLaunch: false,
    },
    {
      cidrMask: 24,
      name: "application",
      subnetType: SubnetType.PRIVATE_WITH_EGRESS,
    },
    {
      cidrMask: 28,
      name: "broker_1",
      subnetType: SubnetType.PRIVATE_ISOLATED,
    },
    {
      cidrMask: 28,
      name: "broker_2",
      subnetType: SubnetType.PRIVATE_ISOLATED,
    },
    {
      cidrMask: 28,
      name: "broker_3",
      subnetType: SubnetType.PRIVATE_ISOLATED,
    },
  ],
});

const brokerSubnets: SubnetSelection = {
  subnetType: SubnetType.PRIVATE_ISOLATED,
};
const functionSubnets: SubnetSelection = {
  subnetType: SubnetType.PRIVATE_WITH_EGRESS,
};

const smVPCe = vpc.addInterfaceEndpoint("SecretsManagerEndpoint", {
  service: InterfaceVpcEndpointAwsService.SECRETS_MANAGER,
  subnets: brokerSubnets,
  securityGroups: [
    new SecurityGroup(stack, "SecretsManagerVPCeSG", {
      vpc,
      allowAllOutbound: false,
    }),
  ],
});

const stsVPCe = vpc.addInterfaceEndpoint("STSEndpoint", {
  service: InterfaceVpcEndpointAwsService.STS,
  subnets: brokerSubnets,
  securityGroups: [
    new SecurityGroup(stack, "STSVPCeSG", {
      vpc,
      allowAllOutbound: false,
    }),
  ],
});

const lambdaVPCe = vpc.addInterfaceEndpoint("LambdaEndpoint", {
  service: InterfaceVpcEndpointAwsService.LAMBDA,
  subnets: brokerSubnets,
  securityGroups: [
    new SecurityGroup(stack, "LambdaVPCeSG", {
      vpc,
      allowAllOutbound: false,
    }),
  ],
});

const brokerAdminCreds = new Secret(stack, "BrokerCreds", {
  generateSecretString: {
    secretStringTemplate: JSON.stringify({ username: "admin" }),
    excludePunctuation: true,
    generateStringKey: "password",
    passwordLength: 24,
  },
});

const cluster = new RabbitMqBrokerCluster(stack, "Broker", {
  brokerName: "my-super-broker",
  publiclyAccessible: false,
  version: RabbitMqBrokerEngineVersion.V3_13,
  instanceType: InstanceType.of(InstanceClass.M5, InstanceSize.LARGE),
  admin: {
    username: brokerAdminCreds.secretValueFromJson("username").unsafeUnwrap(),
    password: brokerAdminCreds.secretValueFromJson("password"),
  },
  vpc,
  vpcSubnets: brokerSubnets,
  cloudwatchLogsExports: {
    general: true,
  },
  cloudwatchLogsRetention: RetentionDays.ONE_DAY,
});

const publisher = new NodejsFunction(stack, "RabbitMqPublisher", {
  entry: path.join(__dirname, "clients/amqp091/amqps-publisher.lambda.ts"),
  environment: {
    AMQP_ENDPOINT: cluster.endpoints.amqp.url,
    CREDENTIALS: brokerAdminCreds.secretArn,
    QUEUE_NAME: queueName,
  },
  runtime: Runtime.NODEJS_LATEST,
  timeout: Duration.seconds(30),
  vpc,
  vpcSubnets: functionSubnets,
  securityGroups: [
    new SecurityGroup(stack, "RabbitMqPublisherSG", {
      vpc,
      allowAllOutbound: false,
    }),
  ],
  logRetention: RetentionDays.ONE_DAY,
});

publisher.connections.allowToAnyIpv4(Port.tcp(443));
cluster.connections?.allowDefaultPortFrom(publisher);

brokerAdminCreds.grantRead(publisher);

const listener = new NodejsFunction(stack, "RabbitMqListener", {
  entry: path.join(__dirname, "clients/listener.lambda.ts"),
  logRetention: RetentionDays.ONE_DAY,
  runtime: Runtime.NODEJS_LATEST,
});

listener.addEventSource(
  new RabbitMqEventSource({
    broker: cluster,
    credentials: brokerAdminCreds,
    queueName,
  }),
);

// INFO: the event source creates ENIs in the subnets where the broker has VPC Endpoints
//       and the ENIs will use the VPC Endpoint's Security Group
//       In order to allow the ENIs to access the broker and trigger the lambda
//       we're effectively allowing the broker's SG inbound access to itself on the AMQP port.
//       Without it - the below `RabbitMqEventSource` will not work. Additionally,
//       each time the event source mapping is (re)enabled - new ENIs will be created,
//       thus access on the per-ENI level could later become obsolete and ineffective.

//       Inbound & Outbound Rule
cluster.connections?.allowDefaultPortInternally();

// INFO: In order to access the VPC Endpoints - we need to explicity allow it in the security groups
cluster.connections?.allowTo(smVPCe, Port.tcp(443));
cluster.connections?.allowTo(stsVPCe, Port.tcp(443));
cluster.connections?.allowTo(lambdaVPCe, Port.tcp(443));

// new CfnOutput(stack, 'ConfigurationId', {
//   value: cluster.configuration.id,
// });

// new CfnOutput(stack, 'ConfigurationRevision', {
//   value: `${cluster.configuration.revision}`,
// });

app.synth();
