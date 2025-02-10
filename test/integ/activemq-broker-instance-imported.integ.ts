/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import path from "path";
import { App, Stack } from "aws-cdk-lib";
import { Runtime } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { RetentionDays } from "aws-cdk-lib/aws-logs";
import { Secret } from "aws-cdk-lib/aws-secretsmanager";
import { ActiveMqBrokerInstance, ActiveMqEventSource } from "../../src";

const app = new App({
  treeMetadata: false,
});

const stack = new Stack(app, "ActiveMqBrokerInstanceImportedTest");

const brokerAdminCreds = new Secret(stack, "BrokerCreds", {
  generateSecretString: {
    secretStringTemplate: JSON.stringify({
      username: "admin",
      password: "adminpassword",
    }),
    excludePunctuation: true,
    generateStringKey: "random",
    passwordLength: 24,
  },
});

const broker = ActiveMqBrokerInstance.fromActiveMqBrokerInstanceArn(
  stack,
  "ImportedBroker",
  "arn:aws:mq:eu-central-1:041200832367:broker:TestActiveMqBroker:b-6b8c80e4-6107-43a6-9606-38eebe6892ce",
);

console.log("arn", broker.arn);

const burstBalance = broker.metricBurstBalance();

burstBalance.createAlarm(stack, "BurstBalanceMetric", {
  threshold: 100,
  evaluationPeriods: 3,
  datapointsToAlarm: 2,
});

const queueName = "user-events";

const listener = new NodejsFunction(stack, "ActiveListener", {
  entry: path.join(__dirname, "clients/listener.lambda.ts"),
  logRetention: RetentionDays.ONE_DAY,
  runtime: Runtime.NODEJS_LATEST,
});

listener.addEventSource(
  new ActiveMqEventSource({
    broker,
    credentials: brokerAdminCreds,
    queueName,
  }),
);

app.synth();
