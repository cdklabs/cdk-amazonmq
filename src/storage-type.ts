/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
export enum StorageType {
  /** Amazon Elastic Block Store.
   * NOTE: Available only for single-instance ActiveMQ brokers
   */
  EBS = 'EBS',
  // Amazon Elastic File System
  EFS = 'EFS',
}
