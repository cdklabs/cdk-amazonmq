# AWS::AmazonMQ L2+ Construct Library

<!--BEGIN STABILITY BANNER-->

---

Features                                     | Stability
---------------------------------------------|--------------------------------------------------------
Higher level constructs for ActiveMQ Brokers | ![Experimental](https://img.shields.io/badge/experimental-important.svg?style=for-the-badge)
Higher level constructs for RabbitMQ Bokers  | ![Experimental](https://img.shields.io/badge/experimental-important.svg?style=for-the-badge)

> **Experimental:** Higher level constructs in this module are experimental and
> under active development. They are subject to non-backward compatible changes or removal in any
> future version. These are not subject to the [Semantic Versioning](https://semver.org/) model and
> breaking changes will be announced in the release notes. This means that while you may use them,
> you may need to update your source code when upgrading to a newer version of this package.

---

<!--END STABILITY BANNER-->

## Table of Contents

- [Introduction](#introduction)
  - [Security](#security)
- [ActiveMQ Brokers](#activemq-brokers)
  - [ActiveMQ Broker Deployments](#activemq-broker-deployments)
  - [ActiveMQ Broker Endpoints](#activemq-broker-endpoints)
  - [Allowing Connections to ActiveMQ Brokers](#allowing-connections-to-activemq-brokers)
  - [ActiveMQ Broker Configurations](#activemq-broker-configurations)
  - [ActiveMQ Broker User Management](#activemq-broker-user-management)
    - [ActiveMQ Broker Simple Authentication](#activemq-broker-simple-authentication)
    - [ActiveMQ Broker LDAP Integration](#activemq-broker-ldap-integration)
  - [Monitoring ActiveMQ Brokers](#monitoring-activemq-brokers)
  - [ActiveMQ Broker Integration with AWS Lambda](#activemq-broker-integration-with-aws-lambda)
- [RabbitMQ Brokers](#rabbitmq-brokers)
  - [RabbitMQ Broker Deployments](#rabbitmq-broker-deployments)
  - [RabbitMQ Broker Endpoints](#rabbitmq-broker-endpoints)
  - [Allowing Connections to a RabbitMQ Broker](#allowing-connections-to-a-rabbitmq-broker)
  - [RabbitMQ Broker Configurations](#rabbitmq-broker-configurations)
  - [Monitoring RabbitMQ Brokers](#monitoring-rabbitmq-brokers)
  - [RabbitMQ Broker Integration with AWS Lambda](#rabbitmq-broker-integration-with-aws-lambda)
  - [Using Management HTTP API through `RabbitMqCustomResource`](#using-management-http-api-through-rabbitmqcustomresource)
  - [External Examples](#external-examples)

## Introduction

Amazon MQ is a managed service that makes it easy to create and run Apache ActiveMQ and RabbitMQ message brokers at scale. This library brings L2 AWS CDK constructs for Amazon MQ and introduces a notion of *broker deployment* and distincts between *a broker* and *a broker deployment*. 

- *broker deployment* represents the configuration that defines how the broker (or a set of brokers in a particular configuration) will be deployed. Effectively, this is the representation of the `AWS::AmazonMQ::Broker` resource type, and will expose the relevant attributes of the resource type (such as ARN, Id).
- *broker* represents the means for accessing the broker, that is its endpoints and (in the case of ActiveMQ) IPv4 address(es).

This stems from the fact that when creating the `AWS::AmazonMQ::Broker` resource for ActiveMQ in the `ACTIVE_STANDBY_MULTI_AZ` deployment mode, the resulting AWS resource will in fact contain a set of two, distinct brokers.

The separation allows for expressing the resources as types in two ways: 
- *is*, where a *broker deployment* implements the *broker* behavioral interface
- *has*, where a *broker deployment* contains (a set of) *brokers*.

### Security

In order to build secure solutions follow the guidelines and recommendations in the *[Security](https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/using-amazon-mq-securely.html)* section of the AWS documentation for the Amazon MQ.

## ActiveMQ Brokers

Amazon MQ allows for creating AWS-managed ActiveMQ brokers. The brokers enable exchanging messages over [a number of protocols](https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker.html#broker-protocols), e.g. AMQP 1.0, OpenWire, STOMP, MQTT.

### ActiveMQ Broker Deployments

The following example creates a minimal, [single-instance ActiveMQ Broker deployment](https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/single-broker-deployment.html):

```typescript
import { InstanceClass, InstanceSize, InstanceType } from 'aws-cdk-lib/aws-ec2';
import { ISecret } from 'aws-cdk-lib/aws-secretsmanager';
import { 
  ActiveMqBrokerEngineVersion, 
  ActiveMqBrokerInstance,
  ActiveMqBrokerUserManagement,
} from '@cdklabs/cdk-amazonmq';

declare const stack: Stack;
declare const brokerUser: ISecret;

const broker = new ActiveMqBrokerInstance(stack, 'ActiveMqBroker', {
  publiclyAccessible: false,
  version: ActiveMqBrokerEngineVersion.V5_18,
  instanceType: InstanceType.of(InstanceClass.T3, InstanceSize.MICRO),
  userManagement: ActiveMqBrokerUserManagement.simple({
    users: [{
      username: brokerUser.secretValueFromJson('username').unsafeUnwrap(),
      password: brokerUser.secretValueFromJson('password'),
    }],
  }),
});
```

The example below shows how to instantiate an active-standby redundant pair. `ActiveMqBrokerRedundantPair` doesn't implement `IActiveMqBroker`, but has two properties: `first`, and `second` that do. This stems from the fact that [ActiveMq redundant-pair deployment](https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/active-standby-broker-deployment.html) exposes two, separate brokers that work in an active-standby configuration. The names are `first` (instead of `active`) and `second` (instead of `standby`) as there cannot be a guarantee which broker will be the `active` and which - the `standby`.

```typescript
import { 
  InstanceClass,
  InstanceSize,
  InstanceType,
  IVpc,
  SubnetSelection
} from 'aws-cdk-lib/aws-ec2';
import { ISecret } from 'aws-cdk-lib/aws-secretsmanager';
import { 
  ActiveMqBrokerEngineVersion,
  ActiveMqBrokerRedundantPair,
  ActiveMqBrokerUserManagement,
} from '@cdklabs/cdk-amazonmq';

declare const stack: Stack;
declare const brokerUser: ISecret;
declare const vpc: IVpc;
declare const vpcSubnets: SubnetSelection;

const brokerPair = new ActiveMqBrokerRedundantPair(stack, 'ActiveMqBrokerPair', {
  publiclyAccessible: false,
  version: ActiveMqBrokerEngineVersion.V5_18,
  instanceType: InstanceType.of(InstanceClass.M5, InstanceSize.LARGE),
  userManagement: ActiveMqBrokerUserManagement.simple({
    users: [{
      username: brokerUser.secretValueFromJson('username').unsafeUnwrap(),
      password: brokerUser.secretValueFromJson('password'),
    }],
  }),
  vpc,
  vpcSubnets,
});
```
### ActiveMQ Broker Endpoints

Each created broker instance implements `IActiveMqBroker` and has `endpoints` property representing each allowed transport with url and port.

One can use the endpoints as in the example below

```typescript
import { CfnOutput } from 'aws-cdk-lib';
import { IActiveMqBroker } from '@cdklabs/cdk-amazonmq';

declare const broker: IActiveMqBroker;

new CfnOutput(this, 'AmqpEndpointUrl', { value:  broker.endpoints.amqp.url });
new CfnOutput(this, 'AmqpEndpointPort', { value: broker.endpoints.amqp.port.toString() });

new CfnOutput(this, 'StompEndpointUrl', { value:  broker.endpoints.stomp.url });
new CfnOutput(this, 'StompEndpointPort', { value: broker.endpoints.stomp.port.toString() });

new CfnOutput(this, 'OpenWireEndpointUrl', { value:  broker.endpoints.openWire.url });
new CfnOutput(this, 'OpenWireEndpointPort', { value: broker.endpoints.openWire.port.toString() });

new CfnOutput(this, 'MqttEndpointUrl', { value:  broker.endpoints.mqtt.url });
new CfnOutput(this, 'MqttEndpointPort', { value: broker.endpoints.mqtt.port.toString() });

new CfnOutput(this, 'WssEndpointUrl', { value:  broker.endpoints.wss.url });
new CfnOutput(this, 'WssEndpointPort', { value: broker.endpoints.wss.port.toString() });

new CfnOutput(this, 'WebConsoleUrl', { value: broker.endpoints.console.url });
new CfnOutput(this, 'WebConsolePort', { value: broker.endpoints.console.port.toString() });

new CfnOutput(this, 'IpAddress', { value: broker.ipAddress });
```

For the redundant pair deployments one can access all the endpoints under properties `first` and `second`, as each implements `IActiveMqBroker`. 

### Allowing Connections to ActiveMQ Brokers

For ActiveMQ broker deployments that are not publically accessible and with specified VPC and subnets you can control who can access the Broker using `connections` attribute. By default no connection is allowed and it has to be explicitly allowed.

```typescript
import { Peer, Port } from 'aws-cdk-lib/aws-ec2';
import {
  IActiveMqBroker,
  IActiveMqBrokerDeployment,
} from '@cdklabs/cdk-amazonmq';

declare const deployment: IActiveMqBrokerDeployment;
declare const broker: IActiveMqBroker;

// for the applications to interact over the STOMP protocol
deployment.connections?.allowFrom(Peer.ipv4('1.2.3.4/8'), Port.tcp(broker.endpoints.stomp.port));

// for the applications to interact over the OpenWire protocol
deployment.connections?.allowFrom(Peer.ipv4('1.2.3.4/8'), Port.tcp(broker.endpoints.openWire.port));

// for the Web Console access
deployment.connections?.allowFrom(Peer.ipv4('1.2.3.4/8'), Port.tcp(broker.endpoints.console.port));
```

Mind that `connections` will be defined only if VPC and subnets are specified. For an instance of `ActiveMqBrokerRedundantPair` one would access the broker endpoints under either `first` or `second` property.

***Security:*** It is a security best practice *[to block unnecessary protocols with VPC security groups](https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/using-amazon-mq-securely.html#amazon-mq-vpc-security-groups)*.

### ActiveMQ Broker Configurations

By default Amazon MQ will create a default configuration for the broker(s) on your deployment. You can introduce custom configurations by explicitly creating one as in the example below:

```typescript
import { InstanceClass, InstanceSize, InstanceType } from 'aws-cdk-lib/aws-ec2';
import { ISecret } from 'aws-cdk-lib/aws-secretsmanager';
import { 
  ActiveMqBrokerConfiguration, 
  ActiveMqBrokerConfigurationDefinition, 
  ActiveMqAuthenticationStrategy,
  ActiveMqBrokerEngineVersion,
  ActiveMqBrokerInstance,
  ActiveMqBrokerUserManagement,
} from '@cdklabs/cdk-amazonmq';

declare const stack: Stack;
declare const brokerUser: ISecret;
declare const configurationData: string;

const customConfiguration = new ActiveMqBrokerConfiguration(stack, 'CustomConfiguration', {
  configurationName: 'ConfigurationName',
  description: 'ConfigurationDescription',
  engineVersion: ActiveMqBrokerEngineVersion.V5_18,
  authenticationStrategy: ActiveMqAuthenticationStrategy.SIMPLE,
  definition: ActiveMqBrokerConfigurationDefinition.data(configurationData),
});

const broker = new ActiveMqBrokerInstance(stack, 'Broker', {
  publiclyAccessible: false,
  version: ActiveMqBrokerEngineVersion.V5_18,
  instanceType: InstanceType.of(InstanceClass.T3, InstanceSize.MICRO),
  userManagement: ActiveMqBrokerUserManagement.simple({
    users: [{
      username: brokerUser.secretValueFromJson('username').unsafeUnwrap(),
      password: brokerUser.secretValueFromJson('password'),
    }],
  }),
  configuration: customConfiguration
});
```

A configuration can be associated with a specific broker also after the broker creation. Then, it is required to be explicitly associated with the broker.

```typescript
import { 
  IActiveMqBrokerConfiguration,
  IActiveMqBrokerDeployment,
} from '@cdklabs/cdk-amazonmq';

declare const configuration: IActiveMqBrokerConfiguration;
declare const deployment: IActiveMqBrokerDeployment;

configuration.associateWith(deployment);
```

This library also allows to modify an existing configuration. Such update of a particular configuration is [creating a new configuration *revision*](https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/amazon-mq-creating-applying-configurations.html#creating-new-configuration-revision-console) so that a history of revisions can be viewed in the AWS Console. The new revision can be then associated with the broker so it uses it as a working configuration. 

```typescript
import { 
  ActiveMqBrokerConfigurationDefinition,
  IActiveMqBrokerConfiguration,
  IActiveMqBrokerDeployment,
} from '@cdklabs/cdk-amazonmq';

declare const configuration: IActiveMqBrokerConfiguration;
declare const deployment: IActiveMqBrokerDeployment;
declare const newData: string;

const newRevision = configuration.createRevision({
  description: 'We need to modify an AuthorizationEntry',
  definition: ActiveMqBrokerConfigurationDefinition.data(newData)
});

newRevision.associateWith(deployment);
```

### ActiveMQ Broker User Management

#### ActiveMQ Broker Simple Authentication
Using ActiveMQ built-in [Simple Authentication](http://activemq.apache.org/security.html#Security-SimpleAuthenticationPlugin) users need to be provided during the broker deployment definition.

***Security:*** In the Simple Authentication User Management authorization is managed in the configuration. It is a security best practice to *[always configure an authorization map](https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/using-amazon-mq-securely.html#always-configure-authorization-map)*.

#### ActiveMQ Broker LDAP Integration

Amazon MQ for ActiveMQ enables LDAP integration. An example below shows a minimal setup to configure an Amazon MQ for ActiveMQ broker.

```typescript
import { InstanceClass, InstanceSize, InstanceType } from 'aws-cdk-lib/aws-ec2';
import { ISecret } from 'aws-cdk-lib/aws-secretsmanager';
import { 
  ActiveMqBrokerEngineVersion, 
  ActiveMqBrokerInstance,
  ActiveMqBrokerUserManagement,
} from '@cdklabs/cdk-amazonmq';

declare const stack: Stack;
declare const serviceAccountSecret: ISecret;

const broker = new ActiveMqBrokerInstance(stack, 'ActiveMqBrokerInstance', {
  publiclyAccessible: false,
  version: ActiveMqBrokerEngineVersion.V5_18,
  instanceType: InstanceType.of(InstanceClass.T3, InstanceSize.MICRO),
  userManagement: ActiveMqBrokerUserManagement.ldap({
    hosts: ['ldap.example.com'],
    userSearchMatching: 'uid={0}',
    userRoleName: 'amq',
    userBase: 'ou=users,dc=example,dc=com',
    roleBase: 'ou=roles,dc=example,dc=com',
    roleSearchMatching: 'cn={0}',
    roleName: 'amq',
    serviceAccountPassword: serviceAccountSecret.secretValueFromJson('password'),
    serviceAccountUsername: serviceAccountSecret.secretValueFromJson('username'),
  }),
});
```

### Monitoring ActiveMQ Brokers

This library introduces [a set of metrics](https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/security-logging-monitoring-cloudwatch.html#activemq-logging-monitoring) that we can use for the `IActiveMqBrokerDeployment` monitoring. Each can be accessed as a method on the `IActiveMqBrokerDeployment` with the convention `metric[MetricName]`. An example below shows how one can use that:

```typescript
import { IActiveMqBrokerDeployment } from '@cdklabs/cdk-amazonmq';

declare const stack: Stack;
declare const deployment: IActiveMqBrokerDeployment;

const consumerCountMetric = deployment.metricConsumerCount();
consumerCountMetric.createAlarm(stack, 'ConsumerCountAlarm', {
  threshold: 100,
  evaluationPeriods: 3,
  datapointsToAlarm: 2,
});
```

### ActiveMQ Broker Integration with AWS Lambda

Amazon MQ for ActiveMQ broker queues can be used as event sources for AWS Lambda functions. For authentication only the ActiveMQ SimpleAuthenticationPlugin is supported. Lambda consumes messages using the OpenWire/Java Message Service (JMS) protocol. No other protocols are supported for consuming messages. Within the JMS protocol, only TextMessage and BytesMessage are supported. Lambda also supports JMS custom properties. For more details on the requirements of the integration read [the documentation](https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html).

The example below presents an example of creating such an event source mapping:

```typescript
import { IFunction } from 'aws-cdk-lib/aws-lambda';
import { ISecret } from 'aws-cdk-lib/aws-secretsmanager';
import { 
  ActiveMqEventSource,
  IActiveMqBrokerDeployment,
} from '@cdklabs/cdk-amazonmq';

declare const target: IFunction;
declare const creds: ISecret; // with username and password fields
declare const broker: IActiveMqBrokerDeployment;
declare const queueName: string;

target.addEventSource(new ActiveMqEventSource({
  broker,
  credentials: creds,
  queueName,
}));

```

***Security:*** When adding an Amazon MQ for ActiveMQ as an AWS Lambda function's event source the library updates the execution role's permissions to satisfy [Amazon MQ requirements for provisioning the event source mapping](https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#events-mq-permissions).

In the case of a private deployment the defined event source mapping will create a set of Elastic Network Interfaces (ENIs) in the subnets in which the broker deployment created communication endpoints. Thus, in order to allow the event source mapping to communicate with the broker one needs to additionally allow inbound traffic from the ENIs on the OpenWire port. As ENIs will use the same security group that governs the access to the broker endpoints you can simply allow communication from the broker's security group to itself on the OpenWire port as in the example below:

```typescript
import { Port } from 'aws-cdk-lib/aws-ec2';
import { 
  IActiveMqBroker,
  IActiveMqBrokerDeployment,
} from '@cdklabs/cdk-amazonmq';

declare const deployment: IActiveMqBrokerDeployment;
declare const broker: IActiveMqBroker;

deployment.connections?.allowInternally(Port.tcp(broker.endpoints.openWire.port), 'Allowing for the ESM');

```

## RabbitMQ Brokers

Amazon MQ allows for creating AWS-managed RabbitMQ brokers. The brokers enable exchanging messages over AMQP 0-9-1 protocol.

### RabbitMQ Broker Deployments

The following example creates a minimal, single-instance RabbitMQ broker deployment:

```typescript
import { InstanceClass, InstanceSize, InstanceType } from 'aws-cdk-lib/aws-ec2';
import { ISecret } from 'aws-cdk-lib/aws-secretsmanager';
import { RabbitMqBrokerEngineVersion, RabbitMqBrokerInstance } from '@cdklabs/cdk-amazonmq';

declare const stack: Stack;
declare const adminSecret: ISecret;

const broker = new RabbitMqBrokerInstance(stack, 'RabbitMqBroker', {
  publiclyAccessible: false,
  version: RabbitMqBrokerEngineVersion.V3_13,
  instanceType: InstanceType.of(InstanceClass.T3, InstanceSize.MICRO),
  admin: {
    username: adminSecret.secretValueFromJson('username').unsafeUnwrap(),
    password: adminSecret.secretValueFromJson('password'),
   },
});
```

The next example creates a minimal RabbitMQ broker cluster:

```typescript
import { InstanceClass, InstanceSize, InstanceType } from 'aws-cdk-lib/aws-ec2';
import { ISecret } from 'aws-cdk-lib/aws-secretsmanager';
import {
  RabbitMqBrokerCluster,
  RabbitMqBrokerEngineVersion,
} from '@cdklabs/cdk-amazonmq';

declare const stack: Stack;
declare const adminSecret: ISecret;

const broker = new RabbitMqBrokerCluster(stack, 'RabbitMqBroker', {
  publiclyAccessible: false,
  version: RabbitMqBrokerEngineVersion.V3_13,
  instanceType: InstanceType.of(InstanceClass.M5, InstanceSize.LARGE),
  admin: {
    username: adminSecret.secretValueFromJson('username').unsafeUnwrap(),
    password: adminSecret.secretValueFromJson('password'),
   },
});
```

### RabbitMQ Broker Endpoints

Each created broker has `endpoints` property with the AMQP endpoint url and port.

```typescript
import { CfnOutput } from 'aws-cdk-lib';
import { IRabbitMqBroker } from '@cdklabs/cdk-amazonmq';

declare const broker: IRabbitMqBroker;

new CfnOutput(this, 'AmqpEndpointUrl', { value:  broker.endpoints.amqp.url });
new CfnOutput(this, 'AmqpEndpointPort', { value: broker.endpoints.amqp.port.toString() });
new CfnOutput(this, 'WebConsoleUrl', { value: broker.endpoints.console.url });
new CfnOutput(this, 'WebConsolePort', { value: broker.endpoints.console.port.toString() });
```

### Allowing Connections to a RabbitMQ Broker

For the RabbitMQ broker deployments that are not publically accessible and with specified VPC and subnets you can control who can access the broker using `connections` attribute. 

```typescript
import { Peer, Port } from 'aws-cdk-lib/aws-ec2';
import { IRabbitMqBroker, IRabbitMqBrokerDeployment } from '@cdklabs/cdk-amazonmq';

declare const deployment: IRabbitMqBrokerDeployment;
declare const broker: IRabbitMqBroker;

// for the applications to interact over the AMQP protocol
deployment.connections?.allowFrom(Peer.ipv4('1.2.3.4/8'), Port.tcp(broker.endpoints.amqp.port));

// for the Web Console access
deployment.connections?.allowFrom(Peer.ipv4('1.2.3.4/8'), Port.tcp(broker.endpoints.console.port));
```

Mind that `connections` will be defined only if VPC and subnets are specified.

### RabbitMQ Broker Configurations

If you do not specify a custom RabbitMQ Broker configuration, Amazon MQ for RabbitMQ will create a default configuration for the broker on your behalf. You can introduce custom configurations by explicitly creating one as in the example below:

```typescript
import { Duration } from 'aws-cdk-lib';
import { InstanceClass, InstanceSize, InstanceType } from 'aws-cdk-lib/aws-ec2';
import { ISecret } from 'aws-cdk-lib/aws-secretsmanager';
import { 
  RabbitMqBrokerConfiguration, 
  RabbitMqBrokerConfigurationDefinition,
  RabbitMqBrokerEngineVersion,
  RabbitMqBrokerInstance,
} from '@cdklabs/cdk-amazonmq';

declare const stack: Stack;
declare const adminSecret: ISecret;

const customConfiguration = new RabbitMqBrokerConfiguration(stack, 'CustomConfiguration', {
  configurationName: 'ConfigurationName',
  description: 'ConfigurationDescription',
  engineVersion: RabbitMqBrokerEngineVersion.V3_13,
  definition: RabbitMqBrokerConfigurationDefinition.parameters({
    consumerTimeout: Duration.minutes(20),
  }),
});

const broker = new RabbitMqBrokerInstance(stack, 'Broker', {
  publiclyAccessible: false,
  version: RabbitMqBrokerEngineVersion.V3_13,
  instanceType: InstanceType.of(InstanceClass.T3, InstanceSize.MICRO),
  admin: {
    username: adminSecret.secretValueFromJson('username').unsafeUnwrap(),
    password: adminSecret.secretValueFromJson('password'),
   },
  configuration: customConfiguration
});
```

A configuration can be associated with a specific broker also after the deployment. Then, it is required to be explicitly associated with the broker.

```typescript
import { 
  IRabbitMqBrokerConfiguration, 
  IRabbitMqBrokerDeployment,
} from '@cdklabs/cdk-amazonmq';

declare const configuration: IRabbitMqBrokerConfiguration;
declare const deployment: IRabbitMqBrokerDeployment;

configuration.associateWith(deployment);
```

This library also allows to modify an existing configuration. Such update of a particular configuration is [creating a new configuration *revision*](https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/rabbitmq-creating-applying-configurations.html#creating-new-rabbitmq-configuration-revision-console) so that a history of revisions can be viewed in the AWS Console. The new revision can be then associated with the broker so it uses it as a working configuration. 

```typescript
import { Duration } from 'aws-cdk-lib';
import { 
  IRabbitMqBrokerConfiguration, 
  IRabbitMqBrokerDeployment,
  RabbitMqBrokerConfigurationDefinition,
} from '@cdklabs/cdk-amazonmq';

declare const configuration: IRabbitMqBrokerConfiguration;
declare const deployment: IRabbitMqBrokerDeployment;
declare const newConsumerTimeout: Duration;

const newRevision = configuration.createRevision({
  description: 'We need to modify the consumer timeout',
  definition: RabbitMqBrokerConfigurationDefinition.parameters({
    consumerTimeout: newConsumerTimeout
  })
});

newRevision.associateWith(deployment);
```

### Monitoring RabbitMQ Brokers

This library introduces [a set of metrics](https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/security-logging-monitoring-cloudwatch.html#rabbitmq-logging-monitoring) that we can use for the `IRabbitMqBrokerDeployment` monitoring. Each can be accessed as a method on the `IRabbitMqBrokerDeployment` with the convention `metric[MetricName]`. An example below shows how one can use that:

```typescript
import { IRabbitMqBrokerDeployment } from '@cdklabs/cdk-amazonmq';

declare const stack: Stack;
declare const deployment: IRabbitMqBrokerDeployment;

const consumerCountMetric = deployment.metricConsumerCount();
consumerCountMetric.createAlarm(stack, 'ConsumerCountAlarm', {
  threshold: 100,
  evaluationPeriods: 3,
  datapointsToAlarm: 2,
});
```

### RabbitMQ Broker Integration with AWS Lambda

Amazon MQ for RabbitMQ broker queues can be used as event sources for AWS Lambda functions. For authentication only the PLAIN authentication mechanism is supported. Lambda consumes messages using the AMQP 0-9-1 protocol. No other protocols are supported for consuming messages. For more details on the requirements of the integration read [the documentation](https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html).

The example below presents an example of creating such an event source mapping:

```typescript
import { IFunction } from 'aws-cdk-lib/aws-lambda';
import { ISecret } from 'aws-cdk-lib/aws-secretsmanager';
import { IRabbitMqBrokerDeployment, RabbitMqEventSource } from '@cdklabs/cdk-amazonmq';

declare const target: IFunction;
declare const creds: ISecret; // with username and password fields
declare const broker: IRabbitMqBrokerDeployment;
declare const queueName: string;

target.addEventSource(new RabbitMqEventSource({
  broker,
  credentials: creds,
  queueName,
}));

```
***Security:*** When adding an Amazon MQ for RabbitMQ as an AWS Lambda function's event source the library updates the execution role's permissions to satisfy [Amazon MQ requirements for provisioning the event source mapping](https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#events-mq-permissions).

In the case of a private deployment the defined event source mapping will create a set of Elastic Network Interfaces (ENIs) in the subnets in which the broker deployment created communication VPC Endpoints. Thus, in order to allow the event source mapping to communicate with the broekr one needs to additionally allow inbound traffic from the ENIs. As ENIs will use the same security group that governs the access to the VPC Endpoints you can simply allow communication from the broker's security group to itself on the AMQP port as in the example below:

```typescript
import { IRabbitMqBrokerDeployment } from '@cdklabs/cdk-amazonmq';

declare const deployment: IRabbitMqBrokerDeployment;

deployment.connections?.allowDefaultPortInternally();

```

### Using Management HTTP API through `RabbitMqCustomResource`

This library allows for interacting with Amazon MQ for RabbitMQ brokers with the use of RabbitMQ Management HTTP API through the use of `RabbitMqCustomResource`. This resource follows the user experience of [`AwsCustomResource`](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.custom_resources.AwsCustomResource.html) and is underpinned by a [`SingletonFunction`](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_lambda.SingletonFunction.html). The custom resource creates such singleton function per a combination of `broker`, `credentials`, `vpc`, `vpcSubnets`, and `securityGroups`. This allows for limiting the number of resources, but limits the scope per permissions (through taking into consideration `broker` and `credentials`) and connectivity (through `vpc`, `vpcSubnets`, and `securityGroups`).

An example use of the `RabbitMqCustomResource` is presented below:

```typescript
import { PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { LogGroup, RetentionDays } from 'aws-cdk-lib/aws-logs';
import { ISecret } from 'aws-cdk-lib/aws-secretsmanager';
import { PhysicalResourceId } from 'aws-cdk-lib/custom-resources';
import { HttpMethods, IRabbitMqBroker, RabbitMqCustomResource, RabbitMqCustomResourcePolicy } from '@cdklabs/cdk-amazonmq';

declare const stack: Stack;
declare const username: string;
declare const userCreds: ISecret; // with username/password fields
declare const broker: IRabbitMqBroker;
declare const brokerAdminCreds: ISecret; // with username/password fields of the broker admin

const user = new RabbitMqCustomResource(stack, 'CreateUser', {
  broker,
  credentials: brokerAdminCreds,
  logGroup: new LogGroup(stack, 'RmqCustomResourceLogGroup', {
    retention: RetentionDays.ONE_DAY,
  }),
  onUpdate: {
    path: `/api/users/${userCreds.secretValueFromJson('username')}`,
    method: HttpMethods.PUT,
    payload: {
      password: userCreds.secretValueFromJson('password'),
      tags: '',
    },
    physicalResourceId: PhysicalResourceId.of(`${username}-create`),
  },
  onDelete: {
    path: `/api/users/${userCreds.secretValueFromJson('username')}`,
    method: HttpMethods.DELETE,
  },
  policy: RabbitMqCustomResourcePolicy.fromStatements([
    new PolicyStatement({
      actions: ['secretsmanager:GetSecretValue'],
      resources: [userCreds.secretArn],
    }),
  ]),
});

```

The above example binds the creation, updating and deletion of a RabbitMQ user. The behavior of `onCreate` and `onUpdate` of the `RabbitMqCustomResource` follows the behavior of the `AwsCustomResource` in that if there is no `onCreate`, and only `onUpdate` - this will be used for both: `onCreate` and `onUpdate`.

Additionally, `RabbitMqCustomResource` can read information from the SecretManager Secrets which allows to set the password of the user without exposing it. As this requires read permissions on the secret itself - it is allowed with the use of `RabbitMqCustomResourcePolicy`.

`RabbitMqCustomResource` also replicates the formatting of the output from the commands replicating the behavior of `AwsCustomResource`. It means that the output is flattened and to retrieve any field form the `RabbitMqCustomResource` instance the flattened path needs to be applied. The example below shows how to retrieve the name of the broker node of a `RabbitMqBrokerInstance`:

```typescript

import { ISecret } from 'aws-cdk-lib/aws-secretsmanager';
import { RabbitMqBrokerInstance, RabbitMqCustomResource } from '@cdklabs/cdk-amazonmq';

declare const stack: Stack;
declare const broker: RabbitMqBrokerInstance;
declare const credentials: ISecret;

const getNodesName = new RabbitMqCustomResource(this, "GetNodes", {
  broker,
  credentials,
  onCreate: {
    path: '/api/nodes',
  },
});

// accessing the field returned by the call
getNodesName.getResponseField('0.name')

```

In the example presented the response of the call to `/api/nodes` endpoint is an JSON array of objects. For the `RabbitMqBrokerInstance` there will be a single object, whereas for the `RabbitMqBrokerCluster` there will be three objects presenting information for each node. Arrays are flattened by using the index for a position of the object and that is why the name of the first (and in the example only) node will is retrieved by specifying the response field name `0.name`.  

### External Examples

This section includes additional examples and use cases for working with RabbitMQ Brokers using the AWS::AmazonMQ L2+ Construct Library.

- **[AWS CDK Example for RabbitMQ Lambda Integration](https://github.com/aws-samples/aws-cdk-examples/tree/main/typescript/amazon-mq-rabbitmq-lambda)**:
  A practical example from the **aws-samples/aws-cdk-examples** repository, demonstrating how to integrate RabbitMQ Brokers with AWS Lambda using this library. This example also integrates with AWS Secrets Manager for secure credential management and sets up a CloudWatch Log Group for logging.
