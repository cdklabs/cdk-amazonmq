/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import path from "path";
import { App, CfnOutput, Duration, Stack } from "aws-cdk-lib";
import { Runtime } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { RetentionDays } from "aws-cdk-lib/aws-logs";
import { Secret } from "aws-cdk-lib/aws-secretsmanager";
import { RabbitMqBrokerInstance, RabbitMqEventSource } from "../../src";

const app = new App({
  treeMetadata: false,
});

const stack = new Stack(app, "RabbitMqBrokerInstanceImportedTest");

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

const broker = RabbitMqBrokerInstance.fromRabbitMqBrokerInstanceNameAndId(
  stack,
  "ImportedBroker",
  "TestBroker",
  "b-9f42415c-f4bd-49f9-a4a9-a205c5df3b7d",
);

const exchangeCount = broker.metricExchangeCount();

exchangeCount.createAlarm(stack, "ExchangeCountAlarm", {
  threshold: 100,
  evaluationPeriods: 3,
  datapointsToAlarm: 2,
});

const queueName = "user-events";

const listener = new NodejsFunction(stack, "RabbitListener", {
  entry: path.join(__dirname, "clients/listener.lambda.ts"),
  logRetention: RetentionDays.ONE_DAY,
  runtime: Runtime.NODEJS_LATEST,
});

listener.addEventSource(
  new RabbitMqEventSource({
    broker,
    credentials: brokerAdminCreds,
    queueName,
  }),
);

const publisher = new NodejsFunction(stack, "RabbitPublisher", {
  entry: path.join(__dirname, "clients/amqp091/amqps-publisher.lambda.ts"),
  environment: {
    AMQP_ENDPOINT: broker.endpoints.amqp.url,
    CREDENTIALS: brokerAdminCreds.secretArn,
    QUEUE_NAME: queueName,
  },
  runtime: Runtime.NODEJS_LATEST,
  timeout: Duration.seconds(10),
  logRetention: RetentionDays.ONE_DAY,
});

broker.connections?.allowDefaultPortFrom(publisher);
brokerAdminCreds.grantRead(publisher);

const subscriber = new NodejsFunction(stack, "RabbitMqSubscriber", {
  entry: path.join(__dirname, "clients/amqp091/amqps-subscriber.lambda.ts"),
  environment: {
    AMQP_ENDPOINT: broker.endpoints.amqp.url,
    CREDENTIALS: brokerAdminCreds.secretArn,
    QUEUE_NAME: queueName,
  },
  runtime: Runtime.NODEJS_LATEST,
  timeout: Duration.seconds(30),
  logRetention: RetentionDays.ONE_DAY,
});

broker.connections?.allowDefaultPortFrom(subscriber);
brokerAdminCreds.grantRead(subscriber);

new CfnOutput(stack, "BrokerArn", { value: broker.arn });
new CfnOutput(stack, "BrokerId", { value: broker.id });
new CfnOutput(stack, "BrokerName", { value: broker.name });
app.synth();
