/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/

/**
 * Authentication strategies available for Amazon MQ RabbitMQ brokers.
 *
 * These strategies determine how user authentication is handled by the broker.
 */
export enum RabbitMqAuthenticationStrategy {
  /**
   * Simple Authentication using RabbitMQ's built-in user management.
   *
   * With this strategy, users are managed directly through the broker's
   * configuration and stored in the broker's internal database. User credentials
   * are specified during broker deployment.
   */
  SIMPLE = "SIMPLE",

  /**
   * Configuration-managed authentication strategy.
   *
   * With this strategy, user authentication is handled through external
   * configuration mechanisms rather than the broker's internal user database.
   * This allows for integration with external authentication systems and
   * more flexible user management approaches.
   */
  CONFIG_MANAGED = "config_managed",
}
