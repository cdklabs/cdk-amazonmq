/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/

/**
 * This integration test creates an ActiveMQ broker redundant pair with Simple Authentication and two lambdas:
 *
 *  - an MQTT message producer Lambda
 *  - an MQTT message subscriber Lambda
 *
 * The purpose of this test is to:
 *  - verify that a redundant pair ActiveMQ deployment is successfully provisioned
 *  - verify that in an isolated network setup connectivity between all actors is established
 *  - verify is MQTT protocol works for two, separate clients: the publisher and the subscriber
 *
 * In order to perform the test, after the deployment go to the AWS Console and open CloudFormation page.
 *
 * Find and select the ActiveMqBrokerRedundantPairStack stack and in the resources find and open the page for
 * the subscriber AWS Lambda function (in a separate tab). Additionally, find and open the page for the publisher AWS Lambda function.
 *
 * In the subscriber function select 'Test' to run the function. The function has a timeout of 30 seconds.
 * In this time you need to go to the publisher and also run it. This will make the publisher send a message
 * to the topic to which the subscriber is subscribed. You should observe in the subscriber function's CloudWatch Logs
 * the entry containing the message sent by the publisher.
 *
* If the test result is as described - the integration test succeeded and the functionality is as expected.
 *
 */
import path from 'path';
import { App, CfnOutput, Duration, Stack } from 'aws-cdk-lib';
import { InstanceClass, InstanceSize, InstanceType, InterfaceVpcEndpointAwsService, Port, SecurityGroup, SubnetSelection, SubnetType, Vpc } from 'aws-cdk-lib/aws-ec2';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { RetentionDays } from 'aws-cdk-lib/aws-logs';
import { Secret } from 'aws-cdk-lib/aws-secretsmanager';
import { ActiveMqBrokerRedundantPair, ActiveMqBrokerEngineVersion, ActiveMqBrokerUserManagement } from '../../src';

const app = new App({
  treeMetadata: false,
});

const stack = new Stack(app, 'ActiveMqBrokerRedundantPairStack');

const vpc = new Vpc(stack, 'BrokerVpc', {
  createInternetGateway: false,
  maxAzs: 2,
  subnetConfiguration: [
    {
      cidrMask: 28,
      name: 'Private',
      subnetType: SubnetType.PRIVATE_ISOLATED,
    },
  ],
});

const vpcSubnets: SubnetSelection = { subnetType: SubnetType.PRIVATE_ISOLATED };

const smVPCe = vpc.addInterfaceEndpoint('SecretsManagerEndpoint', {
  service: InterfaceVpcEndpointAwsService.SECRETS_MANAGER,
  subnets: vpcSubnets,
  securityGroups: [new SecurityGroup(stack, 'SecretsManagerVPCeSG', {
    vpc,
    allowAllOutbound: false,
  })],
});

const brokerUser = new Secret(stack, 'BrokerUser', {
  generateSecretString: {
    secretStringTemplate: JSON.stringify({ username: 'admin' }),
    excludePunctuation: true,
    generateStringKey: 'password',
    passwordLength: 24,
  },
});

const broker = new ActiveMqBrokerRedundantPair(stack, 'ActiveMqBrokerPair', {
  publiclyAccessible: false,
  version: ActiveMqBrokerEngineVersion.V5_18,
  instanceType: InstanceType.of(InstanceClass.M5, InstanceSize.LARGE),
  userManagement: ActiveMqBrokerUserManagement.simple({
    users: [{
      username: brokerUser.secretValueFromJson('username').unsafeUnwrap(),
      password: brokerUser.secretValueFromJson('password'),
    }],
  }),
  autoMinorVersionUpgrade: true,
  vpc,
  vpcSubnets,
});

const topicName = 'myTopic';

const publisher = new NodejsFunction(stack, 'MqttPublisher', {
  entry: path.join(__dirname, 'clients/mqtt/mqtt-publisher.lambda.ts'),
  environment: {
    MQTT_ENDPOINTS: `${broker.first.endpoints.mqtt.url},${broker.second.endpoints.mqtt.url}`,
    CREDENTIALS: brokerUser.secretArn,
    TOPIC_NAME: topicName,
  },
  runtime: Runtime.NODEJS_LATEST,
  timeout: Duration.seconds(30),
  vpc,
  vpcSubnets,
  securityGroups: [new SecurityGroup(stack, 'MqttPublisherSG', {
    vpc,
    allowAllOutbound: false,
  })],
  logRetention: RetentionDays.ONE_DAY,
});

if (broker.connections) {
  // inbound rule in broker SG
  broker.connections.allowFrom(publisher, Port.tcp(broker.first.endpoints.mqtt.port));
  // outbound rule in tester
  publisher.connections.allowTo(broker.connections, Port.tcp(broker.first.endpoints.mqtt.port));
}

// publisher needs to be able to read the secret with username and password
brokerUser.grantRead(publisher);
// as the networking is isolated - we need to establish connectivity to the SM to read the secret.
publisher.connections.allowTo(smVPCe, Port.tcp(443));

const subscriber = new NodejsFunction(stack, 'MqttSubscriber', {
  entry: path.join(__dirname, 'clients/mqtt/mqtt-subscriber.lambda.ts'),
  environment: {
    MQTT_ENDPOINTS: `${broker.first.endpoints.mqtt.url},${broker.second.endpoints.mqtt.url}`,
    CREDENTIALS: brokerUser.secretArn,
    TOPIC_NAME: topicName,
  },
  runtime: Runtime.NODEJS_LATEST,
  timeout: Duration.seconds(30),
  vpc,
  vpcSubnets,
  securityGroups: [new SecurityGroup(stack, 'MqttSubscriberSG', {
    vpc,
    allowAllOutbound: false,
  })],
  logRetention: RetentionDays.ONE_DAY,
});

if (broker.connections) {
  // inbound rule in broker SG
  broker.connections.allowFrom(subscriber, Port.tcp(broker.first.endpoints.mqtt.port));
  // outbound rule in tester
  subscriber.connections.allowTo(broker.connections, Port.tcp(broker.first.endpoints.mqtt.port));
}

// publisher needs to be able to read the secret with username and password
brokerUser.grantRead(subscriber);
// as the networking is isolated - we need to establish connectivity to the SM to read the secret.
subscriber.connections.allowTo(smVPCe, Port.tcp(443));

new CfnOutput(stack, 'ActiveConsole', {
  value: broker.first.endpoints.console.url,
});

new CfnOutput(stack, 'ActiveStompUrl', {
  value: broker.first.endpoints.stomp.url,
});

new CfnOutput(stack, 'ActiveStompPort', {
  value: broker.first.endpoints.stomp.port.toString(),
});

new CfnOutput(stack, 'ActiveIpAddress', {
  value: broker.first.ipAddress,
});

new CfnOutput(stack, 'StandbyConsole', {
  value: broker.second.endpoints.console.url,
});

new CfnOutput(stack, 'StandbyStompUrl', {
  value: broker.second.endpoints.stomp.url,
});

new CfnOutput(stack, 'StandbyStompPort', {
  value: broker.second.endpoints.stomp.port.toString(),
});

new CfnOutput(stack, 'StandbyIpAddress', {
  value: broker.second.ipAddress,
});

app.synth();