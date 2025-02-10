/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import path from "path";
import { App, Stack, TimeZone, Duration } from "aws-cdk-lib";
import {
  InstanceClass,
  InstanceSize,
  InstanceType,
} from "aws-cdk-lib/aws-ec2";
import { Runtime } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { RetentionDays } from "aws-cdk-lib/aws-logs";
import { Secret } from "aws-cdk-lib/aws-secretsmanager";
import {
  DayOfWeek,
  RabbitMqBrokerEngineVersion,
  RabbitMqBrokerInstance,
  RabbitMqEventSource,
} from "../../src";

const app = new App({
  treeMetadata: false,
});

const stack = new Stack(app, "RabbitMqBrokerInstanceTest");



const brokerAdminCreds = new Secret(stack, "BrokerCreds", {
  generateSecretString: {
    secretStringTemplate: JSON.stringify({ username: "admin" }),
    excludePunctuation: true,
    generateStringKey: "password",
    passwordLength: 24,
  },
});

const broker = new RabbitMqBrokerInstance(stack, "Broker", {
  publiclyAccessible: true,
  version: RabbitMqBrokerEngineVersion.V3_13,
  instanceType: InstanceType.of(InstanceClass.T3, InstanceSize.MICRO),
  admin: {
    username: brokerAdminCreds.secretValueFromJson("username").unsafeUnwrap(),
    password: brokerAdminCreds.secretValueFromJson("password"),
  },
  maintenanceWindowStartTime: {
    timeOfDay: "13:00",
    dayOfWeek: DayOfWeek.SUNDAY,
    timeZone: TimeZone.EUROPE_WARSAW,
  },
  cloudwatchLogsExports: {
    general: true,
  },
  cloudwatchLogsRetention: RetentionDays.TWO_WEEKS,
});

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

app.synth();
