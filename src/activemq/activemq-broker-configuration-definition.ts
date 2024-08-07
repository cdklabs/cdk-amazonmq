/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
export class ActiveMqBrokerConfigurationDefinition {
  public static data(data: string) {
    return new ActiveMqBrokerConfigurationDefinition(data);
  }

  private readonly data: string;

  protected constructor(data: string) {
    this.data = data;
  }

  public toString() {
    return this.data;
  }
}