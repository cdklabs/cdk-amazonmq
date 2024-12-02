/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
export interface BrokerEndpoint {
  /**
   * The full URL of the broker endpoint, including the port.
   */
  readonly url: string;

  /**
   * The port at which the endpoint awaits communication.
   */
  readonly port: number;
}
