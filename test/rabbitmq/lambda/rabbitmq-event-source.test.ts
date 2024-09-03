/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import { SecretValue, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import {
  InstanceClass,
  InstanceSize,
  InstanceType,
} from 'aws-cdk-lib/aws-ec2';
import {
  Function as LambdaFunction,
  Runtime as LambdaRuntime,
  Code as LambdaCode,
} from 'aws-cdk-lib/aws-lambda';
import { Secret } from 'aws-cdk-lib/aws-secretsmanager';
import {
  RabbitMqBrokerEngineVersion,
  RabbitMqBrokerInstance,
  RabbitMqEventSource,
} from '../../../src';

const createBroker = (stack: Stack) => {
  return new RabbitMqBrokerInstance(stack, 'TestBroker', {
    publiclyAccessible: true,
    version: RabbitMqBrokerEngineVersion.V3_12_13,
    instanceType: InstanceType.of(InstanceClass.M5, InstanceSize.LARGE),
    admin: {
      username: 'admin',
      password: SecretValue.unsafePlainText('password'),
    },
    autoMinorVersionUpgrade: false,
  });
};

describe('RabbitMqEventSource', () => {
  test.each([
    { batchSize: undefined },
    { batchSize: 1 },
    { batchSize: 2 },
    { batchSize: 100 },
    { batchSize: 10000 },
  ])('creates event source with correct batch sizes', ({ batchSize }) => {

    const stack = new Stack();

    const broker = createBroker(stack);
    const credentials = Secret.fromSecretNameV2(stack, 'TestSecret', 'TestSecret');
    const queueName = 'TestQueue';

    const fn = new LambdaFunction(stack, 'TestFunction', {
      runtime: LambdaRuntime.NODEJS_20_X,
      code: LambdaCode.fromInline('exports.handler = async (event) => { console.log(JSON.stringify(event, null, 2)); };'),
      handler: 'index.handler',
    });

    fn.addEventSource(new RabbitMqEventSource({
      broker,
      credentials,
      queueName,
      batchSize,
    }));

    const template = Template.fromStack(stack);

    // The broker is a resource in the template
    template.resourceCountIs('AWS::AmazonMQ::Broker', 1);

    // The listener function (et consortes) is a resource in the template
    template.resourceCountIs('AWS::IAM::Role', 7);
    template.resourceCountIs('AWS::IAM::Policy', 7);
    template.resourceCountIs('AWS::Lambda::Function', 6);

    // The secret is imported and is not a resource in the template
    template.resourceCountIs('AWS::SecretsManager::Secret', 0);

    let props: { [key: string]: any } = {
      EventSourceArn: {
        'Fn::GetAtt': [
          'TestBrokerBD4D5330',
          'Arn',
        ],
      },
      FunctionName: {
        Ref: 'TestFunction22AD90FC',
      },
      Queues: [
        'TestQueue',
      ],
      SourceAccessConfigurations: [
        {
          Type: 'BASIC_AUTH',
          URI: {
            'Fn::Join': ['',
              [
                'arn:',
                { Ref: 'AWS::Partition' },
                ':secretsmanager:',
                { Ref: 'AWS::Region' },
                ':',
                { Ref: 'AWS::AccountId' },
                ':secret:TestSecret',
              ]],
          },
        },
      ],
    };

    if (batchSize) {
      props.BatchSize = batchSize;
    }
    template.hasResourceProperties('AWS::Lambda::EventSourceMapping', props);
  });

  test.each([
    { batchSize: 0 },
    { batchSize: -1 },
    { batchSize: -100 },
    { batchSize: 10001 },
  ])('App generation fails on incorrect batch sizes', ({ batchSize }) => {

    const stack = new Stack();

    const broker = createBroker(stack);
    const credentials = Secret.fromSecretNameV2(stack, 'TestSecret', 'TestSecret');
    const queueName = 'TestQueue';

    const fn = new LambdaFunction(stack, 'TestFunction', {
      runtime: LambdaRuntime.NODEJS_20_X,
      code: LambdaCode.fromInline('exports.handler = async (event) => { console.log(JSON.stringify(event, null, 2)); };'),
      handler: 'index.handler',
    });

    expect(() => fn.addEventSource(new RabbitMqEventSource({
      broker,
      credentials,
      queueName,
      batchSize,
    }))).toThrow(`Maximum batch size must be between 1 and 10000 inclusive (given ${batchSize})`);
  });
});