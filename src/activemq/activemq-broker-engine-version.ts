/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/

/**
 * The Amazon ActiveMQ Broker Engine version.
 *
 * @see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/activemq-version-management.html
 */
export class ActiveMqBrokerEngineVersion {
  public static readonly V5_19 = new ActiveMqBrokerEngineVersion("5.19");

  public static readonly V5_18 = new ActiveMqBrokerEngineVersion("5.18");

  /** @deprecated ActiveMQ 5.17 reached end of support on June 16, 2025. Use V5_19 or V5_18 instead. */
  public static readonly V5_17_6 = new ActiveMqBrokerEngineVersion("5.17.6");

  /** @deprecated ActiveMQ 5.16 reached end of support on November 15, 2024. Use V5_19 or V5_18 instead. */
  public static readonly V5_16_7 = new ActiveMqBrokerEngineVersion("5.16.7");

  public static of(version: string): ActiveMqBrokerEngineVersion {
    return new ActiveMqBrokerEngineVersion(version);
  }

  // eslint-disable-next-line no-useless-constructor, no-empty-function
  protected constructor(private readonly version: string) {}

  public toString() {
    return this.version;
  }
}
