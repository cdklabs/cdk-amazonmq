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
import { Key } from "aws-cdk-lib/aws-kms";
import { RetentionDays } from "aws-cdk-lib/aws-logs";
import {
  ActiveMqBrokerEngineVersion,
  ActiveMqBrokerInstance,
  ActiveMqBrokerUserManagement,
  StorageType,
} from "../../src";

describe("ActiveMqBrokerInstance", () => {
  test("ActiveMQ Public Single Instance Broker Deployment with no network components provided", () => {
    const stack = new Stack();

    const broker = new ActiveMqBrokerInstance(stack, "TestBroker", {
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
      DeploymentMode: "SINGLE_INSTANCE",
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

  test("ActiveMQ Public Single Instance Broker Deployment with KMS key and no network components provided", () => {
    const stack = new Stack();

    const key = new Key(stack, "TestKey");

    const broker = new ActiveMqBrokerInstance(stack, "TestBroker", {
      publiclyAccessible: true,
      key,
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
      storageType: StorageType.EFS,
      cloudwatchLogsExports: {
        general: true,
      },
      cloudwatchLogsRetention: RetentionDays.ONE_DAY,
    });

    const template = Template.fromStack(stack);

    // INFO: if we don't provide the vpc/vpcSubnets - we have no security group
    expect(broker.connections).toBeUndefined();

    template.resourceCountIs("AWS::EC2::VPC", 0);
    template.resourceCountIs("AWS::EC2::SecurityGroup", 0);
    template.resourceCountIs("AWS::KMS::Key", 1);

    template.hasResourceProperties("AWS::AmazonMQ::Broker", {
      AutoMinorVersionUpgrade: false,
      BrokerName: "TestBroker",
      DeploymentMode: "SINGLE_INSTANCE",
      EncryptionOptions: {
        KmsKeyId: { Ref: "TestKey4CACAF33" },
        UseAwsOwnedKey: false,
      },
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

  test("ActiveMQ Private Single Instance Broker Deployment with no network components provided", () => {
    const stack = new Stack();

    const broker = new ActiveMqBrokerInstance(stack, "TestBroker", {
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
      DeploymentMode: "SINGLE_INSTANCE",
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

  test("ActiveMQ Private Single Instance Broker Deployment with network components provided", () => {
    const stack = new Stack();

    const vpc = new Vpc(stack, "TestVpc");
    const vpcSubnets: SubnetSelection = {
      subnetType: SubnetType.PRIVATE_WITH_EGRESS,
    };

    const broker = new ActiveMqBrokerInstance(stack, "TestBroker", {
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
      DeploymentMode: "SINGLE_INSTANCE",
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

  test("ActiveMQ Private Single Instance Broker Deployment with network components provided. Selection returns 2 subnets. First one is picked up", () => {
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

    const broker = new ActiveMqBrokerInstance(stack, "TestBroker", {
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
      EngineType: "ACTIVEMQ",
      EngineVersion: "5.18",
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

  test("ActiveMq Single Instance Broker import by ARN", () => {
    const stack = new Stack();

    const broker = ActiveMqBrokerInstance.fromActiveMqBrokerInstanceArn(
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
    expect(broker.endpoints.amqp.url).toEqual(
      `amqp+ssl://b-123456789012-123456789012.mq.${Aws.REGION}.${Aws.URL_SUFFIX}:5671`,
    );
    expect(broker.endpoints.amqp.port).toEqual(5671);
    expect(broker.endpoints.stomp.url).toEqual(
      `stomp+ssl://b-123456789012-123456789012.mq.${Aws.REGION}.${Aws.URL_SUFFIX}:61614`,
    );
    expect(broker.endpoints.stomp.port).toEqual(61614);
    expect(broker.endpoints.openWire.url).toEqual(
      `ssl://b-123456789012-123456789012.mq.${Aws.REGION}.${Aws.URL_SUFFIX}:61617`,
    );
    expect(broker.endpoints.openWire.port).toEqual(61617);
    expect(broker.endpoints.mqtt.url).toEqual(
      `mqtt+ssl://b-123456789012-123456789012.mq.${Aws.REGION}.${Aws.URL_SUFFIX}:8883`,
    );
    expect(broker.endpoints.mqtt.port).toEqual(8883);
    expect(broker.endpoints.wss.url).toEqual(
      `wss://b-123456789012-123456789012.mq.${Aws.REGION}.${Aws.URL_SUFFIX}:61619`,
    );
    expect(broker.endpoints.wss.port).toEqual(61619);
    expect(broker.endpoints.console.url).toEqual(
      `https://b-123456789012-123456789012.mq.${Aws.REGION}.${Aws.URL_SUFFIX}:8162`,
    );
    expect(broker.endpoints.console.port).toEqual(8162);
  });

  test("ActiveMq Single Instance Broker import by incorrect ARN", () => {
    const stack = new Stack();

    const incorrectARN = "XXXXXX";

    expect(() =>
      ActiveMqBrokerInstance.fromActiveMqBrokerInstanceArn(
        stack,
        "Imported",
        incorrectARN,
      ),
    ).toThrow(
      `ARNs must start with "arn:" and have at least 6 components: ${incorrectARN}`,
    );
  });

  test("ActiveMq Single Instance Broker import by ARN with SGs", () => {
    const stack = new Stack();

    const sgs = [
      SecurityGroup.fromSecurityGroupId(stack, "ImportedSG", "sg-123123123123"),
    ];

    const broker = ActiveMqBrokerInstance.fromActiveMqBrokerInstanceArn(
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
    expect(broker.endpoints.amqp.url).toEqual(
      `amqp+ssl://b-123456789012-123456789012.mq.${Aws.REGION}.${Aws.URL_SUFFIX}:5671`,
    );
    expect(broker.endpoints.amqp.port).toEqual(5671);
    expect(broker.endpoints.stomp.url).toEqual(
      `stomp+ssl://b-123456789012-123456789012.mq.${Aws.REGION}.${Aws.URL_SUFFIX}:61614`,
    );
    expect(broker.endpoints.stomp.port).toEqual(61614);
    expect(broker.endpoints.openWire.url).toEqual(
      `ssl://b-123456789012-123456789012.mq.${Aws.REGION}.${Aws.URL_SUFFIX}:61617`,
    );
    expect(broker.endpoints.openWire.port).toEqual(61617);
    expect(broker.endpoints.mqtt.url).toEqual(
      `mqtt+ssl://b-123456789012-123456789012.mq.${Aws.REGION}.${Aws.URL_SUFFIX}:8883`,
    );
    expect(broker.endpoints.mqtt.port).toEqual(8883);
    expect(broker.endpoints.wss.url).toEqual(
      `wss://b-123456789012-123456789012.mq.${Aws.REGION}.${Aws.URL_SUFFIX}:61619`,
    );
    expect(broker.endpoints.wss.port).toEqual(61619);
    expect(broker.endpoints.console.url).toEqual(
      `https://b-123456789012-123456789012.mq.${Aws.REGION}.${Aws.URL_SUFFIX}:8162`,
    );
    expect(broker.endpoints.console.port).toEqual(8162);
    expect(broker.connections?.securityGroups).toEqual(sgs);
  });

  test("ActiveMq Single Instance Broker import by name and id", () => {
    const stack = new Stack();

    const broker = ActiveMqBrokerInstance.fromActiveMqBrokerInstanceNameAndId(
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
    expect(broker.endpoints.amqp.url).toEqual(
      `amqp+ssl://b-123456789012-123456789012.mq.${Aws.REGION}.${Aws.URL_SUFFIX}:5671`,
    );
    expect(broker.endpoints.amqp.port).toEqual(5671);
    expect(broker.endpoints.stomp.url).toEqual(
      `stomp+ssl://b-123456789012-123456789012.mq.${Aws.REGION}.${Aws.URL_SUFFIX}:61614`,
    );
    expect(broker.endpoints.stomp.port).toEqual(61614);
    expect(broker.endpoints.openWire.url).toEqual(
      `ssl://b-123456789012-123456789012.mq.${Aws.REGION}.${Aws.URL_SUFFIX}:61617`,
    );
    expect(broker.endpoints.openWire.port).toEqual(61617);
    expect(broker.endpoints.mqtt.url).toEqual(
      `mqtt+ssl://b-123456789012-123456789012.mq.${Aws.REGION}.${Aws.URL_SUFFIX}:8883`,
    );
    expect(broker.endpoints.mqtt.port).toEqual(8883);
    expect(broker.endpoints.wss.url).toEqual(
      `wss://b-123456789012-123456789012.mq.${Aws.REGION}.${Aws.URL_SUFFIX}:61619`,
    );
    expect(broker.endpoints.wss.port).toEqual(61619);
    expect(broker.endpoints.console.url).toEqual(
      `https://b-123456789012-123456789012.mq.${Aws.REGION}.${Aws.URL_SUFFIX}:8162`,
    );
    expect(broker.endpoints.console.port).toEqual(8162);
    expect(broker.connections).toBeUndefined();
  });

  test("ActiveMq Single Instance Broker import by name, id and sgs", () => {
    const stack = new Stack();

    const sgs = [
      SecurityGroup.fromSecurityGroupId(stack, "ImportedSG", "sg-123123123123"),
    ];

    const broker = ActiveMqBrokerInstance.fromActiveMqBrokerInstanceNameAndId(
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
    expect(broker.endpoints.amqp.url).toEqual(
      `amqp+ssl://b-123456789012-123456789012.mq.${Aws.REGION}.${Aws.URL_SUFFIX}:5671`,
    );
    expect(broker.endpoints.amqp.port).toEqual(5671);
    expect(broker.endpoints.stomp.url).toEqual(
      `stomp+ssl://b-123456789012-123456789012.mq.${Aws.REGION}.${Aws.URL_SUFFIX}:61614`,
    );
    expect(broker.endpoints.stomp.port).toEqual(61614);
    expect(broker.endpoints.openWire.url).toEqual(
      `ssl://b-123456789012-123456789012.mq.${Aws.REGION}.${Aws.URL_SUFFIX}:61617`,
    );
    expect(broker.endpoints.openWire.port).toEqual(61617);
    expect(broker.endpoints.mqtt.url).toEqual(
      `mqtt+ssl://b-123456789012-123456789012.mq.${Aws.REGION}.${Aws.URL_SUFFIX}:8883`,
    );
    expect(broker.endpoints.mqtt.port).toEqual(8883);
    expect(broker.endpoints.wss.url).toEqual(
      `wss://b-123456789012-123456789012.mq.${Aws.REGION}.${Aws.URL_SUFFIX}:61619`,
    );
    expect(broker.endpoints.wss.port).toEqual(61619);
    expect(broker.endpoints.console.url).toEqual(
      `https://b-123456789012-123456789012.mq.${Aws.REGION}.${Aws.URL_SUFFIX}:8162`,
    );
    expect(broker.endpoints.console.port).toEqual(8162);
    expect(broker.connections?.securityGroups).toEqual(sgs);
  });
});
