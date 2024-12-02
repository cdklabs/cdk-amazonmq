/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import { BrokerEndpoint } from "../broker-endpoint";

export interface RabbitMqBrokerEndpoints {
  readonly amqp: BrokerEndpoint;
  readonly console: BrokerEndpoint;
}
