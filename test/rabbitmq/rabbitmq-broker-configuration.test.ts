/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import { ArnFormat, SecretValue, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { InstanceClass, InstanceSize, InstanceType } from 'aws-cdk-lib/aws-ec2';
import { RabbitMqBrokerConfiguration, RabbitMqBrokerConfigurationDefinition, RabbitMqBrokerEngineVersion, RabbitMqBrokerInstance } from '../../src';

describe('RabbitMqBrokerConfiguration', () => {

  test('Configuration Renders Properly', () => {
    const stack = new Stack(undefined, 'TestStack', { env: { account: '123456789012', region: 'tst-wrld-1' } });

    new RabbitMqBrokerConfiguration(stack, 'TestConfig', {
      description: 'Test Description',
      definition: RabbitMqBrokerConfigurationDefinition.data('Test Definition'),
      engineVersion: RabbitMqBrokerEngineVersion.V3_12_13,
    });

    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::AmazonMQ::Configuration', {
      Data: { 'Fn::Base64': 'Test Definition' },
      Description: 'Test Description',
      EngineType: 'RABBITMQ',
      EngineVersion: '3.12.13',
      Name: 'TestConfig',
    });
  });

  test('Configuration Revision Renders and Associates Properly', () => {
    const stack = new Stack(undefined, 'TestStack', { env: { account: '123456789012', region: 'tst-wrld-1' } });

    const config = new RabbitMqBrokerConfiguration(stack, 'TestConfig', {
      description: 'Test Description',
      definition: RabbitMqBrokerConfigurationDefinition.data('Test Definition'),
      engineVersion: RabbitMqBrokerEngineVersion.V3_12_13,
    });

    const broker = new RabbitMqBrokerInstance(stack, 'TestBroker', {
      publiclyAccessible: true,
      version: RabbitMqBrokerEngineVersion.V3_12_13,
      instanceType: InstanceType.of(InstanceClass.M5, InstanceSize.LARGE),
      admin: {
        username: 'username',
        password: SecretValue.unsafePlainText('password'),
      },
      autoMinorVersionUpgrade: false,
    });

    const newConfig = config.createRevision({
      description: 'New Description',
      definition: RabbitMqBrokerConfigurationDefinition.data('New Definition'),
    });

    newConfig.associateWith(broker);

    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::AmazonMQ::Configuration', {
      Data: { 'Fn::Base64': 'Test Definition' },
      Description: 'Test Description',
      EngineType: 'RABBITMQ',
      EngineVersion: '3.12.13',
      Name: 'TestConfig',
    });

    template.hasResourceProperties('AWS::Lambda::Function', {
      Role: { 'Fn::GetAtt': ['AWS679f53fac002430cb0da5b7982bd2287ServiceRoleC1EA0FF2', 'Arn'] },
      Runtime: 'nodejs18.x',
      Timeout: 120,
    });

    template.hasResourceProperties('Custom::AWS', {
      Create: {
        'Fn::Join': [
          '',
          [
            '{"service":"mq","action":"UpdateConfiguration","parameters":{"ConfigurationId":"',
            {
              Ref: 'TestConfig3F668CF6',
            },
            '","Data":"',
            {
              'Fn::Base64': 'New Definition',
            },
            '","Description":"New Description"},"physicalResourceId":{"responsePath":"Id"}}',
          ],
        ],
      },
      InstallLatestAwsSdk: true,
      ServiceToken: { 'Fn::GetAtt': ['AWS679f53fac002430cb0da5b7982bd22872D164C4C', 'Arn'] },
    });

    template.hasResourceProperties('AWS::AmazonMQ::ConfigurationAssociation', {
      Broker: { Ref: 'TestBrokerBD4D5330' },
      Configuration: {
        Id: { 'Fn::GetAtt': ['TestConfigRevisor0AB7F620', 'Id'] },
        Revision: { 'Fn::GetAtt': ['TestConfigRevisor0AB7F620', 'LatestRevision.Revision'] },
      },
    });

  });

  test('Configuration Renders Properly', () => {
    const stack = new Stack(undefined, 'TestStack', { env: { account: '123456789012', region: 'tst-wrld-1' } });

    const config = new RabbitMqBrokerConfiguration(stack, 'TestConfig', {
      description: 'Test Description',
      definition: RabbitMqBrokerConfigurationDefinition.data('Test Definition'),
    });

    const broker = new RabbitMqBrokerInstance(stack, 'TestBroker', {
      publiclyAccessible: true,
      version: RabbitMqBrokerEngineVersion.V3_12_13,
      instanceType: InstanceType.of(InstanceClass.M5, InstanceSize.LARGE),
      admin: {
        username: 'username',
        password: SecretValue.unsafePlainText('password'),
      },
      autoMinorVersionUpgrade: false,
    });

    config.associateWith(broker);

    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::AmazonMQ::Configuration', {
      Data: { 'Fn::Base64': 'Test Definition' },
      Description: 'Test Description',
      EngineType: 'RABBITMQ',
      EngineVersion: '3.12.13',
      Name: 'TestConfig',
    });

    template.hasResourceProperties('AWS::AmazonMQ::ConfigurationAssociation', {
      Broker: { Ref: 'TestBrokerBD4D5330' },
      Configuration: {
        Id: { Ref: 'TestConfig3F668CF6' },
        Revision: { 'Fn::GetAtt': ['TestConfig3F668CF6', 'Revision'] },
      },
    });
  });

  test('Importing by id does not introduce any resource', () => {
    const stack = new Stack(undefined, 'TestStack', { env: { account: '123456789012', region: 'tst-wrld-1' } });

    const id = 'c-1234-1234-12341234-1234-12341234';

    const expectedArn = stack.formatArn({
      service: 'mq',
      resource: 'configuration',
      resourceName: id,
      arnFormat: ArnFormat.COLON_RESOURCE_NAME,
    });

    const config = RabbitMqBrokerConfiguration.fromAttributes(stack, 'TestImportedConfig', {
      id,
      revision: 1,
    });

    const template = Template.fromStack(stack);

    template.resourceCountIs('AWS::AmazonMQ::Configuration', 0);
    expect(config.arn).toEqual(expectedArn);
  });

  test('Importing by ARN does not introduce any resource', () => {
    const stack = new Stack(undefined, 'TestStack', { env: { account: '123456789012', region: 'tst-wrld-1' } });

    const expectedId = 'c-1234-1234-12341234-1234-12341234';
    const arn = stack.formatArn({
      service: 'mq',
      resource: 'configuration',
      resourceName: expectedId,
      arnFormat: ArnFormat.COLON_RESOURCE_NAME,
    });

    const config = RabbitMqBrokerConfiguration.fromAttributes(stack, 'TestImportedConfig', {
      arn,
      revision: 1,
    });

    const template = Template.fromStack(stack);

    template.resourceCountIs('AWS::AmazonMQ::Configuration', 0);
    expect(config.id).toEqual(expectedId);
  });


  test('Importing not providing props throws an error', () => {
    const stack = new Stack(undefined, 'TestStack', { env: { account: '123456789012', region: 'tst-wrld-1' } });

    expect(() => {
      RabbitMqBrokerConfiguration.fromAttributes(stack, 'TestImportedConfig', { revision: -1 });
    }).toThrow('Either id or arn must be provided');
  });
});