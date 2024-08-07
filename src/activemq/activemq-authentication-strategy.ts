/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/

/**
 * Amazon MQ for ActiveMQ's authentication strategy
 */
export enum ActiveMqAuthenticationStrategy {
  // Simple Authentication, an in-built mechanism of ActiveMQ
  SIMPLE = 'SIMPLE',
  // LDAP integration based authentication
  LDAP = 'LDAP'
}