/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import path from 'path';
import { App, CfnOutput, Duration, Stack } from 'aws-cdk-lib';
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
} from 'aws-cdk-lib/aws-ec2';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { RetentionDays } from 'aws-cdk-lib/aws-logs';
import { Secret } from 'aws-cdk-lib/aws-secretsmanager';
import {
  ActiveMqBrokerInstance,
  ActiveMqBrokerEngineVersion,
  ActiveMqEventSource,
  ActiveMqBrokerUserManagement,
} from '../../src';

const app = new App({
  treeMetadata: false,
});

const stack = new Stack(app, 'ActiveMqBrokerInstanceStack');

const vpc = new Vpc(stack, 'BrokerVpc', {
  createInternetGateway: false,
  subnetConfiguration: [
    {
      cidrMask: 28,
      name: 'Private',
      subnetType: SubnetType.PRIVATE_ISOLATED,
    },
  ],
});

const vpcSubnets: SubnetSelection = { subnets: [vpc.isolatedSubnets[0]] };

const smVPCe = vpc.addInterfaceEndpoint('SecretsManagerEndpoint', {
  service: InterfaceVpcEndpointAwsService.SECRETS_MANAGER,
  subnets: vpcSubnets,
  securityGroups: [
    new SecurityGroup(stack, 'SecretsManagerVPCeSG', {
      vpc,
      allowAllOutbound: false,
    }),
  ],
});

const stsVPCe = vpc.addInterfaceEndpoint('STSEndpoint', {
  service: InterfaceVpcEndpointAwsService.STS,
  subnets: vpcSubnets,
  securityGroups: [
    new SecurityGroup(stack, 'STSVPCeSG', {
      vpc,
      allowAllOutbound: false,
    }),
  ],
});

const lambdaVPCe = vpc.addInterfaceEndpoint('LambdaEndpoint', {
  service: InterfaceVpcEndpointAwsService.LAMBDA,
  subnets: vpcSubnets,
  securityGroups: [
    new SecurityGroup(stack, 'LambdaVPCeSG', {
      vpc,
      allowAllOutbound: false,
    }),
  ],
});

const brokerAdminCreds = new Secret(stack, 'BrokerCreds', {
  generateSecretString: {
    secretStringTemplate: JSON.stringify({ username: 'admin' }),
    excludePunctuation: true,
    generateStringKey: 'password',
    passwordLength: 24,
  },
});

const broker = new ActiveMqBrokerInstance(stack, 'ActiveMqBrokerInstance', {
  publiclyAccessible: false,
  vpc,
  vpcSubnets,
  version: ActiveMqBrokerEngineVersion.V5_18,
  instanceType: InstanceType.of(InstanceClass.T3, InstanceSize.MICRO),
  userManagement: ActiveMqBrokerUserManagement.simple({
    users: [
      {
        username: brokerAdminCreds
          .secretValueFromJson('username')
          .unsafeUnwrap(),
        password: brokerAdminCreds.secretValueFromJson('password'),
      },
    ],
  }),
  autoMinorVersionUpgrade: true,
  cloudwatchLogsExports: {
    general: true,
  },
  cloudwatchLogsRetention: RetentionDays.TWO_WEEKS,
});

const queueName = 'myQueue';

const publisher = new NodejsFunction(stack, 'ActiveMqPublisher', {
  entry: path.join(__dirname, 'clients/amqp10/amqps-publisher.lambda.ts'),
  environment: {
    AMQP_ENDPOINT: broker.endpoints.amqp.url,
    CREDENTIALS: brokerAdminCreds.secretArn,
    QUEUE_NAME: queueName,
  },
  runtime: Runtime.NODEJS_LATEST,
  timeout: Duration.seconds(30),
  vpc,
  vpcSubnets: vpcSubnets,
  securityGroups: [new SecurityGroup(stack, 'ActiveMqPublisherSG', {
    vpc,
    allowAllOutbound: false,
  })],
  logRetention: RetentionDays.ONE_DAY,
});

if (broker.connections) {
  // inbound rule in broker SG
  broker.connections.allowFrom(publisher, Port.tcp(broker.endpoints.amqp.port));
  // outbound rule in tester
  publisher.connections.allowTo(broker.connections, Port.tcp(broker.endpoints.amqp.port));
}

// publisher needs to be able to read the secret with username and password
brokerAdminCreds.grantRead(publisher);
// as the networking is isolated - we need to establish connectivity to the SM to read the secret.
publisher.connections.allowTo(smVPCe, Port.tcp(443));

const listener = new NodejsFunction(stack, 'ActiveMqListener', {
  entry: path.join(__dirname, 'clients/listener.lambda.ts'),
  logRetention: RetentionDays.ONE_DAY,
  runtime: Runtime.NODEJS_LATEST,
});

listener.addEventSource(
  new ActiveMqEventSource({
    broker,
    credentials: brokerAdminCreds,
    queueName,
  }),
);

// Allowing the ESM to poll for new messages on the OpenWire port.
broker.connections?.allowInternally(
  Port.tcp(broker.endpoints.openWire.port),
  'Allowing for the ESM',
);

// INFO: In order to access the VPC Endpoints - we need to explicity allow it in the security groups
broker.connections?.allowTo(smVPCe, Port.tcp(443));
broker.connections?.allowTo(stsVPCe, Port.tcp(443));
broker.connections?.allowTo(lambdaVPCe, Port.tcp(443));

new CfnOutput(stack, 'ConfigId', {
  value: `${broker.configuration.id}`,
});

new CfnOutput(stack, 'ConfigRevision', {
  value: `${broker.configuration.revision}`,
});

app.synth();
