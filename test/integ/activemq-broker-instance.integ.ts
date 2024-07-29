/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import path from 'path';
import { App, CfnOutput, Stack } from 'aws-cdk-lib';
import { InstanceClass, InstanceSize, InstanceType } from 'aws-cdk-lib/aws-ec2';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { RetentionDays } from 'aws-cdk-lib/aws-logs';
import { Secret } from 'aws-cdk-lib/aws-secretsmanager';
import { ActiveMqBrokerInstance, ActiveMqBrokerEngineVersion, ActiveMqEventSource, ActiveMqBrokerUserManagement } from '../../src';

const app = new App({
  treeMetadata: false,
});

const stack = new Stack(app, 'ActiveMqBrokerInstanceStack');

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
  version: ActiveMqBrokerEngineVersion.V5_17_6,
  instanceType: InstanceType.of(InstanceClass.T3, InstanceSize.MICRO),
  userManagement: ActiveMqBrokerUserManagement.simple({
    users: [{
      username: brokerAdminCreds.secretValueFromJson('username').unsafeUnwrap(),
      password: brokerAdminCreds.secretValueFromJson('password'),
    }],
  }),
  autoMinorVersionUpgrade: true,
  cloudwatchLogsExports: {
    general: true,
  },
  cloudwatchLogsRetention: RetentionDays.TWO_WEEKS,
});

const listener = new NodejsFunction(stack, 'RabbitListener', {
  entry: path.join(__dirname, 'clients/listener.lambda.ts'),
  logRetention: RetentionDays.ONE_DAY,
  runtime: Runtime.NODEJS_LATEST,
});

listener.addEventSource(new ActiveMqEventSource({
  broker,
  credentials: brokerAdminCreds,
  queueName: 'myQueue',
}));

new CfnOutput(stack, 'ConfigId', {
  value: `${broker.configuration.id}`,
});

new CfnOutput(stack, 'ConfigRevision', {
  value: `${broker.configuration.revision}`,
});

app.synth();