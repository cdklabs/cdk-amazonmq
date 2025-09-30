/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import { Duration, SecretValue, Stack } from "aws-cdk-lib";
import { Metric, MetricOptions } from "aws-cdk-lib/aws-cloudwatch";
import { InstanceClass, InstanceSize, InstanceType } from "aws-cdk-lib/aws-ec2";
import {
  RabbitMqBrokerEngineVersion,
  RabbitMqBrokerInstance,
  IRabbitMqBrokerDeployment,
} from "../../src";

describe("RabbitMqBrokerDeployment", () => {
  test.each([
    { opts: { period: Duration.minutes(10) } as MetricOptions },
    { opts: undefined },
  ])("RabbitMQ Broker Deployment renders all the metrics", ({ opts }) => {
    const stack = new Stack();

    const broker: IRabbitMqBrokerDeployment = new RabbitMqBrokerInstance(
      stack,
      "TestBroker",
      {
        publiclyAccessible: false,
        version: RabbitMqBrokerEngineVersion.V3_13,
        instanceType: InstanceType.of(InstanceClass.M5, InstanceSize.LARGE),
        admin: {
          username: "username",
          password: SecretValue.unsafePlainText("password"),
        },
        autoMinorVersionUpgrade: false,
      },
    );

    expect(broker.metricExchangeCount(opts)).toBeInstanceOf(Metric);
    expect(broker.metricQueueCount(opts)).toBeInstanceOf(Metric);
    expect(broker.metricConnectionCount(opts)).toBeInstanceOf(Metric);
    expect(broker.metricChannelCount(opts)).toBeInstanceOf(Metric);
    expect(broker.metricConsumerCount(opts)).toBeInstanceOf(Metric);
    expect(broker.metricMessageCount(opts)).toBeInstanceOf(Metric);
    expect(broker.metricMessageReadyCount(opts)).toBeInstanceOf(Metric);
    expect(broker.metricMessageUnacknowledgedCount(opts)).toBeInstanceOf(
      Metric,
    );
    expect(broker.metricPublishRate(opts)).toBeInstanceOf(Metric);
    expect(broker.metricConfirmRate(opts)).toBeInstanceOf(Metric);
    expect(broker.metricAckRate(opts)).toBeInstanceOf(Metric);
    expect(broker.metricSystemCpuUtilization(opts)).toBeInstanceOf(Metric);
    expect(broker.metricRabbitMQMemLimit(opts)).toBeInstanceOf(Metric);
    expect(broker.metricRabbitMQMemUsed(opts)).toBeInstanceOf(Metric);
    expect(broker.metricSystemCpuUtilization(opts)).toBeInstanceOf(Metric);
    expect(broker.metricRabbitMQMemLimit(opts)).toBeInstanceOf(Metric);
    expect(broker.metricRabbitMQMemUsed(opts)).toBeInstanceOf(Metric);
    expect(broker.metricRabbitMQDiskFreeLimit(opts)).toBeInstanceOf(Metric);
    expect(broker.metricRabbitMQDiskFree(opts)).toBeInstanceOf(Metric);
    expect(broker.metricRabbitMQFdUsed(opts)).toBeInstanceOf(Metric);
    expect(broker.metricRabbitMQIOReadAverageTime(opts)).toBeInstanceOf(Metric);
    expect(broker.metricRabbitMQIOWriteAverageTime(opts)).toBeInstanceOf(
      Metric,
    );
  });
});
