/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/

/**
 * This file is effectively a thin wrapper on the Node https module that is used to interact with RabbitMQ Management HTTP API
 */

/* eslint-disable import/no-extraneous-dependencies */
import * as https from "https";

import {
  GetSecretValueCommand,
  SecretsManagerClient,
} from "@aws-sdk/client-secrets-manager";
import { HttpMethod, RabbitApiCall } from "./types";

const smClient = new SecretsManagerClient({});

type RabbitMqRequestOptions = RabbitApiCall;

/**
 * Make a request to the RabbitMQ Management HTTP API.
 *
 * @param options the options for the request
 * @returns the response from the RabbitMQ Management HTTP API
 */
export const request = async (options: RabbitMqRequestOptions) => {
  validateOptions(options);

  const { credentials } = options;

  if (credentials === undefined) {
    throw new Error("CREDENTIALS");
  }

  const { SecretString } = await smClient.send(
    new GetSecretValueCommand({
      SecretId: credentials,
    }),
  );

  if (SecretString === undefined) {
    throw new Error("SecretString");
  }

  // WARN: in order to interact with the RabbitMQ Management HTTP API we need to work with a plaintext password
  //       Never log this password!
  const { username, password } = JSON.parse(SecretString) as {
    username: string;
    password: string;
  };

  const url = new URL(options.url);

  const input: RabbitApiRequestInput = {
    rabbitUrl: url,
    username: username,
    password: password,
    path: options.path,
    method: options.method ?? "GET",
    payload: options.payload,
  };

  const { payload } = await httpsRequest(input);

  return payload;
};

type RabbitApiRequestInput = {
  rabbitUrl: URL;
  username: string;
  password: string;
  path: string;
  method?: HttpMethod;
  payload?: {};
};

export type RabbitApiResponse<TResponse> = {
  headers: { [key: string]: string };
  statusCode: number | undefined;
  payload?: TResponse;
};

type RabbitApiRequest = <TResponse = { [key: string]: any }>(
  input: RabbitApiRequestInput,
) => Promise<RabbitApiResponse<TResponse>>;

/**
 * Validates the options for the RabbitMQ Management HTTP API call. The purpose of this method is to narrow down the potential targets of the custom resource (and the AWS Lambda).
 * @param options
 */
function validateOptions(options: RabbitMqRequestOptions) {
  // A rudimentary test verifying if the API call starts with /api (as there are no other paths allowed for the RabbitMQ Management HTTP API).
  // This limits the paths able to be used
  if (!options.path.startsWith("/api")) {
    throw new Error(
      `There is no RabbitMQ Management HTTP API call that does not start with '/api'. Received ${options.url}`,
    );
  }
}

/**
 * Make a request to the RabbitMQ Management HTTP API.
 *
 * @param input the input for the request
 * @returns the response from the RabbitMQ Management HTTP API
 */
const httpsRequest: RabbitApiRequest = <TResponse = {}>(
  input: RabbitApiRequestInput,
) => {
  const { rabbitUrl, path, method, username, password, payload } = input;

  const options = {
    hostname: rabbitUrl.hostname,
    port: 443,
    path,
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${Buffer.from(`${username}:${password}`).toString(
        "base64",
      )}`,
    },
  };

  return new Promise<RabbitApiResponse<TResponse>>((resolve, reject) => {
    const req = https.request({ ...options }, (res) => {
      res.setEncoding("utf8");
      let rawData = "";
      res.on("data", (chunk) => {
        rawData += chunk;
      });
      res.on("end", () => {
        try {
          if (res.statusCode && res.statusCode >= 200 && res.statusCode < 300) {
            resolve({
              headers: res.headers as { [key: string]: string },
              statusCode: res.statusCode,
              payload:
                rawData !== "" ? (JSON.parse(rawData) as TResponse) : undefined,
            });
          } else {
            reject(
              new Error(
                `Request failed with status code ${res.statusCode}: ${rawData}`,
              ),
            );
          }
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on("error", (e) => {
      reject(e);
    });

    if (payload !== undefined) {
      req.write(JSON.stringify(payload));
    }

    req.end();
  });
};
