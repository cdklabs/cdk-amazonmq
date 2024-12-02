/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
/* eslint-disable import/no-extraneous-dependencies */
import {
  GetSecretValueCommand,
  SecretsManagerClient,
} from "@aws-sdk/client-secrets-manager";
import * as rhea from "rhea";

const client = new SecretsManagerClient({});

export const handler = async () => {
  const { AMQP_ENDPOINT, CREDENTIALS, QUEUE_NAME } = process.env;

  if (AMQP_ENDPOINT === undefined) {
    throw new Error("AMQP_ENDPOINT");
  }

  if (CREDENTIALS === undefined) {
    throw new Error("CREDENTIALS");
  }

  if (QUEUE_NAME === undefined) {
    throw new Error("QUEUE_NAME");
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

  const parts = AMQP_ENDPOINT.replace("amqp+ssl://", "").split(":");

  const container = rhea.create_container();

  const connection = container.connect({
    host: parts[0],
    port: parseInt(parts[1]),
    username: encodeURIComponent(username),
    password: encodeURIComponent(password),
    transport: "tls",
  });

  await new Promise((resolve) => {
    container.once("sendable", (context) => {
      context.sender.send({
        message_id: 1,
        body: `Test ${new Date().toISOString()}`,
      });
      resolve(undefined);
    });

    connection.open_sender(QUEUE_NAME);
  });

  await new Promise((resolve) => {
    container.once("accepted", (context) => {
      context.connection.close();
      resolve(undefined);
    });
  });
};
