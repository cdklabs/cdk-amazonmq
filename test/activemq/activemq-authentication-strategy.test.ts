/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import { ActiveMqAuthenticationStrategy } from "../../src";

describe("ActiveMqAuthenticationStrategy", () => {
  test("Has only the specified values", () => {
    const expected = ["SIMPLE", "LDAP"];
    const actual = Object.values(ActiveMqAuthenticationStrategy);
    expect(actual).toEqual(expected);
  });
});
