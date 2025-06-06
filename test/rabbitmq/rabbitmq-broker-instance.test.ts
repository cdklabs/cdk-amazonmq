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
import { RabbitMqBrokerEngineVersion, RabbitMqBrokerInstance } from "../../src";

describe("RabbitMqBrokerInstance", () => {
  test("RabbitMQ Public Single Instance Broker Deployment with no network components provided", () => {
    const stack = new Stack();

    const broker = new RabbitMqBrokerInstance(stack, "TestBroker", {
      publiclyAccessible: true,
      version: RabbitMqBrokerEngineVersion.V3_12_13,
      instanceType: InstanceType.of(InstanceClass.M5, InstanceSize.LARGE),
      admin: {
        username: "username",
        password: SecretValue.unsafePlainText("password"),
      },
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
      DeploymentMode: "SINGLE_INSTANCE",
      EncryptionOptions: { UseAwsOwnedKey: true },
      EngineType: "RABBITMQ",
      EngineVersion: "3.12.13",
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

  test("RabbitMQ Private Single Instance Broker Deployment with no network components provided", () => {
    const stack = new Stack();

    const broker = new RabbitMqBrokerInstance(stack, "TestBroker", {
      publiclyAccessible: false,
      version: RabbitMqBrokerEngineVersion.V3_12_13,
      instanceType: InstanceType.of(InstanceClass.M5, InstanceSize.LARGE),
      admin: {
        username: "username",
        password: SecretValue.unsafePlainText("password"),
      },
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
      DeploymentMode: "SINGLE_INSTANCE",
      EncryptionOptions: { UseAwsOwnedKey: true },
      EngineType: "RABBITMQ",
      EngineVersion: "3.12.13",
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

  test("RabbitMQ Private Single Instance Broker Deployment with network components provided", () => {
    const stack = new Stack();

    const vpc = new Vpc(stack, "TestVpc");
    const vpcSubnets: SubnetSelection = {
      subnetType: SubnetType.PRIVATE_WITH_EGRESS,
    };

    const broker = new RabbitMqBrokerInstance(stack, "TestBroker", {
      publiclyAccessible: false,
      version: RabbitMqBrokerEngineVersion.V3_12_13,
      instanceType: InstanceType.of(InstanceClass.M5, InstanceSize.LARGE),
      admin: {
        username: "username",
        password: SecretValue.unsafePlainText("password"),
      },
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
      DeploymentMode: "SINGLE_INSTANCE",
      EncryptionOptions: { UseAwsOwnedKey: true },
      EngineType: "RABBITMQ",
      EngineVersion: "3.12.13",
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

  test("RabbitMQ Private Single Instance Broker Deployment with network components provided. Selection returns 2 subnets. First one is picked up", () => {
    const stack = new Stack();

    const vpc = new Vpc(stack, "TestVpc", {
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
      ],
    });
    const vpcSubnets: SubnetSelection = {
      subnetType: SubnetType.PRIVATE_ISOLATED,
    };

    const broker = new RabbitMqBrokerInstance(stack, "TestBroker", {
      publiclyAccessible: false,
      version: RabbitMqBrokerEngineVersion.V3_12_13,
      instanceType: InstanceType.of(InstanceClass.M5, InstanceSize.LARGE),
      admin: {
        username: "username",
        password: SecretValue.unsafePlainText("password"),
      },
      autoMinorVersionUpgrade: false,
      vpc,
      vpcSubnets,
    });

    const template = Template.fromStack(stack);

    // INFO: if weprovide the vpc/vpcSubnets - we have security group generated
    expect(broker.connections).toBeDefined();

    template.resourceCountIs("AWS::EC2::VPC", 1);
    template.resourceCountIs("AWS::EC2::Subnet", 4);

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
      DeploymentMode: "SINGLE_INSTANCE",
      EncryptionOptions: { UseAwsOwnedKey: true },
      EngineType: "RABBITMQ",
      EngineVersion: "3.12.13",
      HostInstanceType: "mq.m5.large",
      PubliclyAccessible: false,
      SubnetIds: Match.arrayEquals([
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

  test("RabbitMQ Private Single Instance Broker import by ARN", () => {
    const stack = new Stack();

    const broker = RabbitMqBrokerInstance.fromRabbitMqBrokerInstanceArn(
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

    // Test that accessing the URL properties throws the expected error
    expect(() => broker.endpoints.amqp.url).toThrow(
      "To use the endpoints.amqp.url property of an imported broker urlSuffix needs to be specified on intialization",
    );
    expect(broker.endpoints.amqp.port).toEqual(5671);
    expect(() => broker.endpoints.console.url).toThrow(
      "To use the endpoints.console.url property of an imported broker urlSuffix needs to be specified on intialization",
    );
    expect(broker.endpoints.console.port).toEqual(443);
  });

  test("RabbitMQ Private Single Instance Broker import by ARN with urlSuffix", () => {
    const stack = new Stack();

    const broker = RabbitMqBrokerInstance.fromRabbitMqBrokerInstanceArn(
      stack,
      "Imported",
      "arn:aws:mq:us-east-2:123456789012:broker:TestBroker:b-123456789012-123456789012",
      undefined,
      Aws.URL_SUFFIX,
    );

    expect(broker.arn).toEqual(
      "arn:aws:mq:us-east-2:123456789012:broker:TestBroker:b-123456789012-123456789012",
    );
    expect(broker.name).toEqual("TestBroker");
    expect(broker.id).toEqual("b-123456789012-123456789012");
    expect(broker.connections).toBeUndefined();
    expect(broker.endpoints.amqp.url).toMatch(
      /amqps:\/\/b-123456789012-123456789012\.mq\.\$\{Token\[AWS\.Region\.\d+\]\}\.\$\{Token\[AWS\.URLSuffix\.\d+\]\}:5671/,
    );
    expect(broker.endpoints.amqp.port).toEqual(5671);
    expect(broker.endpoints.console.url).toMatch(
      /https:\/\/b-123456789012-123456789012\.mq\.\$\{Token\[AWS\.Region\.\d+\]\}\.\$\{Token\[AWS\.URLSuffix\.\d+\]\}/,
    );
    expect(broker.endpoints.console.port).toEqual(443);
  });

  test("RabbitMQ Private Single Instance Broker import by incorrect ARN", () => {
    const stack = new Stack();

    const incorrectARN = "XXXXXX";

    expect(() =>
      RabbitMqBrokerInstance.fromRabbitMqBrokerInstanceArn(
        stack,
        "Imported",
        incorrectARN,
      ),
    ).toThrow(
      `ARNs must start with "arn:" and have at least 6 components: ${incorrectARN}`,
    );
  });

  test("RabbitMQ Private Single Instance Broker import by ARN with SGs", () => {
    const stack = new Stack();

    const sgs = [
      SecurityGroup.fromSecurityGroupId(stack, "ImportedSG", "sg-123123123123"),
    ];

    const broker = RabbitMqBrokerInstance.fromRabbitMqBrokerInstanceArn(
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
    expect(() => broker.endpoints.amqp.url).toThrow(
      "To use the endpoints.amqp.url property of an imported broker urlSuffix needs to be specified on intialization",
    );
    expect(broker.endpoints.amqp.port).toEqual(5671);
    expect(() => broker.endpoints.console.url).toThrow(
      "To use the endpoints.console.url property of an imported broker urlSuffix needs to be specified on intialization",
    );
    expect(broker.endpoints.console.port).toEqual(443);
    expect(broker.connections?.securityGroups).toEqual(sgs);
  });

  test("RabbitMQ Private Single Instance Broker import by ARN with SGs and urlSuffix", () => {
    const stack = new Stack();

    const sgs = [
      SecurityGroup.fromSecurityGroupId(stack, "ImportedSG", "sg-123123123123"),
    ];

    const broker = RabbitMqBrokerInstance.fromRabbitMqBrokerInstanceArn(
      stack,
      "Imported",
      "arn:aws:mq:us-east-2:123456789012:broker:TestBroker:b-123456789012-123456789012",
      sgs,
      Aws.URL_SUFFIX,
    );

    expect(broker.arn).toEqual(
      "arn:aws:mq:us-east-2:123456789012:broker:TestBroker:b-123456789012-123456789012",
    );
    expect(broker.name).toEqual("TestBroker");
    expect(broker.id).toEqual("b-123456789012-123456789012");
    expect(broker.connections).toBeDefined();
    expect(broker.endpoints.amqp.url).toMatch(
      /amqps:\/\/b-123456789012-123456789012\.mq\.\$\{Token\[AWS\.Region\.\d+\]\}\.\$\{Token\[AWS\.URLSuffix\.\d+\]\}:5671/,
    );
    expect(broker.endpoints.amqp.port).toEqual(5671);
    expect(broker.endpoints.console.url).toMatch(
      /https:\/\/b-123456789012-123456789012\.mq\.\$\{Token\[AWS\.Region\.\d+\]\}\.\$\{Token\[AWS\.URLSuffix\.\d+\]\}/,
    );
    expect(broker.endpoints.console.port).toEqual(443);
    expect(broker.connections?.securityGroups).toEqual(sgs);
  });

  test("RabbitMQ Private Single Instance Broker import by name and id", () => {
    const stack = new Stack();

    const broker = RabbitMqBrokerInstance.fromRabbitMqBrokerInstanceNameAndId(
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
    expect(() => broker.endpoints.amqp.url).toThrow(
      "To use the endpoints.amqp.url property of an imported broker urlSuffix needs to be specified on intialization",
    );
    expect(broker.endpoints.amqp.port).toEqual(5671);
    expect(() => broker.endpoints.console.url).toThrow(
      "To use the endpoints.console.url property of an imported broker urlSuffix needs to be specified on intialization",
    );
    expect(broker.endpoints.console.port).toEqual(443);
    expect(broker.connections).toBeUndefined();
  });

  test("RabbitMQ Private Single Instance Broker import by name and id, and urlSuffix", () => {
    const stack = new Stack();

    const broker = RabbitMqBrokerInstance.fromRabbitMqBrokerInstanceNameAndId(
      stack,
      "Imported",
      "TestBroker",
      "b-123456789012-123456789012",
      undefined,
      Aws.URL_SUFFIX,
    );

    expect(broker.arn).toMatch(
      /^arn\:.+\:mq\:.+\:.+\:broker\:TestBroker\:b-123456789012-123456789012$/,
    );
    expect(broker.name).toEqual("TestBroker");
    expect(broker.id).toEqual("b-123456789012-123456789012");
    expect(broker.endpoints.amqp.url).toMatch(
      /amqps:\/\/b-123456789012-123456789012\.mq\.\$\{Token\[AWS\.Region\.\d+\]\}\.\$\{Token\[AWS\.URLSuffix\.\d+\]\}:5671/,
    );
    expect(broker.endpoints.amqp.port).toEqual(5671);
    expect(broker.endpoints.console.url).toMatch(
      /https:\/\/b-123456789012-123456789012\.mq\.\$\{Token\[AWS\.Region\.\d+\]\}\.\$\{Token\[AWS\.URLSuffix\.\d+\]\}/,
    );
    expect(broker.endpoints.console.port).toEqual(443);
    expect(broker.connections).toBeUndefined();
  });

  test("RabbitMQ Private Single Instance Broker import by name, id and sgs", () => {
    const stack = new Stack();

    const sgs = [
      SecurityGroup.fromSecurityGroupId(stack, "ImportedSG", "sg-123123123123"),
    ];

    const broker = RabbitMqBrokerInstance.fromRabbitMqBrokerInstanceNameAndId(
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
    expect(() => broker.endpoints.amqp.url).toThrow(
      "To use the endpoints.amqp.url property of an imported broker urlSuffix needs to be specified on intialization",
    );
    expect(broker.endpoints.amqp.port).toEqual(5671);
    expect(() => broker.endpoints.console.url).toThrow(
      "To use the endpoints.console.url property of an imported broker urlSuffix needs to be specified on intialization",
    );
    expect(broker.endpoints.console.port).toEqual(443);
    expect(broker.connections?.securityGroups).toEqual(sgs);
  });
  test("RabbitMQ Private Single Instance Broker import by name, id and sgs, and urlSuffix", () => {
    const stack = new Stack();

    const sgs = [
      SecurityGroup.fromSecurityGroupId(stack, "ImportedSG", "sg-123123123123"),
    ];

    const broker = RabbitMqBrokerInstance.fromRabbitMqBrokerInstanceNameAndId(
      stack,
      "Imported",
      "TestBroker",
      "b-123456789012-123456789012",
      sgs,
      Aws.URL_SUFFIX,
    );

    expect(broker.arn).toMatch(
      /^arn\:.+\:mq\:.+\:.+\:broker\:TestBroker\:b-123456789012-123456789012$/,
    );
    expect(broker.name).toEqual("TestBroker");
    expect(broker.id).toEqual("b-123456789012-123456789012");
    expect(broker.connections).toBeDefined();
    expect(broker.endpoints.amqp.url).toMatch(
      /amqps:\/\/b-123456789012-123456789012\.mq\.\$\{Token\[AWS\.Region\.\d+\]\}\.\$\{Token\[AWS\.URLSuffix\.\d+\]\}:5671/,
    );
    expect(broker.endpoints.amqp.port).toEqual(5671);
    expect(broker.endpoints.console.url).toMatch(
      /https:\/\/b-123456789012-123456789012\.mq\.\$\{Token\[AWS\.Region\.\d+\]\}\.\$\{Token\[AWS\.URLSuffix\.\d+\]\}/,
    );
    expect(broker.endpoints.console.port).toEqual(443);
    expect(broker.connections?.securityGroups).toEqual(sgs);
  });
});
