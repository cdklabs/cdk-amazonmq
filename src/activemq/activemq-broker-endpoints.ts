/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import { BrokerEndpoint } from '../broker-endpoint';

export interface ActiveMqBrokerEndpoints {

  /**
   * The AMQP endpoint of the broker.
   */
  readonly amqp: BrokerEndpoint;

  /**
   * The STOMP endpoint of the broker.
   */
  readonly stomp: BrokerEndpoint;

  /**
   * The OpenWire endpoint of the broker.
   */
  readonly openWire: BrokerEndpoint;

  /**
   * The MQTT endpoint of the broker.
   */
  readonly mqtt: BrokerEndpoint;

  /**
   * The WSS endpoint of the broker.
   */
  readonly wss: BrokerEndpoint;

  readonly console: BrokerEndpoint;
}