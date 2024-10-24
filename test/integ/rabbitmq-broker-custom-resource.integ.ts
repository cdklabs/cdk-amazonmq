/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/

import path from 'path';
import { App, Duration, Stack } from 'aws-cdk-lib';
import {
  InstanceClass,
  InstanceSize,
  InstanceType,
  Port,
} from 'aws-cdk-lib/aws-ec2';
import { PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { LogGroup, RetentionDays } from 'aws-cdk-lib/aws-logs';
import { Secret } from 'aws-cdk-lib/aws-secretsmanager';
import { PhysicalResourceId } from 'aws-cdk-lib/custom-resources';
import {
  HttpMethods,
  RabbitMqBrokerEngineVersion,
  RabbitMqBrokerInstance,
  RabbitMqCustomResource,
  RabbitMqCustomResourcePolicy,
} from '../../src';

const app = new App({
  treeMetadata: false,
});

const stack = new Stack(app, 'RabbitMqBrokerCustomResourceTest');

const brokerAdminCreds = new Secret(stack, 'BrokerCreds', {
  generateSecretString: {
    secretStringTemplate: JSON.stringify({ username: 'admin' }),
    excludePunctuation: true,
    generateStringKey: 'password',
    passwordLength: 24,
  },
});

const broker = new RabbitMqBrokerInstance(stack, 'Broker', {
  publiclyAccessible: true,
  version: RabbitMqBrokerEngineVersion.V3_13,
  instanceType: InstanceType.of(InstanceClass.T3, InstanceSize.MICRO),
  admin: {
    username: brokerAdminCreds.secretValueFromJson('username').unsafeUnwrap(),
    password: brokerAdminCreds.secretValueFromJson('password'),
  },
  autoMinorVersionUpgrade: true,
});

const username = 'app14';

const app1Creds = new Secret(stack, 'App1Creds', {
  generateSecretString: {
    secretStringTemplate: JSON.stringify({ username }),
    excludePunctuation: true,
    generateStringKey: 'password',
    passwordLength: 24,
  },
});

const app1 = new RabbitMqCustomResource(stack, 'CreateApp1User', {
  broker,
  credentials: brokerAdminCreds,
  logGroup: new LogGroup(stack, 'RmqCustomResourceLogGroup', {
    retention: RetentionDays.ONE_DAY,
  }),
  onUpdate: {
    path: `/api/users/${app1Creds.secretValueFromJson('username')}`,
    method: HttpMethods.PUT,
    payload: {
      password: app1Creds.secretValueFromJson('password'),
      tags: '',
    },
    physicalResourceId: PhysicalResourceId.of(`${username}-create`),
  },
  onDelete: {
    path: `/api/users/${app1Creds.secretValueFromJson('username')}`,
    method: HttpMethods.DELETE,
  },
  policy: RabbitMqCustomResourcePolicy.fromStatements([
    new PolicyStatement({
      actions: ['secretsmanager:GetSecretValue'],
      resources: [app1Creds.secretArn],
    }),
  ]),
});

const vhostEncoded = encodeURIComponent('/');

const app1Permissions = new RabbitMqCustomResource(
  stack,
  'GrantApp1UserPermissions',
  {
    broker,
    credentials: brokerAdminCreds,
    onUpdate: {
      path: `/api/permissions/${vhostEncoded}/${app1Creds.secretValueFromJson(
        'username',
      )}`,
      method: HttpMethods.PUT,
      payload: {
        configure: '',
        write: '',
        read: '.*',
      },
      physicalResourceId: PhysicalResourceId.of(`${username}-permissions`),
    },
    onDelete: {
      path: `/api/permissions/${vhostEncoded}/${app1Creds.secretValueFromJson(
        'username',
      )}`,
      method: HttpMethods.DELETE,
    },
  },
);

app1Permissions.node.addDependency(app1);

const rotationLambda = new NodejsFunction(stack, 'CredsRotator', {
  entry: path.join(__dirname, './rotation/credentials-rotator.ts'),
  timeout: Duration.seconds(30),
  runtime: Runtime.NODEJS_LATEST,
  environment: {
    BROKER_URL: broker.endpoints.console.url,
    // secret ARN to credentials of a RMQ user with managmement permissions
    CREDENTIALS: brokerAdminCreds.secretArn,
  },
  logGroup: new LogGroup(stack, 'CredsRotatorLogGroup', {
    retention: RetentionDays.ONE_DAY,
  }),
});

broker.connections?.allowFrom(
  rotationLambda,
  Port.tcp(broker.endpoints.console.port),
);

brokerAdminCreds.grantRead(rotationLambda);

brokerAdminCreds.addRotationSchedule('BrokerAdminCredsRotationSchedule', {
  rotationLambda,
  automaticallyAfter: Duration.hours(4),
  rotateImmediatelyOnUpdate: true,
});

app1Creds.addRotationSchedule('App1CredsRotationSchedule', {
  rotationLambda,
  automaticallyAfter: Duration.hours(4),
  rotateImmediatelyOnUpdate: true,
});

app.synth();
