/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
/**
 * The Amazon RabbitMQ Broker Engine version.
 *
 * @see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/rabbitmq-version-management.html
 */
export class RabbitMqBrokerEngineVersion {
  public static readonly V3_13 = new RabbitMqBrokerEngineVersion("3.13");

  /** @deprecated use V3_13 instead */
  public static readonly V3_12_13 = new RabbitMqBrokerEngineVersion("3.12.13");

  /** @deprecated use V3_13 instead */
  public static readonly V3_11_28 = new RabbitMqBrokerEngineVersion("3.11.28");

  /** @deprecated use V3_13 instead */
  public static readonly V3_11_20 = new RabbitMqBrokerEngineVersion("3.11.20");

  /** @deprecated use V3_13 instead */
  public static readonly V3_11_16 = new RabbitMqBrokerEngineVersion("3.11.16");

  public static of(version: string): RabbitMqBrokerEngineVersion {
    return new RabbitMqBrokerEngineVersion(version);
  }

  // eslint-disable-next-line no-useless-constructor, no-empty-function
  protected constructor(private readonly version: string) {}

  public toString() {
    return this.version;
  }
}
