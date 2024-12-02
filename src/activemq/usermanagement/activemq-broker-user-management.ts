/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import { CfnBroker } from "aws-cdk-lib/aws-amazonmq";
import { ActiveMqLdapAuthorization } from "./activemq-authoriztion";
import { ActiveMqUser } from "./activemq-user";
import { ActiveMqAuthenticationStrategy } from "../activemq-authentication-strategy";

export interface IActiveMqBrokerUserManagement {
  render(): ActiveMqBrokerDeploymentUserManagementDefinition;
}

export interface ActiveMqBrokerDeploymentUserManagementDefinition {
  readonly users: CfnBroker.UserProperty[];
  readonly ldapServerMetadata?: CfnBroker.LdapServerMetadataProperty;
  readonly authenticationStrategy?: ActiveMqAuthenticationStrategy;
}

export interface LdapUserStoreOptions extends ActiveMqLdapAuthorization {}

export interface SimpleAuthenticationUserManagementOptions {
  readonly users: ActiveMqUser[];
}

export class ActiveMqBrokerUserManagement {
  public static simple(
    options: SimpleAuthenticationUserManagementOptions,
  ): IActiveMqBrokerUserManagement {
    return {
      render(): ActiveMqBrokerDeploymentUserManagementDefinition {
        return {
          users: options.users.map((u) => ({
            username: u.username,
            password: u.password.unsafeUnwrap(),
            groups: u.groups,
            consoleAccess: u.hasConsoleAccess,
          })),
        };
      },
    };
  }

  public static ldap(
    options: LdapUserStoreOptions,
  ): IActiveMqBrokerUserManagement {
    return {
      render(): ActiveMqBrokerDeploymentUserManagementDefinition {
        return {
          ldapServerMetadata: {
            ...options,
            serviceAccountUsername:
              options.serviceAccountUsername.unsafeUnwrap(),
            serviceAccountPassword:
              options.serviceAccountPassword.unsafeUnwrap(),
          },
          users: [],
          authenticationStrategy: ActiveMqAuthenticationStrategy.LDAP,
        };
      },
    };
  }
}
