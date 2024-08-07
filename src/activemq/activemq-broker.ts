/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import { ActiveMqBrokerEndpoints } from './activemq-broker-endpoints';

export interface IActiveMqBroker {
  /**
   * The IP address of the broker.
   */
  readonly ipAddress: string;

  /**
   * A set of endpoints for the broker.
   */
  readonly endpoints: ActiveMqBrokerEndpoints;
}
