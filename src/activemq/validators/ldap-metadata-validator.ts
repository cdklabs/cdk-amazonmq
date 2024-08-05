/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import { URL } from 'url';
import { CfnBroker } from 'aws-cdk-lib/aws-amazonmq';
import { IValidation } from 'constructs';

export interface ActiveMqLdapAuthorizationProps {
  readonly config: CfnBroker.LdapServerMetadataProperty;
}

/**
 * Validates if provided string is in form required by [Active MQ](https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/security-authentication-authorization.html).
 */
export class ActiveMqLdapValidation implements IValidation {
  readonly ActiveMqLdapAuthorization: CfnBroker.LdapServerMetadataProperty;
  private readonly ditRegex?: RegExp;
  errors: string[];

  // constructor that accepts the string and property name
  constructor(props: ActiveMqLdapAuthorizationProps) {
    this.ActiveMqLdapAuthorization = props.config;
    this.errors = [];

    this.ditRegex =
      /^((CN=([^,]*)),)?((((?:CN|OU)=[^,]+,?)+),)?((DC=[^,]+,?)+)$/im;
  }

  private validateDit(propertyValue: string, propertyName: string): void {
    if (this.ditRegex && !this.ditRegex.test(propertyValue)) {
      this.errors.push(
        `Incorrect LDAP directory information tree: '${propertyValue}' at '${propertyName}'. Should match regular expression: ${this.ditRegex}`,
      );
    }
  }

  private validateHosts(hosts: string[]): void {
    try {
      // add URI parts (protocol and port) that will be added by the ActiveMQ.
      hosts.forEach((v) => {
        const url = new URL(`ldap://${v}:389`);
        console.log('URL', url);
        if (
          url.hostname !== v ||
          !url.protocol.startsWith('ldap') ||
          url.port !== '389'
        ) {
          this.errors.push(
            `Invalid host: '${hosts}'. ActiveMQ requires host name without protocol and port. Check https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/security-authentication-authorization.html`,
          );
        }
      });
    } catch (e) {
      this.errors.push(
        'Invalid host. ActiveMQ requires host name without protocol and port. Check https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/security-authentication-authorization.html',
      );
    }
  }

  public validate(): string[] {
    this.errors = [];

    console.log('userBase', this.ActiveMqLdapAuthorization.userBase);
    this.validateDit(this.ActiveMqLdapAuthorization.roleBase, 'roleBase');
    this.validateDit(this.ActiveMqLdapAuthorization.userBase, 'userBase');
    this.validateDit(
      this.ActiveMqLdapAuthorization.serviceAccountUsername,
      'serviceAccountUsername',
    );

    this.validateHosts(this.ActiveMqLdapAuthorization.hosts);

    return this.errors;
  }
}
