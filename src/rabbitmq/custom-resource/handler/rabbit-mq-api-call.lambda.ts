/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/

/* eslint-disable import/no-extraneous-dependencies */
// TODO: deleting this Lambda takes ages during CFN deletion. Debug it.
//       Get a look at this: https://repost.aws/knowledge-center/cloudformation-lambda-resource-delete

import type * as AWSLambda from 'aws-lambda';
import type { RabbitApiRequestOptions } from './api';
import { replaceDynamicReferences } from './dynamic-references';
import { invokeRabbitApiCall } from './rabbitmq-http-api-call';
import { respond, decodeCall, flattenObj, filterKeys, startsWithOneOf } from './utils';

export async function handler(
  event: AWSLambda.CloudFormationCustomResourceEvent,
  context: AWSLambda.Context,
) {
  try {
    event.ResourceProperties[event.RequestType] =
      await replaceDynamicReferences(
        event.ResourceProperties[event.RequestType],
      );

    event.ResourceProperties.Create = decodeCall(
      event.ResourceProperties.Create,
    );
    event.ResourceProperties.Update = decodeCall(
      event.ResourceProperties.Update,
    );
    event.ResourceProperties.Delete = decodeCall(
      event.ResourceProperties.Delete,
    );

    let physicalResourceId: string;
    switch (event.RequestType) {
      case 'Create':
        physicalResourceId =
          event.ResourceProperties.Create?.physicalResourceId?.id ??
          event.ResourceProperties.Update?.physicalResourceId?.id ??
          event.ResourceProperties.Delete?.physicalResourceId?.id ??
          event.LogicalResourceId;
        break;
      case 'Update':
      case 'Delete':
        physicalResourceId =
          event.ResourceProperties[event.RequestType]?.physicalResourceId?.id ??
          event.PhysicalResourceId;
        break;
    }

    let data: any = undefined;

    const apiCallProps = event.ResourceProperties[event.RequestType];

    if (apiCallProps !== undefined) {
      const { Url: url, Credentials: credentials } = event.ResourceProperties;

      const request: RabbitApiRequestOptions = {
        url,
        credentials,
        ...apiCallProps,
      };

      const response = await invokeRabbitApiCall(request);

      const flatData = flattenObj(response);

      data =
        response && request.outputPaths
          ? filterKeys(flatData, startsWithOneOf(request.outputPaths))
          : flatData;

      if (apiCallProps.physicalResourceId?.responsePath) {
        physicalResourceId =
          flatData[apiCallProps.physicalResourceId.responsePath];
      }
    }
    await respond(event, 'SUCCESS', 'OK', physicalResourceId, data);
  } catch (e: any) {
    await respond(
      event,
      'FAILED',
      e.message || 'Internal Error',
      context.logStreamName,
      {},
    );
  }
}
