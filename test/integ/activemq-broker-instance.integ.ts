/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/


/**
 * This integration test creates an ActiveMQ single-instance broker with Simple Authentication and two lambdas:
 *  - an AMQP 1.0 message producer Lambda
 *  - a listener lambda with an event source mapping for ActiveMQ using OpenWire for polling for new messages
 *
 * The purpose of this test is to:
 *  - verify that a single-instance ActiveMQ broker is successfully provisioned
 *  - verify if an isolated network setup enables connectivity between all the actors
 *  - verify is the event-source mapping works successfully.
 *
 * In order to perform the test after the deployment go to the AWS Console and open CloudFormation page.
 *
 * Find and choose the ActiveMqBrokerInstanceStack stack and in the resources find and open the page for
 * the publisher AWS Lambda function. In the publisher code view select 'Test' to run the lambda
 * (the invoke event is not important). The function should run successfully.
 *
 * In the CloudFormation ActiveMqBrokerInstanceStack stack page find and open a page for the listener AWS Lambda Function.
 * Go to 'Monitoring' tab and open the CloudWatch Logs link. There should be a LogStream created. Open it and verify if
 * there is a new message. This is the message created by the publisher.
 *
 * If the test result is as described - the integration test succeeded and the functionality is as expected.
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

// A secret creating the username and password for the ActiveMQ broker user.
const brokerAdminCreds = new Secret(stack, 'BrokerCreds', {
  generateSecretString: {
    secretStringTemplate: JSON.stringify({ username: 'admin' }),
    excludePunctuation: true,
    generateStringKey: 'password',
    passwordLength: 24,
  },
});

// A fully-isolated VPC with a single subnet in a single AZ. As the test setup relies on
// a single-instance ActiveMQ broker - a single subnet is what is needed.
const vpc = new Vpc(stack, 'BrokerVpc', {
  createInternetGateway: false,
  maxAzs: 1,
  subnetConfiguration: [
    {
      cidrMask: 28,
      name: 'Private',
      subnetType: SubnetType.PRIVATE_ISOLATED,
    },
  ],
});

// As the ActiveMQ broker is single-instance - we can provide only a single subnet.
// This is assured by the maxAzs: 1 parameter when creating the VPC.
const vpcSubnets: SubnetSelection = { subnetType: SubnetType.PRIVATE_ISOLATED };

// The test verifies the communication from the producer (below) to the broker as well as
// from the broker to the listener (event source mapping). In order for them to work there
// needs to be a connectivity between the actors and three AWS services:
//  - SecretsManager - for fetching the secret containing the admin username/password
//  - STS - for assuming the IAM Role (by the ESM)
//  - Lambda - for invoking the listener (by the ESM)
// That is why below there are three VPC Endpoints created to enable connectivity to
// the mentioned AWS services from the isolated network setup.\
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

// In order to access the VPC Endpoints - we need to explicity allow it in the security group used by the ESM.
// By design the ESM reuses the security group and that is why it is the connections from the ActiveMQ broker's
// are being allowed to access the VPC Endpoints.
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
