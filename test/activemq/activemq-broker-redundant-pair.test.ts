/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import { Aws, SecretValue, Stack } from "aws-cdk-lib";
import { Template, Match } from "aws-cdk-lib/assertions";
import {
  InstanceClass,
  InstanceSize,
  InstanceType,
  SecurityGroup,
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

  test("ActiveMq Broker Redundant Pair import by ARN", () => {
    const stack = new Stack();

    const broker =
      ActiveMqBrokerRedundantPair.fromActiveMqBrokerRedundantPairArn(
        stack,
        "Imported",
        "arn:aws:mq:us-east-2:123456789012:broker:TestBroker:b-123456789012-123456789012",
      );

    expect(broker.arn).toEqual(
      "arn:aws:mq:us-east-2:123456789012:broker:TestBroker:b-123456789012-123456789012",
    );
    expect(broker.name).toEqual("TestBroker");
    expect(broker.id).toEqual("b-123456789012-123456789012");
    expect(broker.connections).toBeUndefined();
    expect(broker.first.endpoints.amqp.url).toEqual(
      `amqp+ssl://b-123456789012-123456789012-1.mq.${Aws.REGION}.amazonaws.com:5671`,
    );
    expect(broker.first.endpoints.amqp.port).toEqual(5671);
    expect(broker.first.endpoints.stomp.url).toEqual(
      `stomp+ssl://b-123456789012-123456789012-1.mq.${Aws.REGION}.amazonaws.com:61614`,
    );
    expect(broker.first.endpoints.stomp.port).toEqual(61614);
    expect(broker.first.endpoints.openWire.url).toEqual(
      `ssl://b-123456789012-123456789012-1.mq.${Aws.REGION}.amazonaws.com:61617`,
    );
    expect(broker.first.endpoints.openWire.port).toEqual(61617);
    expect(broker.first.endpoints.mqtt.url).toEqual(
      `mqtt+ssl://b-123456789012-123456789012-1.mq.${Aws.REGION}.amazonaws.com:8883`,
    );
    expect(broker.first.endpoints.mqtt.port).toEqual(8883);
    expect(broker.first.endpoints.wss.url).toEqual(
      `wss://b-123456789012-123456789012-1.mq.${Aws.REGION}.amazonaws.com:61619`,
    );
    expect(broker.first.endpoints.wss.port).toEqual(61619);
    expect(broker.first.endpoints.console.url).toEqual(
      `https://b-123456789012-123456789012-1.mq.${Aws.REGION}.amazonaws.com:8162`,
    );
    expect(broker.first.endpoints.console.port).toEqual(8162);

    expect(broker.second.endpoints.amqp.url).toEqual(
      `amqp+ssl://b-123456789012-123456789012-2.mq.${Aws.REGION}.amazonaws.com:5671`,
    );
    expect(broker.second.endpoints.amqp.port).toEqual(5671);
    expect(broker.second.endpoints.stomp.url).toEqual(
      `stomp+ssl://b-123456789012-123456789012-2.mq.${Aws.REGION}.amazonaws.com:61614`,
    );
    expect(broker.second.endpoints.stomp.port).toEqual(61614);
    expect(broker.second.endpoints.openWire.url).toEqual(
      `ssl://b-123456789012-123456789012-2.mq.${Aws.REGION}.amazonaws.com:61617`,
    );
    expect(broker.second.endpoints.openWire.port).toEqual(61617);
    expect(broker.second.endpoints.mqtt.url).toEqual(
      `mqtt+ssl://b-123456789012-123456789012-2.mq.${Aws.REGION}.amazonaws.com:8883`,
    );
    expect(broker.second.endpoints.mqtt.port).toEqual(8883);
    expect(broker.second.endpoints.wss.url).toEqual(
      `wss://b-123456789012-123456789012-2.mq.${Aws.REGION}.amazonaws.com:61619`,
    );
    expect(broker.second.endpoints.wss.port).toEqual(61619);
    expect(broker.second.endpoints.console.url).toEqual(
      `https://b-123456789012-123456789012-2.mq.${Aws.REGION}.amazonaws.com:8162`,
    );
    expect(broker.second.endpoints.console.port).toEqual(8162);
    expect(broker.connections).toBeUndefined();
  });

  test("ActiveMq Broker Redundant Pair import by incorrect ARN", () => {
    const stack = new Stack();

    const incorrectARN = "XXXXXX";

    expect(() =>
      ActiveMqBrokerRedundantPair.fromActiveMqBrokerRedundantPairArn(
        stack,
        "Imported",
        incorrectARN,
      ),
    ).toThrow(
      `ARNs must start with "arn:" and have at least 6 components: ${incorrectARN}`,
    );
  });

  test("ActiveMq Broker Redundant Pair import by ARN with SGs", () => {
    const stack = new Stack();

    const sgs = [
      SecurityGroup.fromSecurityGroupId(stack, "ImportedSG", "sg-123123123123"),
    ];

    const broker =
      ActiveMqBrokerRedundantPair.fromActiveMqBrokerRedundantPairArn(
        stack,
        "Imported",
        "arn:aws:mq:us-east-2:123456789012:broker:TestBroker:b-123456789012-123456789012",
        sgs,
      );

    expect(broker.arn).toEqual(
      "arn:aws:mq:us-east-2:123456789012:broker:TestBroker:b-123456789012-123456789012",
    );
    expect(broker.name).toEqual("TestBroker");
    expect(broker.id).toEqual("b-123456789012-123456789012");
    expect(broker.connections).toBeDefined();
    expect(broker.first.endpoints.amqp.url).toEqual(
      `amqp+ssl://b-123456789012-123456789012-1.mq.${Aws.REGION}.amazonaws.com:5671`,
    );
    expect(broker.first.endpoints.amqp.port).toEqual(5671);
    expect(broker.first.endpoints.stomp.url).toEqual(
      `stomp+ssl://b-123456789012-123456789012-1.mq.${Aws.REGION}.amazonaws.com:61614`,
    );
    expect(broker.first.endpoints.stomp.port).toEqual(61614);
    expect(broker.first.endpoints.openWire.url).toEqual(
      `ssl://b-123456789012-123456789012-1.mq.${Aws.REGION}.amazonaws.com:61617`,
    );
    expect(broker.first.endpoints.openWire.port).toEqual(61617);
    expect(broker.first.endpoints.mqtt.url).toEqual(
      `mqtt+ssl://b-123456789012-123456789012-1.mq.${Aws.REGION}.amazonaws.com:8883`,
    );
    expect(broker.first.endpoints.mqtt.port).toEqual(8883);
    expect(broker.first.endpoints.wss.url).toEqual(
      `wss://b-123456789012-123456789012-1.mq.${Aws.REGION}.amazonaws.com:61619`,
    );
    expect(broker.first.endpoints.wss.port).toEqual(61619);
    expect(broker.first.endpoints.console.url).toEqual(
      `https://b-123456789012-123456789012-1.mq.${Aws.REGION}.amazonaws.com:8162`,
    );
    expect(broker.first.endpoints.console.port).toEqual(8162);

    expect(broker.second.endpoints.amqp.url).toEqual(
      `amqp+ssl://b-123456789012-123456789012-2.mq.${Aws.REGION}.amazonaws.com:5671`,
    );
    expect(broker.second.endpoints.amqp.port).toEqual(5671);
    expect(broker.second.endpoints.stomp.url).toEqual(
      `stomp+ssl://b-123456789012-123456789012-2.mq.${Aws.REGION}.amazonaws.com:61614`,
    );
    expect(broker.second.endpoints.stomp.port).toEqual(61614);
    expect(broker.second.endpoints.openWire.url).toEqual(
      `ssl://b-123456789012-123456789012-2.mq.${Aws.REGION}.amazonaws.com:61617`,
    );
    expect(broker.second.endpoints.openWire.port).toEqual(61617);
    expect(broker.second.endpoints.mqtt.url).toEqual(
      `mqtt+ssl://b-123456789012-123456789012-2.mq.${Aws.REGION}.amazonaws.com:8883`,
    );
    expect(broker.second.endpoints.mqtt.port).toEqual(8883);
    expect(broker.second.endpoints.wss.url).toEqual(
      `wss://b-123456789012-123456789012-2.mq.${Aws.REGION}.amazonaws.com:61619`,
    );
    expect(broker.second.endpoints.wss.port).toEqual(61619);
    expect(broker.second.endpoints.console.url).toEqual(
      `https://b-123456789012-123456789012-2.mq.${Aws.REGION}.amazonaws.com:8162`,
    );
    expect(broker.second.endpoints.console.port).toEqual(8162);
    expect(broker.connections?.securityGroups).toEqual(sgs);
  });

  test("ActiveMq Broker Redundant Pair import by name and id", () => {
    const stack = new Stack();

    const broker =
      ActiveMqBrokerRedundantPair.fromActiveMqBrokerRedundantPairNameAndId(
        stack,
        "Imported",
        "TestBroker",
        "b-123456789012-123456789012",
      );

    expect(broker.arn).toMatch(
      /^arn\:.+\:mq\:.+\:.+\:broker\:TestBroker\:b-123456789012-123456789012$/,
    );
    expect(broker.name).toEqual("TestBroker");
    expect(broker.id).toEqual("b-123456789012-123456789012");
    expect(broker.first.endpoints.amqp.url).toEqual(
      `amqp+ssl://b-123456789012-123456789012-1.mq.${Aws.REGION}.amazonaws.com:5671`,
    );
    expect(broker.first.endpoints.amqp.port).toEqual(5671);
    expect(broker.first.endpoints.stomp.url).toEqual(
      `stomp+ssl://b-123456789012-123456789012-1.mq.${Aws.REGION}.amazonaws.com:61614`,
    );
    expect(broker.first.endpoints.stomp.port).toEqual(61614);
    expect(broker.first.endpoints.openWire.url).toEqual(
      `ssl://b-123456789012-123456789012-1.mq.${Aws.REGION}.amazonaws.com:61617`,
    );
    expect(broker.first.endpoints.openWire.port).toEqual(61617);
    expect(broker.first.endpoints.mqtt.url).toEqual(
      `mqtt+ssl://b-123456789012-123456789012-1.mq.${Aws.REGION}.amazonaws.com:8883`,
    );
    expect(broker.first.endpoints.mqtt.port).toEqual(8883);
    expect(broker.first.endpoints.wss.url).toEqual(
      `wss://b-123456789012-123456789012-1.mq.${Aws.REGION}.amazonaws.com:61619`,
    );
    expect(broker.first.endpoints.wss.port).toEqual(61619);
    expect(broker.first.endpoints.console.url).toEqual(
      `https://b-123456789012-123456789012-1.mq.${Aws.REGION}.amazonaws.com:8162`,
    );
    expect(broker.first.endpoints.console.port).toEqual(8162);

    expect(broker.second.endpoints.amqp.url).toEqual(
      `amqp+ssl://b-123456789012-123456789012-2.mq.${Aws.REGION}.amazonaws.com:5671`,
    );
    expect(broker.second.endpoints.amqp.port).toEqual(5671);
    expect(broker.second.endpoints.stomp.url).toEqual(
      `stomp+ssl://b-123456789012-123456789012-2.mq.${Aws.REGION}.amazonaws.com:61614`,
    );
    expect(broker.second.endpoints.stomp.port).toEqual(61614);
    expect(broker.second.endpoints.openWire.url).toEqual(
      `ssl://b-123456789012-123456789012-2.mq.${Aws.REGION}.amazonaws.com:61617`,
    );
    expect(broker.second.endpoints.openWire.port).toEqual(61617);
    expect(broker.second.endpoints.mqtt.url).toEqual(
      `mqtt+ssl://b-123456789012-123456789012-2.mq.${Aws.REGION}.amazonaws.com:8883`,
    );
    expect(broker.second.endpoints.mqtt.port).toEqual(8883);
    expect(broker.second.endpoints.wss.url).toEqual(
      `wss://b-123456789012-123456789012-2.mq.${Aws.REGION}.amazonaws.com:61619`,
    );
    expect(broker.second.endpoints.wss.port).toEqual(61619);
    expect(broker.second.endpoints.console.url).toEqual(
      `https://b-123456789012-123456789012-2.mq.${Aws.REGION}.amazonaws.com:8162`,
    );
    expect(broker.second.endpoints.console.port).toEqual(8162);
    expect(broker.connections).toBeUndefined();
  });

  test("ActiveMq Broker Redundant Pair import by name, id and sgs", () => {
    const stack = new Stack();

    const sgs = [
      SecurityGroup.fromSecurityGroupId(stack, "ImportedSG", "sg-123123123123"),
    ];

    const broker =
      ActiveMqBrokerRedundantPair.fromActiveMqBrokerRedundantPairNameAndId(
        stack,
        "Imported",
        "TestBroker",
        "b-123456789012-123456789012",
        sgs,
      );

    expect(broker.arn).toMatch(
      /^arn\:.+\:mq\:.+\:.+\:broker\:TestBroker\:b-123456789012-123456789012$/,
    );
    expect(broker.name).toEqual("TestBroker");
    expect(broker.id).toEqual("b-123456789012-123456789012");
    expect(broker.connections).toBeDefined();
    expect(broker.first.endpoints.amqp.url).toEqual(
      `amqp+ssl://b-123456789012-123456789012-1.mq.${Aws.REGION}.amazonaws.com:5671`,
    );
    expect(broker.first.endpoints.amqp.port).toEqual(5671);
    expect(broker.first.endpoints.stomp.url).toEqual(
      `stomp+ssl://b-123456789012-123456789012-1.mq.${Aws.REGION}.amazonaws.com:61614`,
    );
    expect(broker.first.endpoints.stomp.port).toEqual(61614);
    expect(broker.first.endpoints.openWire.url).toEqual(
      `ssl://b-123456789012-123456789012-1.mq.${Aws.REGION}.amazonaws.com:61617`,
    );
    expect(broker.first.endpoints.openWire.port).toEqual(61617);
    expect(broker.first.endpoints.mqtt.url).toEqual(
      `mqtt+ssl://b-123456789012-123456789012-1.mq.${Aws.REGION}.amazonaws.com:8883`,
    );
    expect(broker.first.endpoints.mqtt.port).toEqual(8883);
    expect(broker.first.endpoints.wss.url).toEqual(
      `wss://b-123456789012-123456789012-1.mq.${Aws.REGION}.amazonaws.com:61619`,
    );
    expect(broker.first.endpoints.wss.port).toEqual(61619);
    expect(broker.first.endpoints.console.url).toEqual(
      `https://b-123456789012-123456789012-1.mq.${Aws.REGION}.amazonaws.com:8162`,
    );
    expect(broker.first.endpoints.console.port).toEqual(8162);

    expect(broker.second.endpoints.amqp.url).toEqual(
      `amqp+ssl://b-123456789012-123456789012-2.mq.${Aws.REGION}.amazonaws.com:5671`,
    );
    expect(broker.second.endpoints.amqp.port).toEqual(5671);
    expect(broker.second.endpoints.stomp.url).toEqual(
      `stomp+ssl://b-123456789012-123456789012-2.mq.${Aws.REGION}.amazonaws.com:61614`,
    );
    expect(broker.second.endpoints.stomp.port).toEqual(61614);
    expect(broker.second.endpoints.openWire.url).toEqual(
      `ssl://b-123456789012-123456789012-2.mq.${Aws.REGION}.amazonaws.com:61617`,
    );
    expect(broker.second.endpoints.openWire.port).toEqual(61617);
    expect(broker.second.endpoints.mqtt.url).toEqual(
      `mqtt+ssl://b-123456789012-123456789012-2.mq.${Aws.REGION}.amazonaws.com:8883`,
    );
    expect(broker.second.endpoints.mqtt.port).toEqual(8883);
    expect(broker.second.endpoints.wss.url).toEqual(
      `wss://b-123456789012-123456789012-2.mq.${Aws.REGION}.amazonaws.com:61619`,
    );
    expect(broker.second.endpoints.wss.port).toEqual(61619);
    expect(broker.second.endpoints.console.url).toEqual(
      `https://b-123456789012-123456789012-2.mq.${Aws.REGION}.amazonaws.com:8162`,
    );
    expect(broker.second.endpoints.console.port).toEqual(8162);
    expect(broker.connections?.securityGroups).toEqual(sgs);
  });
});
