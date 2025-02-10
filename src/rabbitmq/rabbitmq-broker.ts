/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import { IResource } from "aws-cdk-lib";
import { RabbitMqBrokerEndpoints } from "./rabbitmq-broker-endpoints";

export interface IRabbitMqBroker extends IResource {
  readonly endpoints: RabbitMqBrokerEndpoints;
}
