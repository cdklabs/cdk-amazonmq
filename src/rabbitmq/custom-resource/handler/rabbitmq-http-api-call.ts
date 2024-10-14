/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/

/* eslint-disable import/no-extraneous-dependencies */
import * as https from 'https';

import {
  GetSecretValueCommand,
  SecretsManagerClient,
} from '@aws-sdk/client-secrets-manager';
import {
  RabbitApiRequest,
  RabbitApiRequestInput,
  RabbitApiRequestOptions,
  RabbitApiResponse,
} from './api';

const smClient = new SecretsManagerClient({});

export const invokeRabbitApiCall = async (
  call: RabbitApiRequestOptions,
  timeout: number = 5000,
) => {
  const { credentials } = call;

  if (credentials === undefined) {
    throw new Error('CREDENTIALS');
  }

  const { SecretString } = await smClient.send(
    new GetSecretValueCommand({
      SecretId: credentials,
    }),
  );

  if (SecretString === undefined) {
    throw new Error('SecretString');
  }

  const { username, password } = JSON.parse(SecretString) as {
    username: string;
    password: string;
  };

  const url = new URL(call.url);

  const options = {
    rabbitUrl: url,
    username: username,
    password: password,
    path: call.path,
    method: call.method ?? 'GET',
    payload: call.payload,
  };

  const { payload } = await sendApiRequest(options, timeout);

  return payload;
};

export const sendApiRequest: RabbitApiRequest = <TResponse = any>(
  input: RabbitApiRequestInput,
  timeout: number,
) => {
  const { rabbitUrl, path, method, username, password, payload } = input;

  const options = {
    hostname: rabbitUrl.hostname,
    port: 443,
    path,
    method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${Buffer.from(`${username}:${password}`).toString(
        'base64',
      )}`,
    },
  };

  return new Promise<RabbitApiResponse<TResponse>>((resolve, reject) => {
    const req = https.request({ ...options, timeout }, (res) => {
      res.setEncoding('utf8');
      let rawData = '';
      res.on('data', (chunk) => {
        rawData += chunk;
      });
      res.on('end', () => {
        try {
          resolve({
            headers: res.headers as { [key: string]: string },
            statusCode: res.statusCode,
            payload:
              rawData !== '' ? (JSON.parse(rawData) as TResponse) : undefined,
          });
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on('error', (e) => {
      reject(e);
    });

    if (payload !== undefined) {
      req.write(JSON.stringify(payload));
    }

    req.end();
  });
};
