/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import { Duration } from "aws-cdk-lib";

/// TODO: think if it should be parameters or maybe properties?
export interface RabbitMqBrokerConfigurationParameters {
  readonly consumerTimeout: Duration;
}

export class RabbitMqBrokerConfigurationDefinition {
  public static data(data: string) {
    return new RabbitMqBrokerConfigurationDefinition(data);
  }

  public static parameters(parameters: RabbitMqBrokerConfigurationParameters) {
    return new RabbitMqBrokerConfigurationDefinition(
      `consumer_timeout = ${parameters.consumerTimeout.toMilliseconds({
        integral: true,
      })}`,
    );
  }

  private readonly data: string;

  protected constructor(data: string) {
    this.data = data;
  }

  public toString() {
    return this.data;
  }
}
