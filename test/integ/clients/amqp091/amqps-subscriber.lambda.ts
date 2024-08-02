/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
/* eslint-disable import/no-extraneous-dependencies */
import { GetSecretValueCommand, SecretsManagerClient } from '@aws-sdk/client-secrets-manager';
import { Connection } from 'rabbitmq-client';

const client = new SecretsManagerClient({});

export const handler = async () => {
  const { AMQP_ENDPOINT, CREDENTIALS, QUEUE_NAME } = process.env;

  if (AMQP_ENDPOINT === undefined) {
    throw new Error('AMQP_ENDPOINT');
  }

  if (CREDENTIALS === undefined) {
    throw new Error('CREDENTIALS');
  }

  if (QUEUE_NAME === undefined) {
    throw new Error('QUEUE_NAME');
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

  const endpoint = AMQP_ENDPOINT.replace('amqps://',
    `amqps://${encodeURIComponent(username)}:${encodeURIComponent(password)}@`,
  );

  const rabbit = new Connection(endpoint);

  rabbit.on('error', (err) => {
    console.log('RabbitMQ connection error', err);
  });

  rabbit.on('connection', () => {
    console.log('Connection successfully (re)established');
  });

  // Consume messages from a queue:
  // See API docs for all options
  const sub = rabbit.createConsumer({
    queue: QUEUE_NAME,
    queueOptions: { durable: true },
    // handle 2 messages at a time
    qos: { prefetchCount: 2 },
    // Optionally ensure an exchange exists
    exchanges: [{ exchange: 'my-events', type: 'topic' }],
    // With a "topic" exchange, messages matching this pattern are routed to the queue
    queueBindings: [{ exchange: 'my-events', routingKey: 'users.*' }],
  }, async (msg) => {
    console.log(`received message (${QUEUE_NAME})`, msg);
    // The message is automatically acknowledged (BasicAck) when this function ends.
    // If this function throws an error, then msg is rejected (BasicNack) and
    // possibly requeued or sent to a dead-letter exchange. You can also return a
    // status code from this callback to control the ack/nack behavior
    // per-message.
  });

  sub.on('error', (err) => {
    // Maybe the consumer was cancelled, or the connection was reset before a
    // message could be acknowledged.
    console.log(`consumer error (${QUEUE_NAME})`, err);
  });

  await new Promise((resolve) => setTimeout(resolve, 20 * 1000));
  await sub.close();
  await rabbit.close();
};