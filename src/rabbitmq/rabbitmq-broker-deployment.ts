/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import {
  Arn,
  ArnFormat,
  Aws,
  Fn,
  IResource,
  Resource,
  Stack,
  Token,
} from "aws-cdk-lib";
import { Metric, MetricOptions } from "aws-cdk-lib/aws-cloudwatch";
import { Connections, ISecurityGroup, Port } from "aws-cdk-lib/aws-ec2";
import { Construct } from "constructs";
import { Admin } from "./admin";
import { IRabbitMqBroker } from "./rabbitmq-broker";
import {
  IRabbitMqBrokerConfiguration,
  RabbitMqBrokerConfiguration,
} from "./rabbitmq-broker-configuration";
import { RabbitMqBrokerEndpoints } from "./rabbitmq-broker-endpoints";
import { RabbitMqBrokerEngineVersion } from "./rabbitmq-broker-engine-version";
import {
  BrokerDeploymentBase,
  BrokerEngine,
  BrokerDeploymentProps,
  IBrokerDeployment,
} from "../broker-deployment";
import { BrokerDeploymentMode } from "../broker-deployment-mode";

export interface RabbitMqCloudwatchLogsExports {
  /**
   * Export general logs to CloudWatch.
   *
   * @default - undefined; do not export general logs.
   */
  readonly general?: boolean;
}

export interface RabbitMqBrokerDeploymentProps extends BrokerDeploymentProps {
  /**
   * Sets the credentials of the broker administrative user.
   */
  readonly admin: Admin;

  /**
   * Sets the version of the broker engine.
   */
  readonly version: RabbitMqBrokerEngineVersion;

  /**
   * Sets the configuration of the broker.
   */
  readonly configuration?: IRabbitMqBrokerConfiguration;

  /**
   * Sets the CloudWatch logs exports for the broker.
   */
  readonly cloudwatchLogsExports?: RabbitMqCloudwatchLogsExports;
}

export interface RabbitMqBrokerDeploymentBaseProps
  extends RabbitMqBrokerDeploymentProps {
  readonly deploymentMode: BrokerDeploymentMode;
}

export interface IRabbitMqBrokerDeployment
  extends IResource,
    IBrokerDeployment {
  metricExchangeCount(props?: MetricOptions): Metric;

  metricQueueCount(props?: MetricOptions): Metric;

  metricConnectionCount(props?: MetricOptions): Metric;

  metricChannelCount(props?: MetricOptions): Metric;

  metricConsumerCount(props?: MetricOptions): Metric;

  metricMessageCount(props?: MetricOptions): Metric;

  metricMessageReadyCount(props?: MetricOptions): Metric;

  metricMessageUnacknowledgedCount(props?: MetricOptions): Metric;

  metricPublishRate(props?: MetricOptions): Metric;

  metricConfirmRate(props?: MetricOptions): Metric;

  metricAckRate(props?: MetricOptions): Metric;

  metricSystemCpuUtilization(props?: MetricOptions): Metric;

  metricRabbitMQMemLimit(props?: MetricOptions): Metric;

  metricRabbitMQMemUsed(props?: MetricOptions): Metric;

  metricSystemCpuUtilization(props?: MetricOptions): Metric;

  metricRabbitMQMemLimit(props?: MetricOptions): Metric;

  metricRabbitMQMemUsed(props?: MetricOptions): Metric;

  metricRabbitMQDiskFreeLimit(props?: MetricOptions): Metric;

  metricRabbitMQDiskFree(props?: MetricOptions): Metric;

  metricRabbitMQFdUsed(props?: MetricOptions): Metric;

  metricRabbitMQIOReadAverageTime(props?: MetricOptions): Metric;

  metricRabbitMQIOWriteAverageTime(props?: MetricOptions): Metric;
}

export abstract class RabbitMqBrokerDeploymentBase
  extends BrokerDeploymentBase
  implements IRabbitMqBrokerDeployment, IRabbitMqBroker
{
  /**
   *
   * @internal
   */
  protected static _fromRabbitMqBrokerDeploymentAttributes(
    scope: Construct,
    logicalId: string,
    arn?: string,
    name?: string,
    id?: string,
    securityGroups?: ISecurityGroup[],
    urlSuffix?: string,
  ): IRabbitMqBrokerDeployment {
    if ((name === undefined || id === undefined) && arn === undefined) {
      throw new Error(
        "Either the pair 'name' and 'id', or 'arn' needs to be defined",
      );
    }

    class Import extends Resource implements IRabbitMqBrokerDeployment {
      public readonly id: string;
      public readonly arn: string;
      public readonly name: string;
      public readonly endpoints: RabbitMqBrokerEndpoints;

      connections: Connections | undefined = securityGroups
        ? new Connections({ securityGroups })
        : undefined;
      _authenticationStrategy?: string | undefined;
      _engineVersion: string = "UNKNOWN";

      constructor() {
        super(scope, logicalId);
        this.arn = arn
          ? arn
          : Stack.of(this).formatArn({
              service: "mq",
              resource: "broker",
              resourceName: `${name}:${id}`,
              arnFormat: ArnFormat.COLON_RESOURCE_NAME,
            });

        this.name = name
          ? name
          : Arn.split(arn!, ArnFormat.COLON_RESOURCE_NAME).resourceName!.split(
              ":",
            )[0];
        this.id = id
          ? id
          : Arn.split(arn!, ArnFormat.COLON_RESOURCE_NAME).resourceName!.split(
              ":",
            )[1];

        this.endpoints = {
          amqp: {
            url: `amqps://${this.id}.mq.${Aws.REGION}.${urlSuffix ?? Aws.URL_SUFFIX}:5671`,
            port: 5671,
          },
          console: {
            url: `https://${this.id}.mq.${Aws.REGION}.${urlSuffix ?? Aws.URL_SUFFIX}`,
            port: 443,
          },
        };
      }

      public metric(metricName: string, options?: MetricOptions): Metric {
        return new Metric({
          namespace: "AWS/AmazonMQ",
          metricName,
          dimensionsMap: {
            Broker: this.id,
          },
          ...options,
        });
      }

      public metricExchangeCount(props?: MetricOptions): Metric {
        return this.metric("ExchangeCount", props);
      }

      public metricQueueCount(props?: MetricOptions): Metric {
        return this.metric("QueueCount", props);
      }

      public metricConnectionCount(props?: MetricOptions): Metric {
        return this.metric("ConnectionCount", props);
      }

      public metricChannelCount(props?: MetricOptions): Metric {
        return this.metric("ChannelCount", props);
      }

      public metricConsumerCount(props?: MetricOptions): Metric {
        return this.metric("ConsumerCount", props);
      }

      public metricMessageCount(props?: MetricOptions): Metric {
        return this.metric("MessageCount", props);
      }

      public metricMessageReadyCount(props?: MetricOptions): Metric {
        return this.metric("MessageReadyCount", props);
      }

      public metricMessageUnacknowledgedCount(props?: MetricOptions): Metric {
        return this.metric("MessageUnacknowledgedCount", props);
      }

      public metricPublishRate(props?: MetricOptions): Metric {
        return this.metric("PublishRate", props);
      }

      public metricConfirmRate(props?: MetricOptions): Metric {
        return this.metric("ConfirmRate", props);
      }

      public metricAckRate(props?: MetricOptions): Metric {
        return this.metric("AckRate", props);
      }

      public metricSystemCpuUtilization(props?: MetricOptions): Metric {
        return this.metric("SystemCpuUtilization", props);
      }

      public metricRabbitMQMemLimit(props?: MetricOptions): Metric {
        return this.metric("RabbitMQMemLimit", props);
      }

      public metricRabbitMQMemUsed(props?: MetricOptions): Metric {
        return this.metric("RabbitMQMemUsed", props);
      }

      public metricRabbitMQDiskFreeLimit(props?: MetricOptions): Metric {
        return this.metric("RabbitMQDiskFreeLimit", props);
      }

      public metricRabbitMQDiskFree(props?: MetricOptions): Metric {
        return this.metric("RabbitMQDiskFree", props);
      }

      public metricRabbitMQFdUsed(props?: MetricOptions): Metric {
        return this.metric("RabbitMQFdUsed", props);
      }

      public metricRabbitMQIOReadAverageTime(props?: MetricOptions): Metric {
        return this.metric("RabbitMQIOReadAverageTime", props);
      }

      public metricRabbitMQIOWriteAverageTime(props?: MetricOptions): Metric {
        return this.metric("RabbitMQIOWriteAverageTime", props);
      }
    }

    return new Import();
  }

  public readonly endpoints: RabbitMqBrokerEndpoints;

  constructor(
    scope: Construct,
    id: string,
    props: RabbitMqBrokerDeploymentBaseProps,
  ) {
    super(scope, id, {
      ...props,
      version: props.version.toString(),
      defaultPort: Port.tcp(5671),
      engine: BrokerEngine.RABBITMQ,
      users: [
        {
          username: props.admin.username,
          password: props.admin.password.unsafeUnwrap(),
        },
      ],
      cloudwatchLogsExports: props.cloudwatchLogsExports,
    });

    this.endpoints = {
      amqp: {
        url: Fn.select(0, this._resource.attrAmqpEndpoints),
        port: Token.asNumber(
          Fn.select(
            2,
            Fn.split(":", Fn.select(0, this._resource.attrAmqpEndpoints)),
          ),
        ),
      },
      console: {
        url: `https:${Fn.select(1, Fn.split(":", Fn.select(0, this._resource.attrAmqpEndpoints)))}`,
        port: 443,
      },
    };

    this._configuration =
      props.configuration ??
      RabbitMqBrokerConfiguration.fromAttributes(this, "Configuration", {
        id: this._resource.attrConfigurationId,
        revision: this._resource.attrConfigurationRevision,
      });
  }

  // public withConfiguration(id: string, options: RabbitMqBrokerConfigurationOptions): IRabbitMqBrokerConfiguration {
  //   const configuration = new RabbitMqBrokerConfiguration(this.node.scope!, id, {
  //     engineVersion: this.engineVersion,
  //     ...options,
  //   });

  //   this._attachConfiguration(configuration);

  //   return configuration;
  // }

  public metricExchangeCount(props?: MetricOptions): Metric {
    return this.metric("ExchangeCount", props);
  }

  public metricQueueCount(props?: MetricOptions): Metric {
    return this.metric("QueueCount", props);
  }

  public metricConnectionCount(props?: MetricOptions): Metric {
    return this.metric("ConnectionCount", props);
  }

  public metricChannelCount(props?: MetricOptions): Metric {
    return this.metric("ChannelCount", props);
  }

  public metricConsumerCount(props?: MetricOptions): Metric {
    return this.metric("ConsumerCount", props);
  }

  public metricMessageCount(props?: MetricOptions): Metric {
    return this.metric("MessageCount", props);
  }

  public metricMessageReadyCount(props?: MetricOptions): Metric {
    return this.metric("MessageReadyCount", props);
  }

  public metricMessageUnacknowledgedCount(props?: MetricOptions): Metric {
    return this.metric("MessageUnacknowledgedCount", props);
  }

  public metricPublishRate(props?: MetricOptions): Metric {
    return this.metric("PublishRate", props);
  }

  public metricConfirmRate(props?: MetricOptions): Metric {
    return this.metric("ConfirmRate", props);
  }

  public metricAckRate(props?: MetricOptions): Metric {
    return this.metric("AckRate", props);
  }

  public metricSystemCpuUtilization(props?: MetricOptions): Metric {
    return this.metric("SystemCpuUtilization", props);
  }

  public metricRabbitMQMemLimit(props?: MetricOptions): Metric {
    return this.metric("RabbitMQMemLimit", props);
  }

  public metricRabbitMQMemUsed(props?: MetricOptions): Metric {
    return this.metric("RabbitMQMemUsed", props);
  }

  public metricRabbitMQDiskFreeLimit(props?: MetricOptions): Metric {
    return this.metric("RabbitMQDiskFreeLimit", props);
  }

  public metricRabbitMQDiskFree(props?: MetricOptions): Metric {
    return this.metric("RabbitMQDiskFree", props);
  }

  public metricRabbitMQFdUsed(props?: MetricOptions): Metric {
    return this.metric("RabbitMQFdUsed", props);
  }

  public metricRabbitMQIOReadAverageTime(props?: MetricOptions): Metric {
    return this.metric("RabbitMQIOReadAverageTime", props);
  }

  public metricRabbitMQIOWriteAverageTime(props?: MetricOptions): Metric {
    return this.metric("RabbitMQIOWriteAverageTime", props);
  }
}
