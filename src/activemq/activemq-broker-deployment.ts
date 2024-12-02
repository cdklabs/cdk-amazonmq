/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import { IResource } from "aws-cdk-lib";
import { Metric, MetricOptions } from "aws-cdk-lib/aws-cloudwatch";
import { Construct } from "constructs";
// import { ActiveMqAuthenticationStrategy } from './activemq-authentication-strategy';
import {
  ActiveMqBrokerConfiguration,
  IActiveMqBrokerConfiguration,
} from "./activemq-broker-configuration";
import { ActiveMqBrokerEngineVersion } from "./activemq-broker-engine-version";
import {
  BrokerDeploymentBase,
  BrokerEngine,
  BrokerDeploymentProps,
  IBrokerDeployment,
} from "../broker-deployment";
import { BrokerDeploymentMode } from "../broker-deployment-mode";
import { IActiveMqBrokerUserManagement } from "./usermanagement/activemq-broker-user-management";
import { ActiveMqLdapValidation } from "./validators/ldap-metadata-validator";

export interface ActiveMqCloudwatchLogsExports {
  /**
   * Export general logs to CloudWatch.
   *
   * @default - undefined; do not export general logs.
   */
  readonly general?: boolean;

  /**
   * Export audit logs to CloudWatch.
   *
   * @default - undefined; do not export audit logs.
   */
  readonly audit?: boolean;
}

export interface ActiveMqBrokerDeploymentProps extends BrokerDeploymentProps {
  /**
   * Sets the User Management option for the Amazon MQ for ActiveMQ broker
   */
  readonly userManagement: IActiveMqBrokerUserManagement;

  /**
   * Sets the version of the Amazon MQ for ActiveMQ broker engine.
   */
  readonly version: ActiveMqBrokerEngineVersion;

  /**
   * Sets the number of days to retain logs for the Amazon MQ for ActiveMQ broker.
   */
  readonly logsRetentionDays?: number;

  /**
   * Sets the CloudWatch Logs exports for the Amazon MQ for ActiveMQ broker.
   *
   * @default - undefined; No logs are exported to CloudWatch.
   */
  readonly cloudwatchLogsExports?: ActiveMqCloudwatchLogsExports;

  /**
   * Sets the configuration of the Amazon MQ for ActiveMQ broker.
   */
  readonly configuration?: IActiveMqBrokerConfiguration;
}

export interface ActiveMqBrokerDeploymentBaseProps
  extends ActiveMqBrokerDeploymentProps {
  readonly deploymentMode: BrokerDeploymentMode;
}

export interface IActiveMqBrokerDeployment
  extends IResource,
    IBrokerDeployment {
  metricAmqpMaximumConnections(props?: MetricOptions): Metric;

  metricBurstBalance(props?: MetricOptions): Metric;

  metricCpuCreditBalance(props?: MetricOptions): Metric;

  metricCpuUtilization(props?: MetricOptions): Metric;

  metricCurrentConnectionsCount(props?: MetricOptions): Metric;

  metricEstablishedConnectionsCount(props?: MetricOptions): Metric;

  metricHeapUsage(props?: MetricOptions): Metric;

  metricInactiveDurableTopicSubscribersCount(props?: MetricOptions): Metric;

  metricJobSchedulerStorePercentUsage(props?: MetricOptions): Metric;

  metricJournalFilesForFastRecovery(props?: MetricOptions): Metric;

  metricJournalFilesForFullRecovery(props?: MetricOptions): Metric;

  metricMqttMaximumConnections(props?: MetricOptions): Metric;

  metricNetworkConnectorConnectionCount(props?: MetricOptions): Metric;

  metricNetworkIn(props?: MetricOptions): Metric;

  metricNetworkOut(props?: MetricOptions): Metric;

  metricOpenTransactionCount(props?: MetricOptions): Metric;

  metricOpenwireMaximumConnections(props?: MetricOptions): Metric;

  metricStompMaximumConnections(props?: MetricOptions): Metric;

  metricStorePercentUsage(props?: MetricOptions): Metric;

  metricTempPercentUsage(props?: MetricOptions): Metric;

  metricTotalConsumerCount(props?: MetricOptions): Metric;

  metricTotalMessageCount(props?: MetricOptions): Metric;

  metricTotalProducerCount(props?: MetricOptions): Metric;

  metricVolumeReadOps(props?: MetricOptions): Metric;

  metricVolumeWriteOps(props?: MetricOptions): Metric;

  metricWsMaximumConnections(props?: MetricOptions): Metric;

  metricConsumerCount(props?: MetricOptions): Metric;

  metricEnqueueCount(props?: MetricOptions): Metric;

  metricEnqueueTime(props?: MetricOptions): Metric;

  metricExpiredCount(props?: MetricOptions): Metric;

  metricDispatchCount(props?: MetricOptions): Metric;

  metricDequeueCount(props?: MetricOptions): Metric;

  metricInFlightCount(props?: MetricOptions): Metric;

  metricReceiveCount(props?: MetricOptions): Metric;

  metricMemoryUsage(props?: MetricOptions): Metric;

  metricProducerCount(props?: MetricOptions): Metric;

  metricQueueSize(props?: MetricOptions): Metric;

  metricTotalEnqueueCount(props?: MetricOptions): Metric;

  metricTotalDequeueCount(props?: MetricOptions): Metric;

  // withConfiguration(id: string, options: ActiveMqBrokerConfigurationOptions): IActiveMqBrokerConfiguration;
}

export abstract class ActiveMqBrokerDeploymentBase
  extends BrokerDeploymentBase
  implements IActiveMqBrokerDeployment
{
  // private readonly engineVersion: ActiveMqBrokerEngineVersion;
  // private readonly authenticationStrategy?: ActiveMqAuthenticationStrategy;

  public get configuration() {
    return this._configuration as IActiveMqBrokerConfiguration;
  }

  constructor(
    scope: Construct,
    id: string,
    props: ActiveMqBrokerDeploymentBaseProps,
  ) {
    const renderedUserManagement = props.userManagement.render();

    super(scope, id, {
      ...renderedUserManagement,
      ...props,
      version: props.version.toString(),
      engine: BrokerEngine.ACTIVEMQ,
    });

    // this.engineVersion = props.version;

    if (renderedUserManagement.ldapServerMetadata) {
      // this.authenticationStrategy = ActiveMqAuthenticationStrategy.LDAP;

      // validate ldap server metadata if present
      this.node.addValidation(
        new ActiveMqLdapValidation({
          config: renderedUserManagement.ldapServerMetadata,
        }),
      );
    }

    this._configuration =
      props.configuration ??
      ActiveMqBrokerConfiguration.fromAttributes(this, "Configuration", {
        id: this._resource.attrConfigurationId,
        revision: this._resource.attrConfigurationRevision,
      });
  }

  // public withConfiguration(id: string, options: ActiveMqBrokerConfigurationOptions): IActiveMqBrokerConfiguration {
  //   const configuration = new ActiveMqBrokerConfiguration(this.node.scope!, id, {
  //     engineVersion: this.engineVersion,
  //     authenticationStrategy: this.authenticationStrategy,
  //     ...options,
  //   });

  //   this._attachConfiguration(configuration);

  //   return configuration;
  // }

  public metricAmqpMaximumConnections(props?: MetricOptions): Metric {
    return this.metric("AmqpMaximumConnections", props);
  }

  public metricBurstBalance(props?: MetricOptions): Metric {
    return this.metric("BurstBalance", props);
  }

  public metricCpuCreditBalance(props?: MetricOptions): Metric {
    return this.metric("CpuCreditBalance", props);
  }

  public metricCpuUtilization(props?: MetricOptions): Metric {
    return this.metric("CpuUtilization", props);
  }

  public metricCurrentConnectionsCount(props?: MetricOptions): Metric {
    return this.metric("CurrentConnectionsCount", props);
  }

  public metricEstablishedConnectionsCount(props?: MetricOptions): Metric {
    return this.metric("EstablishedConnectionsCount", props);
  }

  public metricHeapUsage(props?: MetricOptions): Metric {
    return this.metric("HeapUsage", props);
  }

  public metricInactiveDurableTopicSubscribersCount(
    props?: MetricOptions,
  ): Metric {
    return this.metric("InactiveDurableTopicSubscribersCount", props);
  }

  public metricJobSchedulerStorePercentUsage(props?: MetricOptions): Metric {
    return this.metric("JobSchedulerStorePercentUsage", props);
  }

  public metricJournalFilesForFastRecovery(props?: MetricOptions): Metric {
    return this.metric("JobSchedulerStorePercentUsage", props);
  }

  public metricJournalFilesForFullRecovery(props?: MetricOptions): Metric {
    return this.metric("JournalFilesForFullRecovery", props);
  }

  public metricMqttMaximumConnections(props?: MetricOptions): Metric {
    return this.metric("MqttMaximumConnections", props);
  }

  public metricNetworkConnectorConnectionCount(props?: MetricOptions): Metric {
    return this.metric("NetworkConnectorConnectionCount", props);
  }

  public metricNetworkIn(props?: MetricOptions): Metric {
    return this.metric("NetworkIn", props);
  }

  public metricNetworkOut(props?: MetricOptions): Metric {
    return this.metric("NetworkOut", props);
  }

  public metricOpenTransactionCount(props?: MetricOptions): Metric {
    return this.metric("OpenTransactionCount", props);
  }

  public metricOpenwireMaximumConnections(props?: MetricOptions): Metric {
    return this.metric("OpenwireMaximumConnections", props);
  }

  public metricStompMaximumConnections(props?: MetricOptions): Metric {
    return this.metric("StompMaximumConnections", props);
  }

  public metricStorePercentUsage(props?: MetricOptions): Metric {
    return this.metric("StorePercentUsage", props);
  }

  public metricTempPercentUsage(props?: MetricOptions): Metric {
    return this.metric("TempPercentUsage", props);
  }

  public metricTotalConsumerCount(props?: MetricOptions): Metric {
    return this.metric("TotalConsumerCount", props);
  }

  public metricTotalMessageCount(props?: MetricOptions): Metric {
    return this.metric("TotalMessageCount", props);
  }

  public metricTotalProducerCount(props?: MetricOptions): Metric {
    return this.metric("TotalProducerCount", props);
  }

  public metricVolumeReadOps(props?: MetricOptions): Metric {
    return this.metric("VolumeReadOps", props);
  }

  public metricVolumeWriteOps(props?: MetricOptions): Metric {
    return this.metric("VolumeWriteOps", props);
  }

  public metricWsMaximumConnections(props?: MetricOptions): Metric {
    return this.metric("WsMaximumConnections", props);
  }

  public metricConsumerCount(props?: MetricOptions): Metric {
    return this.metric("ConsumerCount", props);
  }

  public metricEnqueueCount(props?: MetricOptions): Metric {
    return this.metric("EnqueueCount", props);
  }

  public metricEnqueueTime(props?: MetricOptions): Metric {
    return this.metric("EnqueueTime", props);
  }

  public metricExpiredCount(props?: MetricOptions): Metric {
    return this.metric("ExpiredCount", props);
  }

  public metricDispatchCount(props?: MetricOptions): Metric {
    return this.metric("DispatchCount", props);
  }

  public metricDequeueCount(props?: MetricOptions): Metric {
    return this.metric("DequeueCount", props);
  }

  public metricInFlightCount(props?: MetricOptions): Metric {
    return this.metric("InFlightCount", props);
  }

  public metricReceiveCount(props?: MetricOptions): Metric {
    return this.metric("ReceiveCount", props);
  }

  public metricMemoryUsage(props?: MetricOptions): Metric {
    return this.metric("MemoryUsage", props);
  }

  public metricProducerCount(props?: MetricOptions): Metric {
    return this.metric("ProducerCount", props);
  }

  public metricQueueSize(props?: MetricOptions): Metric {
    return this.metric("QueueSize", props);
  }

  public metricTotalEnqueueCount(props?: MetricOptions): Metric {
    return this.metric("TotalEnqueueCount", props);
  }

  public metricTotalDequeueCount(props?: MetricOptions): Metric {
    return this.metric("TotalDequeueCount", props);
  }
}
