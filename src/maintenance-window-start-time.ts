/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import { TimeZone } from 'aws-cdk-lib';
import { DayOfWeek } from './day-of-week';

/**
 * Start time of the weekly, 2-hours time window to apply pending updates or patches to the broker.
 */
export interface MaintenanceWindowStartTime {
  /**
   * The day of the week
   */
  readonly dayOfWeek: DayOfWeek;

  /**
   * The time, in 24-hour format.
   */
  readonly timeOfDay: string;

  /**
   * The time zone.
   */
  readonly timeZone: TimeZone;
}