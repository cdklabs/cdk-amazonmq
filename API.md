# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActiveMqBrokerConfiguration <a name="ActiveMqBrokerConfiguration" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerConfiguration"></a>

#### Initializers <a name="Initializers" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerConfiguration.Initializer"></a>

```typescript
import { ActiveMqBrokerConfiguration } from '@cdklabs/cdk-amazonmq'

new ActiveMqBrokerConfiguration(scope: Construct, id: string, props: ActiveMqBrokerConfigurationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerConfiguration.Initializer.parameter.props">props</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerConfigurationProps">ActiveMqBrokerConfigurationProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerConfiguration.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerConfiguration.Initializer.parameter.props"></a>

- *Type:* <a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerConfigurationProps">ActiveMqBrokerConfigurationProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerConfiguration.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerConfiguration.associateWith">associateWith</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerConfiguration.createRevision">createRevision</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerConfiguration.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerConfiguration.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `associateWith` <a name="associateWith" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerConfiguration.associateWith"></a>

```typescript
public associateWith(broker: IActiveMqBrokerDeployment): ConfigurationAssociation
```

###### `broker`<sup>Required</sup> <a name="broker" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerConfiguration.associateWith.parameter.broker"></a>

- *Type:* <a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment">IActiveMqBrokerDeployment</a>

---

##### `createRevision` <a name="createRevision" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerConfiguration.createRevision"></a>

```typescript
public createRevision(options: ActiveMqBrokerConfigurationOptions): IActiveMqBrokerConfiguration
```

###### `options`<sup>Required</sup> <a name="options" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerConfiguration.createRevision.parameter.options"></a>

- *Type:* <a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerConfigurationOptions">ActiveMqBrokerConfigurationOptions</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerConfiguration.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerConfiguration.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerConfiguration.fromAttributes">fromAttributes</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerConfiguration.isConstruct"></a>

```typescript
import { ActiveMqBrokerConfiguration } from '@cdklabs/cdk-amazonmq'

ActiveMqBrokerConfiguration.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerConfiguration.isOwnedResource"></a>

```typescript
import { ActiveMqBrokerConfiguration } from '@cdklabs/cdk-amazonmq'

ActiveMqBrokerConfiguration.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerConfiguration.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerConfiguration.isResource"></a>

```typescript
import { ActiveMqBrokerConfiguration } from '@cdklabs/cdk-amazonmq'

ActiveMqBrokerConfiguration.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerConfiguration.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromAttributes` <a name="fromAttributes" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerConfiguration.fromAttributes"></a>

```typescript
import { ActiveMqBrokerConfiguration } from '@cdklabs/cdk-amazonmq'

ActiveMqBrokerConfiguration.fromAttributes(scope: Construct, logicalId: string, attrs: BrokerConfigurationAttributes)
```

###### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerConfiguration.fromAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `logicalId`<sup>Required</sup> <a name="logicalId" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerConfiguration.fromAttributes.parameter.logicalId"></a>

- *Type:* string

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerConfiguration.fromAttributes.parameter.attrs"></a>

- *Type:* <a href="#@cdklabs/cdk-amazonmq.BrokerConfigurationAttributes">BrokerConfigurationAttributes</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerConfiguration.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerConfiguration.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerConfiguration.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerConfiguration.property.revision">revision</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerConfiguration.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerConfiguration.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerConfiguration.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerConfiguration.property.revision"></a>

```typescript
public readonly revision: number;
```

- *Type:* number

---


### ActiveMqBrokerDeploymentBase <a name="ActiveMqBrokerDeploymentBase" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase"></a>

- *Implements:* <a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment">IActiveMqBrokerDeployment</a>

#### Initializers <a name="Initializers" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.Initializer"></a>

```typescript
import { ActiveMqBrokerDeploymentBase } from '@cdklabs/cdk-amazonmq'

new ActiveMqBrokerDeploymentBase(scope: Construct, id: string, props: ActiveMqBrokerDeploymentBaseProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.Initializer.parameter.props">props</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBaseProps">ActiveMqBrokerDeploymentBaseProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.Initializer.parameter.props"></a>

- *Type:* <a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBaseProps">ActiveMqBrokerDeploymentBaseProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metric">metric</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricAmqpMaximumConnections">metricAmqpMaximumConnections</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricBurstBalance">metricBurstBalance</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricConsumerCount">metricConsumerCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricCpuCreditBalance">metricCpuCreditBalance</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricCpuUtilization">metricCpuUtilization</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricCurrentConnectionsCount">metricCurrentConnectionsCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricDequeueCount">metricDequeueCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricDispatchCount">metricDispatchCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricEnqueueCount">metricEnqueueCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricEnqueueTime">metricEnqueueTime</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricEstablishedConnectionsCount">metricEstablishedConnectionsCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricExpiredCount">metricExpiredCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricHeapUsage">metricHeapUsage</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricInactiveDurableTopicSubscribersCount">metricInactiveDurableTopicSubscribersCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricInFlightCount">metricInFlightCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricJobSchedulerStorePercentUsage">metricJobSchedulerStorePercentUsage</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricJournalFilesForFastRecovery">metricJournalFilesForFastRecovery</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricJournalFilesForFullRecovery">metricJournalFilesForFullRecovery</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricMemoryUsage">metricMemoryUsage</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricMqttMaximumConnections">metricMqttMaximumConnections</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricNetworkConnectorConnectionCount">metricNetworkConnectorConnectionCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricNetworkIn">metricNetworkIn</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricNetworkOut">metricNetworkOut</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricOpenTransactionCount">metricOpenTransactionCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricOpenwireMaximumConnections">metricOpenwireMaximumConnections</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricProducerCount">metricProducerCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricQueueSize">metricQueueSize</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricReceiveCount">metricReceiveCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricStompMaximumConnections">metricStompMaximumConnections</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricStorePercentUsage">metricStorePercentUsage</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricTempPercentUsage">metricTempPercentUsage</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricTotalConsumerCount">metricTotalConsumerCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricTotalDequeueCount">metricTotalDequeueCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricTotalEnqueueCount">metricTotalEnqueueCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricTotalMessageCount">metricTotalMessageCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricTotalProducerCount">metricTotalProducerCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricVolumeReadOps">metricVolumeReadOps</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricVolumeWriteOps">metricVolumeWriteOps</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricWsMaximumConnections">metricWsMaximumConnections</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `metric` <a name="metric" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metric"></a>

```typescript
public metric(metricName: string, options?: MetricOptions): Metric
```

###### `metricName`<sup>Required</sup> <a name="metricName" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metric.parameter.metricName"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metric.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAmqpMaximumConnections` <a name="metricAmqpMaximumConnections" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricAmqpMaximumConnections"></a>

```typescript
public metricAmqpMaximumConnections(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricAmqpMaximumConnections.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricBurstBalance` <a name="metricBurstBalance" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricBurstBalance"></a>

```typescript
public metricBurstBalance(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricBurstBalance.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricConsumerCount` <a name="metricConsumerCount" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricConsumerCount"></a>

```typescript
public metricConsumerCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricConsumerCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricCpuCreditBalance` <a name="metricCpuCreditBalance" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricCpuCreditBalance"></a>

```typescript
public metricCpuCreditBalance(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricCpuCreditBalance.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricCpuUtilization` <a name="metricCpuUtilization" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricCpuUtilization"></a>

```typescript
public metricCpuUtilization(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricCpuUtilization.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricCurrentConnectionsCount` <a name="metricCurrentConnectionsCount" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricCurrentConnectionsCount"></a>

```typescript
public metricCurrentConnectionsCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricCurrentConnectionsCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricDequeueCount` <a name="metricDequeueCount" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricDequeueCount"></a>

```typescript
public metricDequeueCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricDequeueCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricDispatchCount` <a name="metricDispatchCount" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricDispatchCount"></a>

```typescript
public metricDispatchCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricDispatchCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricEnqueueCount` <a name="metricEnqueueCount" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricEnqueueCount"></a>

```typescript
public metricEnqueueCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricEnqueueCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricEnqueueTime` <a name="metricEnqueueTime" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricEnqueueTime"></a>

```typescript
public metricEnqueueTime(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricEnqueueTime.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricEstablishedConnectionsCount` <a name="metricEstablishedConnectionsCount" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricEstablishedConnectionsCount"></a>

```typescript
public metricEstablishedConnectionsCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricEstablishedConnectionsCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricExpiredCount` <a name="metricExpiredCount" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricExpiredCount"></a>

```typescript
public metricExpiredCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricExpiredCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricHeapUsage` <a name="metricHeapUsage" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricHeapUsage"></a>

```typescript
public metricHeapUsage(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricHeapUsage.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricInactiveDurableTopicSubscribersCount` <a name="metricInactiveDurableTopicSubscribersCount" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricInactiveDurableTopicSubscribersCount"></a>

```typescript
public metricInactiveDurableTopicSubscribersCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricInactiveDurableTopicSubscribersCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricInFlightCount` <a name="metricInFlightCount" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricInFlightCount"></a>

```typescript
public metricInFlightCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricInFlightCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricJobSchedulerStorePercentUsage` <a name="metricJobSchedulerStorePercentUsage" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricJobSchedulerStorePercentUsage"></a>

```typescript
public metricJobSchedulerStorePercentUsage(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricJobSchedulerStorePercentUsage.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricJournalFilesForFastRecovery` <a name="metricJournalFilesForFastRecovery" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricJournalFilesForFastRecovery"></a>

```typescript
public metricJournalFilesForFastRecovery(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricJournalFilesForFastRecovery.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricJournalFilesForFullRecovery` <a name="metricJournalFilesForFullRecovery" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricJournalFilesForFullRecovery"></a>

```typescript
public metricJournalFilesForFullRecovery(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricJournalFilesForFullRecovery.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricMemoryUsage` <a name="metricMemoryUsage" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricMemoryUsage"></a>

```typescript
public metricMemoryUsage(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricMemoryUsage.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricMqttMaximumConnections` <a name="metricMqttMaximumConnections" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricMqttMaximumConnections"></a>

```typescript
public metricMqttMaximumConnections(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricMqttMaximumConnections.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricNetworkConnectorConnectionCount` <a name="metricNetworkConnectorConnectionCount" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricNetworkConnectorConnectionCount"></a>

```typescript
public metricNetworkConnectorConnectionCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricNetworkConnectorConnectionCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricNetworkIn` <a name="metricNetworkIn" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricNetworkIn"></a>

```typescript
public metricNetworkIn(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricNetworkIn.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricNetworkOut` <a name="metricNetworkOut" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricNetworkOut"></a>

```typescript
public metricNetworkOut(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricNetworkOut.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricOpenTransactionCount` <a name="metricOpenTransactionCount" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricOpenTransactionCount"></a>

```typescript
public metricOpenTransactionCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricOpenTransactionCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricOpenwireMaximumConnections` <a name="metricOpenwireMaximumConnections" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricOpenwireMaximumConnections"></a>

```typescript
public metricOpenwireMaximumConnections(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricOpenwireMaximumConnections.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricProducerCount` <a name="metricProducerCount" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricProducerCount"></a>

```typescript
public metricProducerCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricProducerCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricQueueSize` <a name="metricQueueSize" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricQueueSize"></a>

```typescript
public metricQueueSize(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricQueueSize.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricReceiveCount` <a name="metricReceiveCount" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricReceiveCount"></a>

```typescript
public metricReceiveCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricReceiveCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricStompMaximumConnections` <a name="metricStompMaximumConnections" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricStompMaximumConnections"></a>

```typescript
public metricStompMaximumConnections(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricStompMaximumConnections.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricStorePercentUsage` <a name="metricStorePercentUsage" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricStorePercentUsage"></a>

```typescript
public metricStorePercentUsage(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricStorePercentUsage.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricTempPercentUsage` <a name="metricTempPercentUsage" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricTempPercentUsage"></a>

```typescript
public metricTempPercentUsage(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricTempPercentUsage.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricTotalConsumerCount` <a name="metricTotalConsumerCount" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricTotalConsumerCount"></a>

```typescript
public metricTotalConsumerCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricTotalConsumerCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricTotalDequeueCount` <a name="metricTotalDequeueCount" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricTotalDequeueCount"></a>

```typescript
public metricTotalDequeueCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricTotalDequeueCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricTotalEnqueueCount` <a name="metricTotalEnqueueCount" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricTotalEnqueueCount"></a>

```typescript
public metricTotalEnqueueCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricTotalEnqueueCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricTotalMessageCount` <a name="metricTotalMessageCount" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricTotalMessageCount"></a>

```typescript
public metricTotalMessageCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricTotalMessageCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricTotalProducerCount` <a name="metricTotalProducerCount" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricTotalProducerCount"></a>

```typescript
public metricTotalProducerCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricTotalProducerCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricVolumeReadOps` <a name="metricVolumeReadOps" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricVolumeReadOps"></a>

```typescript
public metricVolumeReadOps(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricVolumeReadOps.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricVolumeWriteOps` <a name="metricVolumeWriteOps" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricVolumeWriteOps"></a>

```typescript
public metricVolumeWriteOps(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricVolumeWriteOps.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricWsMaximumConnections` <a name="metricWsMaximumConnections" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricWsMaximumConnections"></a>

```typescript
public metricWsMaximumConnections(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.metricWsMaximumConnections.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.isConstruct"></a>

```typescript
import { ActiveMqBrokerDeploymentBase } from '@cdklabs/cdk-amazonmq'

ActiveMqBrokerDeploymentBase.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.isOwnedResource"></a>

```typescript
import { ActiveMqBrokerDeploymentBase } from '@cdklabs/cdk-amazonmq'

ActiveMqBrokerDeploymentBase.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.isResource"></a>

```typescript
import { ActiveMqBrokerDeploymentBase } from '@cdklabs/cdk-amazonmq'

ActiveMqBrokerDeploymentBase.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.property.connections">connections</a></code> | <code>aws-cdk-lib.aws_ec2.Connections</code> | Manages connections for the cluster. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `connections`<sup>Optional</sup> <a name="connections" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* aws-cdk-lib.aws_ec2.Connections

Manages connections for the cluster.

---


### ActiveMqBrokerInstance <a name="ActiveMqBrokerInstance" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance"></a>

- *Implements:* <a href="#@cdklabs/cdk-amazonmq.IActiveMqBroker">IActiveMqBroker</a>

A representation of a single-instance broker comprised of one broker in one Availability Zone.

see: https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/single-broker-deployment.html

#### Initializers <a name="Initializers" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.Initializer"></a>

```typescript
import { ActiveMqBrokerInstance } from '@cdklabs/cdk-amazonmq'

new ActiveMqBrokerInstance(scope: Construct, id: string, props: ActiveMqBrokerInstanceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.Initializer.parameter.props">props</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstanceProps">ActiveMqBrokerInstanceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.Initializer.parameter.props"></a>

- *Type:* <a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstanceProps">ActiveMqBrokerInstanceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metric">metric</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricAmqpMaximumConnections">metricAmqpMaximumConnections</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricBurstBalance">metricBurstBalance</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricConsumerCount">metricConsumerCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricCpuCreditBalance">metricCpuCreditBalance</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricCpuUtilization">metricCpuUtilization</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricCurrentConnectionsCount">metricCurrentConnectionsCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricDequeueCount">metricDequeueCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricDispatchCount">metricDispatchCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricEnqueueCount">metricEnqueueCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricEnqueueTime">metricEnqueueTime</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricEstablishedConnectionsCount">metricEstablishedConnectionsCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricExpiredCount">metricExpiredCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricHeapUsage">metricHeapUsage</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricInactiveDurableTopicSubscribersCount">metricInactiveDurableTopicSubscribersCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricInFlightCount">metricInFlightCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricJobSchedulerStorePercentUsage">metricJobSchedulerStorePercentUsage</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricJournalFilesForFastRecovery">metricJournalFilesForFastRecovery</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricJournalFilesForFullRecovery">metricJournalFilesForFullRecovery</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricMemoryUsage">metricMemoryUsage</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricMqttMaximumConnections">metricMqttMaximumConnections</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricNetworkConnectorConnectionCount">metricNetworkConnectorConnectionCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricNetworkIn">metricNetworkIn</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricNetworkOut">metricNetworkOut</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricOpenTransactionCount">metricOpenTransactionCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricOpenwireMaximumConnections">metricOpenwireMaximumConnections</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricProducerCount">metricProducerCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricQueueSize">metricQueueSize</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricReceiveCount">metricReceiveCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricStompMaximumConnections">metricStompMaximumConnections</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricStorePercentUsage">metricStorePercentUsage</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricTempPercentUsage">metricTempPercentUsage</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricTotalConsumerCount">metricTotalConsumerCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricTotalDequeueCount">metricTotalDequeueCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricTotalEnqueueCount">metricTotalEnqueueCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricTotalMessageCount">metricTotalMessageCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricTotalProducerCount">metricTotalProducerCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricVolumeReadOps">metricVolumeReadOps</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricVolumeWriteOps">metricVolumeWriteOps</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricWsMaximumConnections">metricWsMaximumConnections</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `metric` <a name="metric" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metric"></a>

```typescript
public metric(metricName: string, options?: MetricOptions): Metric
```

###### `metricName`<sup>Required</sup> <a name="metricName" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metric.parameter.metricName"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metric.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAmqpMaximumConnections` <a name="metricAmqpMaximumConnections" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricAmqpMaximumConnections"></a>

```typescript
public metricAmqpMaximumConnections(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricAmqpMaximumConnections.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricBurstBalance` <a name="metricBurstBalance" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricBurstBalance"></a>

```typescript
public metricBurstBalance(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricBurstBalance.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricConsumerCount` <a name="metricConsumerCount" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricConsumerCount"></a>

```typescript
public metricConsumerCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricConsumerCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricCpuCreditBalance` <a name="metricCpuCreditBalance" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricCpuCreditBalance"></a>

```typescript
public metricCpuCreditBalance(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricCpuCreditBalance.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricCpuUtilization` <a name="metricCpuUtilization" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricCpuUtilization"></a>

```typescript
public metricCpuUtilization(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricCpuUtilization.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricCurrentConnectionsCount` <a name="metricCurrentConnectionsCount" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricCurrentConnectionsCount"></a>

```typescript
public metricCurrentConnectionsCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricCurrentConnectionsCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricDequeueCount` <a name="metricDequeueCount" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricDequeueCount"></a>

```typescript
public metricDequeueCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricDequeueCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricDispatchCount` <a name="metricDispatchCount" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricDispatchCount"></a>

```typescript
public metricDispatchCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricDispatchCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricEnqueueCount` <a name="metricEnqueueCount" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricEnqueueCount"></a>

```typescript
public metricEnqueueCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricEnqueueCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricEnqueueTime` <a name="metricEnqueueTime" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricEnqueueTime"></a>

```typescript
public metricEnqueueTime(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricEnqueueTime.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricEstablishedConnectionsCount` <a name="metricEstablishedConnectionsCount" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricEstablishedConnectionsCount"></a>

```typescript
public metricEstablishedConnectionsCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricEstablishedConnectionsCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricExpiredCount` <a name="metricExpiredCount" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricExpiredCount"></a>

```typescript
public metricExpiredCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricExpiredCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricHeapUsage` <a name="metricHeapUsage" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricHeapUsage"></a>

```typescript
public metricHeapUsage(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricHeapUsage.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricInactiveDurableTopicSubscribersCount` <a name="metricInactiveDurableTopicSubscribersCount" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricInactiveDurableTopicSubscribersCount"></a>

```typescript
public metricInactiveDurableTopicSubscribersCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricInactiveDurableTopicSubscribersCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricInFlightCount` <a name="metricInFlightCount" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricInFlightCount"></a>

```typescript
public metricInFlightCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricInFlightCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricJobSchedulerStorePercentUsage` <a name="metricJobSchedulerStorePercentUsage" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricJobSchedulerStorePercentUsage"></a>

```typescript
public metricJobSchedulerStorePercentUsage(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricJobSchedulerStorePercentUsage.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricJournalFilesForFastRecovery` <a name="metricJournalFilesForFastRecovery" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricJournalFilesForFastRecovery"></a>

```typescript
public metricJournalFilesForFastRecovery(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricJournalFilesForFastRecovery.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricJournalFilesForFullRecovery` <a name="metricJournalFilesForFullRecovery" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricJournalFilesForFullRecovery"></a>

```typescript
public metricJournalFilesForFullRecovery(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricJournalFilesForFullRecovery.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricMemoryUsage` <a name="metricMemoryUsage" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricMemoryUsage"></a>

```typescript
public metricMemoryUsage(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricMemoryUsage.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricMqttMaximumConnections` <a name="metricMqttMaximumConnections" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricMqttMaximumConnections"></a>

```typescript
public metricMqttMaximumConnections(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricMqttMaximumConnections.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricNetworkConnectorConnectionCount` <a name="metricNetworkConnectorConnectionCount" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricNetworkConnectorConnectionCount"></a>

```typescript
public metricNetworkConnectorConnectionCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricNetworkConnectorConnectionCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricNetworkIn` <a name="metricNetworkIn" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricNetworkIn"></a>

```typescript
public metricNetworkIn(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricNetworkIn.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricNetworkOut` <a name="metricNetworkOut" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricNetworkOut"></a>

```typescript
public metricNetworkOut(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricNetworkOut.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricOpenTransactionCount` <a name="metricOpenTransactionCount" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricOpenTransactionCount"></a>

```typescript
public metricOpenTransactionCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricOpenTransactionCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricOpenwireMaximumConnections` <a name="metricOpenwireMaximumConnections" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricOpenwireMaximumConnections"></a>

```typescript
public metricOpenwireMaximumConnections(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricOpenwireMaximumConnections.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricProducerCount` <a name="metricProducerCount" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricProducerCount"></a>

```typescript
public metricProducerCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricProducerCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricQueueSize` <a name="metricQueueSize" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricQueueSize"></a>

```typescript
public metricQueueSize(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricQueueSize.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricReceiveCount` <a name="metricReceiveCount" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricReceiveCount"></a>

```typescript
public metricReceiveCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricReceiveCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricStompMaximumConnections` <a name="metricStompMaximumConnections" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricStompMaximumConnections"></a>

```typescript
public metricStompMaximumConnections(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricStompMaximumConnections.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricStorePercentUsage` <a name="metricStorePercentUsage" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricStorePercentUsage"></a>

```typescript
public metricStorePercentUsage(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricStorePercentUsage.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricTempPercentUsage` <a name="metricTempPercentUsage" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricTempPercentUsage"></a>

```typescript
public metricTempPercentUsage(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricTempPercentUsage.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricTotalConsumerCount` <a name="metricTotalConsumerCount" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricTotalConsumerCount"></a>

```typescript
public metricTotalConsumerCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricTotalConsumerCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricTotalDequeueCount` <a name="metricTotalDequeueCount" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricTotalDequeueCount"></a>

```typescript
public metricTotalDequeueCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricTotalDequeueCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricTotalEnqueueCount` <a name="metricTotalEnqueueCount" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricTotalEnqueueCount"></a>

```typescript
public metricTotalEnqueueCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricTotalEnqueueCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricTotalMessageCount` <a name="metricTotalMessageCount" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricTotalMessageCount"></a>

```typescript
public metricTotalMessageCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricTotalMessageCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricTotalProducerCount` <a name="metricTotalProducerCount" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricTotalProducerCount"></a>

```typescript
public metricTotalProducerCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricTotalProducerCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricVolumeReadOps` <a name="metricVolumeReadOps" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricVolumeReadOps"></a>

```typescript
public metricVolumeReadOps(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricVolumeReadOps.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricVolumeWriteOps` <a name="metricVolumeWriteOps" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricVolumeWriteOps"></a>

```typescript
public metricVolumeWriteOps(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricVolumeWriteOps.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricWsMaximumConnections` <a name="metricWsMaximumConnections" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricWsMaximumConnections"></a>

```typescript
public metricWsMaximumConnections(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.metricWsMaximumConnections.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.isConstruct"></a>

```typescript
import { ActiveMqBrokerInstance } from '@cdklabs/cdk-amazonmq'

ActiveMqBrokerInstance.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.isOwnedResource"></a>

```typescript
import { ActiveMqBrokerInstance } from '@cdklabs/cdk-amazonmq'

ActiveMqBrokerInstance.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.isResource"></a>

```typescript
import { ActiveMqBrokerInstance } from '@cdklabs/cdk-amazonmq'

ActiveMqBrokerInstance.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.property.connections">connections</a></code> | <code>aws-cdk-lib.aws_ec2.Connections</code> | Manages connections for the cluster. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.property.configuration">configuration</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerConfiguration">IActiveMqBrokerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.property.endpoints">endpoints</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerEndpoints">ActiveMqBrokerEndpoints</a></code> | Gets the available endpoints of the Amazon MQ for ActiveMQ broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.property.ipAddress">ipAddress</a></code> | <code>string</code> | Gets the IP address of the ENI of the Amazon MQ for ActiveMQ broker. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `connections`<sup>Optional</sup> <a name="connections" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* aws-cdk-lib.aws_ec2.Connections

Manages connections for the cluster.

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.property.configuration"></a>

```typescript
public readonly configuration: IActiveMqBrokerConfiguration;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerConfiguration">IActiveMqBrokerConfiguration</a>

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.property.endpoints"></a>

```typescript
public readonly endpoints: ActiveMqBrokerEndpoints;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerEndpoints">ActiveMqBrokerEndpoints</a>

Gets the available endpoints of the Amazon MQ for ActiveMQ broker.

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

Gets the IP address of the ENI of the Amazon MQ for ActiveMQ broker.

---


### ActiveMqBrokerRedundantPair <a name="ActiveMqBrokerRedundantPair" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair"></a>

A representation of an active/standby broker that is comprised of two brokers in two different Availability Zones.

see: https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/active-standby-broker-deployment.html

#### Initializers <a name="Initializers" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.Initializer"></a>

```typescript
import { ActiveMqBrokerRedundantPair } from '@cdklabs/cdk-amazonmq'

new ActiveMqBrokerRedundantPair(scope: Construct, id: string, props: ActiveMqBrokerRedundantPairProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.Initializer.parameter.props">props</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPairProps">ActiveMqBrokerRedundantPairProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.Initializer.parameter.props"></a>

- *Type:* <a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPairProps">ActiveMqBrokerRedundantPairProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metric">metric</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricAmqpMaximumConnections">metricAmqpMaximumConnections</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricBurstBalance">metricBurstBalance</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricConsumerCount">metricConsumerCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricCpuCreditBalance">metricCpuCreditBalance</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricCpuUtilization">metricCpuUtilization</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricCurrentConnectionsCount">metricCurrentConnectionsCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricDequeueCount">metricDequeueCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricDispatchCount">metricDispatchCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricEnqueueCount">metricEnqueueCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricEnqueueTime">metricEnqueueTime</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricEstablishedConnectionsCount">metricEstablishedConnectionsCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricExpiredCount">metricExpiredCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricHeapUsage">metricHeapUsage</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricInactiveDurableTopicSubscribersCount">metricInactiveDurableTopicSubscribersCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricInFlightCount">metricInFlightCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricJobSchedulerStorePercentUsage">metricJobSchedulerStorePercentUsage</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricJournalFilesForFastRecovery">metricJournalFilesForFastRecovery</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricJournalFilesForFullRecovery">metricJournalFilesForFullRecovery</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricMemoryUsage">metricMemoryUsage</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricMqttMaximumConnections">metricMqttMaximumConnections</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricNetworkConnectorConnectionCount">metricNetworkConnectorConnectionCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricNetworkIn">metricNetworkIn</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricNetworkOut">metricNetworkOut</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricOpenTransactionCount">metricOpenTransactionCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricOpenwireMaximumConnections">metricOpenwireMaximumConnections</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricProducerCount">metricProducerCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricQueueSize">metricQueueSize</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricReceiveCount">metricReceiveCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricStompMaximumConnections">metricStompMaximumConnections</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricStorePercentUsage">metricStorePercentUsage</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricTempPercentUsage">metricTempPercentUsage</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricTotalConsumerCount">metricTotalConsumerCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricTotalDequeueCount">metricTotalDequeueCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricTotalEnqueueCount">metricTotalEnqueueCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricTotalMessageCount">metricTotalMessageCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricTotalProducerCount">metricTotalProducerCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricVolumeReadOps">metricVolumeReadOps</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricVolumeWriteOps">metricVolumeWriteOps</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricWsMaximumConnections">metricWsMaximumConnections</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `metric` <a name="metric" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metric"></a>

```typescript
public metric(metricName: string, options?: MetricOptions): Metric
```

###### `metricName`<sup>Required</sup> <a name="metricName" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metric.parameter.metricName"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metric.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAmqpMaximumConnections` <a name="metricAmqpMaximumConnections" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricAmqpMaximumConnections"></a>

```typescript
public metricAmqpMaximumConnections(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricAmqpMaximumConnections.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricBurstBalance` <a name="metricBurstBalance" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricBurstBalance"></a>

```typescript
public metricBurstBalance(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricBurstBalance.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricConsumerCount` <a name="metricConsumerCount" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricConsumerCount"></a>

```typescript
public metricConsumerCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricConsumerCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricCpuCreditBalance` <a name="metricCpuCreditBalance" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricCpuCreditBalance"></a>

```typescript
public metricCpuCreditBalance(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricCpuCreditBalance.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricCpuUtilization` <a name="metricCpuUtilization" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricCpuUtilization"></a>

```typescript
public metricCpuUtilization(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricCpuUtilization.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricCurrentConnectionsCount` <a name="metricCurrentConnectionsCount" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricCurrentConnectionsCount"></a>

```typescript
public metricCurrentConnectionsCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricCurrentConnectionsCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricDequeueCount` <a name="metricDequeueCount" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricDequeueCount"></a>

```typescript
public metricDequeueCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricDequeueCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricDispatchCount` <a name="metricDispatchCount" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricDispatchCount"></a>

```typescript
public metricDispatchCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricDispatchCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricEnqueueCount` <a name="metricEnqueueCount" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricEnqueueCount"></a>

```typescript
public metricEnqueueCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricEnqueueCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricEnqueueTime` <a name="metricEnqueueTime" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricEnqueueTime"></a>

```typescript
public metricEnqueueTime(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricEnqueueTime.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricEstablishedConnectionsCount` <a name="metricEstablishedConnectionsCount" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricEstablishedConnectionsCount"></a>

```typescript
public metricEstablishedConnectionsCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricEstablishedConnectionsCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricExpiredCount` <a name="metricExpiredCount" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricExpiredCount"></a>

```typescript
public metricExpiredCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricExpiredCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricHeapUsage` <a name="metricHeapUsage" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricHeapUsage"></a>

```typescript
public metricHeapUsage(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricHeapUsage.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricInactiveDurableTopicSubscribersCount` <a name="metricInactiveDurableTopicSubscribersCount" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricInactiveDurableTopicSubscribersCount"></a>

```typescript
public metricInactiveDurableTopicSubscribersCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricInactiveDurableTopicSubscribersCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricInFlightCount` <a name="metricInFlightCount" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricInFlightCount"></a>

```typescript
public metricInFlightCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricInFlightCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricJobSchedulerStorePercentUsage` <a name="metricJobSchedulerStorePercentUsage" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricJobSchedulerStorePercentUsage"></a>

```typescript
public metricJobSchedulerStorePercentUsage(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricJobSchedulerStorePercentUsage.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricJournalFilesForFastRecovery` <a name="metricJournalFilesForFastRecovery" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricJournalFilesForFastRecovery"></a>

```typescript
public metricJournalFilesForFastRecovery(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricJournalFilesForFastRecovery.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricJournalFilesForFullRecovery` <a name="metricJournalFilesForFullRecovery" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricJournalFilesForFullRecovery"></a>

```typescript
public metricJournalFilesForFullRecovery(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricJournalFilesForFullRecovery.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricMemoryUsage` <a name="metricMemoryUsage" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricMemoryUsage"></a>

```typescript
public metricMemoryUsage(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricMemoryUsage.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricMqttMaximumConnections` <a name="metricMqttMaximumConnections" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricMqttMaximumConnections"></a>

```typescript
public metricMqttMaximumConnections(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricMqttMaximumConnections.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricNetworkConnectorConnectionCount` <a name="metricNetworkConnectorConnectionCount" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricNetworkConnectorConnectionCount"></a>

```typescript
public metricNetworkConnectorConnectionCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricNetworkConnectorConnectionCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricNetworkIn` <a name="metricNetworkIn" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricNetworkIn"></a>

```typescript
public metricNetworkIn(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricNetworkIn.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricNetworkOut` <a name="metricNetworkOut" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricNetworkOut"></a>

```typescript
public metricNetworkOut(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricNetworkOut.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricOpenTransactionCount` <a name="metricOpenTransactionCount" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricOpenTransactionCount"></a>

```typescript
public metricOpenTransactionCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricOpenTransactionCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricOpenwireMaximumConnections` <a name="metricOpenwireMaximumConnections" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricOpenwireMaximumConnections"></a>

```typescript
public metricOpenwireMaximumConnections(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricOpenwireMaximumConnections.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricProducerCount` <a name="metricProducerCount" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricProducerCount"></a>

```typescript
public metricProducerCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricProducerCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricQueueSize` <a name="metricQueueSize" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricQueueSize"></a>

```typescript
public metricQueueSize(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricQueueSize.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricReceiveCount` <a name="metricReceiveCount" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricReceiveCount"></a>

```typescript
public metricReceiveCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricReceiveCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricStompMaximumConnections` <a name="metricStompMaximumConnections" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricStompMaximumConnections"></a>

```typescript
public metricStompMaximumConnections(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricStompMaximumConnections.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricStorePercentUsage` <a name="metricStorePercentUsage" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricStorePercentUsage"></a>

```typescript
public metricStorePercentUsage(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricStorePercentUsage.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricTempPercentUsage` <a name="metricTempPercentUsage" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricTempPercentUsage"></a>

```typescript
public metricTempPercentUsage(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricTempPercentUsage.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricTotalConsumerCount` <a name="metricTotalConsumerCount" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricTotalConsumerCount"></a>

```typescript
public metricTotalConsumerCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricTotalConsumerCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricTotalDequeueCount` <a name="metricTotalDequeueCount" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricTotalDequeueCount"></a>

```typescript
public metricTotalDequeueCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricTotalDequeueCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricTotalEnqueueCount` <a name="metricTotalEnqueueCount" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricTotalEnqueueCount"></a>

```typescript
public metricTotalEnqueueCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricTotalEnqueueCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricTotalMessageCount` <a name="metricTotalMessageCount" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricTotalMessageCount"></a>

```typescript
public metricTotalMessageCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricTotalMessageCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricTotalProducerCount` <a name="metricTotalProducerCount" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricTotalProducerCount"></a>

```typescript
public metricTotalProducerCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricTotalProducerCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricVolumeReadOps` <a name="metricVolumeReadOps" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricVolumeReadOps"></a>

```typescript
public metricVolumeReadOps(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricVolumeReadOps.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricVolumeWriteOps` <a name="metricVolumeWriteOps" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricVolumeWriteOps"></a>

```typescript
public metricVolumeWriteOps(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricVolumeWriteOps.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricWsMaximumConnections` <a name="metricWsMaximumConnections" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricWsMaximumConnections"></a>

```typescript
public metricWsMaximumConnections(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.metricWsMaximumConnections.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.isConstruct"></a>

```typescript
import { ActiveMqBrokerRedundantPair } from '@cdklabs/cdk-amazonmq'

ActiveMqBrokerRedundantPair.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.isOwnedResource"></a>

```typescript
import { ActiveMqBrokerRedundantPair } from '@cdklabs/cdk-amazonmq'

ActiveMqBrokerRedundantPair.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.isResource"></a>

```typescript
import { ActiveMqBrokerRedundantPair } from '@cdklabs/cdk-amazonmq'

ActiveMqBrokerRedundantPair.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.property.connections">connections</a></code> | <code>aws-cdk-lib.aws_ec2.Connections</code> | Manages connections for the cluster. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.property.first">first</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBroker">IActiveMqBroker</a></code> | The first broker of the redundant pair for the deployment. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.property.second">second</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBroker">IActiveMqBroker</a></code> | The second broker of the redundant pair for the deployment. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `connections`<sup>Optional</sup> <a name="connections" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* aws-cdk-lib.aws_ec2.Connections

Manages connections for the cluster.

---

##### `first`<sup>Required</sup> <a name="first" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.property.first"></a>

```typescript
public readonly first: IActiveMqBroker;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.IActiveMqBroker">IActiveMqBroker</a>

The first broker of the redundant pair for the deployment.

---

##### `second`<sup>Required</sup> <a name="second" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair.property.second"></a>

```typescript
public readonly second: IActiveMqBroker;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.IActiveMqBroker">IActiveMqBroker</a>

The second broker of the redundant pair for the deployment.

---


### BrokerConfiguration <a name="BrokerConfiguration" id="@cdklabs/cdk-amazonmq.BrokerConfiguration"></a>

- *Implements:* <a href="#@cdklabs/cdk-amazonmq.IBrokerConfiguration">IBrokerConfiguration</a>

#### Initializers <a name="Initializers" id="@cdklabs/cdk-amazonmq.BrokerConfiguration.Initializer"></a>

```typescript
import { BrokerConfiguration } from '@cdklabs/cdk-amazonmq'

new BrokerConfiguration(scope: Construct, id: string, props: ConfigurationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerConfiguration.Initializer.parameter.props">props</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.ConfigurationProps">ConfigurationProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/cdk-amazonmq.BrokerConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-amazonmq.BrokerConfiguration.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cdklabs/cdk-amazonmq.BrokerConfiguration.Initializer.parameter.props"></a>

- *Type:* <a href="#@cdklabs/cdk-amazonmq.ConfigurationProps">ConfigurationProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerConfiguration.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="@cdklabs/cdk-amazonmq.BrokerConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@cdklabs/cdk-amazonmq.BrokerConfiguration.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@cdklabs/cdk-amazonmq.BrokerConfiguration.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerConfiguration.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerConfiguration.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdklabs/cdk-amazonmq.BrokerConfiguration.isConstruct"></a>

```typescript
import { BrokerConfiguration } from '@cdklabs/cdk-amazonmq'

BrokerConfiguration.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/cdk-amazonmq.BrokerConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@cdklabs/cdk-amazonmq.BrokerConfiguration.isOwnedResource"></a>

```typescript
import { BrokerConfiguration } from '@cdklabs/cdk-amazonmq'

BrokerConfiguration.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@cdklabs/cdk-amazonmq.BrokerConfiguration.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@cdklabs/cdk-amazonmq.BrokerConfiguration.isResource"></a>

```typescript
import { BrokerConfiguration } from '@cdklabs/cdk-amazonmq'

BrokerConfiguration.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@cdklabs/cdk-amazonmq.BrokerConfiguration.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerConfiguration.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerConfiguration.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerConfiguration.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerConfiguration.property.revision">revision</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/cdk-amazonmq.BrokerConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@cdklabs/cdk-amazonmq.BrokerConfiguration.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@cdklabs/cdk-amazonmq.BrokerConfiguration.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdklabs/cdk-amazonmq.BrokerConfiguration.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-amazonmq.BrokerConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdklabs/cdk-amazonmq.BrokerConfiguration.property.revision"></a>

```typescript
public readonly revision: number;
```

- *Type:* number

---


### BrokerDeploymentBase <a name="BrokerDeploymentBase" id="@cdklabs/cdk-amazonmq.BrokerDeploymentBase"></a>

- *Implements:* <a href="#@cdklabs/cdk-amazonmq.IBrokerDeployment">IBrokerDeployment</a>

#### Initializers <a name="Initializers" id="@cdklabs/cdk-amazonmq.BrokerDeploymentBase.Initializer"></a>

```typescript
import { BrokerDeploymentBase } from '@cdklabs/cdk-amazonmq'

new BrokerDeploymentBase(scope: Construct, id: string, props: BrokerDeploymentBaseProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentBase.Initializer.parameter.props">props</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentBaseProps">BrokerDeploymentBaseProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/cdk-amazonmq.BrokerDeploymentBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-amazonmq.BrokerDeploymentBase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cdklabs/cdk-amazonmq.BrokerDeploymentBase.Initializer.parameter.props"></a>

- *Type:* <a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentBaseProps">BrokerDeploymentBaseProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentBase.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentBase.metric">metric</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdklabs/cdk-amazonmq.BrokerDeploymentBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@cdklabs/cdk-amazonmq.BrokerDeploymentBase.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@cdklabs/cdk-amazonmq.BrokerDeploymentBase.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `metric` <a name="metric" id="@cdklabs/cdk-amazonmq.BrokerDeploymentBase.metric"></a>

```typescript
public metric(metricName: string, options?: MetricOptions): Metric
```

###### `metricName`<sup>Required</sup> <a name="metricName" id="@cdklabs/cdk-amazonmq.BrokerDeploymentBase.metric.parameter.metricName"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="@cdklabs/cdk-amazonmq.BrokerDeploymentBase.metric.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentBase.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentBase.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdklabs/cdk-amazonmq.BrokerDeploymentBase.isConstruct"></a>

```typescript
import { BrokerDeploymentBase } from '@cdklabs/cdk-amazonmq'

BrokerDeploymentBase.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/cdk-amazonmq.BrokerDeploymentBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@cdklabs/cdk-amazonmq.BrokerDeploymentBase.isOwnedResource"></a>

```typescript
import { BrokerDeploymentBase } from '@cdklabs/cdk-amazonmq'

BrokerDeploymentBase.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@cdklabs/cdk-amazonmq.BrokerDeploymentBase.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@cdklabs/cdk-amazonmq.BrokerDeploymentBase.isResource"></a>

```typescript
import { BrokerDeploymentBase } from '@cdklabs/cdk-amazonmq'

BrokerDeploymentBase.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@cdklabs/cdk-amazonmq.BrokerDeploymentBase.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentBase.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentBase.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentBase.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentBase.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentBase.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentBase.property.connections">connections</a></code> | <code>aws-cdk-lib.aws_ec2.Connections</code> | Manages connections for the cluster. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/cdk-amazonmq.BrokerDeploymentBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@cdklabs/cdk-amazonmq.BrokerDeploymentBase.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@cdklabs/cdk-amazonmq.BrokerDeploymentBase.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdklabs/cdk-amazonmq.BrokerDeploymentBase.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-amazonmq.BrokerDeploymentBase.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdklabs/cdk-amazonmq.BrokerDeploymentBase.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `connections`<sup>Optional</sup> <a name="connections" id="@cdklabs/cdk-amazonmq.BrokerDeploymentBase.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* aws-cdk-lib.aws_ec2.Connections

Manages connections for the cluster.

---


### ConfigurationAssociation <a name="ConfigurationAssociation" id="@cdklabs/cdk-amazonmq.ConfigurationAssociation"></a>

#### Initializers <a name="Initializers" id="@cdklabs/cdk-amazonmq.ConfigurationAssociation.Initializer"></a>

```typescript
import { ConfigurationAssociation } from '@cdklabs/cdk-amazonmq'

new ConfigurationAssociation(scope: Construct, id: string, props: ConfigurationAssociationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.ConfigurationAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ConfigurationAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ConfigurationAssociation.Initializer.parameter.props">props</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.ConfigurationAssociationProps">ConfigurationAssociationProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/cdk-amazonmq.ConfigurationAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-amazonmq.ConfigurationAssociation.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ConfigurationAssociation.Initializer.parameter.props"></a>

- *Type:* <a href="#@cdklabs/cdk-amazonmq.ConfigurationAssociationProps">ConfigurationAssociationProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.ConfigurationAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdklabs/cdk-amazonmq.ConfigurationAssociation.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="@cdklabs/cdk-amazonmq.ConfigurationAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@cdklabs/cdk-amazonmq.ConfigurationAssociation.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@cdklabs/cdk-amazonmq.ConfigurationAssociation.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.ConfigurationAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdklabs/cdk-amazonmq.ConfigurationAssociation.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@cdklabs/cdk-amazonmq.ConfigurationAssociation.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdklabs/cdk-amazonmq.ConfigurationAssociation.isConstruct"></a>

```typescript
import { ConfigurationAssociation } from '@cdklabs/cdk-amazonmq'

ConfigurationAssociation.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/cdk-amazonmq.ConfigurationAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@cdklabs/cdk-amazonmq.ConfigurationAssociation.isOwnedResource"></a>

```typescript
import { ConfigurationAssociation } from '@cdklabs/cdk-amazonmq'

ConfigurationAssociation.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@cdklabs/cdk-amazonmq.ConfigurationAssociation.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@cdklabs/cdk-amazonmq.ConfigurationAssociation.isResource"></a>

```typescript
import { ConfigurationAssociation } from '@cdklabs/cdk-amazonmq'

ConfigurationAssociation.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@cdklabs/cdk-amazonmq.ConfigurationAssociation.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.ConfigurationAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/cdk-amazonmq.ConfigurationAssociation.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@cdklabs/cdk-amazonmq.ConfigurationAssociation.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/cdk-amazonmq.ConfigurationAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@cdklabs/cdk-amazonmq.ConfigurationAssociation.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@cdklabs/cdk-amazonmq.ConfigurationAssociation.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---


### RabbitMqBrokerCluster <a name="RabbitMqBrokerCluster" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster"></a>

- *Implements:* <a href="#@cdklabs/cdk-amazonmq.IRabbitMqBroker">IRabbitMqBroker</a>

A representation of a RabbitMQ cluster deployment is a logical grouping of three RabbitMQ broker nodes behind a Network Load Balancer, each sharing users, queues, and a distributed state across multiple Availability Zones (AZ).

#### Initializers <a name="Initializers" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.Initializer"></a>

```typescript
import { RabbitMqBrokerCluster } from '@cdklabs/cdk-amazonmq'

new RabbitMqBrokerCluster(scope: Construct, id: string, props: RabbitMqBrokerClusterProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.Initializer.parameter.props">props</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerClusterProps">RabbitMqBrokerClusterProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.Initializer.parameter.props"></a>

- *Type:* <a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerClusterProps">RabbitMqBrokerClusterProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metric">metric</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricAckRate">metricAckRate</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricChannelCount">metricChannelCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricConfirmRate">metricConfirmRate</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricConnectionCount">metricConnectionCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricConsumerCount">metricConsumerCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricExchangeCount">metricExchangeCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricMessageCount">metricMessageCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricMessageReadyCount">metricMessageReadyCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricMessageUnacknowledgedCount">metricMessageUnacknowledgedCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricPublishRate">metricPublishRate</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricQueueCount">metricQueueCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricRabbitMQDiskFree">metricRabbitMQDiskFree</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricRabbitMQDiskFreeLimit">metricRabbitMQDiskFreeLimit</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricRabbitMQFdUsed">metricRabbitMQFdUsed</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricRabbitMQIOReadAverageTime">metricRabbitMQIOReadAverageTime</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricRabbitMQIOWriteAverageTime">metricRabbitMQIOWriteAverageTime</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricRabbitMQMemLimit">metricRabbitMQMemLimit</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricRabbitMQMemUsed">metricRabbitMQMemUsed</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricSystemCpuUtilization">metricSystemCpuUtilization</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `metric` <a name="metric" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metric"></a>

```typescript
public metric(metricName: string, options?: MetricOptions): Metric
```

###### `metricName`<sup>Required</sup> <a name="metricName" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metric.parameter.metricName"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metric.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAckRate` <a name="metricAckRate" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricAckRate"></a>

```typescript
public metricAckRate(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricAckRate.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricChannelCount` <a name="metricChannelCount" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricChannelCount"></a>

```typescript
public metricChannelCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricChannelCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricConfirmRate` <a name="metricConfirmRate" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricConfirmRate"></a>

```typescript
public metricConfirmRate(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricConfirmRate.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricConnectionCount` <a name="metricConnectionCount" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricConnectionCount"></a>

```typescript
public metricConnectionCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricConnectionCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricConsumerCount` <a name="metricConsumerCount" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricConsumerCount"></a>

```typescript
public metricConsumerCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricConsumerCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricExchangeCount` <a name="metricExchangeCount" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricExchangeCount"></a>

```typescript
public metricExchangeCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricExchangeCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricMessageCount` <a name="metricMessageCount" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricMessageCount"></a>

```typescript
public metricMessageCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricMessageCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricMessageReadyCount` <a name="metricMessageReadyCount" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricMessageReadyCount"></a>

```typescript
public metricMessageReadyCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricMessageReadyCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricMessageUnacknowledgedCount` <a name="metricMessageUnacknowledgedCount" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricMessageUnacknowledgedCount"></a>

```typescript
public metricMessageUnacknowledgedCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricMessageUnacknowledgedCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricPublishRate` <a name="metricPublishRate" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricPublishRate"></a>

```typescript
public metricPublishRate(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricPublishRate.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricQueueCount` <a name="metricQueueCount" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricQueueCount"></a>

```typescript
public metricQueueCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricQueueCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricRabbitMQDiskFree` <a name="metricRabbitMQDiskFree" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricRabbitMQDiskFree"></a>

```typescript
public metricRabbitMQDiskFree(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricRabbitMQDiskFree.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricRabbitMQDiskFreeLimit` <a name="metricRabbitMQDiskFreeLimit" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricRabbitMQDiskFreeLimit"></a>

```typescript
public metricRabbitMQDiskFreeLimit(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricRabbitMQDiskFreeLimit.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricRabbitMQFdUsed` <a name="metricRabbitMQFdUsed" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricRabbitMQFdUsed"></a>

```typescript
public metricRabbitMQFdUsed(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricRabbitMQFdUsed.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricRabbitMQIOReadAverageTime` <a name="metricRabbitMQIOReadAverageTime" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricRabbitMQIOReadAverageTime"></a>

```typescript
public metricRabbitMQIOReadAverageTime(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricRabbitMQIOReadAverageTime.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricRabbitMQIOWriteAverageTime` <a name="metricRabbitMQIOWriteAverageTime" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricRabbitMQIOWriteAverageTime"></a>

```typescript
public metricRabbitMQIOWriteAverageTime(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricRabbitMQIOWriteAverageTime.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricRabbitMQMemLimit` <a name="metricRabbitMQMemLimit" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricRabbitMQMemLimit"></a>

```typescript
public metricRabbitMQMemLimit(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricRabbitMQMemLimit.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricRabbitMQMemUsed` <a name="metricRabbitMQMemUsed" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricRabbitMQMemUsed"></a>

```typescript
public metricRabbitMQMemUsed(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricRabbitMQMemUsed.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricSystemCpuUtilization` <a name="metricSystemCpuUtilization" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricSystemCpuUtilization"></a>

```typescript
public metricSystemCpuUtilization(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.metricSystemCpuUtilization.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.isConstruct"></a>

```typescript
import { RabbitMqBrokerCluster } from '@cdklabs/cdk-amazonmq'

RabbitMqBrokerCluster.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.isOwnedResource"></a>

```typescript
import { RabbitMqBrokerCluster } from '@cdklabs/cdk-amazonmq'

RabbitMqBrokerCluster.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.isResource"></a>

```typescript
import { RabbitMqBrokerCluster } from '@cdklabs/cdk-amazonmq'

RabbitMqBrokerCluster.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.property.connections">connections</a></code> | <code>aws-cdk-lib.aws_ec2.Connections</code> | Manages connections for the cluster. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.property.configuration">configuration</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerConfiguration">IRabbitMqBrokerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.property.endpoints">endpoints</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerEndpoints">RabbitMqBrokerEndpoints</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `connections`<sup>Optional</sup> <a name="connections" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* aws-cdk-lib.aws_ec2.Connections

Manages connections for the cluster.

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.property.configuration"></a>

```typescript
public readonly configuration: IRabbitMqBrokerConfiguration;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerConfiguration">IRabbitMqBrokerConfiguration</a>

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster.property.endpoints"></a>

```typescript
public readonly endpoints: RabbitMqBrokerEndpoints;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerEndpoints">RabbitMqBrokerEndpoints</a>

---


### RabbitMqBrokerConfiguration <a name="RabbitMqBrokerConfiguration" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerConfiguration"></a>

#### Initializers <a name="Initializers" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerConfiguration.Initializer"></a>

```typescript
import { RabbitMqBrokerConfiguration } from '@cdklabs/cdk-amazonmq'

new RabbitMqBrokerConfiguration(scope: Construct, id: string, props: RabbitMqBrokerConfigurationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerConfiguration.Initializer.parameter.props">props</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerConfigurationProps">RabbitMqBrokerConfigurationProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerConfiguration.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerConfiguration.Initializer.parameter.props"></a>

- *Type:* <a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerConfigurationProps">RabbitMqBrokerConfigurationProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerConfiguration.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerConfiguration.associateWith">associateWith</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerConfiguration.createRevision">createRevision</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerConfiguration.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerConfiguration.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `associateWith` <a name="associateWith" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerConfiguration.associateWith"></a>

```typescript
public associateWith(broker: IRabbitMqBrokerDeployment): ConfigurationAssociation
```

###### `broker`<sup>Required</sup> <a name="broker" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerConfiguration.associateWith.parameter.broker"></a>

- *Type:* <a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment">IRabbitMqBrokerDeployment</a>

---

##### `createRevision` <a name="createRevision" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerConfiguration.createRevision"></a>

```typescript
public createRevision(options: RabbitMqBrokerConfigurationOptions): IRabbitMqBrokerConfiguration
```

###### `options`<sup>Required</sup> <a name="options" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerConfiguration.createRevision.parameter.options"></a>

- *Type:* <a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerConfigurationOptions">RabbitMqBrokerConfigurationOptions</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerConfiguration.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerConfiguration.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerConfiguration.fromAttributes">fromAttributes</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerConfiguration.isConstruct"></a>

```typescript
import { RabbitMqBrokerConfiguration } from '@cdklabs/cdk-amazonmq'

RabbitMqBrokerConfiguration.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerConfiguration.isOwnedResource"></a>

```typescript
import { RabbitMqBrokerConfiguration } from '@cdklabs/cdk-amazonmq'

RabbitMqBrokerConfiguration.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerConfiguration.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerConfiguration.isResource"></a>

```typescript
import { RabbitMqBrokerConfiguration } from '@cdklabs/cdk-amazonmq'

RabbitMqBrokerConfiguration.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerConfiguration.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromAttributes` <a name="fromAttributes" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerConfiguration.fromAttributes"></a>

```typescript
import { RabbitMqBrokerConfiguration } from '@cdklabs/cdk-amazonmq'

RabbitMqBrokerConfiguration.fromAttributes(scope: Construct, logicalId: string, attrs: BrokerConfigurationAttributes)
```

###### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerConfiguration.fromAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `logicalId`<sup>Required</sup> <a name="logicalId" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerConfiguration.fromAttributes.parameter.logicalId"></a>

- *Type:* string

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerConfiguration.fromAttributes.parameter.attrs"></a>

- *Type:* <a href="#@cdklabs/cdk-amazonmq.BrokerConfigurationAttributes">BrokerConfigurationAttributes</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerConfiguration.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerConfiguration.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerConfiguration.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerConfiguration.property.revision">revision</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerConfiguration.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerConfiguration.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerConfiguration.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerConfiguration.property.revision"></a>

```typescript
public readonly revision: number;
```

- *Type:* number

---


### RabbitMqBrokerDeploymentBase <a name="RabbitMqBrokerDeploymentBase" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase"></a>

- *Implements:* <a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment">IRabbitMqBrokerDeployment</a>, <a href="#@cdklabs/cdk-amazonmq.IRabbitMqBroker">IRabbitMqBroker</a>

#### Initializers <a name="Initializers" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.Initializer"></a>

```typescript
import { RabbitMqBrokerDeploymentBase } from '@cdklabs/cdk-amazonmq'

new RabbitMqBrokerDeploymentBase(scope: Construct, id: string, props: RabbitMqBrokerDeploymentBaseProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.Initializer.parameter.props">props</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBaseProps">RabbitMqBrokerDeploymentBaseProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.Initializer.parameter.props"></a>

- *Type:* <a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBaseProps">RabbitMqBrokerDeploymentBaseProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metric">metric</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricAckRate">metricAckRate</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricChannelCount">metricChannelCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricConfirmRate">metricConfirmRate</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricConnectionCount">metricConnectionCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricConsumerCount">metricConsumerCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricExchangeCount">metricExchangeCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricMessageCount">metricMessageCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricMessageReadyCount">metricMessageReadyCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricMessageUnacknowledgedCount">metricMessageUnacknowledgedCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricPublishRate">metricPublishRate</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricQueueCount">metricQueueCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricRabbitMQDiskFree">metricRabbitMQDiskFree</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricRabbitMQDiskFreeLimit">metricRabbitMQDiskFreeLimit</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricRabbitMQFdUsed">metricRabbitMQFdUsed</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricRabbitMQIOReadAverageTime">metricRabbitMQIOReadAverageTime</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricRabbitMQIOWriteAverageTime">metricRabbitMQIOWriteAverageTime</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricRabbitMQMemLimit">metricRabbitMQMemLimit</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricRabbitMQMemUsed">metricRabbitMQMemUsed</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricSystemCpuUtilization">metricSystemCpuUtilization</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `metric` <a name="metric" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metric"></a>

```typescript
public metric(metricName: string, options?: MetricOptions): Metric
```

###### `metricName`<sup>Required</sup> <a name="metricName" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metric.parameter.metricName"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metric.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAckRate` <a name="metricAckRate" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricAckRate"></a>

```typescript
public metricAckRate(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricAckRate.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricChannelCount` <a name="metricChannelCount" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricChannelCount"></a>

```typescript
public metricChannelCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricChannelCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricConfirmRate` <a name="metricConfirmRate" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricConfirmRate"></a>

```typescript
public metricConfirmRate(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricConfirmRate.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricConnectionCount` <a name="metricConnectionCount" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricConnectionCount"></a>

```typescript
public metricConnectionCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricConnectionCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricConsumerCount` <a name="metricConsumerCount" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricConsumerCount"></a>

```typescript
public metricConsumerCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricConsumerCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricExchangeCount` <a name="metricExchangeCount" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricExchangeCount"></a>

```typescript
public metricExchangeCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricExchangeCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricMessageCount` <a name="metricMessageCount" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricMessageCount"></a>

```typescript
public metricMessageCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricMessageCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricMessageReadyCount` <a name="metricMessageReadyCount" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricMessageReadyCount"></a>

```typescript
public metricMessageReadyCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricMessageReadyCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricMessageUnacknowledgedCount` <a name="metricMessageUnacknowledgedCount" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricMessageUnacknowledgedCount"></a>

```typescript
public metricMessageUnacknowledgedCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricMessageUnacknowledgedCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricPublishRate` <a name="metricPublishRate" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricPublishRate"></a>

```typescript
public metricPublishRate(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricPublishRate.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricQueueCount` <a name="metricQueueCount" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricQueueCount"></a>

```typescript
public metricQueueCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricQueueCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricRabbitMQDiskFree` <a name="metricRabbitMQDiskFree" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricRabbitMQDiskFree"></a>

```typescript
public metricRabbitMQDiskFree(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricRabbitMQDiskFree.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricRabbitMQDiskFreeLimit` <a name="metricRabbitMQDiskFreeLimit" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricRabbitMQDiskFreeLimit"></a>

```typescript
public metricRabbitMQDiskFreeLimit(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricRabbitMQDiskFreeLimit.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricRabbitMQFdUsed` <a name="metricRabbitMQFdUsed" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricRabbitMQFdUsed"></a>

```typescript
public metricRabbitMQFdUsed(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricRabbitMQFdUsed.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricRabbitMQIOReadAverageTime` <a name="metricRabbitMQIOReadAverageTime" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricRabbitMQIOReadAverageTime"></a>

```typescript
public metricRabbitMQIOReadAverageTime(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricRabbitMQIOReadAverageTime.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricRabbitMQIOWriteAverageTime` <a name="metricRabbitMQIOWriteAverageTime" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricRabbitMQIOWriteAverageTime"></a>

```typescript
public metricRabbitMQIOWriteAverageTime(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricRabbitMQIOWriteAverageTime.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricRabbitMQMemLimit` <a name="metricRabbitMQMemLimit" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricRabbitMQMemLimit"></a>

```typescript
public metricRabbitMQMemLimit(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricRabbitMQMemLimit.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricRabbitMQMemUsed` <a name="metricRabbitMQMemUsed" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricRabbitMQMemUsed"></a>

```typescript
public metricRabbitMQMemUsed(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricRabbitMQMemUsed.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricSystemCpuUtilization` <a name="metricSystemCpuUtilization" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricSystemCpuUtilization"></a>

```typescript
public metricSystemCpuUtilization(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.metricSystemCpuUtilization.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.isConstruct"></a>

```typescript
import { RabbitMqBrokerDeploymentBase } from '@cdklabs/cdk-amazonmq'

RabbitMqBrokerDeploymentBase.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.isOwnedResource"></a>

```typescript
import { RabbitMqBrokerDeploymentBase } from '@cdklabs/cdk-amazonmq'

RabbitMqBrokerDeploymentBase.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.isResource"></a>

```typescript
import { RabbitMqBrokerDeploymentBase } from '@cdklabs/cdk-amazonmq'

RabbitMqBrokerDeploymentBase.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.property.connections">connections</a></code> | <code>aws-cdk-lib.aws_ec2.Connections</code> | Manages connections for the cluster. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.property.configuration">configuration</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerConfiguration">IRabbitMqBrokerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.property.endpoints">endpoints</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerEndpoints">RabbitMqBrokerEndpoints</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `connections`<sup>Optional</sup> <a name="connections" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* aws-cdk-lib.aws_ec2.Connections

Manages connections for the cluster.

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.property.configuration"></a>

```typescript
public readonly configuration: IRabbitMqBrokerConfiguration;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerConfiguration">IRabbitMqBrokerConfiguration</a>

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase.property.endpoints"></a>

```typescript
public readonly endpoints: RabbitMqBrokerEndpoints;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerEndpoints">RabbitMqBrokerEndpoints</a>

---


### RabbitMqBrokerInstance <a name="RabbitMqBrokerInstance" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance"></a>

- *Implements:* <a href="#@cdklabs/cdk-amazonmq.IRabbitMqBroker">IRabbitMqBroker</a>

A representation of a single-instance broker comprised of one broker in one Availability Zone behind a Network Load Balancer (NLB).

#### Initializers <a name="Initializers" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.Initializer"></a>

```typescript
import { RabbitMqBrokerInstance } from '@cdklabs/cdk-amazonmq'

new RabbitMqBrokerInstance(scope: Construct, id: string, props: RabbitMqBrokerInstanceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.Initializer.parameter.props">props</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstanceProps">RabbitMqBrokerInstanceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.Initializer.parameter.props"></a>

- *Type:* <a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstanceProps">RabbitMqBrokerInstanceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metric">metric</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricAckRate">metricAckRate</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricChannelCount">metricChannelCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricConfirmRate">metricConfirmRate</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricConnectionCount">metricConnectionCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricConsumerCount">metricConsumerCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricExchangeCount">metricExchangeCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricMessageCount">metricMessageCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricMessageReadyCount">metricMessageReadyCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricMessageUnacknowledgedCount">metricMessageUnacknowledgedCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricPublishRate">metricPublishRate</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricQueueCount">metricQueueCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricRabbitMQDiskFree">metricRabbitMQDiskFree</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricRabbitMQDiskFreeLimit">metricRabbitMQDiskFreeLimit</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricRabbitMQFdUsed">metricRabbitMQFdUsed</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricRabbitMQIOReadAverageTime">metricRabbitMQIOReadAverageTime</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricRabbitMQIOWriteAverageTime">metricRabbitMQIOWriteAverageTime</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricRabbitMQMemLimit">metricRabbitMQMemLimit</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricRabbitMQMemUsed">metricRabbitMQMemUsed</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricSystemCpuUtilization">metricSystemCpuUtilization</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `metric` <a name="metric" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metric"></a>

```typescript
public metric(metricName: string, options?: MetricOptions): Metric
```

###### `metricName`<sup>Required</sup> <a name="metricName" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metric.parameter.metricName"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metric.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAckRate` <a name="metricAckRate" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricAckRate"></a>

```typescript
public metricAckRate(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricAckRate.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricChannelCount` <a name="metricChannelCount" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricChannelCount"></a>

```typescript
public metricChannelCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricChannelCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricConfirmRate` <a name="metricConfirmRate" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricConfirmRate"></a>

```typescript
public metricConfirmRate(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricConfirmRate.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricConnectionCount` <a name="metricConnectionCount" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricConnectionCount"></a>

```typescript
public metricConnectionCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricConnectionCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricConsumerCount` <a name="metricConsumerCount" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricConsumerCount"></a>

```typescript
public metricConsumerCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricConsumerCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricExchangeCount` <a name="metricExchangeCount" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricExchangeCount"></a>

```typescript
public metricExchangeCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricExchangeCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricMessageCount` <a name="metricMessageCount" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricMessageCount"></a>

```typescript
public metricMessageCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricMessageCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricMessageReadyCount` <a name="metricMessageReadyCount" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricMessageReadyCount"></a>

```typescript
public metricMessageReadyCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricMessageReadyCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricMessageUnacknowledgedCount` <a name="metricMessageUnacknowledgedCount" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricMessageUnacknowledgedCount"></a>

```typescript
public metricMessageUnacknowledgedCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricMessageUnacknowledgedCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricPublishRate` <a name="metricPublishRate" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricPublishRate"></a>

```typescript
public metricPublishRate(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricPublishRate.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricQueueCount` <a name="metricQueueCount" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricQueueCount"></a>

```typescript
public metricQueueCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricQueueCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricRabbitMQDiskFree` <a name="metricRabbitMQDiskFree" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricRabbitMQDiskFree"></a>

```typescript
public metricRabbitMQDiskFree(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricRabbitMQDiskFree.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricRabbitMQDiskFreeLimit` <a name="metricRabbitMQDiskFreeLimit" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricRabbitMQDiskFreeLimit"></a>

```typescript
public metricRabbitMQDiskFreeLimit(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricRabbitMQDiskFreeLimit.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricRabbitMQFdUsed` <a name="metricRabbitMQFdUsed" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricRabbitMQFdUsed"></a>

```typescript
public metricRabbitMQFdUsed(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricRabbitMQFdUsed.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricRabbitMQIOReadAverageTime` <a name="metricRabbitMQIOReadAverageTime" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricRabbitMQIOReadAverageTime"></a>

```typescript
public metricRabbitMQIOReadAverageTime(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricRabbitMQIOReadAverageTime.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricRabbitMQIOWriteAverageTime` <a name="metricRabbitMQIOWriteAverageTime" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricRabbitMQIOWriteAverageTime"></a>

```typescript
public metricRabbitMQIOWriteAverageTime(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricRabbitMQIOWriteAverageTime.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricRabbitMQMemLimit` <a name="metricRabbitMQMemLimit" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricRabbitMQMemLimit"></a>

```typescript
public metricRabbitMQMemLimit(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricRabbitMQMemLimit.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricRabbitMQMemUsed` <a name="metricRabbitMQMemUsed" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricRabbitMQMemUsed"></a>

```typescript
public metricRabbitMQMemUsed(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricRabbitMQMemUsed.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricSystemCpuUtilization` <a name="metricSystemCpuUtilization" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricSystemCpuUtilization"></a>

```typescript
public metricSystemCpuUtilization(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.metricSystemCpuUtilization.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.isConstruct"></a>

```typescript
import { RabbitMqBrokerInstance } from '@cdklabs/cdk-amazonmq'

RabbitMqBrokerInstance.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.isOwnedResource"></a>

```typescript
import { RabbitMqBrokerInstance } from '@cdklabs/cdk-amazonmq'

RabbitMqBrokerInstance.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.isResource"></a>

```typescript
import { RabbitMqBrokerInstance } from '@cdklabs/cdk-amazonmq'

RabbitMqBrokerInstance.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.property.connections">connections</a></code> | <code>aws-cdk-lib.aws_ec2.Connections</code> | Manages connections for the cluster. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.property.configuration">configuration</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerConfiguration">IRabbitMqBrokerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.property.endpoints">endpoints</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerEndpoints">RabbitMqBrokerEndpoints</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `connections`<sup>Optional</sup> <a name="connections" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* aws-cdk-lib.aws_ec2.Connections

Manages connections for the cluster.

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.property.configuration"></a>

```typescript
public readonly configuration: IRabbitMqBrokerConfiguration;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerConfiguration">IRabbitMqBrokerConfiguration</a>

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance.property.endpoints"></a>

```typescript
public readonly endpoints: RabbitMqBrokerEndpoints;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerEndpoints">RabbitMqBrokerEndpoints</a>

---


## Structs <a name="Structs" id="Structs"></a>

### ActiveMqBrokerConfigurationOptions <a name="ActiveMqBrokerConfigurationOptions" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerConfigurationOptions"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerConfigurationOptions.Initializer"></a>

```typescript
import { ActiveMqBrokerConfigurationOptions } from '@cdklabs/cdk-amazonmq'

const activeMqBrokerConfigurationOptions: ActiveMqBrokerConfigurationOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerConfigurationOptions.property.definition">definition</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerConfigurationDefinition">ActiveMqBrokerConfigurationDefinition</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerConfigurationOptions.property.description">description</a></code> | <code>string</code> | *No description.* |

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerConfigurationOptions.property.definition"></a>

```typescript
public readonly definition: ActiveMqBrokerConfigurationDefinition;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerConfigurationDefinition">ActiveMqBrokerConfigurationDefinition</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerConfigurationOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

### ActiveMqBrokerConfigurationProps <a name="ActiveMqBrokerConfigurationProps" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerConfigurationProps"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerConfigurationProps.Initializer"></a>

```typescript
import { ActiveMqBrokerConfigurationProps } from '@cdklabs/cdk-amazonmq'

const activeMqBrokerConfigurationProps: ActiveMqBrokerConfigurationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerConfigurationProps.property.definition">definition</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerConfigurationDefinition">ActiveMqBrokerConfigurationDefinition</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerConfigurationProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerConfigurationProps.property.authenticationStrategy">authenticationStrategy</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqAuthenticationStrategy">ActiveMqAuthenticationStrategy</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerConfigurationProps.property.engineVersion">engineVersion</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerEngineVersion">ActiveMqBrokerEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerConfigurationProps.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerConfigurationProps.property.definition"></a>

```typescript
public readonly definition: ActiveMqBrokerConfigurationDefinition;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerConfigurationDefinition">ActiveMqBrokerConfigurationDefinition</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerConfigurationProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `authenticationStrategy`<sup>Optional</sup> <a name="authenticationStrategy" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerConfigurationProps.property.authenticationStrategy"></a>

```typescript
public readonly authenticationStrategy: ActiveMqAuthenticationStrategy;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.ActiveMqAuthenticationStrategy">ActiveMqAuthenticationStrategy</a>

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerConfigurationProps.property.engineVersion"></a>

```typescript
public readonly engineVersion: ActiveMqBrokerEngineVersion;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerEngineVersion">ActiveMqBrokerEngineVersion</a>

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerConfigurationProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

### ActiveMqBrokerDeploymentBaseProps <a name="ActiveMqBrokerDeploymentBaseProps" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBaseProps"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBaseProps.Initializer"></a>

```typescript
import { ActiveMqBrokerDeploymentBaseProps } from '@cdklabs/cdk-amazonmq'

const activeMqBrokerDeploymentBaseProps: ActiveMqBrokerDeploymentBaseProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBaseProps.property.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>boolean</code> | Determines whether the broker will undergo a minor version upgrade during the maintenance window. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBaseProps.property.instanceType">instanceType</a></code> | <code>aws-cdk-lib.aws_ec2.InstanceType</code> | An instance type to use for the broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBaseProps.property.publiclyAccessible">publiclyAccessible</a></code> | <code>boolean</code> | Specifies whether the broker is open to public Internet or deployed with endpoints in own VPC. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBaseProps.property.brokerName">brokerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBaseProps.property.cloudwatchLogsRetention">cloudwatchLogsRetention</a></code> | <code>aws-cdk-lib.aws_logs.RetentionDays</code> | Sets the retention days for the broker's CloudWatch LogGroups. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBaseProps.property.cloudwatchLogsRetentionRole">cloudwatchLogsRetentionRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBaseProps.property.key">key</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBaseProps.property.maintenanceWindowStartTime">maintenanceWindowStartTime</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.MaintenanceWindowStartTime">MaintenanceWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBaseProps.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | The Security Groups to apply for a non publicly accessible broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBaseProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC in which create the communication endpoints for a private broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBaseProps.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | vpcSubnets and vpc are optional. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBaseProps.property.userManagement">userManagement</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerUserManagement">IActiveMqBrokerUserManagement</a></code> | Sets the User Management option for the Amazon MQ for ActiveMQ broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBaseProps.property.version">version</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerEngineVersion">ActiveMqBrokerEngineVersion</a></code> | Sets the version of the Amazon MQ for ActiveMQ broker engine. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBaseProps.property.cloudwatchLogsExports">cloudwatchLogsExports</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqCloudwatchLogsExports">ActiveMqCloudwatchLogsExports</a></code> | Sets the CloudWatch Logs exports for the Amazon MQ for ActiveMQ broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBaseProps.property.configuration">configuration</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerConfiguration">IActiveMqBrokerConfiguration</a></code> | Sets the configuration of the Amazon MQ for ActiveMQ broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBaseProps.property.logsRetentionDays">logsRetentionDays</a></code> | <code>number</code> | Sets the number of days to retain logs for the Amazon MQ for ActiveMQ broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBaseProps.property.storageType">storageType</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.BrokerStorageType">BrokerStorageType</a></code> | Sets the storage type of the Amazon MQ for ActiveMQ broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBaseProps.property.deploymentMode">deploymentMode</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentMode">BrokerDeploymentMode</a></code> | *No description.* |

---

##### `autoMinorVersionUpgrade`<sup>Required</sup> <a name="autoMinorVersionUpgrade" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBaseProps.property.autoMinorVersionUpgrade"></a>

```typescript
public readonly autoMinorVersionUpgrade: boolean;
```

- *Type:* boolean
- *Default:* false. No minor version upgrade happens.

Determines whether the broker will undergo a minor version upgrade during the maintenance window.

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBaseProps.property.instanceType"></a>

```typescript
public readonly instanceType: InstanceType;
```

- *Type:* aws-cdk-lib.aws_ec2.InstanceType

An instance type to use for the broker.

Only a subset of available instance types is allowed.

> [https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-instance-types.html](https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-instance-types.html)

---

##### `publiclyAccessible`<sup>Required</sup> <a name="publiclyAccessible" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBaseProps.property.publiclyAccessible"></a>

```typescript
public readonly publiclyAccessible: boolean;
```

- *Type:* boolean

Specifies whether the broker is open to public Internet or deployed with endpoints in own VPC.

---

##### `brokerName`<sup>Optional</sup> <a name="brokerName" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBaseProps.property.brokerName"></a>

```typescript
public readonly brokerName: string;
```

- *Type:* string

---

##### `cloudwatchLogsRetention`<sup>Optional</sup> <a name="cloudwatchLogsRetention" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBaseProps.property.cloudwatchLogsRetention"></a>

```typescript
public readonly cloudwatchLogsRetention: RetentionDays;
```

- *Type:* aws-cdk-lib.aws_logs.RetentionDays
- *Default:* undefined; CloudWatch Log Groups retention is set to never expire

Sets the retention days for the broker's CloudWatch LogGroups.

---

##### `cloudwatchLogsRetentionRole`<sup>Optional</sup> <a name="cloudwatchLogsRetentionRole" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBaseProps.property.cloudwatchLogsRetentionRole"></a>

```typescript
public readonly cloudwatchLogsRetentionRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBaseProps.property.key"></a>

```typescript
public readonly key: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

---

##### `maintenanceWindowStartTime`<sup>Optional</sup> <a name="maintenanceWindowStartTime" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBaseProps.property.maintenanceWindowStartTime"></a>

```typescript
public readonly maintenanceWindowStartTime: MaintenanceWindowStartTime;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.MaintenanceWindowStartTime">MaintenanceWindowStartTime</a>

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBaseProps.property.securityGroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]
- *Default:* undefined. If no VPC is selected then a default VPC's default SG will be used.              Otherwise - a security group will be created.

The Security Groups to apply for a non publicly accessible broker.

NOTE: This needs to be set only if `publiclyAccessible` is true.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBaseProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* undefined. A default VPC will be used

The VPC in which create the communication endpoints for a private broker.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBaseProps.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* undefined. If vpc is present - this attribute must be present.

vpcSubnets and vpc are optional.

But when present - publiclyAccessible attribute must equal false.

---

##### `userManagement`<sup>Required</sup> <a name="userManagement" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBaseProps.property.userManagement"></a>

```typescript
public readonly userManagement: IActiveMqBrokerUserManagement;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerUserManagement">IActiveMqBrokerUserManagement</a>

Sets the User Management option for the Amazon MQ for ActiveMQ broker.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBaseProps.property.version"></a>

```typescript
public readonly version: ActiveMqBrokerEngineVersion;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerEngineVersion">ActiveMqBrokerEngineVersion</a>

Sets the version of the Amazon MQ for ActiveMQ broker engine.

---

##### `cloudwatchLogsExports`<sup>Optional</sup> <a name="cloudwatchLogsExports" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBaseProps.property.cloudwatchLogsExports"></a>

```typescript
public readonly cloudwatchLogsExports: ActiveMqCloudwatchLogsExports;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.ActiveMqCloudwatchLogsExports">ActiveMqCloudwatchLogsExports</a>
- *Default:* undefined; No logs are exported to CloudWatch.

Sets the CloudWatch Logs exports for the Amazon MQ for ActiveMQ broker.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBaseProps.property.configuration"></a>

```typescript
public readonly configuration: IActiveMqBrokerConfiguration;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerConfiguration">IActiveMqBrokerConfiguration</a>

Sets the configuration of the Amazon MQ for ActiveMQ broker.

---

##### `logsRetentionDays`<sup>Optional</sup> <a name="logsRetentionDays" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBaseProps.property.logsRetentionDays"></a>

```typescript
public readonly logsRetentionDays: number;
```

- *Type:* number

Sets the number of days to retain logs for the Amazon MQ for ActiveMQ broker.

---

##### `storageType`<sup>Optional</sup> <a name="storageType" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBaseProps.property.storageType"></a>

```typescript
public readonly storageType: BrokerStorageType;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.BrokerStorageType">BrokerStorageType</a>

Sets the storage type of the Amazon MQ for ActiveMQ broker.

---

##### `deploymentMode`<sup>Required</sup> <a name="deploymentMode" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBaseProps.property.deploymentMode"></a>

```typescript
public readonly deploymentMode: BrokerDeploymentMode;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentMode">BrokerDeploymentMode</a>

---

### ActiveMqBrokerDeploymentProps <a name="ActiveMqBrokerDeploymentProps" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentProps"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentProps.Initializer"></a>

```typescript
import { ActiveMqBrokerDeploymentProps } from '@cdklabs/cdk-amazonmq'

const activeMqBrokerDeploymentProps: ActiveMqBrokerDeploymentProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentProps.property.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>boolean</code> | Determines whether the broker will undergo a minor version upgrade during the maintenance window. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentProps.property.instanceType">instanceType</a></code> | <code>aws-cdk-lib.aws_ec2.InstanceType</code> | An instance type to use for the broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentProps.property.publiclyAccessible">publiclyAccessible</a></code> | <code>boolean</code> | Specifies whether the broker is open to public Internet or deployed with endpoints in own VPC. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentProps.property.brokerName">brokerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentProps.property.cloudwatchLogsRetention">cloudwatchLogsRetention</a></code> | <code>aws-cdk-lib.aws_logs.RetentionDays</code> | Sets the retention days for the broker's CloudWatch LogGroups. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentProps.property.cloudwatchLogsRetentionRole">cloudwatchLogsRetentionRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentProps.property.key">key</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentProps.property.maintenanceWindowStartTime">maintenanceWindowStartTime</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.MaintenanceWindowStartTime">MaintenanceWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentProps.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | The Security Groups to apply for a non publicly accessible broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC in which create the communication endpoints for a private broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentProps.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | vpcSubnets and vpc are optional. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentProps.property.userManagement">userManagement</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerUserManagement">IActiveMqBrokerUserManagement</a></code> | Sets the User Management option for the Amazon MQ for ActiveMQ broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentProps.property.version">version</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerEngineVersion">ActiveMqBrokerEngineVersion</a></code> | Sets the version of the Amazon MQ for ActiveMQ broker engine. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentProps.property.cloudwatchLogsExports">cloudwatchLogsExports</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqCloudwatchLogsExports">ActiveMqCloudwatchLogsExports</a></code> | Sets the CloudWatch Logs exports for the Amazon MQ for ActiveMQ broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentProps.property.configuration">configuration</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerConfiguration">IActiveMqBrokerConfiguration</a></code> | Sets the configuration of the Amazon MQ for ActiveMQ broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentProps.property.logsRetentionDays">logsRetentionDays</a></code> | <code>number</code> | Sets the number of days to retain logs for the Amazon MQ for ActiveMQ broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentProps.property.storageType">storageType</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.BrokerStorageType">BrokerStorageType</a></code> | Sets the storage type of the Amazon MQ for ActiveMQ broker. |

---

##### `autoMinorVersionUpgrade`<sup>Required</sup> <a name="autoMinorVersionUpgrade" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentProps.property.autoMinorVersionUpgrade"></a>

```typescript
public readonly autoMinorVersionUpgrade: boolean;
```

- *Type:* boolean
- *Default:* false. No minor version upgrade happens.

Determines whether the broker will undergo a minor version upgrade during the maintenance window.

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentProps.property.instanceType"></a>

```typescript
public readonly instanceType: InstanceType;
```

- *Type:* aws-cdk-lib.aws_ec2.InstanceType

An instance type to use for the broker.

Only a subset of available instance types is allowed.

> [https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-instance-types.html](https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-instance-types.html)

---

##### `publiclyAccessible`<sup>Required</sup> <a name="publiclyAccessible" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentProps.property.publiclyAccessible"></a>

```typescript
public readonly publiclyAccessible: boolean;
```

- *Type:* boolean

Specifies whether the broker is open to public Internet or deployed with endpoints in own VPC.

---

##### `brokerName`<sup>Optional</sup> <a name="brokerName" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentProps.property.brokerName"></a>

```typescript
public readonly brokerName: string;
```

- *Type:* string

---

##### `cloudwatchLogsRetention`<sup>Optional</sup> <a name="cloudwatchLogsRetention" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentProps.property.cloudwatchLogsRetention"></a>

```typescript
public readonly cloudwatchLogsRetention: RetentionDays;
```

- *Type:* aws-cdk-lib.aws_logs.RetentionDays
- *Default:* undefined; CloudWatch Log Groups retention is set to never expire

Sets the retention days for the broker's CloudWatch LogGroups.

---

##### `cloudwatchLogsRetentionRole`<sup>Optional</sup> <a name="cloudwatchLogsRetentionRole" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentProps.property.cloudwatchLogsRetentionRole"></a>

```typescript
public readonly cloudwatchLogsRetentionRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentProps.property.key"></a>

```typescript
public readonly key: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

---

##### `maintenanceWindowStartTime`<sup>Optional</sup> <a name="maintenanceWindowStartTime" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentProps.property.maintenanceWindowStartTime"></a>

```typescript
public readonly maintenanceWindowStartTime: MaintenanceWindowStartTime;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.MaintenanceWindowStartTime">MaintenanceWindowStartTime</a>

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentProps.property.securityGroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]
- *Default:* undefined. If no VPC is selected then a default VPC's default SG will be used.              Otherwise - a security group will be created.

The Security Groups to apply for a non publicly accessible broker.

NOTE: This needs to be set only if `publiclyAccessible` is true.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* undefined. A default VPC will be used

The VPC in which create the communication endpoints for a private broker.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentProps.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* undefined. If vpc is present - this attribute must be present.

vpcSubnets and vpc are optional.

But when present - publiclyAccessible attribute must equal false.

---

##### `userManagement`<sup>Required</sup> <a name="userManagement" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentProps.property.userManagement"></a>

```typescript
public readonly userManagement: IActiveMqBrokerUserManagement;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerUserManagement">IActiveMqBrokerUserManagement</a>

Sets the User Management option for the Amazon MQ for ActiveMQ broker.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentProps.property.version"></a>

```typescript
public readonly version: ActiveMqBrokerEngineVersion;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerEngineVersion">ActiveMqBrokerEngineVersion</a>

Sets the version of the Amazon MQ for ActiveMQ broker engine.

---

##### `cloudwatchLogsExports`<sup>Optional</sup> <a name="cloudwatchLogsExports" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentProps.property.cloudwatchLogsExports"></a>

```typescript
public readonly cloudwatchLogsExports: ActiveMqCloudwatchLogsExports;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.ActiveMqCloudwatchLogsExports">ActiveMqCloudwatchLogsExports</a>
- *Default:* undefined; No logs are exported to CloudWatch.

Sets the CloudWatch Logs exports for the Amazon MQ for ActiveMQ broker.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentProps.property.configuration"></a>

```typescript
public readonly configuration: IActiveMqBrokerConfiguration;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerConfiguration">IActiveMqBrokerConfiguration</a>

Sets the configuration of the Amazon MQ for ActiveMQ broker.

---

##### `logsRetentionDays`<sup>Optional</sup> <a name="logsRetentionDays" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentProps.property.logsRetentionDays"></a>

```typescript
public readonly logsRetentionDays: number;
```

- *Type:* number

Sets the number of days to retain logs for the Amazon MQ for ActiveMQ broker.

---

##### `storageType`<sup>Optional</sup> <a name="storageType" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentProps.property.storageType"></a>

```typescript
public readonly storageType: BrokerStorageType;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.BrokerStorageType">BrokerStorageType</a>

Sets the storage type of the Amazon MQ for ActiveMQ broker.

---

### ActiveMqBrokerDeploymentUserManagementDefinition <a name="ActiveMqBrokerDeploymentUserManagementDefinition" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentUserManagementDefinition"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentUserManagementDefinition.Initializer"></a>

```typescript
import { ActiveMqBrokerDeploymentUserManagementDefinition } from '@cdklabs/cdk-amazonmq'

const activeMqBrokerDeploymentUserManagementDefinition: ActiveMqBrokerDeploymentUserManagementDefinition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentUserManagementDefinition.property.users">users</a></code> | <code>aws-cdk-lib.aws_amazonmq.CfnBroker.UserProperty[]</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentUserManagementDefinition.property.authenticationStrategy">authenticationStrategy</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqAuthenticationStrategy">ActiveMqAuthenticationStrategy</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentUserManagementDefinition.property.ldapServerMetadata">ldapServerMetadata</a></code> | <code>aws-cdk-lib.aws_amazonmq.CfnBroker.LdapServerMetadataProperty</code> | *No description.* |

---

##### `users`<sup>Required</sup> <a name="users" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentUserManagementDefinition.property.users"></a>

```typescript
public readonly users: UserProperty[];
```

- *Type:* aws-cdk-lib.aws_amazonmq.CfnBroker.UserProperty[]

---

##### `authenticationStrategy`<sup>Optional</sup> <a name="authenticationStrategy" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentUserManagementDefinition.property.authenticationStrategy"></a>

```typescript
public readonly authenticationStrategy: ActiveMqAuthenticationStrategy;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.ActiveMqAuthenticationStrategy">ActiveMqAuthenticationStrategy</a>

---

##### `ldapServerMetadata`<sup>Optional</sup> <a name="ldapServerMetadata" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentUserManagementDefinition.property.ldapServerMetadata"></a>

```typescript
public readonly ldapServerMetadata: LdapServerMetadataProperty;
```

- *Type:* aws-cdk-lib.aws_amazonmq.CfnBroker.LdapServerMetadataProperty

---

### ActiveMqBrokerEndpoints <a name="ActiveMqBrokerEndpoints" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerEndpoints.Initializer"></a>

```typescript
import { ActiveMqBrokerEndpoints } from '@cdklabs/cdk-amazonmq'

const activeMqBrokerEndpoints: ActiveMqBrokerEndpoints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerEndpoints.property.amqp">amqp</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.BrokerEndpoint">BrokerEndpoint</a></code> | The AMQP endpoint of the broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerEndpoints.property.console">console</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.BrokerEndpoint">BrokerEndpoint</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerEndpoints.property.mqtt">mqtt</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.BrokerEndpoint">BrokerEndpoint</a></code> | The MQTT endpoint of the broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerEndpoints.property.openWire">openWire</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.BrokerEndpoint">BrokerEndpoint</a></code> | The OpenWire endpoint of the broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerEndpoints.property.stomp">stomp</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.BrokerEndpoint">BrokerEndpoint</a></code> | The STOMP endpoint of the broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerEndpoints.property.wss">wss</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.BrokerEndpoint">BrokerEndpoint</a></code> | The WSS endpoint of the broker. |

---

##### `amqp`<sup>Required</sup> <a name="amqp" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerEndpoints.property.amqp"></a>

```typescript
public readonly amqp: BrokerEndpoint;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.BrokerEndpoint">BrokerEndpoint</a>

The AMQP endpoint of the broker.

---

##### `console`<sup>Required</sup> <a name="console" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerEndpoints.property.console"></a>

```typescript
public readonly console: BrokerEndpoint;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.BrokerEndpoint">BrokerEndpoint</a>

---

##### `mqtt`<sup>Required</sup> <a name="mqtt" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerEndpoints.property.mqtt"></a>

```typescript
public readonly mqtt: BrokerEndpoint;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.BrokerEndpoint">BrokerEndpoint</a>

The MQTT endpoint of the broker.

---

##### `openWire`<sup>Required</sup> <a name="openWire" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerEndpoints.property.openWire"></a>

```typescript
public readonly openWire: BrokerEndpoint;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.BrokerEndpoint">BrokerEndpoint</a>

The OpenWire endpoint of the broker.

---

##### `stomp`<sup>Required</sup> <a name="stomp" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerEndpoints.property.stomp"></a>

```typescript
public readonly stomp: BrokerEndpoint;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.BrokerEndpoint">BrokerEndpoint</a>

The STOMP endpoint of the broker.

---

##### `wss`<sup>Required</sup> <a name="wss" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerEndpoints.property.wss"></a>

```typescript
public readonly wss: BrokerEndpoint;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.BrokerEndpoint">BrokerEndpoint</a>

The WSS endpoint of the broker.

---

### ActiveMqBrokerInstanceProps <a name="ActiveMqBrokerInstanceProps" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstanceProps"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstanceProps.Initializer"></a>

```typescript
import { ActiveMqBrokerInstanceProps } from '@cdklabs/cdk-amazonmq'

const activeMqBrokerInstanceProps: ActiveMqBrokerInstanceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstanceProps.property.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>boolean</code> | Determines whether the broker will undergo a minor version upgrade during the maintenance window. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstanceProps.property.instanceType">instanceType</a></code> | <code>aws-cdk-lib.aws_ec2.InstanceType</code> | An instance type to use for the broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstanceProps.property.publiclyAccessible">publiclyAccessible</a></code> | <code>boolean</code> | Specifies whether the broker is open to public Internet or deployed with endpoints in own VPC. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstanceProps.property.brokerName">brokerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstanceProps.property.cloudwatchLogsRetention">cloudwatchLogsRetention</a></code> | <code>aws-cdk-lib.aws_logs.RetentionDays</code> | Sets the retention days for the broker's CloudWatch LogGroups. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstanceProps.property.cloudwatchLogsRetentionRole">cloudwatchLogsRetentionRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstanceProps.property.key">key</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstanceProps.property.maintenanceWindowStartTime">maintenanceWindowStartTime</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.MaintenanceWindowStartTime">MaintenanceWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstanceProps.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | The Security Groups to apply for a non publicly accessible broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstanceProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC in which create the communication endpoints for a private broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstanceProps.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | vpcSubnets and vpc are optional. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstanceProps.property.userManagement">userManagement</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerUserManagement">IActiveMqBrokerUserManagement</a></code> | Sets the User Management option for the Amazon MQ for ActiveMQ broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstanceProps.property.version">version</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerEngineVersion">ActiveMqBrokerEngineVersion</a></code> | Sets the version of the Amazon MQ for ActiveMQ broker engine. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstanceProps.property.cloudwatchLogsExports">cloudwatchLogsExports</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqCloudwatchLogsExports">ActiveMqCloudwatchLogsExports</a></code> | Sets the CloudWatch Logs exports for the Amazon MQ for ActiveMQ broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstanceProps.property.configuration">configuration</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerConfiguration">IActiveMqBrokerConfiguration</a></code> | Sets the configuration of the Amazon MQ for ActiveMQ broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstanceProps.property.logsRetentionDays">logsRetentionDays</a></code> | <code>number</code> | Sets the number of days to retain logs for the Amazon MQ for ActiveMQ broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstanceProps.property.storageType">storageType</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.BrokerStorageType">BrokerStorageType</a></code> | Sets the storage type of the Amazon MQ for ActiveMQ broker. |

---

##### `autoMinorVersionUpgrade`<sup>Required</sup> <a name="autoMinorVersionUpgrade" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstanceProps.property.autoMinorVersionUpgrade"></a>

```typescript
public readonly autoMinorVersionUpgrade: boolean;
```

- *Type:* boolean
- *Default:* false. No minor version upgrade happens.

Determines whether the broker will undergo a minor version upgrade during the maintenance window.

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstanceProps.property.instanceType"></a>

```typescript
public readonly instanceType: InstanceType;
```

- *Type:* aws-cdk-lib.aws_ec2.InstanceType

An instance type to use for the broker.

Only a subset of available instance types is allowed.

> [https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-instance-types.html](https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-instance-types.html)

---

##### `publiclyAccessible`<sup>Required</sup> <a name="publiclyAccessible" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstanceProps.property.publiclyAccessible"></a>

```typescript
public readonly publiclyAccessible: boolean;
```

- *Type:* boolean

Specifies whether the broker is open to public Internet or deployed with endpoints in own VPC.

---

##### `brokerName`<sup>Optional</sup> <a name="brokerName" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstanceProps.property.brokerName"></a>

```typescript
public readonly brokerName: string;
```

- *Type:* string

---

##### `cloudwatchLogsRetention`<sup>Optional</sup> <a name="cloudwatchLogsRetention" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstanceProps.property.cloudwatchLogsRetention"></a>

```typescript
public readonly cloudwatchLogsRetention: RetentionDays;
```

- *Type:* aws-cdk-lib.aws_logs.RetentionDays
- *Default:* undefined; CloudWatch Log Groups retention is set to never expire

Sets the retention days for the broker's CloudWatch LogGroups.

---

##### `cloudwatchLogsRetentionRole`<sup>Optional</sup> <a name="cloudwatchLogsRetentionRole" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstanceProps.property.cloudwatchLogsRetentionRole"></a>

```typescript
public readonly cloudwatchLogsRetentionRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstanceProps.property.key"></a>

```typescript
public readonly key: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

---

##### `maintenanceWindowStartTime`<sup>Optional</sup> <a name="maintenanceWindowStartTime" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstanceProps.property.maintenanceWindowStartTime"></a>

```typescript
public readonly maintenanceWindowStartTime: MaintenanceWindowStartTime;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.MaintenanceWindowStartTime">MaintenanceWindowStartTime</a>

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstanceProps.property.securityGroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]
- *Default:* undefined. If no VPC is selected then a default VPC's default SG will be used.              Otherwise - a security group will be created.

The Security Groups to apply for a non publicly accessible broker.

NOTE: This needs to be set only if `publiclyAccessible` is true.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstanceProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* undefined. A default VPC will be used

The VPC in which create the communication endpoints for a private broker.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstanceProps.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* undefined. If vpc is present - this attribute must be present.

vpcSubnets and vpc are optional.

But when present - publiclyAccessible attribute must equal false.

---

##### `userManagement`<sup>Required</sup> <a name="userManagement" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstanceProps.property.userManagement"></a>

```typescript
public readonly userManagement: IActiveMqBrokerUserManagement;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerUserManagement">IActiveMqBrokerUserManagement</a>

Sets the User Management option for the Amazon MQ for ActiveMQ broker.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstanceProps.property.version"></a>

```typescript
public readonly version: ActiveMqBrokerEngineVersion;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerEngineVersion">ActiveMqBrokerEngineVersion</a>

Sets the version of the Amazon MQ for ActiveMQ broker engine.

---

##### `cloudwatchLogsExports`<sup>Optional</sup> <a name="cloudwatchLogsExports" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstanceProps.property.cloudwatchLogsExports"></a>

```typescript
public readonly cloudwatchLogsExports: ActiveMqCloudwatchLogsExports;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.ActiveMqCloudwatchLogsExports">ActiveMqCloudwatchLogsExports</a>
- *Default:* undefined; No logs are exported to CloudWatch.

Sets the CloudWatch Logs exports for the Amazon MQ for ActiveMQ broker.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstanceProps.property.configuration"></a>

```typescript
public readonly configuration: IActiveMqBrokerConfiguration;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerConfiguration">IActiveMqBrokerConfiguration</a>

Sets the configuration of the Amazon MQ for ActiveMQ broker.

---

##### `logsRetentionDays`<sup>Optional</sup> <a name="logsRetentionDays" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstanceProps.property.logsRetentionDays"></a>

```typescript
public readonly logsRetentionDays: number;
```

- *Type:* number

Sets the number of days to retain logs for the Amazon MQ for ActiveMQ broker.

---

##### `storageType`<sup>Optional</sup> <a name="storageType" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerInstanceProps.property.storageType"></a>

```typescript
public readonly storageType: BrokerStorageType;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.BrokerStorageType">BrokerStorageType</a>

Sets the storage type of the Amazon MQ for ActiveMQ broker.

---

### ActiveMqBrokerRedundantPairProps <a name="ActiveMqBrokerRedundantPairProps" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPairProps"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPairProps.Initializer"></a>

```typescript
import { ActiveMqBrokerRedundantPairProps } from '@cdklabs/cdk-amazonmq'

const activeMqBrokerRedundantPairProps: ActiveMqBrokerRedundantPairProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPairProps.property.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>boolean</code> | Determines whether the broker will undergo a minor version upgrade during the maintenance window. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPairProps.property.instanceType">instanceType</a></code> | <code>aws-cdk-lib.aws_ec2.InstanceType</code> | An instance type to use for the broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPairProps.property.publiclyAccessible">publiclyAccessible</a></code> | <code>boolean</code> | Specifies whether the broker is open to public Internet or deployed with endpoints in own VPC. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPairProps.property.brokerName">brokerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPairProps.property.cloudwatchLogsRetention">cloudwatchLogsRetention</a></code> | <code>aws-cdk-lib.aws_logs.RetentionDays</code> | Sets the retention days for the broker's CloudWatch LogGroups. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPairProps.property.cloudwatchLogsRetentionRole">cloudwatchLogsRetentionRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPairProps.property.key">key</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPairProps.property.maintenanceWindowStartTime">maintenanceWindowStartTime</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.MaintenanceWindowStartTime">MaintenanceWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPairProps.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | The Security Groups to apply for a non publicly accessible broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPairProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC in which create the communication endpoints for a private broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPairProps.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | vpcSubnets and vpc are optional. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPairProps.property.userManagement">userManagement</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerUserManagement">IActiveMqBrokerUserManagement</a></code> | Sets the User Management option for the Amazon MQ for ActiveMQ broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPairProps.property.version">version</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerEngineVersion">ActiveMqBrokerEngineVersion</a></code> | Sets the version of the Amazon MQ for ActiveMQ broker engine. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPairProps.property.cloudwatchLogsExports">cloudwatchLogsExports</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqCloudwatchLogsExports">ActiveMqCloudwatchLogsExports</a></code> | Sets the CloudWatch Logs exports for the Amazon MQ for ActiveMQ broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPairProps.property.configuration">configuration</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerConfiguration">IActiveMqBrokerConfiguration</a></code> | Sets the configuration of the Amazon MQ for ActiveMQ broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPairProps.property.logsRetentionDays">logsRetentionDays</a></code> | <code>number</code> | Sets the number of days to retain logs for the Amazon MQ for ActiveMQ broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPairProps.property.storageType">storageType</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.BrokerStorageType">BrokerStorageType</a></code> | Sets the storage type of the Amazon MQ for ActiveMQ broker. |

---

##### `autoMinorVersionUpgrade`<sup>Required</sup> <a name="autoMinorVersionUpgrade" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPairProps.property.autoMinorVersionUpgrade"></a>

```typescript
public readonly autoMinorVersionUpgrade: boolean;
```

- *Type:* boolean
- *Default:* false. No minor version upgrade happens.

Determines whether the broker will undergo a minor version upgrade during the maintenance window.

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPairProps.property.instanceType"></a>

```typescript
public readonly instanceType: InstanceType;
```

- *Type:* aws-cdk-lib.aws_ec2.InstanceType

An instance type to use for the broker.

Only a subset of available instance types is allowed.

> [https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-instance-types.html](https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-instance-types.html)

---

##### `publiclyAccessible`<sup>Required</sup> <a name="publiclyAccessible" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPairProps.property.publiclyAccessible"></a>

```typescript
public readonly publiclyAccessible: boolean;
```

- *Type:* boolean

Specifies whether the broker is open to public Internet or deployed with endpoints in own VPC.

---

##### `brokerName`<sup>Optional</sup> <a name="brokerName" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPairProps.property.brokerName"></a>

```typescript
public readonly brokerName: string;
```

- *Type:* string

---

##### `cloudwatchLogsRetention`<sup>Optional</sup> <a name="cloudwatchLogsRetention" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPairProps.property.cloudwatchLogsRetention"></a>

```typescript
public readonly cloudwatchLogsRetention: RetentionDays;
```

- *Type:* aws-cdk-lib.aws_logs.RetentionDays
- *Default:* undefined; CloudWatch Log Groups retention is set to never expire

Sets the retention days for the broker's CloudWatch LogGroups.

---

##### `cloudwatchLogsRetentionRole`<sup>Optional</sup> <a name="cloudwatchLogsRetentionRole" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPairProps.property.cloudwatchLogsRetentionRole"></a>

```typescript
public readonly cloudwatchLogsRetentionRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPairProps.property.key"></a>

```typescript
public readonly key: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

---

##### `maintenanceWindowStartTime`<sup>Optional</sup> <a name="maintenanceWindowStartTime" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPairProps.property.maintenanceWindowStartTime"></a>

```typescript
public readonly maintenanceWindowStartTime: MaintenanceWindowStartTime;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.MaintenanceWindowStartTime">MaintenanceWindowStartTime</a>

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPairProps.property.securityGroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]
- *Default:* undefined. If no VPC is selected then a default VPC's default SG will be used.              Otherwise - a security group will be created.

The Security Groups to apply for a non publicly accessible broker.

NOTE: This needs to be set only if `publiclyAccessible` is true.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPairProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* undefined. A default VPC will be used

The VPC in which create the communication endpoints for a private broker.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPairProps.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* undefined. If vpc is present - this attribute must be present.

vpcSubnets and vpc are optional.

But when present - publiclyAccessible attribute must equal false.

---

##### `userManagement`<sup>Required</sup> <a name="userManagement" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPairProps.property.userManagement"></a>

```typescript
public readonly userManagement: IActiveMqBrokerUserManagement;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerUserManagement">IActiveMqBrokerUserManagement</a>

Sets the User Management option for the Amazon MQ for ActiveMQ broker.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPairProps.property.version"></a>

```typescript
public readonly version: ActiveMqBrokerEngineVersion;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerEngineVersion">ActiveMqBrokerEngineVersion</a>

Sets the version of the Amazon MQ for ActiveMQ broker engine.

---

##### `cloudwatchLogsExports`<sup>Optional</sup> <a name="cloudwatchLogsExports" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPairProps.property.cloudwatchLogsExports"></a>

```typescript
public readonly cloudwatchLogsExports: ActiveMqCloudwatchLogsExports;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.ActiveMqCloudwatchLogsExports">ActiveMqCloudwatchLogsExports</a>
- *Default:* undefined; No logs are exported to CloudWatch.

Sets the CloudWatch Logs exports for the Amazon MQ for ActiveMQ broker.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPairProps.property.configuration"></a>

```typescript
public readonly configuration: IActiveMqBrokerConfiguration;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerConfiguration">IActiveMqBrokerConfiguration</a>

Sets the configuration of the Amazon MQ for ActiveMQ broker.

---

##### `logsRetentionDays`<sup>Optional</sup> <a name="logsRetentionDays" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPairProps.property.logsRetentionDays"></a>

```typescript
public readonly logsRetentionDays: number;
```

- *Type:* number

Sets the number of days to retain logs for the Amazon MQ for ActiveMQ broker.

---

##### `storageType`<sup>Optional</sup> <a name="storageType" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPairProps.property.storageType"></a>

```typescript
public readonly storageType: BrokerStorageType;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.BrokerStorageType">BrokerStorageType</a>

Sets the storage type of the Amazon MQ for ActiveMQ broker.

---

### ActiveMqCloudwatchLogsExports <a name="ActiveMqCloudwatchLogsExports" id="@cdklabs/cdk-amazonmq.ActiveMqCloudwatchLogsExports"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-amazonmq.ActiveMqCloudwatchLogsExports.Initializer"></a>

```typescript
import { ActiveMqCloudwatchLogsExports } from '@cdklabs/cdk-amazonmq'

const activeMqCloudwatchLogsExports: ActiveMqCloudwatchLogsExports = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqCloudwatchLogsExports.property.audit">audit</a></code> | <code>boolean</code> | Export audit logs to CloudWatch. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqCloudwatchLogsExports.property.general">general</a></code> | <code>boolean</code> | Export general logs to CloudWatch. |

---

##### `audit`<sup>Optional</sup> <a name="audit" id="@cdklabs/cdk-amazonmq.ActiveMqCloudwatchLogsExports.property.audit"></a>

```typescript
public readonly audit: boolean;
```

- *Type:* boolean
- *Default:* undefined; do not export audit logs.

Export audit logs to CloudWatch.

---

##### `general`<sup>Optional</sup> <a name="general" id="@cdklabs/cdk-amazonmq.ActiveMqCloudwatchLogsExports.property.general"></a>

```typescript
public readonly general: boolean;
```

- *Type:* boolean
- *Default:* undefined; do not export general logs.

Export general logs to CloudWatch.

---

### ActiveMqEventSourceProps <a name="ActiveMqEventSourceProps" id="@cdklabs/cdk-amazonmq.ActiveMqEventSourceProps"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-amazonmq.ActiveMqEventSourceProps.Initializer"></a>

```typescript
import { ActiveMqEventSourceProps } from '@cdklabs/cdk-amazonmq'

const activeMqEventSourceProps: ActiveMqEventSourceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqEventSourceProps.property.credentials">credentials</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | A secret with credentials of the user to use when receiving messages. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqEventSourceProps.property.queueName">queueName</a></code> | <code>string</code> | The name of the queue that the function will receive messages from. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqEventSourceProps.property.addPermissions">addPermissions</a></code> | <code>boolean</code> | If the default permissions should be added to the Lambda function's execution role. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqEventSourceProps.property.batchSize">batchSize</a></code> | <code>number</code> | source at the time of invoking your function. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqEventSourceProps.property.enabled">enabled</a></code> | <code>boolean</code> | If the stream event source mapping should be enabled. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqEventSourceProps.property.maxBatchingWindow">maxBatchingWindow</a></code> | <code>aws-cdk-lib.Duration</code> | The maximum amount of time to gather records before invoking the function. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqEventSourceProps.property.broker">broker</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment">IActiveMqBrokerDeployment</a></code> | The ActiveMQ broker deployment to receive messages from. |

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdklabs/cdk-amazonmq.ActiveMqEventSourceProps.property.credentials"></a>

```typescript
public readonly credentials: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

A secret with credentials of the user to use when receiving messages.

The credentials in the secret have fields required:
 * username
 * password

---

##### `queueName`<sup>Required</sup> <a name="queueName" id="@cdklabs/cdk-amazonmq.ActiveMqEventSourceProps.property.queueName"></a>

```typescript
public readonly queueName: string;
```

- *Type:* string

The name of the queue that the function will receive messages from.

---

##### `addPermissions`<sup>Optional</sup> <a name="addPermissions" id="@cdklabs/cdk-amazonmq.ActiveMqEventSourceProps.property.addPermissions"></a>

```typescript
public readonly addPermissions: boolean;
```

- *Type:* boolean
- *Default:* true

If the default permissions should be added to the Lambda function's execution role.

---

##### `batchSize`<sup>Optional</sup> <a name="batchSize" id="@cdklabs/cdk-amazonmq.ActiveMqEventSourceProps.property.batchSize"></a>

```typescript
public readonly batchSize: number;
```

- *Type:* number
- *Default:* 100

source at the time of invoking your function.

Your function receives an
The largest number of records that AWS Lambda will retrieve from your event
event with all the retrieved records.

Valid Range:
* Minimum value of 1
* Maximum value of: 10000

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdklabs/cdk-amazonmq.ActiveMqEventSourceProps.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean
- *Default:* true

If the stream event source mapping should be enabled.

---

##### `maxBatchingWindow`<sup>Optional</sup> <a name="maxBatchingWindow" id="@cdklabs/cdk-amazonmq.ActiveMqEventSourceProps.property.maxBatchingWindow"></a>

```typescript
public readonly maxBatchingWindow: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.millis(500) for Amazon MQ.

The maximum amount of time to gather records before invoking the function.

Maximum of Duration.minutes(5).

> [https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventsourcemapping.html#invocation-eventsourcemapping-batching](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventsourcemapping.html#invocation-eventsourcemapping-batching)

---

##### `broker`<sup>Required</sup> <a name="broker" id="@cdklabs/cdk-amazonmq.ActiveMqEventSourceProps.property.broker"></a>

```typescript
public readonly broker: IActiveMqBrokerDeployment;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment">IActiveMqBrokerDeployment</a>

The ActiveMQ broker deployment to receive messages from.

---

### ActiveMqLdapAuthorization <a name="ActiveMqLdapAuthorization" id="@cdklabs/cdk-amazonmq.ActiveMqLdapAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-amazonmq.ActiveMqLdapAuthorization.Initializer"></a>

```typescript
import { ActiveMqLdapAuthorization } from '@cdklabs/cdk-amazonmq'

const activeMqLdapAuthorization: ActiveMqLdapAuthorization = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqLdapAuthorization.property.hosts">hosts</a></code> | <code>string[]</code> | Sets the location of the LDAP server such as AWS Directory Service for Microsoft Active Directory. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqLdapAuthorization.property.roleBase">roleBase</a></code> | <code>string</code> | The distinguished name of the node in the directory information tree (DIT) to search for roles or groups. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqLdapAuthorization.property.roleSearchMatching">roleSearchMatching</a></code> | <code>string</code> | The LDAP search filter used to find roles within the roleBase. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqLdapAuthorization.property.serviceAccountPassword">serviceAccountPassword</a></code> | <code>aws-cdk-lib.SecretValue</code> | Service account password. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqLdapAuthorization.property.serviceAccountUsername">serviceAccountUsername</a></code> | <code>aws-cdk-lib.SecretValue</code> | Service account username. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqLdapAuthorization.property.userBase">userBase</a></code> | <code>string</code> | Select a particular subtree of the directory information tree (DIT) to search for user entries. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqLdapAuthorization.property.userRoleName">userRoleName</a></code> | <code>string</code> | The name of the LDAP attribute in the user's directory entry for the user's group membership. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqLdapAuthorization.property.userSearchMatching">userSearchMatching</a></code> | <code>string</code> | The LDAP search filter used to find users within the userBase. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqLdapAuthorization.property.roleName">roleName</a></code> | <code>string</code> | The group name attribute in a role entry whose value is the name of that role. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqLdapAuthorization.property.roleSearchSubtree">roleSearchSubtree</a></code> | <code>boolean</code> | The directory search scope for the role. |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqLdapAuthorization.property.userSearchSubtree">userSearchSubtree</a></code> | <code>boolean</code> | The directory search scope for the user. |

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdklabs/cdk-amazonmq.ActiveMqLdapAuthorization.property.hosts"></a>

```typescript
public readonly hosts: string[];
```

- *Type:* string[]

Sets the location of the LDAP server such as AWS Directory Service for Microsoft Active Directory.

Optional failover server.

---

##### `roleBase`<sup>Required</sup> <a name="roleBase" id="@cdklabs/cdk-amazonmq.ActiveMqLdapAuthorization.property.roleBase"></a>

```typescript
public readonly roleBase: string;
```

- *Type:* string

The distinguished name of the node in the directory information tree (DIT) to search for roles or groups.

For example, ou=group, ou=corp, dc=corp, dc=example, dc=com.

---

##### `roleSearchMatching`<sup>Required</sup> <a name="roleSearchMatching" id="@cdklabs/cdk-amazonmq.ActiveMqLdapAuthorization.property.roleSearchMatching"></a>

```typescript
public readonly roleSearchMatching: string;
```

- *Type:* string

The LDAP search filter used to find roles within the roleBase.

The distinguished name of the user matched by userSearchMatching is substituted into the {0} placeholder in the search filter. The client's username is substituted into the {1} placeholder. For example, if you set this option to (member=uid={1}) for the user janedoe, the search filter becomes (member=uid=janedoe) after string substitution. It matches all role entries that have a member attribute equal to uid=janedoe under the subtree selected by the RoleBases.

---

##### `serviceAccountPassword`<sup>Required</sup> <a name="serviceAccountPassword" id="@cdklabs/cdk-amazonmq.ActiveMqLdapAuthorization.property.serviceAccountPassword"></a>

```typescript
public readonly serviceAccountPassword: SecretValue;
```

- *Type:* aws-cdk-lib.SecretValue

Service account password.

A service account is an account in your LDAP server that has access to initiate a connection. For example, cn=admin,dc=corp, dc=example, dc=com.

---

##### `serviceAccountUsername`<sup>Required</sup> <a name="serviceAccountUsername" id="@cdklabs/cdk-amazonmq.ActiveMqLdapAuthorization.property.serviceAccountUsername"></a>

```typescript
public readonly serviceAccountUsername: SecretValue;
```

- *Type:* aws-cdk-lib.SecretValue

Service account username.

A service account is an account in your LDAP server that has access to initiate a connection. For example, cn=admin, ou=corp, dc=corp, dc=example, dc=com.

---

##### `userBase`<sup>Required</sup> <a name="userBase" id="@cdklabs/cdk-amazonmq.ActiveMqLdapAuthorization.property.userBase"></a>

```typescript
public readonly userBase: string;
```

- *Type:* string

Select a particular subtree of the directory information tree (DIT) to search for user entries.

The subtree is specified by a DN, which specifies the base node of the subtree. For example, by setting this option to ou=Users,ou=corp, dc=corp, dc=example, dc=com, the search for user entries is restricted to the subtree beneath ou=Users,ou=corp, dc=corp, dc=example, dc=com.

---

##### `userRoleName`<sup>Required</sup> <a name="userRoleName" id="@cdklabs/cdk-amazonmq.ActiveMqLdapAuthorization.property.userRoleName"></a>

```typescript
public readonly userRoleName: string;
```

- *Type:* string

The name of the LDAP attribute in the user's directory entry for the user's group membership.

In some cases, user roles may be identified by the value of an attribute in the user's directory entry. The UserRoleName option allows you to provide the name of this attribute.

---

##### `userSearchMatching`<sup>Required</sup> <a name="userSearchMatching" id="@cdklabs/cdk-amazonmq.ActiveMqLdapAuthorization.property.userSearchMatching"></a>

```typescript
public readonly userSearchMatching: string;
```

- *Type:* string

The LDAP search filter used to find users within the userBase.

The client's username is substituted into the {0} placeholder in the search filter. For example, if this option is set to (uid={0}) and the received username is janedoe, the search filter becomes (uid=janedoe) after string substitution. It will result in matching an entry like uid=janedoe, ou=Users, ou=corp, dc=corp, dc=example, dc=com.

---

##### `roleName`<sup>Optional</sup> <a name="roleName" id="@cdklabs/cdk-amazonmq.ActiveMqLdapAuthorization.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

The group name attribute in a role entry whose value is the name of that role.

For example, you can specify cn for a group entry's common name. If authentication succeeds, then the user is assigned the the value of the cn attribute for each role entry that they are a member of.

---

##### `roleSearchSubtree`<sup>Optional</sup> <a name="roleSearchSubtree" id="@cdklabs/cdk-amazonmq.ActiveMqLdapAuthorization.property.roleSearchSubtree"></a>

```typescript
public readonly roleSearchSubtree: boolean;
```

- *Type:* boolean

The directory search scope for the role.

If set to true, scope is to search the entire subtree.

---

##### `userSearchSubtree`<sup>Optional</sup> <a name="userSearchSubtree" id="@cdklabs/cdk-amazonmq.ActiveMqLdapAuthorization.property.userSearchSubtree"></a>

```typescript
public readonly userSearchSubtree: boolean;
```

- *Type:* boolean

The directory search scope for the user.

If set to true, scope is to search the entire subtree.

---

### ActiveMqUser <a name="ActiveMqUser" id="@cdklabs/cdk-amazonmq.ActiveMqUser"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-amazonmq.ActiveMqUser.Initializer"></a>

```typescript
import { ActiveMqUser } from '@cdklabs/cdk-amazonmq'

const activeMqUser: ActiveMqUser = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqUser.property.password">password</a></code> | <code>aws-cdk-lib.SecretValue</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqUser.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqUser.property.groups">groups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqUser.property.hasConsoleAccess">hasConsoleAccess</a></code> | <code>boolean</code> | *No description.* |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdklabs/cdk-amazonmq.ActiveMqUser.property.password"></a>

```typescript
public readonly password: SecretValue;
```

- *Type:* aws-cdk-lib.SecretValue

---

##### `username`<sup>Required</sup> <a name="username" id="@cdklabs/cdk-amazonmq.ActiveMqUser.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdklabs/cdk-amazonmq.ActiveMqUser.property.groups"></a>

```typescript
public readonly groups: string[];
```

- *Type:* string[]

---

##### `hasConsoleAccess`<sup>Optional</sup> <a name="hasConsoleAccess" id="@cdklabs/cdk-amazonmq.ActiveMqUser.property.hasConsoleAccess"></a>

```typescript
public readonly hasConsoleAccess: boolean;
```

- *Type:* boolean

---

### Admin <a name="Admin" id="@cdklabs/cdk-amazonmq.Admin"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-amazonmq.Admin.Initializer"></a>

```typescript
import { Admin } from '@cdklabs/cdk-amazonmq'

const admin: Admin = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.Admin.property.password">password</a></code> | <code>aws-cdk-lib.SecretValue</code> | Sets the administrative user password. |
| <code><a href="#@cdklabs/cdk-amazonmq.Admin.property.username">username</a></code> | <code>string</code> | Sets the administrative user name. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdklabs/cdk-amazonmq.Admin.property.password"></a>

```typescript
public readonly password: SecretValue;
```

- *Type:* aws-cdk-lib.SecretValue

Sets the administrative user password.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdklabs/cdk-amazonmq.Admin.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Sets the administrative user name.

---

### BrokerCloudwatchLogsExports <a name="BrokerCloudwatchLogsExports" id="@cdklabs/cdk-amazonmq.BrokerCloudwatchLogsExports"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-amazonmq.BrokerCloudwatchLogsExports.Initializer"></a>

```typescript
import { BrokerCloudwatchLogsExports } from '@cdklabs/cdk-amazonmq'

const brokerCloudwatchLogsExports: BrokerCloudwatchLogsExports = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerCloudwatchLogsExports.property.audit">audit</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerCloudwatchLogsExports.property.channel">channel</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerCloudwatchLogsExports.property.connection">connection</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerCloudwatchLogsExports.property.general">general</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerCloudwatchLogsExports.property.mirroring">mirroring</a></code> | <code>boolean</code> | *No description.* |

---

##### `audit`<sup>Optional</sup> <a name="audit" id="@cdklabs/cdk-amazonmq.BrokerCloudwatchLogsExports.property.audit"></a>

```typescript
public readonly audit: boolean;
```

- *Type:* boolean

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdklabs/cdk-amazonmq.BrokerCloudwatchLogsExports.property.channel"></a>

```typescript
public readonly channel: boolean;
```

- *Type:* boolean

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdklabs/cdk-amazonmq.BrokerCloudwatchLogsExports.property.connection"></a>

```typescript
public readonly connection: boolean;
```

- *Type:* boolean

---

##### `general`<sup>Optional</sup> <a name="general" id="@cdklabs/cdk-amazonmq.BrokerCloudwatchLogsExports.property.general"></a>

```typescript
public readonly general: boolean;
```

- *Type:* boolean

---

##### `mirroring`<sup>Optional</sup> <a name="mirroring" id="@cdklabs/cdk-amazonmq.BrokerCloudwatchLogsExports.property.mirroring"></a>

```typescript
public readonly mirroring: boolean;
```

- *Type:* boolean

---

### BrokerConfigurationAttributes <a name="BrokerConfigurationAttributes" id="@cdklabs/cdk-amazonmq.BrokerConfigurationAttributes"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-amazonmq.BrokerConfigurationAttributes.Initializer"></a>

```typescript
import { BrokerConfigurationAttributes } from '@cdklabs/cdk-amazonmq'

const brokerConfigurationAttributes: BrokerConfigurationAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerConfigurationAttributes.property.revision">revision</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerConfigurationAttributes.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerConfigurationAttributes.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdklabs/cdk-amazonmq.BrokerConfigurationAttributes.property.revision"></a>

```typescript
public readonly revision: number;
```

- *Type:* number

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdklabs/cdk-amazonmq.BrokerConfigurationAttributes.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdklabs/cdk-amazonmq.BrokerConfigurationAttributes.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

### BrokerDeploymentBaseProps <a name="BrokerDeploymentBaseProps" id="@cdklabs/cdk-amazonmq.BrokerDeploymentBaseProps"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-amazonmq.BrokerDeploymentBaseProps.Initializer"></a>

```typescript
import { BrokerDeploymentBaseProps } from '@cdklabs/cdk-amazonmq'

const brokerDeploymentBaseProps: BrokerDeploymentBaseProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentBaseProps.property.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>boolean</code> | Determines whether the broker will undergo a minor version upgrade during the maintenance window. |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentBaseProps.property.instanceType">instanceType</a></code> | <code>aws-cdk-lib.aws_ec2.InstanceType</code> | An instance type to use for the broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentBaseProps.property.publiclyAccessible">publiclyAccessible</a></code> | <code>boolean</code> | Specifies whether the broker is open to public Internet or deployed with endpoints in own VPC. |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentBaseProps.property.brokerName">brokerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentBaseProps.property.cloudwatchLogsRetention">cloudwatchLogsRetention</a></code> | <code>aws-cdk-lib.aws_logs.RetentionDays</code> | Sets the retention days for the broker's CloudWatch LogGroups. |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentBaseProps.property.cloudwatchLogsRetentionRole">cloudwatchLogsRetentionRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentBaseProps.property.key">key</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentBaseProps.property.maintenanceWindowStartTime">maintenanceWindowStartTime</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.MaintenanceWindowStartTime">MaintenanceWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentBaseProps.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | The Security Groups to apply for a non publicly accessible broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentBaseProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC in which create the communication endpoints for a private broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentBaseProps.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | vpcSubnets and vpc are optional. |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentBaseProps.property.deploymentMode">deploymentMode</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentMode">BrokerDeploymentMode</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentBaseProps.property.engine">engine</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.BrokerEngine">BrokerEngine</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentBaseProps.property.users">users</a></code> | <code>aws-cdk-lib.aws_amazonmq.CfnBroker.UserProperty[]</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentBaseProps.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentBaseProps.property.authenticationStrategy">authenticationStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentBaseProps.property.cloudwatchLogsExports">cloudwatchLogsExports</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.BrokerCloudwatchLogsExports">BrokerCloudwatchLogsExports</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentBaseProps.property.configuration">configuration</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.IBrokerConfiguration">IBrokerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentBaseProps.property.defaultPort">defaultPort</a></code> | <code>aws-cdk-lib.aws_ec2.Port</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentBaseProps.property.ldapServerMetadata">ldapServerMetadata</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_amazonmq.CfnBroker.LdapServerMetadataProperty</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentBaseProps.property.storageType">storageType</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.BrokerStorageType">BrokerStorageType</a></code> | *No description.* |

---

##### `autoMinorVersionUpgrade`<sup>Required</sup> <a name="autoMinorVersionUpgrade" id="@cdklabs/cdk-amazonmq.BrokerDeploymentBaseProps.property.autoMinorVersionUpgrade"></a>

```typescript
public readonly autoMinorVersionUpgrade: boolean;
```

- *Type:* boolean
- *Default:* false. No minor version upgrade happens.

Determines whether the broker will undergo a minor version upgrade during the maintenance window.

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdklabs/cdk-amazonmq.BrokerDeploymentBaseProps.property.instanceType"></a>

```typescript
public readonly instanceType: InstanceType;
```

- *Type:* aws-cdk-lib.aws_ec2.InstanceType

An instance type to use for the broker.

Only a subset of available instance types is allowed.

> [https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-instance-types.html](https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-instance-types.html)

---

##### `publiclyAccessible`<sup>Required</sup> <a name="publiclyAccessible" id="@cdklabs/cdk-amazonmq.BrokerDeploymentBaseProps.property.publiclyAccessible"></a>

```typescript
public readonly publiclyAccessible: boolean;
```

- *Type:* boolean

Specifies whether the broker is open to public Internet or deployed with endpoints in own VPC.

---

##### `brokerName`<sup>Optional</sup> <a name="brokerName" id="@cdklabs/cdk-amazonmq.BrokerDeploymentBaseProps.property.brokerName"></a>

```typescript
public readonly brokerName: string;
```

- *Type:* string

---

##### `cloudwatchLogsRetention`<sup>Optional</sup> <a name="cloudwatchLogsRetention" id="@cdklabs/cdk-amazonmq.BrokerDeploymentBaseProps.property.cloudwatchLogsRetention"></a>

```typescript
public readonly cloudwatchLogsRetention: RetentionDays;
```

- *Type:* aws-cdk-lib.aws_logs.RetentionDays
- *Default:* undefined; CloudWatch Log Groups retention is set to never expire

Sets the retention days for the broker's CloudWatch LogGroups.

---

##### `cloudwatchLogsRetentionRole`<sup>Optional</sup> <a name="cloudwatchLogsRetentionRole" id="@cdklabs/cdk-amazonmq.BrokerDeploymentBaseProps.property.cloudwatchLogsRetentionRole"></a>

```typescript
public readonly cloudwatchLogsRetentionRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdklabs/cdk-amazonmq.BrokerDeploymentBaseProps.property.key"></a>

```typescript
public readonly key: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

---

##### `maintenanceWindowStartTime`<sup>Optional</sup> <a name="maintenanceWindowStartTime" id="@cdklabs/cdk-amazonmq.BrokerDeploymentBaseProps.property.maintenanceWindowStartTime"></a>

```typescript
public readonly maintenanceWindowStartTime: MaintenanceWindowStartTime;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.MaintenanceWindowStartTime">MaintenanceWindowStartTime</a>

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdklabs/cdk-amazonmq.BrokerDeploymentBaseProps.property.securityGroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]
- *Default:* undefined. If no VPC is selected then a default VPC's default SG will be used.              Otherwise - a security group will be created.

The Security Groups to apply for a non publicly accessible broker.

NOTE: This needs to be set only if `publiclyAccessible` is true.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdklabs/cdk-amazonmq.BrokerDeploymentBaseProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* undefined. A default VPC will be used

The VPC in which create the communication endpoints for a private broker.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="@cdklabs/cdk-amazonmq.BrokerDeploymentBaseProps.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* undefined. If vpc is present - this attribute must be present.

vpcSubnets and vpc are optional.

But when present - publiclyAccessible attribute must equal false.

---

##### `deploymentMode`<sup>Required</sup> <a name="deploymentMode" id="@cdklabs/cdk-amazonmq.BrokerDeploymentBaseProps.property.deploymentMode"></a>

```typescript
public readonly deploymentMode: BrokerDeploymentMode;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentMode">BrokerDeploymentMode</a>

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdklabs/cdk-amazonmq.BrokerDeploymentBaseProps.property.engine"></a>

```typescript
public readonly engine: BrokerEngine;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.BrokerEngine">BrokerEngine</a>

---

##### `users`<sup>Required</sup> <a name="users" id="@cdklabs/cdk-amazonmq.BrokerDeploymentBaseProps.property.users"></a>

```typescript
public readonly users: UserProperty[];
```

- *Type:* aws-cdk-lib.aws_amazonmq.CfnBroker.UserProperty[]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdklabs/cdk-amazonmq.BrokerDeploymentBaseProps.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `authenticationStrategy`<sup>Optional</sup> <a name="authenticationStrategy" id="@cdklabs/cdk-amazonmq.BrokerDeploymentBaseProps.property.authenticationStrategy"></a>

```typescript
public readonly authenticationStrategy: string;
```

- *Type:* string

---

##### `cloudwatchLogsExports`<sup>Optional</sup> <a name="cloudwatchLogsExports" id="@cdklabs/cdk-amazonmq.BrokerDeploymentBaseProps.property.cloudwatchLogsExports"></a>

```typescript
public readonly cloudwatchLogsExports: BrokerCloudwatchLogsExports;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.BrokerCloudwatchLogsExports">BrokerCloudwatchLogsExports</a>

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdklabs/cdk-amazonmq.BrokerDeploymentBaseProps.property.configuration"></a>

```typescript
public readonly configuration: IBrokerConfiguration;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.IBrokerConfiguration">IBrokerConfiguration</a>

---

##### `defaultPort`<sup>Optional</sup> <a name="defaultPort" id="@cdklabs/cdk-amazonmq.BrokerDeploymentBaseProps.property.defaultPort"></a>

```typescript
public readonly defaultPort: Port;
```

- *Type:* aws-cdk-lib.aws_ec2.Port

---

##### `ldapServerMetadata`<sup>Optional</sup> <a name="ldapServerMetadata" id="@cdklabs/cdk-amazonmq.BrokerDeploymentBaseProps.property.ldapServerMetadata"></a>

```typescript
public readonly ldapServerMetadata: IResolvable | LdapServerMetadataProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_amazonmq.CfnBroker.LdapServerMetadataProperty

---

##### `storageType`<sup>Optional</sup> <a name="storageType" id="@cdklabs/cdk-amazonmq.BrokerDeploymentBaseProps.property.storageType"></a>

```typescript
public readonly storageType: BrokerStorageType;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.BrokerStorageType">BrokerStorageType</a>

---

### BrokerDeploymentProps <a name="BrokerDeploymentProps" id="@cdklabs/cdk-amazonmq.BrokerDeploymentProps"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-amazonmq.BrokerDeploymentProps.Initializer"></a>

```typescript
import { BrokerDeploymentProps } from '@cdklabs/cdk-amazonmq'

const brokerDeploymentProps: BrokerDeploymentProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentProps.property.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>boolean</code> | Determines whether the broker will undergo a minor version upgrade during the maintenance window. |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentProps.property.instanceType">instanceType</a></code> | <code>aws-cdk-lib.aws_ec2.InstanceType</code> | An instance type to use for the broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentProps.property.publiclyAccessible">publiclyAccessible</a></code> | <code>boolean</code> | Specifies whether the broker is open to public Internet or deployed with endpoints in own VPC. |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentProps.property.brokerName">brokerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentProps.property.cloudwatchLogsRetention">cloudwatchLogsRetention</a></code> | <code>aws-cdk-lib.aws_logs.RetentionDays</code> | Sets the retention days for the broker's CloudWatch LogGroups. |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentProps.property.cloudwatchLogsRetentionRole">cloudwatchLogsRetentionRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentProps.property.key">key</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentProps.property.maintenanceWindowStartTime">maintenanceWindowStartTime</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.MaintenanceWindowStartTime">MaintenanceWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentProps.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | The Security Groups to apply for a non publicly accessible broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC in which create the communication endpoints for a private broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentProps.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | vpcSubnets and vpc are optional. |

---

##### `autoMinorVersionUpgrade`<sup>Required</sup> <a name="autoMinorVersionUpgrade" id="@cdklabs/cdk-amazonmq.BrokerDeploymentProps.property.autoMinorVersionUpgrade"></a>

```typescript
public readonly autoMinorVersionUpgrade: boolean;
```

- *Type:* boolean
- *Default:* false. No minor version upgrade happens.

Determines whether the broker will undergo a minor version upgrade during the maintenance window.

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdklabs/cdk-amazonmq.BrokerDeploymentProps.property.instanceType"></a>

```typescript
public readonly instanceType: InstanceType;
```

- *Type:* aws-cdk-lib.aws_ec2.InstanceType

An instance type to use for the broker.

Only a subset of available instance types is allowed.

> [https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-instance-types.html](https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-instance-types.html)

---

##### `publiclyAccessible`<sup>Required</sup> <a name="publiclyAccessible" id="@cdklabs/cdk-amazonmq.BrokerDeploymentProps.property.publiclyAccessible"></a>

```typescript
public readonly publiclyAccessible: boolean;
```

- *Type:* boolean

Specifies whether the broker is open to public Internet or deployed with endpoints in own VPC.

---

##### `brokerName`<sup>Optional</sup> <a name="brokerName" id="@cdklabs/cdk-amazonmq.BrokerDeploymentProps.property.brokerName"></a>

```typescript
public readonly brokerName: string;
```

- *Type:* string

---

##### `cloudwatchLogsRetention`<sup>Optional</sup> <a name="cloudwatchLogsRetention" id="@cdklabs/cdk-amazonmq.BrokerDeploymentProps.property.cloudwatchLogsRetention"></a>

```typescript
public readonly cloudwatchLogsRetention: RetentionDays;
```

- *Type:* aws-cdk-lib.aws_logs.RetentionDays
- *Default:* undefined; CloudWatch Log Groups retention is set to never expire

Sets the retention days for the broker's CloudWatch LogGroups.

---

##### `cloudwatchLogsRetentionRole`<sup>Optional</sup> <a name="cloudwatchLogsRetentionRole" id="@cdklabs/cdk-amazonmq.BrokerDeploymentProps.property.cloudwatchLogsRetentionRole"></a>

```typescript
public readonly cloudwatchLogsRetentionRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdklabs/cdk-amazonmq.BrokerDeploymentProps.property.key"></a>

```typescript
public readonly key: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

---

##### `maintenanceWindowStartTime`<sup>Optional</sup> <a name="maintenanceWindowStartTime" id="@cdklabs/cdk-amazonmq.BrokerDeploymentProps.property.maintenanceWindowStartTime"></a>

```typescript
public readonly maintenanceWindowStartTime: MaintenanceWindowStartTime;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.MaintenanceWindowStartTime">MaintenanceWindowStartTime</a>

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdklabs/cdk-amazonmq.BrokerDeploymentProps.property.securityGroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]
- *Default:* undefined. If no VPC is selected then a default VPC's default SG will be used.              Otherwise - a security group will be created.

The Security Groups to apply for a non publicly accessible broker.

NOTE: This needs to be set only if `publiclyAccessible` is true.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdklabs/cdk-amazonmq.BrokerDeploymentProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* undefined. A default VPC will be used

The VPC in which create the communication endpoints for a private broker.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="@cdklabs/cdk-amazonmq.BrokerDeploymentProps.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* undefined. If vpc is present - this attribute must be present.

vpcSubnets and vpc are optional.

But when present - publiclyAccessible attribute must equal false.

---

### BrokerEndpoint <a name="BrokerEndpoint" id="@cdklabs/cdk-amazonmq.BrokerEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-amazonmq.BrokerEndpoint.Initializer"></a>

```typescript
import { BrokerEndpoint } from '@cdklabs/cdk-amazonmq'

const brokerEndpoint: BrokerEndpoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerEndpoint.property.port">port</a></code> | <code>number</code> | The port at which the endpoint awaits communication. |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerEndpoint.property.url">url</a></code> | <code>string</code> | The full URL of the broker endpoint, including the port. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdklabs/cdk-amazonmq.BrokerEndpoint.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The port at which the endpoint awaits communication.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdklabs/cdk-amazonmq.BrokerEndpoint.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The full URL of the broker endpoint, including the port.

---

### ConfigurationAssociationProps <a name="ConfigurationAssociationProps" id="@cdklabs/cdk-amazonmq.ConfigurationAssociationProps"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-amazonmq.ConfigurationAssociationProps.Initializer"></a>

```typescript
import { ConfigurationAssociationProps } from '@cdklabs/cdk-amazonmq'

const configurationAssociationProps: ConfigurationAssociationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.ConfigurationAssociationProps.property.broker">broker</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.IBrokerDeployment">IBrokerDeployment</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ConfigurationAssociationProps.property.configuration">configuration</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.IBrokerConfiguration">IBrokerConfiguration</a></code> | *No description.* |

---

##### `broker`<sup>Required</sup> <a name="broker" id="@cdklabs/cdk-amazonmq.ConfigurationAssociationProps.property.broker"></a>

```typescript
public readonly broker: IBrokerDeployment;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.IBrokerDeployment">IBrokerDeployment</a>

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdklabs/cdk-amazonmq.ConfigurationAssociationProps.property.configuration"></a>

```typescript
public readonly configuration: IBrokerConfiguration;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.IBrokerConfiguration">IBrokerConfiguration</a>

---

### ConfigurationProps <a name="ConfigurationProps" id="@cdklabs/cdk-amazonmq.ConfigurationProps"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-amazonmq.ConfigurationProps.Initializer"></a>

```typescript
import { ConfigurationProps } from '@cdklabs/cdk-amazonmq'

const configurationProps: ConfigurationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.ConfigurationProps.property.data">data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ConfigurationProps.property.engine">engine</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.BrokerEngine">BrokerEngine</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ConfigurationProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ConfigurationProps.property.authenticationStrategy">authenticationStrategy</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqAuthenticationStrategy">ActiveMqAuthenticationStrategy</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ConfigurationProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ConfigurationProps.property.engineVersion">engineVersion</a></code> | <code>string</code> | *No description.* |

---

##### `data`<sup>Required</sup> <a name="data" id="@cdklabs/cdk-amazonmq.ConfigurationProps.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdklabs/cdk-amazonmq.ConfigurationProps.property.engine"></a>

```typescript
public readonly engine: BrokerEngine;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.BrokerEngine">BrokerEngine</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdklabs/cdk-amazonmq.ConfigurationProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `authenticationStrategy`<sup>Optional</sup> <a name="authenticationStrategy" id="@cdklabs/cdk-amazonmq.ConfigurationProps.property.authenticationStrategy"></a>

```typescript
public readonly authenticationStrategy: ActiveMqAuthenticationStrategy;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.ActiveMqAuthenticationStrategy">ActiveMqAuthenticationStrategy</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdklabs/cdk-amazonmq.ConfigurationProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdklabs/cdk-amazonmq.ConfigurationProps.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

---

### EventSourceBaseProps <a name="EventSourceBaseProps" id="@cdklabs/cdk-amazonmq.EventSourceBaseProps"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-amazonmq.EventSourceBaseProps.Initializer"></a>

```typescript
import { EventSourceBaseProps } from '@cdklabs/cdk-amazonmq'

const eventSourceBaseProps: EventSourceBaseProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.EventSourceBaseProps.property.credentials">credentials</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | A secret with credentials of the user to use when receiving messages. |
| <code><a href="#@cdklabs/cdk-amazonmq.EventSourceBaseProps.property.queueName">queueName</a></code> | <code>string</code> | The name of the queue that the function will receive messages from. |
| <code><a href="#@cdklabs/cdk-amazonmq.EventSourceBaseProps.property.addPermissions">addPermissions</a></code> | <code>boolean</code> | If the default permissions should be added to the Lambda function's execution role. |
| <code><a href="#@cdklabs/cdk-amazonmq.EventSourceBaseProps.property.batchSize">batchSize</a></code> | <code>number</code> | source at the time of invoking your function. |
| <code><a href="#@cdklabs/cdk-amazonmq.EventSourceBaseProps.property.enabled">enabled</a></code> | <code>boolean</code> | If the stream event source mapping should be enabled. |
| <code><a href="#@cdklabs/cdk-amazonmq.EventSourceBaseProps.property.maxBatchingWindow">maxBatchingWindow</a></code> | <code>aws-cdk-lib.Duration</code> | The maximum amount of time to gather records before invoking the function. |
| <code><a href="#@cdklabs/cdk-amazonmq.EventSourceBaseProps.property.broker">broker</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.IBrokerDeployment">IBrokerDeployment</a></code> | The Amazon MQ broker deployment to receive messages from. |

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdklabs/cdk-amazonmq.EventSourceBaseProps.property.credentials"></a>

```typescript
public readonly credentials: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

A secret with credentials of the user to use when receiving messages.

The credentials in the secret have fields required:
 * username
 * password

---

##### `queueName`<sup>Required</sup> <a name="queueName" id="@cdklabs/cdk-amazonmq.EventSourceBaseProps.property.queueName"></a>

```typescript
public readonly queueName: string;
```

- *Type:* string

The name of the queue that the function will receive messages from.

---

##### `addPermissions`<sup>Optional</sup> <a name="addPermissions" id="@cdklabs/cdk-amazonmq.EventSourceBaseProps.property.addPermissions"></a>

```typescript
public readonly addPermissions: boolean;
```

- *Type:* boolean
- *Default:* true

If the default permissions should be added to the Lambda function's execution role.

---

##### `batchSize`<sup>Optional</sup> <a name="batchSize" id="@cdklabs/cdk-amazonmq.EventSourceBaseProps.property.batchSize"></a>

```typescript
public readonly batchSize: number;
```

- *Type:* number
- *Default:* 100

source at the time of invoking your function.

Your function receives an
The largest number of records that AWS Lambda will retrieve from your event
event with all the retrieved records.

Valid Range:
* Minimum value of 1
* Maximum value of: 10000

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdklabs/cdk-amazonmq.EventSourceBaseProps.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean
- *Default:* true

If the stream event source mapping should be enabled.

---

##### `maxBatchingWindow`<sup>Optional</sup> <a name="maxBatchingWindow" id="@cdklabs/cdk-amazonmq.EventSourceBaseProps.property.maxBatchingWindow"></a>

```typescript
public readonly maxBatchingWindow: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.millis(500) for Amazon MQ.

The maximum amount of time to gather records before invoking the function.

Maximum of Duration.minutes(5).

> [https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventsourcemapping.html#invocation-eventsourcemapping-batching](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventsourcemapping.html#invocation-eventsourcemapping-batching)

---

##### `broker`<sup>Required</sup> <a name="broker" id="@cdklabs/cdk-amazonmq.EventSourceBaseProps.property.broker"></a>

```typescript
public readonly broker: IBrokerDeployment;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.IBrokerDeployment">IBrokerDeployment</a>

The Amazon MQ broker deployment to receive messages from.

---

### EventSourceProps <a name="EventSourceProps" id="@cdklabs/cdk-amazonmq.EventSourceProps"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-amazonmq.EventSourceProps.Initializer"></a>

```typescript
import { EventSourceProps } from '@cdklabs/cdk-amazonmq'

const eventSourceProps: EventSourceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.EventSourceProps.property.credentials">credentials</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | A secret with credentials of the user to use when receiving messages. |
| <code><a href="#@cdklabs/cdk-amazonmq.EventSourceProps.property.queueName">queueName</a></code> | <code>string</code> | The name of the queue that the function will receive messages from. |
| <code><a href="#@cdklabs/cdk-amazonmq.EventSourceProps.property.addPermissions">addPermissions</a></code> | <code>boolean</code> | If the default permissions should be added to the Lambda function's execution role. |
| <code><a href="#@cdklabs/cdk-amazonmq.EventSourceProps.property.batchSize">batchSize</a></code> | <code>number</code> | source at the time of invoking your function. |
| <code><a href="#@cdklabs/cdk-amazonmq.EventSourceProps.property.enabled">enabled</a></code> | <code>boolean</code> | If the stream event source mapping should be enabled. |
| <code><a href="#@cdklabs/cdk-amazonmq.EventSourceProps.property.maxBatchingWindow">maxBatchingWindow</a></code> | <code>aws-cdk-lib.Duration</code> | The maximum amount of time to gather records before invoking the function. |

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdklabs/cdk-amazonmq.EventSourceProps.property.credentials"></a>

```typescript
public readonly credentials: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

A secret with credentials of the user to use when receiving messages.

The credentials in the secret have fields required:
 * username
 * password

---

##### `queueName`<sup>Required</sup> <a name="queueName" id="@cdklabs/cdk-amazonmq.EventSourceProps.property.queueName"></a>

```typescript
public readonly queueName: string;
```

- *Type:* string

The name of the queue that the function will receive messages from.

---

##### `addPermissions`<sup>Optional</sup> <a name="addPermissions" id="@cdklabs/cdk-amazonmq.EventSourceProps.property.addPermissions"></a>

```typescript
public readonly addPermissions: boolean;
```

- *Type:* boolean
- *Default:* true

If the default permissions should be added to the Lambda function's execution role.

---

##### `batchSize`<sup>Optional</sup> <a name="batchSize" id="@cdklabs/cdk-amazonmq.EventSourceProps.property.batchSize"></a>

```typescript
public readonly batchSize: number;
```

- *Type:* number
- *Default:* 100

source at the time of invoking your function.

Your function receives an
The largest number of records that AWS Lambda will retrieve from your event
event with all the retrieved records.

Valid Range:
* Minimum value of 1
* Maximum value of: 10000

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdklabs/cdk-amazonmq.EventSourceProps.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean
- *Default:* true

If the stream event source mapping should be enabled.

---

##### `maxBatchingWindow`<sup>Optional</sup> <a name="maxBatchingWindow" id="@cdklabs/cdk-amazonmq.EventSourceProps.property.maxBatchingWindow"></a>

```typescript
public readonly maxBatchingWindow: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.millis(500) for Amazon MQ.

The maximum amount of time to gather records before invoking the function.

Maximum of Duration.minutes(5).

> [https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventsourcemapping.html#invocation-eventsourcemapping-batching](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventsourcemapping.html#invocation-eventsourcemapping-batching)

---

### LdapUserStoreOptions <a name="LdapUserStoreOptions" id="@cdklabs/cdk-amazonmq.LdapUserStoreOptions"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-amazonmq.LdapUserStoreOptions.Initializer"></a>

```typescript
import { LdapUserStoreOptions } from '@cdklabs/cdk-amazonmq'

const ldapUserStoreOptions: LdapUserStoreOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.LdapUserStoreOptions.property.hosts">hosts</a></code> | <code>string[]</code> | Sets the location of the LDAP server such as AWS Directory Service for Microsoft Active Directory. |
| <code><a href="#@cdklabs/cdk-amazonmq.LdapUserStoreOptions.property.roleBase">roleBase</a></code> | <code>string</code> | The distinguished name of the node in the directory information tree (DIT) to search for roles or groups. |
| <code><a href="#@cdklabs/cdk-amazonmq.LdapUserStoreOptions.property.roleSearchMatching">roleSearchMatching</a></code> | <code>string</code> | The LDAP search filter used to find roles within the roleBase. |
| <code><a href="#@cdklabs/cdk-amazonmq.LdapUserStoreOptions.property.serviceAccountPassword">serviceAccountPassword</a></code> | <code>aws-cdk-lib.SecretValue</code> | Service account password. |
| <code><a href="#@cdklabs/cdk-amazonmq.LdapUserStoreOptions.property.serviceAccountUsername">serviceAccountUsername</a></code> | <code>aws-cdk-lib.SecretValue</code> | Service account username. |
| <code><a href="#@cdklabs/cdk-amazonmq.LdapUserStoreOptions.property.userBase">userBase</a></code> | <code>string</code> | Select a particular subtree of the directory information tree (DIT) to search for user entries. |
| <code><a href="#@cdklabs/cdk-amazonmq.LdapUserStoreOptions.property.userRoleName">userRoleName</a></code> | <code>string</code> | The name of the LDAP attribute in the user's directory entry for the user's group membership. |
| <code><a href="#@cdklabs/cdk-amazonmq.LdapUserStoreOptions.property.userSearchMatching">userSearchMatching</a></code> | <code>string</code> | The LDAP search filter used to find users within the userBase. |
| <code><a href="#@cdklabs/cdk-amazonmq.LdapUserStoreOptions.property.roleName">roleName</a></code> | <code>string</code> | The group name attribute in a role entry whose value is the name of that role. |
| <code><a href="#@cdklabs/cdk-amazonmq.LdapUserStoreOptions.property.roleSearchSubtree">roleSearchSubtree</a></code> | <code>boolean</code> | The directory search scope for the role. |
| <code><a href="#@cdklabs/cdk-amazonmq.LdapUserStoreOptions.property.userSearchSubtree">userSearchSubtree</a></code> | <code>boolean</code> | The directory search scope for the user. |

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdklabs/cdk-amazonmq.LdapUserStoreOptions.property.hosts"></a>

```typescript
public readonly hosts: string[];
```

- *Type:* string[]

Sets the location of the LDAP server such as AWS Directory Service for Microsoft Active Directory.

Optional failover server.

---

##### `roleBase`<sup>Required</sup> <a name="roleBase" id="@cdklabs/cdk-amazonmq.LdapUserStoreOptions.property.roleBase"></a>

```typescript
public readonly roleBase: string;
```

- *Type:* string

The distinguished name of the node in the directory information tree (DIT) to search for roles or groups.

For example, ou=group, ou=corp, dc=corp, dc=example, dc=com.

---

##### `roleSearchMatching`<sup>Required</sup> <a name="roleSearchMatching" id="@cdklabs/cdk-amazonmq.LdapUserStoreOptions.property.roleSearchMatching"></a>

```typescript
public readonly roleSearchMatching: string;
```

- *Type:* string

The LDAP search filter used to find roles within the roleBase.

The distinguished name of the user matched by userSearchMatching is substituted into the {0} placeholder in the search filter. The client's username is substituted into the {1} placeholder. For example, if you set this option to (member=uid={1}) for the user janedoe, the search filter becomes (member=uid=janedoe) after string substitution. It matches all role entries that have a member attribute equal to uid=janedoe under the subtree selected by the RoleBases.

---

##### `serviceAccountPassword`<sup>Required</sup> <a name="serviceAccountPassword" id="@cdklabs/cdk-amazonmq.LdapUserStoreOptions.property.serviceAccountPassword"></a>

```typescript
public readonly serviceAccountPassword: SecretValue;
```

- *Type:* aws-cdk-lib.SecretValue

Service account password.

A service account is an account in your LDAP server that has access to initiate a connection. For example, cn=admin,dc=corp, dc=example, dc=com.

---

##### `serviceAccountUsername`<sup>Required</sup> <a name="serviceAccountUsername" id="@cdklabs/cdk-amazonmq.LdapUserStoreOptions.property.serviceAccountUsername"></a>

```typescript
public readonly serviceAccountUsername: SecretValue;
```

- *Type:* aws-cdk-lib.SecretValue

Service account username.

A service account is an account in your LDAP server that has access to initiate a connection. For example, cn=admin, ou=corp, dc=corp, dc=example, dc=com.

---

##### `userBase`<sup>Required</sup> <a name="userBase" id="@cdklabs/cdk-amazonmq.LdapUserStoreOptions.property.userBase"></a>

```typescript
public readonly userBase: string;
```

- *Type:* string

Select a particular subtree of the directory information tree (DIT) to search for user entries.

The subtree is specified by a DN, which specifies the base node of the subtree. For example, by setting this option to ou=Users,ou=corp, dc=corp, dc=example, dc=com, the search for user entries is restricted to the subtree beneath ou=Users,ou=corp, dc=corp, dc=example, dc=com.

---

##### `userRoleName`<sup>Required</sup> <a name="userRoleName" id="@cdklabs/cdk-amazonmq.LdapUserStoreOptions.property.userRoleName"></a>

```typescript
public readonly userRoleName: string;
```

- *Type:* string

The name of the LDAP attribute in the user's directory entry for the user's group membership.

In some cases, user roles may be identified by the value of an attribute in the user's directory entry. The UserRoleName option allows you to provide the name of this attribute.

---

##### `userSearchMatching`<sup>Required</sup> <a name="userSearchMatching" id="@cdklabs/cdk-amazonmq.LdapUserStoreOptions.property.userSearchMatching"></a>

```typescript
public readonly userSearchMatching: string;
```

- *Type:* string

The LDAP search filter used to find users within the userBase.

The client's username is substituted into the {0} placeholder in the search filter. For example, if this option is set to (uid={0}) and the received username is janedoe, the search filter becomes (uid=janedoe) after string substitution. It will result in matching an entry like uid=janedoe, ou=Users, ou=corp, dc=corp, dc=example, dc=com.

---

##### `roleName`<sup>Optional</sup> <a name="roleName" id="@cdklabs/cdk-amazonmq.LdapUserStoreOptions.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

The group name attribute in a role entry whose value is the name of that role.

For example, you can specify cn for a group entry's common name. If authentication succeeds, then the user is assigned the the value of the cn attribute for each role entry that they are a member of.

---

##### `roleSearchSubtree`<sup>Optional</sup> <a name="roleSearchSubtree" id="@cdklabs/cdk-amazonmq.LdapUserStoreOptions.property.roleSearchSubtree"></a>

```typescript
public readonly roleSearchSubtree: boolean;
```

- *Type:* boolean

The directory search scope for the role.

If set to true, scope is to search the entire subtree.

---

##### `userSearchSubtree`<sup>Optional</sup> <a name="userSearchSubtree" id="@cdklabs/cdk-amazonmq.LdapUserStoreOptions.property.userSearchSubtree"></a>

```typescript
public readonly userSearchSubtree: boolean;
```

- *Type:* boolean

The directory search scope for the user.

If set to true, scope is to search the entire subtree.

---

### MaintenanceWindowStartTime <a name="MaintenanceWindowStartTime" id="@cdklabs/cdk-amazonmq.MaintenanceWindowStartTime"></a>

Start time of the weekly, 2-hours time window to apply pending updates or patches to the broker.

#### Initializer <a name="Initializer" id="@cdklabs/cdk-amazonmq.MaintenanceWindowStartTime.Initializer"></a>

```typescript
import { MaintenanceWindowStartTime } from '@cdklabs/cdk-amazonmq'

const maintenanceWindowStartTime: MaintenanceWindowStartTime = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.MaintenanceWindowStartTime.property.dayOfWeek">dayOfWeek</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.DayOfWeek">DayOfWeek</a></code> | The day of the week. |
| <code><a href="#@cdklabs/cdk-amazonmq.MaintenanceWindowStartTime.property.timeOfDay">timeOfDay</a></code> | <code>string</code> | The time, in 24-hour format. |
| <code><a href="#@cdklabs/cdk-amazonmq.MaintenanceWindowStartTime.property.timeZone">timeZone</a></code> | <code>aws-cdk-lib.TimeZone</code> | The time zone. |

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdklabs/cdk-amazonmq.MaintenanceWindowStartTime.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: DayOfWeek;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.DayOfWeek">DayOfWeek</a>

The day of the week.

---

##### `timeOfDay`<sup>Required</sup> <a name="timeOfDay" id="@cdklabs/cdk-amazonmq.MaintenanceWindowStartTime.property.timeOfDay"></a>

```typescript
public readonly timeOfDay: string;
```

- *Type:* string

The time, in 24-hour format.

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdklabs/cdk-amazonmq.MaintenanceWindowStartTime.property.timeZone"></a>

```typescript
public readonly timeZone: TimeZone;
```

- *Type:* aws-cdk-lib.TimeZone

The time zone.

---

### RabbitMqBrokerClusterProps <a name="RabbitMqBrokerClusterProps" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerClusterProps"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerClusterProps.Initializer"></a>

```typescript
import { RabbitMqBrokerClusterProps } from '@cdklabs/cdk-amazonmq'

const rabbitMqBrokerClusterProps: RabbitMqBrokerClusterProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerClusterProps.property.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>boolean</code> | Determines whether the broker will undergo a minor version upgrade during the maintenance window. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerClusterProps.property.instanceType">instanceType</a></code> | <code>aws-cdk-lib.aws_ec2.InstanceType</code> | An instance type to use for the broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerClusterProps.property.publiclyAccessible">publiclyAccessible</a></code> | <code>boolean</code> | Specifies whether the broker is open to public Internet or deployed with endpoints in own VPC. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerClusterProps.property.brokerName">brokerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerClusterProps.property.cloudwatchLogsRetention">cloudwatchLogsRetention</a></code> | <code>aws-cdk-lib.aws_logs.RetentionDays</code> | Sets the retention days for the broker's CloudWatch LogGroups. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerClusterProps.property.cloudwatchLogsRetentionRole">cloudwatchLogsRetentionRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerClusterProps.property.key">key</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerClusterProps.property.maintenanceWindowStartTime">maintenanceWindowStartTime</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.MaintenanceWindowStartTime">MaintenanceWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerClusterProps.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | The Security Groups to apply for a non publicly accessible broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerClusterProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC in which create the communication endpoints for a private broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerClusterProps.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | vpcSubnets and vpc are optional. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerClusterProps.property.admin">admin</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.Admin">Admin</a></code> | Sets the credentials of the broker administrative user. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerClusterProps.property.version">version</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerEngineVersion">RabbitMqBrokerEngineVersion</a></code> | Sets the version of the broker engine. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerClusterProps.property.cloudwatchLogsExports">cloudwatchLogsExports</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqCloudwatchLogsExports">RabbitMqCloudwatchLogsExports</a></code> | Sets the CloudWatch logs exports for the broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerClusterProps.property.configuration">configuration</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerConfiguration">IRabbitMqBrokerConfiguration</a></code> | Sets the configuration of the broker. |

---

##### `autoMinorVersionUpgrade`<sup>Required</sup> <a name="autoMinorVersionUpgrade" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerClusterProps.property.autoMinorVersionUpgrade"></a>

```typescript
public readonly autoMinorVersionUpgrade: boolean;
```

- *Type:* boolean
- *Default:* false. No minor version upgrade happens.

Determines whether the broker will undergo a minor version upgrade during the maintenance window.

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerClusterProps.property.instanceType"></a>

```typescript
public readonly instanceType: InstanceType;
```

- *Type:* aws-cdk-lib.aws_ec2.InstanceType

An instance type to use for the broker.

Only a subset of available instance types is allowed.

> [https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-instance-types.html](https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-instance-types.html)

---

##### `publiclyAccessible`<sup>Required</sup> <a name="publiclyAccessible" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerClusterProps.property.publiclyAccessible"></a>

```typescript
public readonly publiclyAccessible: boolean;
```

- *Type:* boolean

Specifies whether the broker is open to public Internet or deployed with endpoints in own VPC.

---

##### `brokerName`<sup>Optional</sup> <a name="brokerName" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerClusterProps.property.brokerName"></a>

```typescript
public readonly brokerName: string;
```

- *Type:* string

---

##### `cloudwatchLogsRetention`<sup>Optional</sup> <a name="cloudwatchLogsRetention" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerClusterProps.property.cloudwatchLogsRetention"></a>

```typescript
public readonly cloudwatchLogsRetention: RetentionDays;
```

- *Type:* aws-cdk-lib.aws_logs.RetentionDays
- *Default:* undefined; CloudWatch Log Groups retention is set to never expire

Sets the retention days for the broker's CloudWatch LogGroups.

---

##### `cloudwatchLogsRetentionRole`<sup>Optional</sup> <a name="cloudwatchLogsRetentionRole" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerClusterProps.property.cloudwatchLogsRetentionRole"></a>

```typescript
public readonly cloudwatchLogsRetentionRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerClusterProps.property.key"></a>

```typescript
public readonly key: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

---

##### `maintenanceWindowStartTime`<sup>Optional</sup> <a name="maintenanceWindowStartTime" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerClusterProps.property.maintenanceWindowStartTime"></a>

```typescript
public readonly maintenanceWindowStartTime: MaintenanceWindowStartTime;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.MaintenanceWindowStartTime">MaintenanceWindowStartTime</a>

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerClusterProps.property.securityGroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]
- *Default:* undefined. If no VPC is selected then a default VPC's default SG will be used.              Otherwise - a security group will be created.

The Security Groups to apply for a non publicly accessible broker.

NOTE: This needs to be set only if `publiclyAccessible` is true.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerClusterProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* undefined. A default VPC will be used

The VPC in which create the communication endpoints for a private broker.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerClusterProps.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* undefined. If vpc is present - this attribute must be present.

vpcSubnets and vpc are optional.

But when present - publiclyAccessible attribute must equal false.

---

##### `admin`<sup>Required</sup> <a name="admin" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerClusterProps.property.admin"></a>

```typescript
public readonly admin: Admin;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.Admin">Admin</a>

Sets the credentials of the broker administrative user.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerClusterProps.property.version"></a>

```typescript
public readonly version: RabbitMqBrokerEngineVersion;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerEngineVersion">RabbitMqBrokerEngineVersion</a>

Sets the version of the broker engine.

---

##### `cloudwatchLogsExports`<sup>Optional</sup> <a name="cloudwatchLogsExports" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerClusterProps.property.cloudwatchLogsExports"></a>

```typescript
public readonly cloudwatchLogsExports: RabbitMqCloudwatchLogsExports;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.RabbitMqCloudwatchLogsExports">RabbitMqCloudwatchLogsExports</a>

Sets the CloudWatch logs exports for the broker.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerClusterProps.property.configuration"></a>

```typescript
public readonly configuration: IRabbitMqBrokerConfiguration;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerConfiguration">IRabbitMqBrokerConfiguration</a>

Sets the configuration of the broker.

---

### RabbitMqBrokerConfigurationOptions <a name="RabbitMqBrokerConfigurationOptions" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerConfigurationOptions"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerConfigurationOptions.Initializer"></a>

```typescript
import { RabbitMqBrokerConfigurationOptions } from '@cdklabs/cdk-amazonmq'

const rabbitMqBrokerConfigurationOptions: RabbitMqBrokerConfigurationOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerConfigurationOptions.property.definition">definition</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerConfigurationDefinition">RabbitMqBrokerConfigurationDefinition</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerConfigurationOptions.property.description">description</a></code> | <code>string</code> | *No description.* |

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerConfigurationOptions.property.definition"></a>

```typescript
public readonly definition: RabbitMqBrokerConfigurationDefinition;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerConfigurationDefinition">RabbitMqBrokerConfigurationDefinition</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerConfigurationOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

### RabbitMqBrokerConfigurationParameters <a name="RabbitMqBrokerConfigurationParameters" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerConfigurationParameters"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerConfigurationParameters.Initializer"></a>

```typescript
import { RabbitMqBrokerConfigurationParameters } from '@cdklabs/cdk-amazonmq'

const rabbitMqBrokerConfigurationParameters: RabbitMqBrokerConfigurationParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerConfigurationParameters.property.consumerTimeout">consumerTimeout</a></code> | <code>aws-cdk-lib.Duration</code> | *No description.* |

---

##### `consumerTimeout`<sup>Required</sup> <a name="consumerTimeout" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerConfigurationParameters.property.consumerTimeout"></a>

```typescript
public readonly consumerTimeout: Duration;
```

- *Type:* aws-cdk-lib.Duration

---

### RabbitMqBrokerConfigurationProps <a name="RabbitMqBrokerConfigurationProps" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerConfigurationProps"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerConfigurationProps.Initializer"></a>

```typescript
import { RabbitMqBrokerConfigurationProps } from '@cdklabs/cdk-amazonmq'

const rabbitMqBrokerConfigurationProps: RabbitMqBrokerConfigurationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerConfigurationProps.property.definition">definition</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerConfigurationDefinition">RabbitMqBrokerConfigurationDefinition</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerConfigurationProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerConfigurationProps.property.engineVersion">engineVersion</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerEngineVersion">RabbitMqBrokerEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerConfigurationProps.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerConfigurationProps.property.definition"></a>

```typescript
public readonly definition: RabbitMqBrokerConfigurationDefinition;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerConfigurationDefinition">RabbitMqBrokerConfigurationDefinition</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerConfigurationProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerConfigurationProps.property.engineVersion"></a>

```typescript
public readonly engineVersion: RabbitMqBrokerEngineVersion;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerEngineVersion">RabbitMqBrokerEngineVersion</a>

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerConfigurationProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

### RabbitMqBrokerDeploymentBaseProps <a name="RabbitMqBrokerDeploymentBaseProps" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBaseProps"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBaseProps.Initializer"></a>

```typescript
import { RabbitMqBrokerDeploymentBaseProps } from '@cdklabs/cdk-amazonmq'

const rabbitMqBrokerDeploymentBaseProps: RabbitMqBrokerDeploymentBaseProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBaseProps.property.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>boolean</code> | Determines whether the broker will undergo a minor version upgrade during the maintenance window. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBaseProps.property.instanceType">instanceType</a></code> | <code>aws-cdk-lib.aws_ec2.InstanceType</code> | An instance type to use for the broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBaseProps.property.publiclyAccessible">publiclyAccessible</a></code> | <code>boolean</code> | Specifies whether the broker is open to public Internet or deployed with endpoints in own VPC. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBaseProps.property.brokerName">brokerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBaseProps.property.cloudwatchLogsRetention">cloudwatchLogsRetention</a></code> | <code>aws-cdk-lib.aws_logs.RetentionDays</code> | Sets the retention days for the broker's CloudWatch LogGroups. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBaseProps.property.cloudwatchLogsRetentionRole">cloudwatchLogsRetentionRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBaseProps.property.key">key</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBaseProps.property.maintenanceWindowStartTime">maintenanceWindowStartTime</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.MaintenanceWindowStartTime">MaintenanceWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBaseProps.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | The Security Groups to apply for a non publicly accessible broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBaseProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC in which create the communication endpoints for a private broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBaseProps.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | vpcSubnets and vpc are optional. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBaseProps.property.admin">admin</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.Admin">Admin</a></code> | Sets the credentials of the broker administrative user. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBaseProps.property.version">version</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerEngineVersion">RabbitMqBrokerEngineVersion</a></code> | Sets the version of the broker engine. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBaseProps.property.cloudwatchLogsExports">cloudwatchLogsExports</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqCloudwatchLogsExports">RabbitMqCloudwatchLogsExports</a></code> | Sets the CloudWatch logs exports for the broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBaseProps.property.configuration">configuration</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerConfiguration">IRabbitMqBrokerConfiguration</a></code> | Sets the configuration of the broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBaseProps.property.deploymentMode">deploymentMode</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentMode">BrokerDeploymentMode</a></code> | *No description.* |

---

##### `autoMinorVersionUpgrade`<sup>Required</sup> <a name="autoMinorVersionUpgrade" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBaseProps.property.autoMinorVersionUpgrade"></a>

```typescript
public readonly autoMinorVersionUpgrade: boolean;
```

- *Type:* boolean
- *Default:* false. No minor version upgrade happens.

Determines whether the broker will undergo a minor version upgrade during the maintenance window.

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBaseProps.property.instanceType"></a>

```typescript
public readonly instanceType: InstanceType;
```

- *Type:* aws-cdk-lib.aws_ec2.InstanceType

An instance type to use for the broker.

Only a subset of available instance types is allowed.

> [https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-instance-types.html](https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-instance-types.html)

---

##### `publiclyAccessible`<sup>Required</sup> <a name="publiclyAccessible" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBaseProps.property.publiclyAccessible"></a>

```typescript
public readonly publiclyAccessible: boolean;
```

- *Type:* boolean

Specifies whether the broker is open to public Internet or deployed with endpoints in own VPC.

---

##### `brokerName`<sup>Optional</sup> <a name="brokerName" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBaseProps.property.brokerName"></a>

```typescript
public readonly brokerName: string;
```

- *Type:* string

---

##### `cloudwatchLogsRetention`<sup>Optional</sup> <a name="cloudwatchLogsRetention" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBaseProps.property.cloudwatchLogsRetention"></a>

```typescript
public readonly cloudwatchLogsRetention: RetentionDays;
```

- *Type:* aws-cdk-lib.aws_logs.RetentionDays
- *Default:* undefined; CloudWatch Log Groups retention is set to never expire

Sets the retention days for the broker's CloudWatch LogGroups.

---

##### `cloudwatchLogsRetentionRole`<sup>Optional</sup> <a name="cloudwatchLogsRetentionRole" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBaseProps.property.cloudwatchLogsRetentionRole"></a>

```typescript
public readonly cloudwatchLogsRetentionRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBaseProps.property.key"></a>

```typescript
public readonly key: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

---

##### `maintenanceWindowStartTime`<sup>Optional</sup> <a name="maintenanceWindowStartTime" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBaseProps.property.maintenanceWindowStartTime"></a>

```typescript
public readonly maintenanceWindowStartTime: MaintenanceWindowStartTime;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.MaintenanceWindowStartTime">MaintenanceWindowStartTime</a>

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBaseProps.property.securityGroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]
- *Default:* undefined. If no VPC is selected then a default VPC's default SG will be used.              Otherwise - a security group will be created.

The Security Groups to apply for a non publicly accessible broker.

NOTE: This needs to be set only if `publiclyAccessible` is true.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBaseProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* undefined. A default VPC will be used

The VPC in which create the communication endpoints for a private broker.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBaseProps.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* undefined. If vpc is present - this attribute must be present.

vpcSubnets and vpc are optional.

But when present - publiclyAccessible attribute must equal false.

---

##### `admin`<sup>Required</sup> <a name="admin" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBaseProps.property.admin"></a>

```typescript
public readonly admin: Admin;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.Admin">Admin</a>

Sets the credentials of the broker administrative user.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBaseProps.property.version"></a>

```typescript
public readonly version: RabbitMqBrokerEngineVersion;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerEngineVersion">RabbitMqBrokerEngineVersion</a>

Sets the version of the broker engine.

---

##### `cloudwatchLogsExports`<sup>Optional</sup> <a name="cloudwatchLogsExports" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBaseProps.property.cloudwatchLogsExports"></a>

```typescript
public readonly cloudwatchLogsExports: RabbitMqCloudwatchLogsExports;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.RabbitMqCloudwatchLogsExports">RabbitMqCloudwatchLogsExports</a>

Sets the CloudWatch logs exports for the broker.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBaseProps.property.configuration"></a>

```typescript
public readonly configuration: IRabbitMqBrokerConfiguration;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerConfiguration">IRabbitMqBrokerConfiguration</a>

Sets the configuration of the broker.

---

##### `deploymentMode`<sup>Required</sup> <a name="deploymentMode" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBaseProps.property.deploymentMode"></a>

```typescript
public readonly deploymentMode: BrokerDeploymentMode;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentMode">BrokerDeploymentMode</a>

---

### RabbitMqBrokerDeploymentProps <a name="RabbitMqBrokerDeploymentProps" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentProps"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentProps.Initializer"></a>

```typescript
import { RabbitMqBrokerDeploymentProps } from '@cdklabs/cdk-amazonmq'

const rabbitMqBrokerDeploymentProps: RabbitMqBrokerDeploymentProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentProps.property.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>boolean</code> | Determines whether the broker will undergo a minor version upgrade during the maintenance window. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentProps.property.instanceType">instanceType</a></code> | <code>aws-cdk-lib.aws_ec2.InstanceType</code> | An instance type to use for the broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentProps.property.publiclyAccessible">publiclyAccessible</a></code> | <code>boolean</code> | Specifies whether the broker is open to public Internet or deployed with endpoints in own VPC. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentProps.property.brokerName">brokerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentProps.property.cloudwatchLogsRetention">cloudwatchLogsRetention</a></code> | <code>aws-cdk-lib.aws_logs.RetentionDays</code> | Sets the retention days for the broker's CloudWatch LogGroups. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentProps.property.cloudwatchLogsRetentionRole">cloudwatchLogsRetentionRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentProps.property.key">key</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentProps.property.maintenanceWindowStartTime">maintenanceWindowStartTime</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.MaintenanceWindowStartTime">MaintenanceWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentProps.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | The Security Groups to apply for a non publicly accessible broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC in which create the communication endpoints for a private broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentProps.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | vpcSubnets and vpc are optional. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentProps.property.admin">admin</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.Admin">Admin</a></code> | Sets the credentials of the broker administrative user. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentProps.property.version">version</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerEngineVersion">RabbitMqBrokerEngineVersion</a></code> | Sets the version of the broker engine. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentProps.property.cloudwatchLogsExports">cloudwatchLogsExports</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqCloudwatchLogsExports">RabbitMqCloudwatchLogsExports</a></code> | Sets the CloudWatch logs exports for the broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentProps.property.configuration">configuration</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerConfiguration">IRabbitMqBrokerConfiguration</a></code> | Sets the configuration of the broker. |

---

##### `autoMinorVersionUpgrade`<sup>Required</sup> <a name="autoMinorVersionUpgrade" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentProps.property.autoMinorVersionUpgrade"></a>

```typescript
public readonly autoMinorVersionUpgrade: boolean;
```

- *Type:* boolean
- *Default:* false. No minor version upgrade happens.

Determines whether the broker will undergo a minor version upgrade during the maintenance window.

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentProps.property.instanceType"></a>

```typescript
public readonly instanceType: InstanceType;
```

- *Type:* aws-cdk-lib.aws_ec2.InstanceType

An instance type to use for the broker.

Only a subset of available instance types is allowed.

> [https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-instance-types.html](https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-instance-types.html)

---

##### `publiclyAccessible`<sup>Required</sup> <a name="publiclyAccessible" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentProps.property.publiclyAccessible"></a>

```typescript
public readonly publiclyAccessible: boolean;
```

- *Type:* boolean

Specifies whether the broker is open to public Internet or deployed with endpoints in own VPC.

---

##### `brokerName`<sup>Optional</sup> <a name="brokerName" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentProps.property.brokerName"></a>

```typescript
public readonly brokerName: string;
```

- *Type:* string

---

##### `cloudwatchLogsRetention`<sup>Optional</sup> <a name="cloudwatchLogsRetention" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentProps.property.cloudwatchLogsRetention"></a>

```typescript
public readonly cloudwatchLogsRetention: RetentionDays;
```

- *Type:* aws-cdk-lib.aws_logs.RetentionDays
- *Default:* undefined; CloudWatch Log Groups retention is set to never expire

Sets the retention days for the broker's CloudWatch LogGroups.

---

##### `cloudwatchLogsRetentionRole`<sup>Optional</sup> <a name="cloudwatchLogsRetentionRole" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentProps.property.cloudwatchLogsRetentionRole"></a>

```typescript
public readonly cloudwatchLogsRetentionRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentProps.property.key"></a>

```typescript
public readonly key: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

---

##### `maintenanceWindowStartTime`<sup>Optional</sup> <a name="maintenanceWindowStartTime" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentProps.property.maintenanceWindowStartTime"></a>

```typescript
public readonly maintenanceWindowStartTime: MaintenanceWindowStartTime;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.MaintenanceWindowStartTime">MaintenanceWindowStartTime</a>

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentProps.property.securityGroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]
- *Default:* undefined. If no VPC is selected then a default VPC's default SG will be used.              Otherwise - a security group will be created.

The Security Groups to apply for a non publicly accessible broker.

NOTE: This needs to be set only if `publiclyAccessible` is true.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* undefined. A default VPC will be used

The VPC in which create the communication endpoints for a private broker.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentProps.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* undefined. If vpc is present - this attribute must be present.

vpcSubnets and vpc are optional.

But when present - publiclyAccessible attribute must equal false.

---

##### `admin`<sup>Required</sup> <a name="admin" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentProps.property.admin"></a>

```typescript
public readonly admin: Admin;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.Admin">Admin</a>

Sets the credentials of the broker administrative user.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentProps.property.version"></a>

```typescript
public readonly version: RabbitMqBrokerEngineVersion;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerEngineVersion">RabbitMqBrokerEngineVersion</a>

Sets the version of the broker engine.

---

##### `cloudwatchLogsExports`<sup>Optional</sup> <a name="cloudwatchLogsExports" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentProps.property.cloudwatchLogsExports"></a>

```typescript
public readonly cloudwatchLogsExports: RabbitMqCloudwatchLogsExports;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.RabbitMqCloudwatchLogsExports">RabbitMqCloudwatchLogsExports</a>

Sets the CloudWatch logs exports for the broker.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentProps.property.configuration"></a>

```typescript
public readonly configuration: IRabbitMqBrokerConfiguration;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerConfiguration">IRabbitMqBrokerConfiguration</a>

Sets the configuration of the broker.

---

### RabbitMqBrokerEndpoints <a name="RabbitMqBrokerEndpoints" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerEndpoints.Initializer"></a>

```typescript
import { RabbitMqBrokerEndpoints } from '@cdklabs/cdk-amazonmq'

const rabbitMqBrokerEndpoints: RabbitMqBrokerEndpoints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerEndpoints.property.amqp">amqp</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.BrokerEndpoint">BrokerEndpoint</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerEndpoints.property.console">console</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.BrokerEndpoint">BrokerEndpoint</a></code> | *No description.* |

---

##### `amqp`<sup>Required</sup> <a name="amqp" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerEndpoints.property.amqp"></a>

```typescript
public readonly amqp: BrokerEndpoint;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.BrokerEndpoint">BrokerEndpoint</a>

---

##### `console`<sup>Required</sup> <a name="console" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerEndpoints.property.console"></a>

```typescript
public readonly console: BrokerEndpoint;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.BrokerEndpoint">BrokerEndpoint</a>

---

### RabbitMqBrokerInstanceProps <a name="RabbitMqBrokerInstanceProps" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstanceProps"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstanceProps.Initializer"></a>

```typescript
import { RabbitMqBrokerInstanceProps } from '@cdklabs/cdk-amazonmq'

const rabbitMqBrokerInstanceProps: RabbitMqBrokerInstanceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstanceProps.property.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>boolean</code> | Determines whether the broker will undergo a minor version upgrade during the maintenance window. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstanceProps.property.instanceType">instanceType</a></code> | <code>aws-cdk-lib.aws_ec2.InstanceType</code> | An instance type to use for the broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstanceProps.property.publiclyAccessible">publiclyAccessible</a></code> | <code>boolean</code> | Specifies whether the broker is open to public Internet or deployed with endpoints in own VPC. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstanceProps.property.brokerName">brokerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstanceProps.property.cloudwatchLogsRetention">cloudwatchLogsRetention</a></code> | <code>aws-cdk-lib.aws_logs.RetentionDays</code> | Sets the retention days for the broker's CloudWatch LogGroups. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstanceProps.property.cloudwatchLogsRetentionRole">cloudwatchLogsRetentionRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstanceProps.property.key">key</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstanceProps.property.maintenanceWindowStartTime">maintenanceWindowStartTime</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.MaintenanceWindowStartTime">MaintenanceWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstanceProps.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | The Security Groups to apply for a non publicly accessible broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstanceProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC in which create the communication endpoints for a private broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstanceProps.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | vpcSubnets and vpc are optional. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstanceProps.property.admin">admin</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.Admin">Admin</a></code> | Sets the credentials of the broker administrative user. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstanceProps.property.version">version</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerEngineVersion">RabbitMqBrokerEngineVersion</a></code> | Sets the version of the broker engine. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstanceProps.property.cloudwatchLogsExports">cloudwatchLogsExports</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqCloudwatchLogsExports">RabbitMqCloudwatchLogsExports</a></code> | Sets the CloudWatch logs exports for the broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstanceProps.property.configuration">configuration</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerConfiguration">IRabbitMqBrokerConfiguration</a></code> | Sets the configuration of the broker. |

---

##### `autoMinorVersionUpgrade`<sup>Required</sup> <a name="autoMinorVersionUpgrade" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstanceProps.property.autoMinorVersionUpgrade"></a>

```typescript
public readonly autoMinorVersionUpgrade: boolean;
```

- *Type:* boolean
- *Default:* false. No minor version upgrade happens.

Determines whether the broker will undergo a minor version upgrade during the maintenance window.

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstanceProps.property.instanceType"></a>

```typescript
public readonly instanceType: InstanceType;
```

- *Type:* aws-cdk-lib.aws_ec2.InstanceType

An instance type to use for the broker.

Only a subset of available instance types is allowed.

> [https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-instance-types.html](https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-instance-types.html)

---

##### `publiclyAccessible`<sup>Required</sup> <a name="publiclyAccessible" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstanceProps.property.publiclyAccessible"></a>

```typescript
public readonly publiclyAccessible: boolean;
```

- *Type:* boolean

Specifies whether the broker is open to public Internet or deployed with endpoints in own VPC.

---

##### `brokerName`<sup>Optional</sup> <a name="brokerName" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstanceProps.property.brokerName"></a>

```typescript
public readonly brokerName: string;
```

- *Type:* string

---

##### `cloudwatchLogsRetention`<sup>Optional</sup> <a name="cloudwatchLogsRetention" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstanceProps.property.cloudwatchLogsRetention"></a>

```typescript
public readonly cloudwatchLogsRetention: RetentionDays;
```

- *Type:* aws-cdk-lib.aws_logs.RetentionDays
- *Default:* undefined; CloudWatch Log Groups retention is set to never expire

Sets the retention days for the broker's CloudWatch LogGroups.

---

##### `cloudwatchLogsRetentionRole`<sup>Optional</sup> <a name="cloudwatchLogsRetentionRole" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstanceProps.property.cloudwatchLogsRetentionRole"></a>

```typescript
public readonly cloudwatchLogsRetentionRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstanceProps.property.key"></a>

```typescript
public readonly key: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

---

##### `maintenanceWindowStartTime`<sup>Optional</sup> <a name="maintenanceWindowStartTime" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstanceProps.property.maintenanceWindowStartTime"></a>

```typescript
public readonly maintenanceWindowStartTime: MaintenanceWindowStartTime;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.MaintenanceWindowStartTime">MaintenanceWindowStartTime</a>

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstanceProps.property.securityGroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]
- *Default:* undefined. If no VPC is selected then a default VPC's default SG will be used.              Otherwise - a security group will be created.

The Security Groups to apply for a non publicly accessible broker.

NOTE: This needs to be set only if `publiclyAccessible` is true.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstanceProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* undefined. A default VPC will be used

The VPC in which create the communication endpoints for a private broker.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstanceProps.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* undefined. If vpc is present - this attribute must be present.

vpcSubnets and vpc are optional.

But when present - publiclyAccessible attribute must equal false.

---

##### `admin`<sup>Required</sup> <a name="admin" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstanceProps.property.admin"></a>

```typescript
public readonly admin: Admin;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.Admin">Admin</a>

Sets the credentials of the broker administrative user.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstanceProps.property.version"></a>

```typescript
public readonly version: RabbitMqBrokerEngineVersion;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerEngineVersion">RabbitMqBrokerEngineVersion</a>

Sets the version of the broker engine.

---

##### `cloudwatchLogsExports`<sup>Optional</sup> <a name="cloudwatchLogsExports" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstanceProps.property.cloudwatchLogsExports"></a>

```typescript
public readonly cloudwatchLogsExports: RabbitMqCloudwatchLogsExports;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.RabbitMqCloudwatchLogsExports">RabbitMqCloudwatchLogsExports</a>

Sets the CloudWatch logs exports for the broker.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerInstanceProps.property.configuration"></a>

```typescript
public readonly configuration: IRabbitMqBrokerConfiguration;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerConfiguration">IRabbitMqBrokerConfiguration</a>

Sets the configuration of the broker.

---

### RabbitMqCloudwatchLogsExports <a name="RabbitMqCloudwatchLogsExports" id="@cdklabs/cdk-amazonmq.RabbitMqCloudwatchLogsExports"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-amazonmq.RabbitMqCloudwatchLogsExports.Initializer"></a>

```typescript
import { RabbitMqCloudwatchLogsExports } from '@cdklabs/cdk-amazonmq'

const rabbitMqCloudwatchLogsExports: RabbitMqCloudwatchLogsExports = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqCloudwatchLogsExports.property.general">general</a></code> | <code>boolean</code> | Export general logs to CloudWatch. |

---

##### `general`<sup>Optional</sup> <a name="general" id="@cdklabs/cdk-amazonmq.RabbitMqCloudwatchLogsExports.property.general"></a>

```typescript
public readonly general: boolean;
```

- *Type:* boolean
- *Default:* undefined; do not export general logs.

Export general logs to CloudWatch.

---

### RabbitMqEventSourceProps <a name="RabbitMqEventSourceProps" id="@cdklabs/cdk-amazonmq.RabbitMqEventSourceProps"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-amazonmq.RabbitMqEventSourceProps.Initializer"></a>

```typescript
import { RabbitMqEventSourceProps } from '@cdklabs/cdk-amazonmq'

const rabbitMqEventSourceProps: RabbitMqEventSourceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqEventSourceProps.property.credentials">credentials</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | A secret with credentials of the user to use when receiving messages. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqEventSourceProps.property.queueName">queueName</a></code> | <code>string</code> | The name of the queue that the function will receive messages from. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqEventSourceProps.property.addPermissions">addPermissions</a></code> | <code>boolean</code> | If the default permissions should be added to the Lambda function's execution role. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqEventSourceProps.property.batchSize">batchSize</a></code> | <code>number</code> | source at the time of invoking your function. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqEventSourceProps.property.enabled">enabled</a></code> | <code>boolean</code> | If the stream event source mapping should be enabled. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqEventSourceProps.property.maxBatchingWindow">maxBatchingWindow</a></code> | <code>aws-cdk-lib.Duration</code> | The maximum amount of time to gather records before invoking the function. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqEventSourceProps.property.broker">broker</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment">IRabbitMqBrokerDeployment</a></code> | The RabbitMQ broker deployment to receive messages from. |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqEventSourceProps.property.virtualHost">virtualHost</a></code> | <code>string</code> | he name of the RabbitMQ virtual host from which a queue will be the source of messages. |

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdklabs/cdk-amazonmq.RabbitMqEventSourceProps.property.credentials"></a>

```typescript
public readonly credentials: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

A secret with credentials of the user to use when receiving messages.

The credentials in the secret have fields required:
 * username
 * password

---

##### `queueName`<sup>Required</sup> <a name="queueName" id="@cdklabs/cdk-amazonmq.RabbitMqEventSourceProps.property.queueName"></a>

```typescript
public readonly queueName: string;
```

- *Type:* string

The name of the queue that the function will receive messages from.

---

##### `addPermissions`<sup>Optional</sup> <a name="addPermissions" id="@cdklabs/cdk-amazonmq.RabbitMqEventSourceProps.property.addPermissions"></a>

```typescript
public readonly addPermissions: boolean;
```

- *Type:* boolean
- *Default:* true

If the default permissions should be added to the Lambda function's execution role.

---

##### `batchSize`<sup>Optional</sup> <a name="batchSize" id="@cdklabs/cdk-amazonmq.RabbitMqEventSourceProps.property.batchSize"></a>

```typescript
public readonly batchSize: number;
```

- *Type:* number
- *Default:* 100

source at the time of invoking your function.

Your function receives an
The largest number of records that AWS Lambda will retrieve from your event
event with all the retrieved records.

Valid Range:
* Minimum value of 1
* Maximum value of: 10000

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdklabs/cdk-amazonmq.RabbitMqEventSourceProps.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean
- *Default:* true

If the stream event source mapping should be enabled.

---

##### `maxBatchingWindow`<sup>Optional</sup> <a name="maxBatchingWindow" id="@cdklabs/cdk-amazonmq.RabbitMqEventSourceProps.property.maxBatchingWindow"></a>

```typescript
public readonly maxBatchingWindow: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.millis(500) for Amazon MQ.

The maximum amount of time to gather records before invoking the function.

Maximum of Duration.minutes(5).

> [https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventsourcemapping.html#invocation-eventsourcemapping-batching](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventsourcemapping.html#invocation-eventsourcemapping-batching)

---

##### `broker`<sup>Required</sup> <a name="broker" id="@cdklabs/cdk-amazonmq.RabbitMqEventSourceProps.property.broker"></a>

```typescript
public readonly broker: IRabbitMqBrokerDeployment;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment">IRabbitMqBrokerDeployment</a>

The RabbitMQ broker deployment to receive messages from.

---

##### `virtualHost`<sup>Optional</sup> <a name="virtualHost" id="@cdklabs/cdk-amazonmq.RabbitMqEventSourceProps.property.virtualHost"></a>

```typescript
public readonly virtualHost: string;
```

- *Type:* string
- *Default:* the default virtual host '/' will be used.

he name of the RabbitMQ virtual host from which a queue will be the source of messages.

---

### SimpleAuthenticationUserManagementOptions <a name="SimpleAuthenticationUserManagementOptions" id="@cdklabs/cdk-amazonmq.SimpleAuthenticationUserManagementOptions"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-amazonmq.SimpleAuthenticationUserManagementOptions.Initializer"></a>

```typescript
import { SimpleAuthenticationUserManagementOptions } from '@cdklabs/cdk-amazonmq'

const simpleAuthenticationUserManagementOptions: SimpleAuthenticationUserManagementOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.SimpleAuthenticationUserManagementOptions.property.users">users</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqUser">ActiveMqUser</a>[]</code> | *No description.* |

---

##### `users`<sup>Required</sup> <a name="users" id="@cdklabs/cdk-amazonmq.SimpleAuthenticationUserManagementOptions.property.users"></a>

```typescript
public readonly users: ActiveMqUser[];
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.ActiveMqUser">ActiveMqUser</a>[]

---

## Classes <a name="Classes" id="Classes"></a>

### ActiveMqBrokerConfigurationDefinition <a name="ActiveMqBrokerConfigurationDefinition" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerConfigurationDefinition"></a>

#### Initializers <a name="Initializers" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerConfigurationDefinition.Initializer"></a>

```typescript
import { ActiveMqBrokerConfigurationDefinition } from '@cdklabs/cdk-amazonmq'

new ActiveMqBrokerConfigurationDefinition(data: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerConfigurationDefinition.Initializer.parameter.data">data</a></code> | <code>string</code> | *No description.* |

---

##### `data`<sup>Required</sup> <a name="data" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerConfigurationDefinition.Initializer.parameter.data"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerConfigurationDefinition.toString">toString</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerConfigurationDefinition.toString"></a>

```typescript
public toString(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerConfigurationDefinition.data">data</a></code> | *No description.* |

---

##### `data` <a name="data" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerConfigurationDefinition.data"></a>

```typescript
import { ActiveMqBrokerConfigurationDefinition } from '@cdklabs/cdk-amazonmq'

ActiveMqBrokerConfigurationDefinition.data(data: string)
```

###### `data`<sup>Required</sup> <a name="data" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerConfigurationDefinition.data.parameter.data"></a>

- *Type:* string

---



### ActiveMqBrokerEngineVersion <a name="ActiveMqBrokerEngineVersion" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerEngineVersion"></a>

> [ : https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/activemq-version-management.html]( : https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/activemq-version-management.html)

#### Initializers <a name="Initializers" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerEngineVersion.Initializer"></a>

```typescript
import { ActiveMqBrokerEngineVersion } from '@cdklabs/cdk-amazonmq'

new ActiveMqBrokerEngineVersion(version: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerEngineVersion.Initializer.parameter.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `version`<sup>Required</sup> <a name="version" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerEngineVersion.Initializer.parameter.version"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerEngineVersion.toString">toString</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerEngineVersion.toString"></a>

```typescript
public toString(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerEngineVersion.of">of</a></code> | *No description.* |

---

##### `of` <a name="of" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerEngineVersion.of"></a>

```typescript
import { ActiveMqBrokerEngineVersion } from '@cdklabs/cdk-amazonmq'

ActiveMqBrokerEngineVersion.of(version: string)
```

###### `version`<sup>Required</sup> <a name="version" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerEngineVersion.of.parameter.version"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerEngineVersion.property.V5_15_16">V5_15_16</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerEngineVersion">ActiveMqBrokerEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerEngineVersion.property.V5_16_7">V5_16_7</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerEngineVersion">ActiveMqBrokerEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerEngineVersion.property.V5_17_6">V5_17_6</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerEngineVersion">ActiveMqBrokerEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerEngineVersion.property.V5_18">V5_18</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerEngineVersion">ActiveMqBrokerEngineVersion</a></code> | *No description.* |

---

##### `V5_15_16`<sup>Required</sup> <a name="V5_15_16" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerEngineVersion.property.V5_15_16"></a>

```typescript
public readonly V5_15_16: ActiveMqBrokerEngineVersion;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerEngineVersion">ActiveMqBrokerEngineVersion</a>

---

##### `V5_16_7`<sup>Required</sup> <a name="V5_16_7" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerEngineVersion.property.V5_16_7"></a>

```typescript
public readonly V5_16_7: ActiveMqBrokerEngineVersion;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerEngineVersion">ActiveMqBrokerEngineVersion</a>

---

##### `V5_17_6`<sup>Required</sup> <a name="V5_17_6" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerEngineVersion.property.V5_17_6"></a>

```typescript
public readonly V5_17_6: ActiveMqBrokerEngineVersion;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerEngineVersion">ActiveMqBrokerEngineVersion</a>

---

##### `V5_18`<sup>Required</sup> <a name="V5_18" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerEngineVersion.property.V5_18"></a>

```typescript
public readonly V5_18: ActiveMqBrokerEngineVersion;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerEngineVersion">ActiveMqBrokerEngineVersion</a>

---

### ActiveMqBrokerUserManagement <a name="ActiveMqBrokerUserManagement" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerUserManagement"></a>

#### Initializers <a name="Initializers" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerUserManagement.Initializer"></a>

```typescript
import { ActiveMqBrokerUserManagement } from '@cdklabs/cdk-amazonmq'

new ActiveMqBrokerUserManagement()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerUserManagement.ldap">ldap</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerUserManagement.simple">simple</a></code> | *No description.* |

---

##### `ldap` <a name="ldap" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerUserManagement.ldap"></a>

```typescript
import { ActiveMqBrokerUserManagement } from '@cdklabs/cdk-amazonmq'

ActiveMqBrokerUserManagement.ldap(options: LdapUserStoreOptions)
```

###### `options`<sup>Required</sup> <a name="options" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerUserManagement.ldap.parameter.options"></a>

- *Type:* <a href="#@cdklabs/cdk-amazonmq.LdapUserStoreOptions">LdapUserStoreOptions</a>

---

##### `simple` <a name="simple" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerUserManagement.simple"></a>

```typescript
import { ActiveMqBrokerUserManagement } from '@cdklabs/cdk-amazonmq'

ActiveMqBrokerUserManagement.simple(options: SimpleAuthenticationUserManagementOptions)
```

###### `options`<sup>Required</sup> <a name="options" id="@cdklabs/cdk-amazonmq.ActiveMqBrokerUserManagement.simple.parameter.options"></a>

- *Type:* <a href="#@cdklabs/cdk-amazonmq.SimpleAuthenticationUserManagementOptions">SimpleAuthenticationUserManagementOptions</a>

---



### ActiveMqEventSource <a name="ActiveMqEventSource" id="@cdklabs/cdk-amazonmq.ActiveMqEventSource"></a>

- *Implements:* aws-cdk-lib.aws_lambda.IEventSource

Represents an AWS Lambda Event Source Mapping for ActiveMQ.

This event source will add additional permissions to
the AWS Lambda function's IAM Role following https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#events-mq-permissions

#### Initializers <a name="Initializers" id="@cdklabs/cdk-amazonmq.ActiveMqEventSource.Initializer"></a>

```typescript
import { ActiveMqEventSource } from '@cdklabs/cdk-amazonmq'

new ActiveMqEventSource(props: ActiveMqEventSourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqEventSource.Initializer.parameter.props">props</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqEventSourceProps">ActiveMqEventSourceProps</a></code> | properties of the ActiveMQ event source. |

---

##### `props`<sup>Required</sup> <a name="props" id="@cdklabs/cdk-amazonmq.ActiveMqEventSource.Initializer.parameter.props"></a>

- *Type:* <a href="#@cdklabs/cdk-amazonmq.ActiveMqEventSourceProps">ActiveMqEventSourceProps</a>

properties of the ActiveMQ event source.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqEventSource.bind">bind</a></code> | Called by `lambda.addEventSource` to allow the event source to bind to this function. |

---

##### `bind` <a name="bind" id="@cdklabs/cdk-amazonmq.ActiveMqEventSource.bind"></a>

```typescript
public bind(target: IFunction): void
```

Called by `lambda.addEventSource` to allow the event source to bind to this function.

###### `target`<sup>Required</sup> <a name="target" id="@cdklabs/cdk-amazonmq.ActiveMqEventSource.bind.parameter.target"></a>

- *Type:* aws-cdk-lib.aws_lambda.IFunction

---




### EventSourceBase <a name="EventSourceBase" id="@cdklabs/cdk-amazonmq.EventSourceBase"></a>

- *Implements:* aws-cdk-lib.aws_lambda.IEventSource

Represents an AWS Lambda Event Source Mapping for RabbitMQ.

This event source will add additional permissions to
the AWS Lambda function's IAM Role following https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#events-mq-permissions

#### Initializers <a name="Initializers" id="@cdklabs/cdk-amazonmq.EventSourceBase.Initializer"></a>

```typescript
import { EventSourceBase } from '@cdklabs/cdk-amazonmq'

new EventSourceBase(props: EventSourceBaseProps, mqType: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.EventSourceBase.Initializer.parameter.props">props</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.EventSourceBaseProps">EventSourceBaseProps</a></code> | properties of the RabbitMQ event source. |
| <code><a href="#@cdklabs/cdk-amazonmq.EventSourceBase.Initializer.parameter.mqType">mqType</a></code> | <code>string</code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="@cdklabs/cdk-amazonmq.EventSourceBase.Initializer.parameter.props"></a>

- *Type:* <a href="#@cdklabs/cdk-amazonmq.EventSourceBaseProps">EventSourceBaseProps</a>

properties of the RabbitMQ event source.

---

##### `mqType`<sup>Required</sup> <a name="mqType" id="@cdklabs/cdk-amazonmq.EventSourceBase.Initializer.parameter.mqType"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.EventSourceBase.bind">bind</a></code> | Called by `lambda.addEventSource` to allow the event source to bind to this function. |

---

##### `bind` <a name="bind" id="@cdklabs/cdk-amazonmq.EventSourceBase.bind"></a>

```typescript
public bind(target: IFunction): void
```

Called by `lambda.addEventSource` to allow the event source to bind to this function.

###### `target`<sup>Required</sup> <a name="target" id="@cdklabs/cdk-amazonmq.EventSourceBase.bind.parameter.target"></a>

- *Type:* aws-cdk-lib.aws_lambda.IFunction

---




### RabbitMqBrokerConfigurationDefinition <a name="RabbitMqBrokerConfigurationDefinition" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerConfigurationDefinition"></a>

#### Initializers <a name="Initializers" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerConfigurationDefinition.Initializer"></a>

```typescript
import { RabbitMqBrokerConfigurationDefinition } from '@cdklabs/cdk-amazonmq'

new RabbitMqBrokerConfigurationDefinition(data: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerConfigurationDefinition.Initializer.parameter.data">data</a></code> | <code>string</code> | *No description.* |

---

##### `data`<sup>Required</sup> <a name="data" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerConfigurationDefinition.Initializer.parameter.data"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerConfigurationDefinition.toString">toString</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerConfigurationDefinition.toString"></a>

```typescript
public toString(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerConfigurationDefinition.data">data</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerConfigurationDefinition.parameters">parameters</a></code> | *No description.* |

---

##### `data` <a name="data" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerConfigurationDefinition.data"></a>

```typescript
import { RabbitMqBrokerConfigurationDefinition } from '@cdklabs/cdk-amazonmq'

RabbitMqBrokerConfigurationDefinition.data(data: string)
```

###### `data`<sup>Required</sup> <a name="data" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerConfigurationDefinition.data.parameter.data"></a>

- *Type:* string

---

##### `parameters` <a name="parameters" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerConfigurationDefinition.parameters"></a>

```typescript
import { RabbitMqBrokerConfigurationDefinition } from '@cdklabs/cdk-amazonmq'

RabbitMqBrokerConfigurationDefinition.parameters(parameters: RabbitMqBrokerConfigurationParameters)
```

###### `parameters`<sup>Required</sup> <a name="parameters" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerConfigurationDefinition.parameters.parameter.parameters"></a>

- *Type:* <a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerConfigurationParameters">RabbitMqBrokerConfigurationParameters</a>

---



### RabbitMqBrokerEngineVersion <a name="RabbitMqBrokerEngineVersion" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerEngineVersion"></a>

> [ : https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/rabbitmq-version-management.html]( : https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/rabbitmq-version-management.html)

#### Initializers <a name="Initializers" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerEngineVersion.Initializer"></a>

```typescript
import { RabbitMqBrokerEngineVersion } from '@cdklabs/cdk-amazonmq'

new RabbitMqBrokerEngineVersion(version: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerEngineVersion.Initializer.parameter.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `version`<sup>Required</sup> <a name="version" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerEngineVersion.Initializer.parameter.version"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerEngineVersion.toString">toString</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerEngineVersion.toString"></a>

```typescript
public toString(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerEngineVersion.of">of</a></code> | *No description.* |

---

##### `of` <a name="of" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerEngineVersion.of"></a>

```typescript
import { RabbitMqBrokerEngineVersion } from '@cdklabs/cdk-amazonmq'

RabbitMqBrokerEngineVersion.of(version: string)
```

###### `version`<sup>Required</sup> <a name="version" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerEngineVersion.of.parameter.version"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerEngineVersion.property.V3_10_20">V3_10_20</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerEngineVersion">RabbitMqBrokerEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerEngineVersion.property.V3_11_20">V3_11_20</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerEngineVersion">RabbitMqBrokerEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerEngineVersion.property.V3_12_13">V3_12_13</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerEngineVersion">RabbitMqBrokerEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerEngineVersion.property.V3_13">V3_13</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerEngineVersion">RabbitMqBrokerEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerEngineVersion.property.V3_8_34">V3_8_34</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerEngineVersion">RabbitMqBrokerEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerEngineVersion.property.V3_9_27">V3_9_27</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerEngineVersion">RabbitMqBrokerEngineVersion</a></code> | *No description.* |

---

##### `V3_10_20`<sup>Required</sup> <a name="V3_10_20" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerEngineVersion.property.V3_10_20"></a>

```typescript
public readonly V3_10_20: RabbitMqBrokerEngineVersion;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerEngineVersion">RabbitMqBrokerEngineVersion</a>

---

##### `V3_11_20`<sup>Required</sup> <a name="V3_11_20" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerEngineVersion.property.V3_11_20"></a>

```typescript
public readonly V3_11_20: RabbitMqBrokerEngineVersion;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerEngineVersion">RabbitMqBrokerEngineVersion</a>

---

##### `V3_12_13`<sup>Required</sup> <a name="V3_12_13" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerEngineVersion.property.V3_12_13"></a>

```typescript
public readonly V3_12_13: RabbitMqBrokerEngineVersion;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerEngineVersion">RabbitMqBrokerEngineVersion</a>

---

##### `V3_13`<sup>Required</sup> <a name="V3_13" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerEngineVersion.property.V3_13"></a>

```typescript
public readonly V3_13: RabbitMqBrokerEngineVersion;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerEngineVersion">RabbitMqBrokerEngineVersion</a>

---

##### `V3_8_34`<sup>Required</sup> <a name="V3_8_34" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerEngineVersion.property.V3_8_34"></a>

```typescript
public readonly V3_8_34: RabbitMqBrokerEngineVersion;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerEngineVersion">RabbitMqBrokerEngineVersion</a>

---

##### `V3_9_27`<sup>Required</sup> <a name="V3_9_27" id="@cdklabs/cdk-amazonmq.RabbitMqBrokerEngineVersion.property.V3_9_27"></a>

```typescript
public readonly V3_9_27: RabbitMqBrokerEngineVersion;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerEngineVersion">RabbitMqBrokerEngineVersion</a>

---

### RabbitMqEventSource <a name="RabbitMqEventSource" id="@cdklabs/cdk-amazonmq.RabbitMqEventSource"></a>

- *Implements:* aws-cdk-lib.aws_lambda.IEventSource

Represents an AWS Lambda Event Source Mapping for RabbitMQ.

This event source will add additional permissions to
the AWS Lambda function's IAM Role following https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#events-mq-permissions

#### Initializers <a name="Initializers" id="@cdklabs/cdk-amazonmq.RabbitMqEventSource.Initializer"></a>

```typescript
import { RabbitMqEventSource } from '@cdklabs/cdk-amazonmq'

new RabbitMqEventSource(props: RabbitMqEventSourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqEventSource.Initializer.parameter.props">props</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqEventSourceProps">RabbitMqEventSourceProps</a></code> | properties of the RabbitMQ event source. |

---

##### `props`<sup>Required</sup> <a name="props" id="@cdklabs/cdk-amazonmq.RabbitMqEventSource.Initializer.parameter.props"></a>

- *Type:* <a href="#@cdklabs/cdk-amazonmq.RabbitMqEventSourceProps">RabbitMqEventSourceProps</a>

properties of the RabbitMQ event source.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqEventSource.bind">bind</a></code> | Called by `lambda.addEventSource` to allow the event source to bind to this function. |

---

##### `bind` <a name="bind" id="@cdklabs/cdk-amazonmq.RabbitMqEventSource.bind"></a>

```typescript
public bind(target: IFunction): void
```

Called by `lambda.addEventSource` to allow the event source to bind to this function.

###### `target`<sup>Required</sup> <a name="target" id="@cdklabs/cdk-amazonmq.RabbitMqEventSource.bind.parameter.target"></a>

- *Type:* aws-cdk-lib.aws_lambda.IFunction

---




## Protocols <a name="Protocols" id="Protocols"></a>

### IActiveMqBroker <a name="IActiveMqBroker" id="@cdklabs/cdk-amazonmq.IActiveMqBroker"></a>

- *Implemented By:* <a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance">ActiveMqBrokerInstance</a>, <a href="#@cdklabs/cdk-amazonmq.IActiveMqBroker">IActiveMqBroker</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBroker.property.endpoints">endpoints</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerEndpoints">ActiveMqBrokerEndpoints</a></code> | A set of endpoints for the broker. |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBroker.property.ipAddress">ipAddress</a></code> | <code>string</code> | The IP address of the broker. |

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdklabs/cdk-amazonmq.IActiveMqBroker.property.endpoints"></a>

```typescript
public readonly endpoints: ActiveMqBrokerEndpoints;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerEndpoints">ActiveMqBrokerEndpoints</a>

A set of endpoints for the broker.

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdklabs/cdk-amazonmq.IActiveMqBroker.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

The IP address of the broker.

---

### IActiveMqBrokerConfiguration <a name="IActiveMqBrokerConfiguration" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerConfiguration"></a>

- *Extends:* <a href="#@cdklabs/cdk-amazonmq.IBrokerConfiguration">IBrokerConfiguration</a>

- *Implemented By:* <a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerConfiguration">IActiveMqBrokerConfiguration</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerConfiguration.associateWith">associateWith</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerConfiguration.createRevision">createRevision</a></code> | *No description.* |

---

##### `associateWith` <a name="associateWith" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerConfiguration.associateWith"></a>

```typescript
public associateWith(broker: IActiveMqBrokerDeployment): ConfigurationAssociation
```

###### `broker`<sup>Required</sup> <a name="broker" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerConfiguration.associateWith.parameter.broker"></a>

- *Type:* <a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment">IActiveMqBrokerDeployment</a>

---

##### `createRevision` <a name="createRevision" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerConfiguration.createRevision"></a>

```typescript
public createRevision(options: ActiveMqBrokerConfigurationOptions): IActiveMqBrokerConfiguration
```

###### `options`<sup>Required</sup> <a name="options" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerConfiguration.createRevision.parameter.options"></a>

- *Type:* <a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerConfigurationOptions">ActiveMqBrokerConfigurationOptions</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerConfiguration.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerConfiguration.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerConfiguration.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerConfiguration.property.revision">revision</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerConfiguration.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerConfiguration.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerConfiguration.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerConfiguration.property.revision"></a>

```typescript
public readonly revision: number;
```

- *Type:* number

---

### IActiveMqBrokerDeployment <a name="IActiveMqBrokerDeployment" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment"></a>

- *Extends:* aws-cdk-lib.IResource, <a href="#@cdklabs/cdk-amazonmq.IBrokerDeployment">IBrokerDeployment</a>

- *Implemented By:* <a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase">ActiveMqBrokerDeploymentBase</a>, <a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance">ActiveMqBrokerInstance</a>, <a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair">ActiveMqBrokerRedundantPair</a>, <a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment">IActiveMqBrokerDeployment</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricAmqpMaximumConnections">metricAmqpMaximumConnections</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricBurstBalance">metricBurstBalance</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricConsumerCount">metricConsumerCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricCpuCreditBalance">metricCpuCreditBalance</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricCpuUtilization">metricCpuUtilization</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricCurrentConnectionsCount">metricCurrentConnectionsCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricDequeueCount">metricDequeueCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricDispatchCount">metricDispatchCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricEnqueueCount">metricEnqueueCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricEnqueueTime">metricEnqueueTime</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricEstablishedConnectionsCount">metricEstablishedConnectionsCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricExpiredCount">metricExpiredCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricHeapUsage">metricHeapUsage</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricInactiveDurableTopicSubscribersCount">metricInactiveDurableTopicSubscribersCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricInFlightCount">metricInFlightCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricJobSchedulerStorePercentUsage">metricJobSchedulerStorePercentUsage</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricJournalFilesForFastRecovery">metricJournalFilesForFastRecovery</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricJournalFilesForFullRecovery">metricJournalFilesForFullRecovery</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricMemoryUsage">metricMemoryUsage</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricMqttMaximumConnections">metricMqttMaximumConnections</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricNetworkConnectorConnectionCount">metricNetworkConnectorConnectionCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricNetworkIn">metricNetworkIn</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricNetworkOut">metricNetworkOut</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricOpenTransactionCount">metricOpenTransactionCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricOpenwireMaximumConnections">metricOpenwireMaximumConnections</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricProducerCount">metricProducerCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricQueueSize">metricQueueSize</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricReceiveCount">metricReceiveCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricStompMaximumConnections">metricStompMaximumConnections</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricStorePercentUsage">metricStorePercentUsage</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricTempPercentUsage">metricTempPercentUsage</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricTotalConsumerCount">metricTotalConsumerCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricTotalDequeueCount">metricTotalDequeueCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricTotalEnqueueCount">metricTotalEnqueueCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricTotalMessageCount">metricTotalMessageCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricTotalProducerCount">metricTotalProducerCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricVolumeReadOps">metricVolumeReadOps</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricVolumeWriteOps">metricVolumeWriteOps</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricWsMaximumConnections">metricWsMaximumConnections</a></code> | *No description.* |

---

##### `metricAmqpMaximumConnections` <a name="metricAmqpMaximumConnections" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricAmqpMaximumConnections"></a>

```typescript
public metricAmqpMaximumConnections(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricAmqpMaximumConnections.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricBurstBalance` <a name="metricBurstBalance" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricBurstBalance"></a>

```typescript
public metricBurstBalance(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricBurstBalance.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricConsumerCount` <a name="metricConsumerCount" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricConsumerCount"></a>

```typescript
public metricConsumerCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricConsumerCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricCpuCreditBalance` <a name="metricCpuCreditBalance" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricCpuCreditBalance"></a>

```typescript
public metricCpuCreditBalance(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricCpuCreditBalance.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricCpuUtilization` <a name="metricCpuUtilization" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricCpuUtilization"></a>

```typescript
public metricCpuUtilization(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricCpuUtilization.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricCurrentConnectionsCount` <a name="metricCurrentConnectionsCount" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricCurrentConnectionsCount"></a>

```typescript
public metricCurrentConnectionsCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricCurrentConnectionsCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricDequeueCount` <a name="metricDequeueCount" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricDequeueCount"></a>

```typescript
public metricDequeueCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricDequeueCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricDispatchCount` <a name="metricDispatchCount" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricDispatchCount"></a>

```typescript
public metricDispatchCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricDispatchCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricEnqueueCount` <a name="metricEnqueueCount" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricEnqueueCount"></a>

```typescript
public metricEnqueueCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricEnqueueCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricEnqueueTime` <a name="metricEnqueueTime" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricEnqueueTime"></a>

```typescript
public metricEnqueueTime(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricEnqueueTime.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricEstablishedConnectionsCount` <a name="metricEstablishedConnectionsCount" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricEstablishedConnectionsCount"></a>

```typescript
public metricEstablishedConnectionsCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricEstablishedConnectionsCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricExpiredCount` <a name="metricExpiredCount" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricExpiredCount"></a>

```typescript
public metricExpiredCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricExpiredCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricHeapUsage` <a name="metricHeapUsage" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricHeapUsage"></a>

```typescript
public metricHeapUsage(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricHeapUsage.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricInactiveDurableTopicSubscribersCount` <a name="metricInactiveDurableTopicSubscribersCount" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricInactiveDurableTopicSubscribersCount"></a>

```typescript
public metricInactiveDurableTopicSubscribersCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricInactiveDurableTopicSubscribersCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricInFlightCount` <a name="metricInFlightCount" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricInFlightCount"></a>

```typescript
public metricInFlightCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricInFlightCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricJobSchedulerStorePercentUsage` <a name="metricJobSchedulerStorePercentUsage" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricJobSchedulerStorePercentUsage"></a>

```typescript
public metricJobSchedulerStorePercentUsage(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricJobSchedulerStorePercentUsage.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricJournalFilesForFastRecovery` <a name="metricJournalFilesForFastRecovery" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricJournalFilesForFastRecovery"></a>

```typescript
public metricJournalFilesForFastRecovery(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricJournalFilesForFastRecovery.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricJournalFilesForFullRecovery` <a name="metricJournalFilesForFullRecovery" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricJournalFilesForFullRecovery"></a>

```typescript
public metricJournalFilesForFullRecovery(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricJournalFilesForFullRecovery.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricMemoryUsage` <a name="metricMemoryUsage" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricMemoryUsage"></a>

```typescript
public metricMemoryUsage(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricMemoryUsage.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricMqttMaximumConnections` <a name="metricMqttMaximumConnections" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricMqttMaximumConnections"></a>

```typescript
public metricMqttMaximumConnections(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricMqttMaximumConnections.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricNetworkConnectorConnectionCount` <a name="metricNetworkConnectorConnectionCount" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricNetworkConnectorConnectionCount"></a>

```typescript
public metricNetworkConnectorConnectionCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricNetworkConnectorConnectionCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricNetworkIn` <a name="metricNetworkIn" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricNetworkIn"></a>

```typescript
public metricNetworkIn(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricNetworkIn.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricNetworkOut` <a name="metricNetworkOut" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricNetworkOut"></a>

```typescript
public metricNetworkOut(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricNetworkOut.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricOpenTransactionCount` <a name="metricOpenTransactionCount" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricOpenTransactionCount"></a>

```typescript
public metricOpenTransactionCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricOpenTransactionCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricOpenwireMaximumConnections` <a name="metricOpenwireMaximumConnections" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricOpenwireMaximumConnections"></a>

```typescript
public metricOpenwireMaximumConnections(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricOpenwireMaximumConnections.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricProducerCount` <a name="metricProducerCount" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricProducerCount"></a>

```typescript
public metricProducerCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricProducerCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricQueueSize` <a name="metricQueueSize" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricQueueSize"></a>

```typescript
public metricQueueSize(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricQueueSize.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricReceiveCount` <a name="metricReceiveCount" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricReceiveCount"></a>

```typescript
public metricReceiveCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricReceiveCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricStompMaximumConnections` <a name="metricStompMaximumConnections" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricStompMaximumConnections"></a>

```typescript
public metricStompMaximumConnections(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricStompMaximumConnections.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricStorePercentUsage` <a name="metricStorePercentUsage" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricStorePercentUsage"></a>

```typescript
public metricStorePercentUsage(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricStorePercentUsage.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricTempPercentUsage` <a name="metricTempPercentUsage" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricTempPercentUsage"></a>

```typescript
public metricTempPercentUsage(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricTempPercentUsage.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricTotalConsumerCount` <a name="metricTotalConsumerCount" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricTotalConsumerCount"></a>

```typescript
public metricTotalConsumerCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricTotalConsumerCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricTotalDequeueCount` <a name="metricTotalDequeueCount" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricTotalDequeueCount"></a>

```typescript
public metricTotalDequeueCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricTotalDequeueCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricTotalEnqueueCount` <a name="metricTotalEnqueueCount" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricTotalEnqueueCount"></a>

```typescript
public metricTotalEnqueueCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricTotalEnqueueCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricTotalMessageCount` <a name="metricTotalMessageCount" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricTotalMessageCount"></a>

```typescript
public metricTotalMessageCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricTotalMessageCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricTotalProducerCount` <a name="metricTotalProducerCount" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricTotalProducerCount"></a>

```typescript
public metricTotalProducerCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricTotalProducerCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricVolumeReadOps` <a name="metricVolumeReadOps" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricVolumeReadOps"></a>

```typescript
public metricVolumeReadOps(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricVolumeReadOps.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricVolumeWriteOps` <a name="metricVolumeWriteOps" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricVolumeWriteOps"></a>

```typescript
public metricVolumeWriteOps(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricVolumeWriteOps.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricWsMaximumConnections` <a name="metricWsMaximumConnections" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricWsMaximumConnections"></a>

```typescript
public metricWsMaximumConnections(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.metricWsMaximumConnections.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.property.connections">connections</a></code> | <code>aws-cdk-lib.aws_ec2.Connections</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `connections`<sup>Optional</sup> <a name="connections" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* aws-cdk-lib.aws_ec2.Connections

---

### IActiveMqBrokerUserManagement <a name="IActiveMqBrokerUserManagement" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerUserManagement"></a>

- *Implemented By:* <a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerUserManagement">IActiveMqBrokerUserManagement</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerUserManagement.render">render</a></code> | *No description.* |

---

##### `render` <a name="render" id="@cdklabs/cdk-amazonmq.IActiveMqBrokerUserManagement.render"></a>

```typescript
public render(): ActiveMqBrokerDeploymentUserManagementDefinition
```


### IBrokerConfiguration <a name="IBrokerConfiguration" id="@cdklabs/cdk-amazonmq.IBrokerConfiguration"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerConfiguration">ActiveMqBrokerConfiguration</a>, <a href="#@cdklabs/cdk-amazonmq.BrokerConfiguration">BrokerConfiguration</a>, <a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerConfiguration">RabbitMqBrokerConfiguration</a>, <a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerConfiguration">IActiveMqBrokerConfiguration</a>, <a href="#@cdklabs/cdk-amazonmq.IBrokerConfiguration">IBrokerConfiguration</a>, <a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerConfiguration">IRabbitMqBrokerConfiguration</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.IBrokerConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/cdk-amazonmq.IBrokerConfiguration.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@cdklabs/cdk-amazonmq.IBrokerConfiguration.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@cdklabs/cdk-amazonmq.IBrokerConfiguration.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IBrokerConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IBrokerConfiguration.property.revision">revision</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/cdk-amazonmq.IBrokerConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@cdklabs/cdk-amazonmq.IBrokerConfiguration.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@cdklabs/cdk-amazonmq.IBrokerConfiguration.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdklabs/cdk-amazonmq.IBrokerConfiguration.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-amazonmq.IBrokerConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdklabs/cdk-amazonmq.IBrokerConfiguration.property.revision"></a>

```typescript
public readonly revision: number;
```

- *Type:* number

---

### IBrokerDeployment <a name="IBrokerDeployment" id="@cdklabs/cdk-amazonmq.IBrokerDeployment"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerDeploymentBase">ActiveMqBrokerDeploymentBase</a>, <a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerInstance">ActiveMqBrokerInstance</a>, <a href="#@cdklabs/cdk-amazonmq.ActiveMqBrokerRedundantPair">ActiveMqBrokerRedundantPair</a>, <a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentBase">BrokerDeploymentBase</a>, <a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster">RabbitMqBrokerCluster</a>, <a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase">RabbitMqBrokerDeploymentBase</a>, <a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance">RabbitMqBrokerInstance</a>, <a href="#@cdklabs/cdk-amazonmq.IActiveMqBrokerDeployment">IActiveMqBrokerDeployment</a>, <a href="#@cdklabs/cdk-amazonmq.IBrokerDeployment">IBrokerDeployment</a>, <a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment">IRabbitMqBrokerDeployment</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.IBrokerDeployment.metric">metric</a></code> | *No description.* |

---

##### `metric` <a name="metric" id="@cdklabs/cdk-amazonmq.IBrokerDeployment.metric"></a>

```typescript
public metric(metricName: string, options?: MetricOptions): Metric
```

###### `metricName`<sup>Required</sup> <a name="metricName" id="@cdklabs/cdk-amazonmq.IBrokerDeployment.metric.parameter.metricName"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="@cdklabs/cdk-amazonmq.IBrokerDeployment.metric.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.IBrokerDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/cdk-amazonmq.IBrokerDeployment.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@cdklabs/cdk-amazonmq.IBrokerDeployment.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@cdklabs/cdk-amazonmq.IBrokerDeployment.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IBrokerDeployment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IBrokerDeployment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IBrokerDeployment.property.connections">connections</a></code> | <code>aws-cdk-lib.aws_ec2.Connections</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/cdk-amazonmq.IBrokerDeployment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@cdklabs/cdk-amazonmq.IBrokerDeployment.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@cdklabs/cdk-amazonmq.IBrokerDeployment.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdklabs/cdk-amazonmq.IBrokerDeployment.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-amazonmq.IBrokerDeployment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdklabs/cdk-amazonmq.IBrokerDeployment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `connections`<sup>Optional</sup> <a name="connections" id="@cdklabs/cdk-amazonmq.IBrokerDeployment.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* aws-cdk-lib.aws_ec2.Connections

---

### IRabbitMqBroker <a name="IRabbitMqBroker" id="@cdklabs/cdk-amazonmq.IRabbitMqBroker"></a>

- *Implemented By:* <a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster">RabbitMqBrokerCluster</a>, <a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase">RabbitMqBrokerDeploymentBase</a>, <a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance">RabbitMqBrokerInstance</a>, <a href="#@cdklabs/cdk-amazonmq.IRabbitMqBroker">IRabbitMqBroker</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.IRabbitMqBroker.property.endpoints">endpoints</a></code> | <code><a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerEndpoints">RabbitMqBrokerEndpoints</a></code> | *No description.* |

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdklabs/cdk-amazonmq.IRabbitMqBroker.property.endpoints"></a>

```typescript
public readonly endpoints: RabbitMqBrokerEndpoints;
```

- *Type:* <a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerEndpoints">RabbitMqBrokerEndpoints</a>

---

### IRabbitMqBrokerConfiguration <a name="IRabbitMqBrokerConfiguration" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerConfiguration"></a>

- *Extends:* <a href="#@cdklabs/cdk-amazonmq.IBrokerConfiguration">IBrokerConfiguration</a>

- *Implemented By:* <a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerConfiguration">IRabbitMqBrokerConfiguration</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerConfiguration.associateWith">associateWith</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerConfiguration.createRevision">createRevision</a></code> | *No description.* |

---

##### `associateWith` <a name="associateWith" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerConfiguration.associateWith"></a>

```typescript
public associateWith(broker: IRabbitMqBrokerDeployment): ConfigurationAssociation
```

###### `broker`<sup>Required</sup> <a name="broker" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerConfiguration.associateWith.parameter.broker"></a>

- *Type:* <a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment">IRabbitMqBrokerDeployment</a>

---

##### `createRevision` <a name="createRevision" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerConfiguration.createRevision"></a>

```typescript
public createRevision(options: RabbitMqBrokerConfigurationOptions): IRabbitMqBrokerConfiguration
```

###### `options`<sup>Required</sup> <a name="options" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerConfiguration.createRevision.parameter.options"></a>

- *Type:* <a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerConfigurationOptions">RabbitMqBrokerConfigurationOptions</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerConfiguration.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerConfiguration.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerConfiguration.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerConfiguration.property.revision">revision</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerConfiguration.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerConfiguration.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerConfiguration.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerConfiguration.property.revision"></a>

```typescript
public readonly revision: number;
```

- *Type:* number

---

### IRabbitMqBrokerDeployment <a name="IRabbitMqBrokerDeployment" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment"></a>

- *Extends:* aws-cdk-lib.IResource, <a href="#@cdklabs/cdk-amazonmq.IBrokerDeployment">IBrokerDeployment</a>

- *Implemented By:* <a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerCluster">RabbitMqBrokerCluster</a>, <a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerDeploymentBase">RabbitMqBrokerDeploymentBase</a>, <a href="#@cdklabs/cdk-amazonmq.RabbitMqBrokerInstance">RabbitMqBrokerInstance</a>, <a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment">IRabbitMqBrokerDeployment</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricAckRate">metricAckRate</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricChannelCount">metricChannelCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricConfirmRate">metricConfirmRate</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricConnectionCount">metricConnectionCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricConsumerCount">metricConsumerCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricExchangeCount">metricExchangeCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricMessageCount">metricMessageCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricMessageReadyCount">metricMessageReadyCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricMessageUnacknowledgedCount">metricMessageUnacknowledgedCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricPublishRate">metricPublishRate</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricQueueCount">metricQueueCount</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricRabbitMQDiskFree">metricRabbitMQDiskFree</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricRabbitMQDiskFreeLimit">metricRabbitMQDiskFreeLimit</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricRabbitMQFdUsed">metricRabbitMQFdUsed</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricRabbitMQIOReadAverageTime">metricRabbitMQIOReadAverageTime</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricRabbitMQIOWriteAverageTime">metricRabbitMQIOWriteAverageTime</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricRabbitMQMemLimit">metricRabbitMQMemLimit</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricRabbitMQMemUsed">metricRabbitMQMemUsed</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricSystemCpuUtilization">metricSystemCpuUtilization</a></code> | *No description.* |

---

##### `metricAckRate` <a name="metricAckRate" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricAckRate"></a>

```typescript
public metricAckRate(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricAckRate.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricChannelCount` <a name="metricChannelCount" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricChannelCount"></a>

```typescript
public metricChannelCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricChannelCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricConfirmRate` <a name="metricConfirmRate" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricConfirmRate"></a>

```typescript
public metricConfirmRate(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricConfirmRate.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricConnectionCount` <a name="metricConnectionCount" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricConnectionCount"></a>

```typescript
public metricConnectionCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricConnectionCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricConsumerCount` <a name="metricConsumerCount" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricConsumerCount"></a>

```typescript
public metricConsumerCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricConsumerCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricExchangeCount` <a name="metricExchangeCount" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricExchangeCount"></a>

```typescript
public metricExchangeCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricExchangeCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricMessageCount` <a name="metricMessageCount" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricMessageCount"></a>

```typescript
public metricMessageCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricMessageCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricMessageReadyCount` <a name="metricMessageReadyCount" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricMessageReadyCount"></a>

```typescript
public metricMessageReadyCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricMessageReadyCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricMessageUnacknowledgedCount` <a name="metricMessageUnacknowledgedCount" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricMessageUnacknowledgedCount"></a>

```typescript
public metricMessageUnacknowledgedCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricMessageUnacknowledgedCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricPublishRate` <a name="metricPublishRate" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricPublishRate"></a>

```typescript
public metricPublishRate(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricPublishRate.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricQueueCount` <a name="metricQueueCount" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricQueueCount"></a>

```typescript
public metricQueueCount(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricQueueCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricRabbitMQDiskFree` <a name="metricRabbitMQDiskFree" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricRabbitMQDiskFree"></a>

```typescript
public metricRabbitMQDiskFree(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricRabbitMQDiskFree.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricRabbitMQDiskFreeLimit` <a name="metricRabbitMQDiskFreeLimit" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricRabbitMQDiskFreeLimit"></a>

```typescript
public metricRabbitMQDiskFreeLimit(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricRabbitMQDiskFreeLimit.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricRabbitMQFdUsed` <a name="metricRabbitMQFdUsed" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricRabbitMQFdUsed"></a>

```typescript
public metricRabbitMQFdUsed(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricRabbitMQFdUsed.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricRabbitMQIOReadAverageTime` <a name="metricRabbitMQIOReadAverageTime" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricRabbitMQIOReadAverageTime"></a>

```typescript
public metricRabbitMQIOReadAverageTime(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricRabbitMQIOReadAverageTime.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricRabbitMQIOWriteAverageTime` <a name="metricRabbitMQIOWriteAverageTime" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricRabbitMQIOWriteAverageTime"></a>

```typescript
public metricRabbitMQIOWriteAverageTime(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricRabbitMQIOWriteAverageTime.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricRabbitMQMemLimit` <a name="metricRabbitMQMemLimit" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricRabbitMQMemLimit"></a>

```typescript
public metricRabbitMQMemLimit(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricRabbitMQMemLimit.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricRabbitMQMemUsed` <a name="metricRabbitMQMemUsed" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricRabbitMQMemUsed"></a>

```typescript
public metricRabbitMQMemUsed(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricRabbitMQMemUsed.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricSystemCpuUtilization` <a name="metricSystemCpuUtilization" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricSystemCpuUtilization"></a>

```typescript
public metricSystemCpuUtilization(props?: MetricOptions): Metric
```

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.metricSystemCpuUtilization.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.property.connections">connections</a></code> | <code>aws-cdk-lib.aws_ec2.Connections</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `connections`<sup>Optional</sup> <a name="connections" id="@cdklabs/cdk-amazonmq.IRabbitMqBrokerDeployment.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* aws-cdk-lib.aws_ec2.Connections

---

## Enums <a name="Enums" id="Enums"></a>

### ActiveMqAuthenticationStrategy <a name="ActiveMqAuthenticationStrategy" id="@cdklabs/cdk-amazonmq.ActiveMqAuthenticationStrategy"></a>

Amazon MQ for ActiveMQ's authentication strategy.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqAuthenticationStrategy.SIMPLE">SIMPLE</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.ActiveMqAuthenticationStrategy.LDAP">LDAP</a></code> | *No description.* |

---

##### `SIMPLE` <a name="SIMPLE" id="@cdklabs/cdk-amazonmq.ActiveMqAuthenticationStrategy.SIMPLE"></a>

---


##### `LDAP` <a name="LDAP" id="@cdklabs/cdk-amazonmq.ActiveMqAuthenticationStrategy.LDAP"></a>

---


### BrokerDeploymentMode <a name="BrokerDeploymentMode" id="@cdklabs/cdk-amazonmq.BrokerDeploymentMode"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentMode.CLUSTER_MULTI_AZ">CLUSTER_MULTI_AZ</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentMode.SINGLE_INSTANCE">SINGLE_INSTANCE</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerDeploymentMode.ACTIVE_STANDBY_MULTI_AZ">ACTIVE_STANDBY_MULTI_AZ</a></code> | *No description.* |

---

##### `CLUSTER_MULTI_AZ` <a name="CLUSTER_MULTI_AZ" id="@cdklabs/cdk-amazonmq.BrokerDeploymentMode.CLUSTER_MULTI_AZ"></a>

---


##### `SINGLE_INSTANCE` <a name="SINGLE_INSTANCE" id="@cdklabs/cdk-amazonmq.BrokerDeploymentMode.SINGLE_INSTANCE"></a>

---


##### `ACTIVE_STANDBY_MULTI_AZ` <a name="ACTIVE_STANDBY_MULTI_AZ" id="@cdklabs/cdk-amazonmq.BrokerDeploymentMode.ACTIVE_STANDBY_MULTI_AZ"></a>

---


### BrokerEngine <a name="BrokerEngine" id="@cdklabs/cdk-amazonmq.BrokerEngine"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerEngine.RABBITMQ">RABBITMQ</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerEngine.ACTIVEMQ">ACTIVEMQ</a></code> | *No description.* |

---

##### `RABBITMQ` <a name="RABBITMQ" id="@cdklabs/cdk-amazonmq.BrokerEngine.RABBITMQ"></a>

---


##### `ACTIVEMQ` <a name="ACTIVEMQ" id="@cdklabs/cdk-amazonmq.BrokerEngine.ACTIVEMQ"></a>

---


### BrokerStorageType <a name="BrokerStorageType" id="@cdklabs/cdk-amazonmq.BrokerStorageType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerStorageType.EBS">EBS</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.BrokerStorageType.EFS">EFS</a></code> | *No description.* |

---

##### `EBS` <a name="EBS" id="@cdklabs/cdk-amazonmq.BrokerStorageType.EBS"></a>

---


##### `EFS` <a name="EFS" id="@cdklabs/cdk-amazonmq.BrokerStorageType.EFS"></a>

---


### DayOfWeek <a name="DayOfWeek" id="@cdklabs/cdk-amazonmq.DayOfWeek"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-amazonmq.DayOfWeek.MONDAY">MONDAY</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.DayOfWeek.TUESDAY">TUESDAY</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.DayOfWeek.WEDNESDAY">WEDNESDAY</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.DayOfWeek.THURSDAY">THURSDAY</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.DayOfWeek.FRIDAY">FRIDAY</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.DayOfWeek.SATURDAY">SATURDAY</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-amazonmq.DayOfWeek.SUNDAY">SUNDAY</a></code> | *No description.* |

---

##### `MONDAY` <a name="MONDAY" id="@cdklabs/cdk-amazonmq.DayOfWeek.MONDAY"></a>

---


##### `TUESDAY` <a name="TUESDAY" id="@cdklabs/cdk-amazonmq.DayOfWeek.TUESDAY"></a>

---


##### `WEDNESDAY` <a name="WEDNESDAY" id="@cdklabs/cdk-amazonmq.DayOfWeek.WEDNESDAY"></a>

---


##### `THURSDAY` <a name="THURSDAY" id="@cdklabs/cdk-amazonmq.DayOfWeek.THURSDAY"></a>

---


##### `FRIDAY` <a name="FRIDAY" id="@cdklabs/cdk-amazonmq.DayOfWeek.FRIDAY"></a>

---


##### `SATURDAY` <a name="SATURDAY" id="@cdklabs/cdk-amazonmq.DayOfWeek.SATURDAY"></a>

---


##### `SUNDAY` <a name="SUNDAY" id="@cdklabs/cdk-amazonmq.DayOfWeek.SUNDAY"></a>

---

