/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import { Duration, SecretValue, Stack } from 'aws-cdk-lib';
import { Metric, MetricOptions } from 'aws-cdk-lib/aws-cloudwatch';
import { InstanceClass, InstanceSize, InstanceType } from 'aws-cdk-lib/aws-ec2';
import { ActiveMqBrokerEngineVersion, ActiveMqBrokerInstance, ActiveMqBrokerUserManagement, IActiveMqBrokerDeployment } from '../../src';

describe('ActiveMqBrokerDeployment', () => {

  test.each([
    { opts: { period: Duration.minutes(10) } as MetricOptions },
    { opts: undefined },
  ])('ActiveMQ Broker Deployment renders all the metrics', ({ opts }) => {
    const stack = new Stack(undefined, 'TestStack', { env: { account: '123456789012', region: 'tst-wrld-1' } });

    const broker: IActiveMqBrokerDeployment = new ActiveMqBrokerInstance(stack, 'TestBroker', {
      publiclyAccessible: false,
      version: ActiveMqBrokerEngineVersion.V5_15_16,
      instanceType: InstanceType.of(InstanceClass.M5, InstanceSize.LARGE),
      userManagement: ActiveMqBrokerUserManagement.simple({
        users: [{
          username: 'username',
          password: SecretValue.unsafePlainText('password'),
        }],
      }),
      autoMinorVersionUpgrade: false,
    });

    expect(broker.metricAmqpMaximumConnections(opts)).toBeInstanceOf(Metric);
    expect(broker.metricBurstBalance(opts)).toBeInstanceOf(Metric);
    expect(broker.metricCpuCreditBalance(opts)).toBeInstanceOf(Metric);
    expect(broker.metricCpuUtilization(opts)).toBeInstanceOf(Metric);
    expect(broker.metricCurrentConnectionsCount(opts)).toBeInstanceOf(Metric);
    expect(broker.metricEstablishedConnectionsCount(opts)).toBeInstanceOf(Metric);
    expect(broker.metricHeapUsage(opts)).toBeInstanceOf(Metric);
    expect(broker.metricInactiveDurableTopicSubscribersCount(opts)).toBeInstanceOf(Metric);
    expect(broker.metricJobSchedulerStorePercentUsage(opts)).toBeInstanceOf(Metric);
    expect(broker.metricJournalFilesForFastRecovery(opts)).toBeInstanceOf(Metric);
    expect(broker.metricJournalFilesForFullRecovery(opts)).toBeInstanceOf(Metric);
    expect(broker.metricMqttMaximumConnections(opts)).toBeInstanceOf(Metric);
    expect(broker.metricNetworkConnectorConnectionCount(opts)).toBeInstanceOf(Metric);
    expect(broker.metricNetworkIn(opts)).toBeInstanceOf(Metric);
    expect(broker.metricNetworkOut(opts)).toBeInstanceOf(Metric);
    expect(broker.metricOpenTransactionCount(opts)).toBeInstanceOf(Metric);
    expect(broker.metricOpenwireMaximumConnections(opts)).toBeInstanceOf(Metric);
    expect(broker.metricStompMaximumConnections(opts)).toBeInstanceOf(Metric);
    expect(broker.metricOpenwireMaximumConnections(opts)).toBeInstanceOf(Metric);
    expect(broker.metricStorePercentUsage(opts)).toBeInstanceOf(Metric);
    expect(broker.metricTempPercentUsage(opts)).toBeInstanceOf(Metric);
    expect(broker.metricTotalConsumerCount(opts)).toBeInstanceOf(Metric);
    expect(broker.metricTotalMessageCount(opts)).toBeInstanceOf(Metric);
    expect(broker.metricTotalProducerCount(opts)).toBeInstanceOf(Metric);
    expect(broker.metricVolumeReadOps(opts)).toBeInstanceOf(Metric);
    expect(broker.metricVolumeWriteOps(opts)).toBeInstanceOf(Metric);
    expect(broker.metricWsMaximumConnections(opts)).toBeInstanceOf(Metric);
    expect(broker.metricConsumerCount(opts)).toBeInstanceOf(Metric);
    expect(broker.metricEnqueueCount(opts)).toBeInstanceOf(Metric);
    expect(broker.metricEnqueueTime(opts)).toBeInstanceOf(Metric);
    expect(broker.metricExpiredCount(opts)).toBeInstanceOf(Metric);
    expect(broker.metricDispatchCount(opts)).toBeInstanceOf(Metric);
    expect(broker.metricDequeueCount(opts)).toBeInstanceOf(Metric);
    expect(broker.metricInFlightCount(opts)).toBeInstanceOf(Metric);
    expect(broker.metricReceiveCount(opts)).toBeInstanceOf(Metric);
    expect(broker.metricMemoryUsage(opts)).toBeInstanceOf(Metric);
    expect(broker.metricProducerCount(opts)).toBeInstanceOf(Metric);
    expect(broker.metricQueueSize(opts)).toBeInstanceOf(Metric);
    expect(broker.metricTotalEnqueueCount(opts)).toBeInstanceOf(Metric);
    expect(broker.metricTotalDequeueCount(opts)).toBeInstanceOf(Metric);
  });
});