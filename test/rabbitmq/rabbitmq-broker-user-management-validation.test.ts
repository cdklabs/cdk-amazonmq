/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import { Stack } from "aws-cdk-lib";
import { InstanceClass, InstanceSize, InstanceType } from "aws-cdk-lib/aws-ec2";
import { Secret } from "aws-cdk-lib/aws-secretsmanager";
import {
  RabbitMqBrokerEngineVersion,
  RabbitMqBrokerInstance,
  RabbitMqBrokerUserManagement,
} from "../../src";

describe("RabbitMQ Broker User Management Validation", () => {
  let stack: Stack;
  let adminSecret: Secret;

  beforeEach(() => {
    stack = new Stack();
    adminSecret = new Secret(stack, "AdminSecret", {
      generateSecretString: {
        secretStringTemplate: JSON.stringify({ username: "admin" }),
        generateStringKey: "password",
        excludePunctuation: true,
      },
    });
  });

  test("should throw error when both admin and userManagement are specified", () => {
    expect(() => {
      new RabbitMqBrokerInstance(stack, "Broker", {
        publiclyAccessible: false,
        version: RabbitMqBrokerEngineVersion.V3_13,
        instanceType: InstanceType.of(InstanceClass.T3, InstanceSize.MICRO),
        admin: {
          username: adminSecret.secretValueFromJson("username").unsafeUnwrap(),
          password: adminSecret.secretValueFromJson("password"),
        },
        userManagement: RabbitMqBrokerUserManagement.simple({
          admin: {
            username: adminSecret
              .secretValueFromJson("username")
              .unsafeUnwrap(),
            password: adminSecret.secretValueFromJson("password"),
          },
        }),
      });
    }).toThrow("Only one of 'admin' or 'userManagement' can be specified");
  });

  test("should throw error when neither admin nor userManagement are specified", () => {
    expect(() => {
      new RabbitMqBrokerInstance(stack, "Broker", {
        publiclyAccessible: false,
        version: RabbitMqBrokerEngineVersion.V3_13,
        instanceType: InstanceType.of(InstanceClass.T3, InstanceSize.MICRO),
      });
    }).toThrow("One of 'admin' or 'userManagement' needs to be specified");
  });

  test("should succeed when only admin is specified", () => {
    expect(() => {
      new RabbitMqBrokerInstance(stack, "Broker", {
        publiclyAccessible: false,
        version: RabbitMqBrokerEngineVersion.V3_13,
        instanceType: InstanceType.of(InstanceClass.T3, InstanceSize.MICRO),
        admin: {
          username: adminSecret.secretValueFromJson("username").unsafeUnwrap(),
          password: adminSecret.secretValueFromJson("password"),
        },
      });
    }).not.toThrow();
  });

  test("should succeed when only userManagement is specified", () => {
    expect(() => {
      new RabbitMqBrokerInstance(stack, "Broker", {
        publiclyAccessible: false,
        version: RabbitMqBrokerEngineVersion.V3_13,
        instanceType: InstanceType.of(InstanceClass.T3, InstanceSize.MICRO),
        userManagement: RabbitMqBrokerUserManagement.simple({
          admin: {
            username: adminSecret
              .secretValueFromJson("username")
              .unsafeUnwrap(),
            password: adminSecret.secretValueFromJson("password"),
          },
        }),
      });
    }).not.toThrow();
  });
});
