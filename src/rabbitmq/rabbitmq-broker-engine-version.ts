/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
/**
 *
 * @see: https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/rabbitmq-version-management.html
 */
export class RabbitMqBrokerEngineVersion {
  public static readonly V3_12_13 = new RabbitMqBrokerEngineVersion('3.12.13');

  public static readonly V3_11_20 = new RabbitMqBrokerEngineVersion('3.11.20');

  public static readonly V3_10_20 = new RabbitMqBrokerEngineVersion('3.10.20');

  public static readonly V3_9_27 = new RabbitMqBrokerEngineVersion('3.9.27');

  public static readonly V3_8_34 = new RabbitMqBrokerEngineVersion('3.8.34');

  public static of(version: string): RabbitMqBrokerEngineVersion {
    return new RabbitMqBrokerEngineVersion(version);
  }

  // eslint-disable-next-line no-useless-constructor, no-empty-function
  protected constructor(private readonly version: string) {}

  public toString() {
    return this.version;
  }
}
