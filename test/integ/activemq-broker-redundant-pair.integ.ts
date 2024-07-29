/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import path from 'path';
import { App, CfnOutput, Duration, Stack } from 'aws-cdk-lib';
import { InstanceClass, InstanceSize, InstanceType, InterfaceVpcEndpointAwsService, Port, SecurityGroup, SubnetSelection, SubnetType, Vpc } from 'aws-cdk-lib/aws-ec2';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Secret } from 'aws-cdk-lib/aws-secretsmanager';
import { ActiveMqBrokerRedundantPair, ActiveMqBrokerEngineVersion, ActiveMqBrokerUserManagement } from '../../src';

const app = new App({
  treeMetadata: false,
});

const stack = new Stack(app, 'ActiveMqBrokerRedundantPairStack');

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
  version: ActiveMqBrokerEngineVersion.V5_15_16,
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

const tester = new NodejsFunction(stack, 'MqttTester', {
  entry: path.join(__dirname, 'clients/mqtt/mqtt-tester.lambda.ts'),
  environment: {
    MQTT_ENDPOINT: broker.first.endpoints.mqtt.url,
    CREDENTIALS: brokerUser.secretArn,
  },
  runtime: Runtime.NODEJS_LATEST,
  timeout: Duration.seconds(30),
  vpc,
  vpcSubnets,
  securityGroups: [new SecurityGroup(stack, 'MqttTesterSG', {
    vpc,
    allowAllOutbound: false,
  })],
});

if (broker.connections) {
  // inbound rule in broker SG
  broker.connections.allowFrom(tester, Port.tcp(broker.first.endpoints.mqtt.port));
  // outbound rule in tester
  tester.connections.allowTo(broker.connections, Port.tcp(broker.first.endpoints.mqtt.port));
}

tester.connections.allowTo(smVPCe, Port.tcp(443));

brokerUser.grantRead(tester);

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