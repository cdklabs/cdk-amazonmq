/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import { SecretValue, Stack } from "aws-cdk-lib";
import { Template, Match } from "aws-cdk-lib/assertions";
import {
  InstanceClass,
  InstanceSize,
  InstanceType,
  SubnetSelection,
  SubnetType,
  Vpc,
} from "aws-cdk-lib/aws-ec2";
import {
  ActiveMqBrokerEngineVersion,
  ActiveMqBrokerRedundantPair,
  ActiveMqBrokerUserManagement,
} from "../../src";

describe("ActiveMqBrokerRedundantPair", () => {
  test("ActiveMQ Public Redundant Pair Broker Deployment with no network components provided", () => {
    const stack = new Stack();

    const broker = new ActiveMqBrokerRedundantPair(stack, "TestBroker", {
      publiclyAccessible: true,
      version: ActiveMqBrokerEngineVersion.V5_18,
      instanceType: InstanceType.of(InstanceClass.M5, InstanceSize.LARGE),
      userManagement: ActiveMqBrokerUserManagement.simple({
        users: [
          {
            username: "username",
            password: SecretValue.unsafePlainText("password"),
          },
        ],
      }),
      autoMinorVersionUpgrade: false,
    });

    const template = Template.fromStack(stack);

    // INFO: if we don't provide the vpc/vpcSubnets - we have no security group
    expect(broker.connections).toBeUndefined();

    template.resourceCountIs("AWS::EC2::VPC", 0);
    template.resourceCountIs("AWS::EC2::SecurityGroup", 0);

    template.hasResourceProperties("AWS::AmazonMQ::Broker", {
      AutoMinorVersionUpgrade: false,
      BrokerName: "TestBroker",
      DeploymentMode: "ACTIVE_STANDBY_MULTI_AZ",
      EncryptionOptions: { UseAwsOwnedKey: true },
      EngineType: "ACTIVEMQ",
      EngineVersion: "5.18",
      HostInstanceType: "mq.m5.large",
      PubliclyAccessible: true,
      Users: [
        {
          Password: "password",
          Username: "username",
        },
      ],
    });
  });

  test("ActiveMQ Private Redundant Pair Broker Deployment with no network components provided", () => {
    const stack = new Stack();

    const broker = new ActiveMqBrokerRedundantPair(stack, "TestBroker", {
      publiclyAccessible: false,
      version: ActiveMqBrokerEngineVersion.V5_18,
      instanceType: InstanceType.of(InstanceClass.M5, InstanceSize.LARGE),
      userManagement: ActiveMqBrokerUserManagement.simple({
        users: [
          {
            username: "username",
            password: SecretValue.unsafePlainText("password"),
          },
        ],
      }),
      autoMinorVersionUpgrade: false,
    });

    const template = Template.fromStack(stack);

    // INFO: if we don't provide the vpc/vpcSubnets - we have no security group
    expect(broker.connections).toBeUndefined();

    template.resourceCountIs("AWS::EC2::VPC", 0);
    template.resourceCountIs("AWS::EC2::SecurityGroup", 0);

    template.hasResourceProperties("AWS::AmazonMQ::Broker", {
      AutoMinorVersionUpgrade: false,
      BrokerName: "TestBroker",
      DeploymentMode: "ACTIVE_STANDBY_MULTI_AZ",
      EncryptionOptions: { UseAwsOwnedKey: true },
      EngineType: "ACTIVEMQ",
      EngineVersion: "5.18",
      HostInstanceType: "mq.m5.large",
      PubliclyAccessible: false,
      Users: [
        {
          Password: "password",
          Username: "username",
        },
      ],
    });
  });

  test("ActiveMQ Private Redundant Pair Broker Deployment with network components provided", () => {
    const stack = new Stack();

    const vpc = new Vpc(stack, "TestVpc");
    const vpcSubnets: SubnetSelection = {
      subnetType: SubnetType.PRIVATE_WITH_EGRESS,
    };

    const broker = new ActiveMqBrokerRedundantPair(stack, "TestBroker", {
      publiclyAccessible: false,
      version: ActiveMqBrokerEngineVersion.V5_18,
      instanceType: InstanceType.of(InstanceClass.M5, InstanceSize.LARGE),
      userManagement: ActiveMqBrokerUserManagement.simple({
        users: [
          {
            username: "username",
            password: SecretValue.unsafePlainText("password"),
          },
        ],
      }),
      autoMinorVersionUpgrade: false,
      vpc,
      vpcSubnets,
    });

    const template = Template.fromStack(stack);

    // INFO: if weprovide the vpc/vpcSubnets - we have security group generated
    expect(broker.connections).toBeDefined();

    template.resourceCountIs("AWS::EC2::VPC", 1);

    template.hasResourceProperties("AWS::EC2::VPC", {
      CidrBlock: "10.0.0.0/16",
      EnableDnsHostnames: true,
      EnableDnsSupport: true,
      InstanceTenancy: "default",
    });

    template.resourceCountIs("AWS::EC2::SecurityGroup", 1);

    template.hasResourceProperties("AWS::EC2::SecurityGroup", {
      GroupDescription: "Automatic security group for broker TestBroker",
      SecurityGroupEgress: [
        {
          CidrIp: "255.255.255.255/32",
          Description: "Disallow all traffic",
          FromPort: 252,
          IpProtocol: "icmp",
          ToPort: 86,
        },
      ],
      VpcId: {
        Ref: "TestVpcE77CE678",
      },
    });

    template.hasResourceProperties("AWS::AmazonMQ::Broker", {
      AutoMinorVersionUpgrade: false,
      BrokerName: "TestBroker",
      DeploymentMode: "ACTIVE_STANDBY_MULTI_AZ",
      EncryptionOptions: { UseAwsOwnedKey: true },
      EngineType: "ACTIVEMQ",
      EngineVersion: "5.18",
      HostInstanceType: "mq.m5.large",
      PubliclyAccessible: false,
      Users: [
        {
          Password: "password",
          Username: "username",
        },
      ],
    });
  });

  test("ActiveMQ Private Redundant Pair Broker Deployment with network components provided. Selection returns 3 subnets spread across 2 AZ. First two subnets from different AZ selected", () => {
    const stack = new Stack();

    const vpc = new Vpc(stack, "TestVpc", {
      maxAzs: 2,
      subnetConfiguration: [
        {
          cidrMask: 28,
          name: "Private_1",
          subnetType: SubnetType.PRIVATE_ISOLATED,
        },
        {
          cidrMask: 28,
          name: "Private_2",
          subnetType: SubnetType.PRIVATE_ISOLATED,
        },
        {
          cidrMask: 28,
          name: "Private_3",
          subnetType: SubnetType.PRIVATE_ISOLATED,
        },
      ],
    });
    const vpcSubnets: SubnetSelection = {
      subnetType: SubnetType.PRIVATE_ISOLATED,
    };

    const broker = new ActiveMqBrokerRedundantPair(stack, "TestBroker", {
      publiclyAccessible: false,
      version: ActiveMqBrokerEngineVersion.V5_18,
      instanceType: InstanceType.of(InstanceClass.M5, InstanceSize.LARGE),
      userManagement: ActiveMqBrokerUserManagement.simple({
        users: [
          {
            username: "username",
            password: SecretValue.unsafePlainText("password"),
          },
        ],
      }),
      autoMinorVersionUpgrade: false,
      vpc,
      vpcSubnets,
    });

    const template = Template.fromStack(stack);

    // INFO: if weprovide the vpc/vpcSubnets - we have security group generated
    expect(broker.connections).toBeDefined();

    template.resourceCountIs("AWS::EC2::VPC", 1);
    template.resourceCountIs("AWS::EC2::Subnet", 6);

    template.hasResourceProperties("AWS::EC2::VPC", {
      CidrBlock: "10.0.0.0/16",
      EnableDnsHostnames: true,
      EnableDnsSupport: true,
      InstanceTenancy: "default",
    });

    template.resourceCountIs("AWS::EC2::SecurityGroup", 1);

    template.hasResourceProperties("AWS::EC2::SecurityGroup", {
      GroupDescription: "Automatic security group for broker TestBroker",
      SecurityGroupEgress: [
        {
          CidrIp: "255.255.255.255/32",
          Description: "Disallow all traffic",
          FromPort: 252,
          IpProtocol: "icmp",
          ToPort: 86,
        },
      ],
      VpcId: {
        Ref: "TestVpcE77CE678",
      },
    });

    template.hasResourceProperties("AWS::AmazonMQ::Broker", {
      AutoMinorVersionUpgrade: false,
      BrokerName: "TestBroker",
      DeploymentMode: "ACTIVE_STANDBY_MULTI_AZ",
      EncryptionOptions: { UseAwsOwnedKey: true },
      EngineType: "ACTIVEMQ",
      EngineVersion: "5.18",
      HostInstanceType: "mq.m5.large",
      PubliclyAccessible: false,
      SubnetIds: Match.arrayEquals([
        {
          Ref: Match.stringLikeRegexp(".*"), // matches first subnet reference
        },
        {
          Ref: Match.stringLikeRegexp(".*"), // matches second subnet reference
        },
      ]),
      Users: [
        {
          Password: "password",
          Username: "username",
        },
      ],
    });
  });
});
