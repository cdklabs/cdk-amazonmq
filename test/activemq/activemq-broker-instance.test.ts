/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import { SecretValue, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { InstanceClass, InstanceSize, InstanceType, SubnetSelection, SubnetType, Vpc } from 'aws-cdk-lib/aws-ec2';
import { Key } from 'aws-cdk-lib/aws-kms';
import { RetentionDays } from 'aws-cdk-lib/aws-logs';
import { ActiveMqBrokerEngineVersion, ActiveMqBrokerInstance, ActiveMqBrokerUserManagement, StorageType } from '../../src';

describe('ActiveMqBrokerInstance', () => {

  test('ActiveMQ Public Single Instance Broker Deployment with no network components provided', () => {
    const stack = new Stack();

    const broker = new ActiveMqBrokerInstance(stack, 'TestBroker', {
      publiclyAccessible: true,
      version: ActiveMqBrokerEngineVersion.V5_18,
      instanceType: InstanceType.of(InstanceClass.M5, InstanceSize.LARGE),
      userManagement: ActiveMqBrokerUserManagement.simple({
        users: [{
          username: 'username',
          password: SecretValue.unsafePlainText('password'),
        }],
      }),
      autoMinorVersionUpgrade: false,
    });

    const template = Template.fromStack(stack);

    // INFO: if we don't provide the vpc/vpcSubnets - we have no security group
    expect(broker.connections).toBeUndefined();

    template.resourceCountIs('AWS::EC2::VPC', 0);
    template.resourceCountIs('AWS::EC2::SecurityGroup', 0);

    template.hasResourceProperties('AWS::AmazonMQ::Broker', {
      AutoMinorVersionUpgrade: false,
      BrokerName: 'TestBroker',
      DeploymentMode: 'SINGLE_INSTANCE',
      EncryptionOptions: { UseAwsOwnedKey: true },
      EngineType: 'ACTIVEMQ',
      EngineVersion: '5.18',
      HostInstanceType: 'mq.m5.large',
      PubliclyAccessible: true,
      Users: [{
        Password: 'password',
        Username: 'username',
      }],
    });
  });

  test('ActiveMQ Public Single Instance Broker Deployment with KMS key and no network components provided', () => {
    const stack = new Stack();

    const key = new Key(stack, 'TestKey');

    const broker = new ActiveMqBrokerInstance(stack, 'TestBroker', {
      publiclyAccessible: true,
      key,
      version: ActiveMqBrokerEngineVersion.V5_18,
      instanceType: InstanceType.of(InstanceClass.M5, InstanceSize.LARGE),
      userManagement: ActiveMqBrokerUserManagement.simple({
        users: [{
          username: 'username',
          password: SecretValue.unsafePlainText('password'),
        }],
      }),
      autoMinorVersionUpgrade: false,
      storageType: StorageType.EFS,
      cloudwatchLogsExports: {
        general: true,
      },
      cloudwatchLogsRetention: RetentionDays.ONE_DAY,
    });

    const template = Template.fromStack(stack);

    // INFO: if we don't provide the vpc/vpcSubnets - we have no security group
    expect(broker.connections).toBeUndefined();

    template.resourceCountIs('AWS::EC2::VPC', 0);
    template.resourceCountIs('AWS::EC2::SecurityGroup', 0);
    template.resourceCountIs('AWS::KMS::Key', 1);

    template.hasResourceProperties('AWS::AmazonMQ::Broker', {
      AutoMinorVersionUpgrade: false,
      BrokerName: 'TestBroker',
      DeploymentMode: 'SINGLE_INSTANCE',
      EncryptionOptions: {
        KmsKeyId: { Ref: 'TestKey4CACAF33' },
        UseAwsOwnedKey: false,
      },
      EngineType: 'ACTIVEMQ',
      EngineVersion: '5.18',
      HostInstanceType: 'mq.m5.large',
      PubliclyAccessible: true,
      Users: [{
        Password: 'password',
        Username: 'username',
      }],
    });
  });

  test('ActiveMQ Private Single Instance Broker Deployment with no network components provided', () => {
    const stack = new Stack();

    const broker = new ActiveMqBrokerInstance(stack, 'TestBroker', {
      publiclyAccessible: false,
      version: ActiveMqBrokerEngineVersion.V5_18,
      instanceType: InstanceType.of(InstanceClass.M5, InstanceSize.LARGE),
      userManagement: ActiveMqBrokerUserManagement.simple({
        users: [{
          username: 'username',
          password: SecretValue.unsafePlainText('password'),
        }],
      }),
      autoMinorVersionUpgrade: false,
    });

    const template = Template.fromStack(stack);

    // INFO: if we don't provide the vpc/vpcSubnets - we have no security group
    expect(broker.connections).toBeUndefined();

    template.resourceCountIs('AWS::EC2::VPC', 0);
    template.resourceCountIs('AWS::EC2::SecurityGroup', 0);

    template.hasResourceProperties('AWS::AmazonMQ::Broker', {
      AutoMinorVersionUpgrade: false,
      BrokerName: 'TestBroker',
      DeploymentMode: 'SINGLE_INSTANCE',
      EncryptionOptions: { UseAwsOwnedKey: true },
      EngineType: 'ACTIVEMQ',
      EngineVersion: '5.18',
      HostInstanceType: 'mq.m5.large',
      PubliclyAccessible: false,
      Users: [{
        Password: 'password',
        Username: 'username',
      }],
    });
  });


  test('ActiveMQ Private Single Instance Broker Deployment with network components provided', () => {
    const stack = new Stack();

    const vpc = new Vpc(stack, 'TestVpc');
    const vpcSubnets: SubnetSelection = { subnetType: SubnetType.PRIVATE_WITH_EGRESS };

    const broker = new ActiveMqBrokerInstance(stack, 'TestBroker', {
      publiclyAccessible: false,
      version: ActiveMqBrokerEngineVersion.V5_18,
      instanceType: InstanceType.of(InstanceClass.M5, InstanceSize.LARGE),
      userManagement: ActiveMqBrokerUserManagement.simple({
        users: [{
          username: 'username',
          password: SecretValue.unsafePlainText('password'),
        }],
      }),
      autoMinorVersionUpgrade: false,
      vpc,
      vpcSubnets,
    });

    const template = Template.fromStack(stack);

    // INFO: if weprovide the vpc/vpcSubnets - we have security group generated
    expect(broker.connections).toBeDefined();

    template.resourceCountIs('AWS::EC2::VPC', 1);

    template.hasResourceProperties('AWS::EC2::VPC', {
      CidrBlock: '10.0.0.0/16',
      EnableDnsHostnames: true,
      EnableDnsSupport: true,
      InstanceTenancy: 'default',
    });

    template.resourceCountIs('AWS::EC2::SecurityGroup', 1);

    template.hasResourceProperties('AWS::EC2::SecurityGroup', {
      GroupDescription: 'Automatic security group for broker TestBroker',
      SecurityGroupEgress: [
        {
          CidrIp: '255.255.255.255/32',
          Description: 'Disallow all traffic',
          FromPort: 252,
          IpProtocol: 'icmp',
          ToPort: 86,
        },
      ],
      VpcId: {
        Ref: 'TestVpcE77CE678',
      },
    });

    template.hasResourceProperties('AWS::AmazonMQ::Broker', {
      AutoMinorVersionUpgrade: false,
      BrokerName: 'TestBroker',
      DeploymentMode: 'SINGLE_INSTANCE',
      EncryptionOptions: { UseAwsOwnedKey: true },
      EngineType: 'ACTIVEMQ',
      EngineVersion: '5.18',
      HostInstanceType: 'mq.m5.large',
      PubliclyAccessible: false,
      Users: [{
        Password: 'password',
        Username: 'username',
      }],
    });
  });
});