/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/

/**
 * This file was created mostly for replicating this file: https://github.com/aws/aws-cdk/blob/main/packages/%40aws-cdk/custom-resource-handlers/lib/custom-resources/aws-custom-resource-handler/utils.ts
 * The reason for that is that the custom resource for interacting with RabbitMQ Management HTTP API has been intended to replicate the user experience of AwsCustomResource.
 */

/* eslint-disable import/no-extraneous-dependencies */
import * as https from 'https';
import * as AWSLambda from 'aws-lambda';

/**
 * Serialized form of the physical resource id for use in the operation parameters
 */
export const PHYSICAL_RESOURCE_ID_REFERENCE = 'PHYSICAL:RESOURCEID:';

export function decodeCall(call: string | undefined): any {
  if (!call) {
    return undefined;
  }
  return JSON.parse(call);
}

export function respond(
  event: AWSLambda.CloudFormationCustomResourceEvent,
  responseStatus: string,
  reason: string,
  physicalResourceId: string,
  data: any,
) {
  const responseBody = JSON.stringify({
    Status: responseStatus,
    Reason: reason,
    PhysicalResourceId: physicalResourceId,
    StackId: event.StackId,
    RequestId: event.RequestId,
    LogicalResourceId: event.LogicalResourceId,
    NoEcho: false,
    Data: data,
  });

  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const parsedUrl = new URL(event.ResponseURL);
  const requestOptions = {
    hostname: parsedUrl.hostname,
    path: `${parsedUrl.pathname}${parsedUrl.search}`,
    port: parsedUrl.port || 443,
    method: 'PUT',
    headers: {
      'content-type': '',
      'content-length': Buffer.byteLength(responseBody, 'utf8'),
    },
  };

  return new Promise((resolve, reject) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const request = https.request(requestOptions, (response) => {
        response.setEncoding('utf8');
        const responseData: string[] = [];
        response.on('data', (chunk) => responseData.push(chunk));
        response.on('end', () => {
          resolve(responseData.join(''));
        });
        response.on('error', (e) => {
          reject(e);
        });
      });
      request.on('error', (e: any) => {
        reject(e);
      });
      request.write(responseBody);
      request.end();
    } catch (e) {
      reject(e);
    }
  });
}

export function safeParse(call?: string | null) {
  if (!call) {
    return undefined;
  }
  return JSON.parse(call);
}

export function filterKeys(object: object, pred: (key: string) => boolean) {
  return Object.entries(object).reduce(
    (acc, [k, v]) => (pred(k) ? { ...acc, [k]: v } : acc),
    {},
  );
}

export function startsWithOneOf(
  searchStrings: string[],
): (string: string) => boolean {
  return function (string: string): boolean {
    for (const searchString of searchStrings) {
      if (string.startsWith(searchString)) {
        return true;
      }
    }
    return false;
  };
}

export function flattenObj(ob: { [key: string]: any }) {
  // The object which contains the
  // final result
  let result: { [key: string]: any } = {};

  // loop through the object 'ob'
  for (const i in ob) {
    // We check the type of the i using
    // typeof() function and recursively
    // call the function again
    if (typeof ob[i] === 'object') {
      const temp = flattenObj(ob[i]);
      for (const j in temp) {
        // Store temp in result
        result[i + '.' + j] = temp[j];
      }
      // eslint-disable-next-line brace-style
    }

    // Else store ob[i] in result directly
    else {
      result[i] = ob[i];
    }
  }
  return result;
}
