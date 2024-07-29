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

  const rabbit = new Connection({
    url: AMQP_ENDPOINT.replace('amqps://', `amqps://${encodeURIComponent(username)}:${encodeURIComponent(password)}@`),
  });

  rabbit.on('error', (err) => {
    console.log('RabbitMQ connection error', err);
  });

  rabbit.on('connection', () => {
    console.log('Connection successfully (re)established');
  });

  // Declare a publisher
  // See API docs for all options
  const pub = rabbit.createPublisher({
    // Enable publish confirmations, similar to consumer acknowledgements
    confirm: true,
    // Enable retries
    maxAttempts: 2,
    // Optionally ensure the existence of an exchange before we use it
    exchanges: [{ exchange: 'my-events', type: 'topic' }],
    queues: [{
      queue: QUEUE_NAME,
      durable: true,
    }],
    queueBindings: [{ exchange: 'my-events', routingKey: 'users.*' }],
  });

  // Publish a message to a custom exchange
  await pub.send(
    { exchange: 'my-events', routingKey: 'users.visit' }, // metadata
    { id: 1, name: 'Alan Turing' }); // message content

  // Or publish directly to a queue
  await pub.send(QUEUE_NAME, { id: 2, name: 'Alan Turing' });

  await pub.close();
  await rabbit.close();
};