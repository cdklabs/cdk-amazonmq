/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import { SecretValue } from 'aws-cdk-lib';

export interface Admin {
  /**
   * Sets the administrative user name.
   */
  readonly username: string;

  /**
   * Sets the administrative user password.
   */
  readonly password: SecretValue;
}