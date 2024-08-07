/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
export interface BrokerCloudwatchLogsExports {
  readonly general?: boolean;
  readonly audit?: boolean;

  // INFO: there is no option for these log groups, but for RMQ these log groups are created
  readonly channel?: boolean;
  readonly connection?: boolean;
  readonly mirroring?: boolean;
}
