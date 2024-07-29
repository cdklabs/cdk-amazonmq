/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
/* eslint-disable import/no-extraneous-dependencies */
import { GetSecretValueCommand, SecretsManagerClient } from '@aws-sdk/client-secrets-manager';
import mqtt from 'mqtt';

const client = new SecretsManagerClient({});

export const handler = async () => {
  const { MQTT_ENDPOINT, CREDENTIALS } = process.env;

  if (MQTT_ENDPOINT === undefined) {
    throw new Error('MQTT_ENDPOINT');
  }

  if (CREDENTIALS === undefined) {
    throw new Error('CREDENTIALS');
  }

  const { SecretString } = await client.send(new GetSecretValueCommand({
    SecretId: CREDENTIALS,
  }));

  if (SecretString === undefined) {
    throw new Error('SecretString');
  }

  const { username, password } = JSON.parse(SecretString) as {
    username: string;
    password: string;
  };

  const mqttClient = mqtt.connect(MQTT_ENDPOINT.replace('mqtt+', ''), {
    username,
    password,
  });

  mqttClient.on('connect', () => {
    mqttClient.subscribe('presence', (err) => {
      if (!err) {
        mqttClient.publish('presence', 'Hello mqtt');
      }
    });
  });

  await new Promise(resolve => {
    mqttClient.on('message', (topic, message) => {
    // message is Buffer
      console.log('received', message.toString());
      mqttClient.end();
      resolve(undefined);
    });
  });
};