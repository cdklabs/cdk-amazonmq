/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import { App, Stack } from "aws-cdk-lib";
import { InstanceClass, InstanceSize, InstanceType } from "aws-cdk-lib/aws-ec2";
import {
  RabbitMqBrokerEngineVersion,
  RabbitMqBrokerInstance,
  RabbitMqBrokerUserManagement,
} from "../../src";

const app = new App({
  treeMetadata: false,
});

const stack = new Stack(app, "RabbitMqBrokerInstanceConfigManagedTest");

new RabbitMqBrokerInstance(stack, "Broker", {
  publiclyAccessible: false,
  version: RabbitMqBrokerEngineVersion.V3_13,
  instanceType: InstanceType.of(InstanceClass.T3, InstanceSize.MICRO),
  userManagement: RabbitMqBrokerUserManagement.configManaged(),
});

app.synth();
