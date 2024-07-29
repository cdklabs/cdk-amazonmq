/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import { SecretValue } from 'aws-cdk-lib';

export interface ActiveMqUser {
  readonly username: string;
  readonly password: SecretValue;
  readonly hasConsoleAccess?: boolean;
  readonly groups?: string[];
}
