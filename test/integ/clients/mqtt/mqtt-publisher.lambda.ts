/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
/* eslint-disable import/no-extraneous-dependencies */
import {
  GetSecretValueCommand,
  SecretsManagerClient,
} from "@aws-sdk/client-secrets-manager";
import mqtt from "mqtt";

const client = new SecretsManagerClient({});

export const handler = async () => {
  const { MQTT_ENDPOINTS, CREDENTIALS, TOPIC_NAME } = process.env;

  if (MQTT_ENDPOINTS === undefined) {
    throw new Error("MQTT_ENDPOINTS");
  }

  if (CREDENTIALS === undefined) {
    throw new Error("CREDENTIALS");
  }

  if (TOPIC_NAME === undefined) {
    throw new Error("TOPIC_NAME");
  }

  const { SecretString } = await client.send(
    new GetSecretValueCommand({
      SecretId: CREDENTIALS,
    }),
  );

  if (SecretString === undefined) {
    throw new Error("SecretString");
  }

  const { username, password } = JSON.parse(SecretString) as {
    username: string;
    password: string;
  };

  const endpoints = MQTT_ENDPOINTS.split(",");

  for (
    let currentEndpoint = 0;
    currentEndpoint < endpoints.length;
    currentEndpoint++
  ) {
    const endpoint = endpoints[currentEndpoint].replace("+ssl", "s");
    let mqttClient: mqtt.MqttClient;
    try {
      mqttClient = await mqtt.connectAsync(endpoint, {
        username: encodeURIComponent(username),
        password: encodeURIComponent(password),
        connectTimeout: 2000,
      });
      console.log(`Connected to ${endpoint}`);
    } catch (e) {
      console.log(`Failed to connect to ${endpoint}`);
      continue;
    }

    await mqttClient.publishAsync(
      TOPIC_NAME,
      `Test ${new Date().toISOString()}`,
    );
    await mqttClient.endAsync();
  }
};
