/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import { CfnBroker } from "aws-cdk-lib/aws-amazonmq";
import { Admin } from "../admin";
import { RabbitMqAuthenticationStrategy } from "../rabbitmq-authentication-strategy";

/**
 * Interface for RabbitMQ broker user management implementations.
 *
 * This interface allows different user management strategies to be plugged
 * into RabbitMQ broker deployments, providing flexibility in how users
 * and authentication are configured.
 */
export interface IRabbitMqBrokerUserManagement {
  /**
   * Renders the user management configuration for the broker deployment.
   *
   * @returns The user management definition containing users and authentication strategy
   */
  render(): RabbitMqBrokerDeploymentUserManagementDefinition;
}

/**
 * Configuration definition for RabbitMQ broker user management.
 *
 * This interface defines the structure of user management configuration
 * that will be applied to the broker deployment.
 */
export interface RabbitMqBrokerDeploymentUserManagementDefinition {
  /**
   * List of users to be created on the broker.
   *
   * For SIMPLE authentication, this contains the actual user credentials.
   * For CONFIG_MANAGED authentication, this is typically empty as users
   * are managed externally.
   */
  readonly users: CfnBroker.UserProperty[];

  /**
   * The authentication strategy to use for this broker.
   *
   * Determines how user authentication will be handled by the broker.
   */
  readonly authenticationStrategy?: RabbitMqAuthenticationStrategy;
}

/**
 * Configuration options for simple authentication user management.
 *
 * Simple authentication uses RabbitMQ's Management plugin for user management
 * where users are stored in the broker's internal database.
 */
export interface RabbitMqSimpleAuthenticationUserManagementOptions {
  /**
   * Administrative user credentials for the broker.
   *
   * This user will have full administrative privileges on the broker
   * and can manage other users, virtual hosts, and broker configuration.
   */
  readonly admin: Admin;
}

/**
 * Factory class for creating RabbitMQ broker user management configurations.
 *
 * This class provides static methods to create different types of user management
 * strategies for RabbitMQ brokers, supporting both simple and config-managed
 * authentication approaches.
 */
export class RabbitMqBrokerUserManagement {
  /**
   * Creates a simple authentication user management configuration.
   *
   * Simple authentication uses RabbitMQ's Management plugin for user management
   * where user credentials are stored in the broker's internal database. This is
   * the traditional approach for RabbitMQ user management.
   *
   * @param options Configuration options including admin user credentials
   * @returns A user management implementation using simple authentication
   */
  public static simple(
    options: RabbitMqSimpleAuthenticationUserManagementOptions,
  ): IRabbitMqBrokerUserManagement {
    return {
      render(): RabbitMqBrokerDeploymentUserManagementDefinition {
        return {
          users: [
            {
              username: options.admin.username,
              password: options.admin.password.unsafeUnwrap(),
            },
          ],
          authenticationStrategy: RabbitMqAuthenticationStrategy.SIMPLE,
        };
      },
    };
  }

  /**
   * Creates a config-managed authentication user management configuration.
   *
   * Config-managed authentication allows for external user management systems
   * to handle authentication instead of using RabbitMQ's built-in user database.
   * This approach provides more flexibility for integrating with existing
   * authentication infrastructure and supports advanced authentication scenarios.
   *
   * With config-managed authentication:
   * - No users are created in the broker's internal database
   * - Authentication is handled through external configuration
   * - Currently supports OAuth authentication and authorization
   * - Requires additional configuration outside of the broker deployment
   *
   * @returns A user management implementation using config-managed authentication
   */
  public static configManaged(): IRabbitMqBrokerUserManagement {
    return {
      render(): RabbitMqBrokerDeploymentUserManagementDefinition {
        return {
          users: [],
          authenticationStrategy: RabbitMqAuthenticationStrategy.CONFIG_MANAGED,
        };
      },
    };
  }
}
