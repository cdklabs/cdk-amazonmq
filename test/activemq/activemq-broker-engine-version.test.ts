/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import { ActiveMqBrokerEngineVersion } from "../../src";

describe("ActiveMqBrokerEngineVersion", () => {
  test("Only Known Versions Specified", () => {
    const expectedEngineVersions = [
      { version: "5.18" },
      { version: "5.17.6" },
      { version: "5.16.7" },
    ];
    const actualEngineVersions = Object.values(ActiveMqBrokerEngineVersion);

    expect(actualEngineVersions).toEqual(expectedEngineVersions);
  });

  test("Custom Engine Version renders correctly", () => {
    const expectedEngineVersion = "5.14.0";
    const actualEngineVersion = ActiveMqBrokerEngineVersion.of(
      expectedEngineVersion,
    );

    expect(actualEngineVersion.toString()).toEqual(expectedEngineVersion);
  });
});
