/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface RabbitApiRequestOptions {
  readonly url: string;
  readonly credentials: string;
  readonly path: string;
  readonly method?: HttpMethod;
  readonly payload?: {};
  readonly outputPaths?: string[];
}

export type RabbitApiResponse<TResponse> = {
  headers: { [key: string]: string };
  statusCode: number | undefined;
  payload?: TResponse;
}

export type RabbitApiRequestInput = {
  rabbitUrl: URL;
  username: string;
  password: string;
  path: string;
  method?: HttpMethod;
  payload?: {};
}

export type RabbitApiRequest = <TResponse = any>(input: RabbitApiRequestInput, timeout: number) => Promise<RabbitApiResponse<TResponse>>
