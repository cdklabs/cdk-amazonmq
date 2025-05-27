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
import { RabbitMqBrokerEngineVersion, RabbitMqBrokerCluster } from "../../src";

describe("RabbitMqBrokerCluster", () => {
  test("RabbitMQ Public Cluster Broker Deployment with no network components provided", () => {
    const stack = new Stack();

    const broker = new RabbitMqBrokerCluster(stack, "TestBroker", {
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
      DeploymentMode: "CLUSTER_MULTI_AZ",
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

  test("RabbitMQ Private Cluster Broker Deployment with no network components provided", () => {
    const stack = new Stack();

    const broker = new RabbitMqBrokerCluster(stack, "TestBroker", {
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
      DeploymentMode: "CLUSTER_MULTI_AZ",
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

  test("RabbitMQ Private Cluster Broker Deployment with network components provided. Selection returns 3 subnets. Rejecting one from AZ that have 2 subnets ", () => {
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

    const broker = new RabbitMqBrokerCluster(stack, "TestBroker", {
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

    template.resourceCountIs("AWS::EC2::Subnet", 6);

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
      DeploymentMode: "CLUSTER_MULTI_AZ",
      EncryptionOptions: { UseAwsOwnedKey: true },
      EngineType: "RABBITMQ",
      EngineVersion: "3.12.13",
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

  test("RabbitMQ Private Cluster Broker Deployment with network components provided. ", () => {
    const stack = new Stack();

    const vpc = new Vpc(stack, "TestVpc");

    const vpcSubnets: SubnetSelection = {
      subnetType: SubnetType.PRIVATE_WITH_EGRESS,
    };

    const broker = new RabbitMqBrokerCluster(stack, "TestBroker", {
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
      DeploymentMode: "CLUSTER_MULTI_AZ",
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

  test("RabbitMQ Private Cluster Broker import by ARN", () => {
    const stack = new Stack();

    const broker = RabbitMqBrokerCluster.fromRabbitMqBrokerClusterArn(
      stack,
      "Imported",
      "arn:aws:rabbitmq:us-east-2:123456789012:broker:TestBroker:b-123456789012-123456789012",
    );

    expect(broker.arn).toEqual(
      "arn:aws:rabbitmq:us-east-2:123456789012:broker:TestBroker:b-123456789012-123456789012",
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
    expect(broker.connections).toBeUndefined();
  });

  test("RabbitMQ Private Cluster Broker import by ARN", () => {
    const stack = new Stack();

    const broker = RabbitMqBrokerCluster.fromRabbitMqBrokerClusterArn(
      stack,
      "Imported",
      "arn:aws:rabbitmq:us-east-2:123456789012:broker:TestBroker:b-123456789012-123456789012",
      undefined,
      Aws.URL_SUFFIX,
    );

    expect(broker.arn).toEqual(
      "arn:aws:rabbitmq:us-east-2:123456789012:broker:TestBroker:b-123456789012-123456789012",
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

  test("RabbitMQ Private Cluster Broker import by incorrect ARN", () => {
    const stack = new Stack();

    const incorrectARN = "XXXXXX";

    expect(() =>
      RabbitMqBrokerCluster.fromRabbitMqBrokerClusterArn(
        stack,
        "Imported",
        incorrectARN,
      ),
    ).toThrow(
      `ARNs must start with "arn:" and have at least 6 components: ${incorrectARN}`,
    );
  });

  test("RabbitMQ Private Cluster Broker import by ARN with SGs", () => {
    const stack = new Stack();

    const sgs = [
      SecurityGroup.fromSecurityGroupId(stack, "ImportedSG", "sg-123123123123"),
    ];

    const broker = RabbitMqBrokerCluster.fromRabbitMqBrokerClusterArn(
      stack,
      "Imported",
      "arn:aws:rabbitmq:us-east-2:123456789012:broker:TestBroker:b-123456789012-123456789012",
      sgs,
    );

    expect(broker.arn).toEqual(
      "arn:aws:rabbitmq:us-east-2:123456789012:broker:TestBroker:b-123456789012-123456789012",
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
    expect(broker.connections?.securityGroups).toEqual(sgs);
  });

  test("RabbitMQ Private Cluster Broker import by ARN with SGs and urlSuffix", () => {
    const stack = new Stack();

    const sgs = [
      SecurityGroup.fromSecurityGroupId(stack, "ImportedSG", "sg-123123123123"),
    ];

    const broker = RabbitMqBrokerCluster.fromRabbitMqBrokerClusterArn(
      stack,
      "Imported",
      "arn:aws:rabbitmq:us-east-2:123456789012:broker:TestBroker:b-123456789012-123456789012",
      sgs,
      Aws.URL_SUFFIX,
    );

    expect(broker.arn).toEqual(
      "arn:aws:rabbitmq:us-east-2:123456789012:broker:TestBroker:b-123456789012-123456789012",
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

  test("RabbitMQ Private Cluster Broker import by name and id", () => {
    const stack = new Stack();

    const broker = RabbitMqBrokerCluster.fromRabbitMqBrokerClusterNameAndId(
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
    expect(broker.connections).toBeUndefined();
  });

  test("RabbitMQ Private Cluster Broker import by name and id, urlSuffix", () => {
    const stack = new Stack();

    const broker = RabbitMqBrokerCluster.fromRabbitMqBrokerClusterNameAndId(
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

  test("RabbitMQ Private Cluster Broker import by name, id and sgs", () => {
    const stack = new Stack();

    const sgs = [
      SecurityGroup.fromSecurityGroupId(stack, "ImportedSG", "sg-123123123123"),
    ];

    const broker = RabbitMqBrokerCluster.fromRabbitMqBrokerClusterNameAndId(
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
    expect(broker.connections?.securityGroups).toEqual(sgs);
  });

  test("RabbitMQ Private Cluster Broker import by name, id and sgs and urlSuffix", () => {
    const stack = new Stack();

    const sgs = [
      SecurityGroup.fromSecurityGroupId(stack, "ImportedSG", "sg-123123123123"),
    ];

    const broker = RabbitMqBrokerCluster.fromRabbitMqBrokerClusterNameAndId(
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
