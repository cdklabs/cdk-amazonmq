/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/

import { Aspects, Stack } from 'aws-cdk-lib';
import { Annotations, Match, Template } from 'aws-cdk-lib/assertions';
import { InstanceClass, InstanceSize, InstanceType } from 'aws-cdk-lib/aws-ec2';
import { ManagedPolicy, Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import { Function as LambdaFunction, Runtime as LambdaRuntime, Code as LambdaCode } from 'aws-cdk-lib/aws-lambda';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Secret } from 'aws-cdk-lib/aws-secretsmanager';
import { AwsSolutionsChecks, NagSuppressions } from 'cdk-nag';
import { RabbitMqBrokerEngineVersion, RabbitMqBrokerInstance, RabbitMqEventSource } from '../../src';

describe('RabbitMqBrokerInstance Best Practices', () => {

  test('RabbitMQ Private Single Instance Broker Deployment with custom permissions satisfies CDK NAG AwsSolutionsChecks', () => {
    const stack = new Stack(undefined, 'TestStack', { env: { account: '123456789012', region: 'tst-wrld-1' } });

    Aspects.of(stack).add(new AwsSolutionsChecks());

    const brokerAdminCreds = new Secret(stack, 'BrokerCreds', {
      generateSecretString: {
        secretStringTemplate: JSON.stringify({ username: 'admin' }),
        excludePunctuation: true,
        generateStringKey: 'password',
        passwordLength: 24,
      },
    });

    const broker = new RabbitMqBrokerInstance(stack, 'TestBroker', {
      publiclyAccessible: false,
      version: RabbitMqBrokerEngineVersion.V3_12_13,
      instanceType: InstanceType.of(InstanceClass.M5, InstanceSize.LARGE),
      admin: {
        username: brokerAdminCreds.secretValueFromJson('username').unsafeUnwrap(),
        password: brokerAdminCreds.secretValueFromJson('password'),
      },
      autoMinorVersionUpgrade: false,
    });

    const fn = new LambdaFunction(stack, 'fn', {
      runtime: LambdaRuntime.NODEJS_20_X,
      code: LambdaCode.fromInline('exports.handler = async (event) => { console.log(JSON.stringify(event, null, 2)); };'),
      handler: 'index.handler',
      role: new Role(stack, 'fnRole', {
        assumedBy: new ServicePrincipal('lambda.amazonaws.com'),
        managedPolicies: [
          ManagedPolicy.fromAwsManagedPolicyName('service-role/AWSLambdaBasicExecutionRole'),
        ],
      }),
    });

    fn.addEventSource(new RabbitMqEventSource({
      broker,
      credentials: brokerAdminCreds,
      queueName: 'myQueue',
      addPermissions: false,
    }));

    NagSuppressions.addResourceSuppressionsByPath(
      stack,
      '/TestStack/BrokerCreds/Resource',
      [{ id: 'AwsSolutions-SMG4', reason: 'Not a focus of the test.' }],
    );

    NagSuppressions.addResourceSuppressionsByPath(
      stack,
      '/TestStack/fnRole/Resource',
      [{ id: 'AwsSolutions-IAM4', reason: 'AWSLambdaBasicExecutionRole added explicitly and intentionally' }],
    );

    const template = Template.fromStack(stack);
    const warnings = Annotations.fromStack(stack).findWarning('*', Match.stringLikeRegexp('AwsSolutions-.*'));
    const errors = Annotations.fromStack(stack).findError('*', Match.stringLikeRegexp('AwsSolutions-.*'));

    expect(warnings).toHaveLength(0);
    // INFO: these are due to the requirement of waiting for an ESM to be "actually" deleted
    expect(errors).toHaveLength(22);

    expect(template.toJSON()).toMatchSnapshot();
  });
});