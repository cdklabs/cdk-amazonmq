/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import { RabbitMqBrokerEngineVersion } from '../../src';

describe('RabbitMqBrokerEngineVersion', () => {
  test('Only Known Versions Specified', () => {
    const expectedEngineVersions = [
      { version: '3.13' },
      { version: '3.12.13' },
      { version: '3.11.20' },
      { version: '3.10.20' },
      { version: '3.9.27' },
      { version: '3.8.34' },
    ];
    const actualEngineVersions = Object.values(RabbitMqBrokerEngineVersion);

    expect(actualEngineVersions).toEqual(expectedEngineVersions);
  });

  test('Custom Engine Version renders correctly', () => {
    const expectedEngineVersion = '3.12.14';
    const actualEngineVersion = RabbitMqBrokerEngineVersion.of(expectedEngineVersion);

    expect(actualEngineVersion.toString()).toEqual(expectedEngineVersion);
  });
});