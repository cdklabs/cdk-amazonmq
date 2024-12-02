/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/

/**
 * Supported HTTP Methods for RabbitMQ Management API calls.
 */
export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export interface RabbitApiCall {
  /**
   * The URL to the RabbitMQ broker to send the request to.
   */
  readonly url: string;
  /**
   * The SecretsManager Secret ARN with credential of a RabbitMQ user with administrator permissions to invoke the API calls
   */
  readonly credentials: string;

  /**
   * The RabbitMQ Management HTTP API path to invoke
   */
  readonly path: string;

  /**
   * The HTTP Method to use when invoking the API
   * @default GET
   */
  readonly method?: HttpMethod;

  /**
   * The RabbitMQ Management HTTP API call payload.
   */
  readonly payload?: { [key: string]: any };

  /**
   * The RabbitMQ Management HTTP API call output paths
   *
   * @default - no output paths are specified. All output will be accessible for the Custom Resource
   */
  readonly outputPaths?: string[];

  /**
   * The timeout for the API call.
   *
   * @default - no timeout
   * @experimental
   */
  readonly timeout?: number;
}
