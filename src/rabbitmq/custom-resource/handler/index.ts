/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0

This custom resource lambda is heavily inspired on the AwsCustomResource lambda implementation (see: https://github.com/aws/aws-cdk/blob/main/packages/%40aws-cdk/custom-resource-handlers/lib/custom-resources/aws-custom-resource-handler/index.ts)
*/

/* eslint-disable import/no-extraneous-dependencies */
//       Get a look at this: https://repost.aws/knowledge-center/cloudformation-lambda-resource-delete

import type * as AWSLambda from "aws-lambda";
import { replaceDynamicReferences } from "./dynamic-references";
import { request } from "./rabbitmq-management-api";
import type { RabbitApiCall } from "./types";
import {
  respond,
  decodeCall,
  flattenObj,
  filterKeys,
  startsWithOneOf,
} from "./utils";

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
      case "Create":
        physicalResourceId =
          event.ResourceProperties.Create?.physicalResourceId?.id ??
          event.ResourceProperties.Update?.physicalResourceId?.id ??
          event.ResourceProperties.Delete?.physicalResourceId?.id ??
          event.LogicalResourceId;
        break;
      case "Update":
      case "Delete":
        physicalResourceId =
          event.ResourceProperties[event.RequestType]?.physicalResourceId?.id ??
          event.PhysicalResourceId;
        break;
    }

    let data: any = undefined;

    const apiCallProps = event.ResourceProperties[event.RequestType];

    if (apiCallProps !== undefined) {
      const { Url: url, Credentials: credentials } = event.ResourceProperties;

      const options: RabbitApiCall = {
        url,
        credentials,
        ...apiCallProps,
      };

      const response = await request(options);

      if (response) {
        const flatData = flattenObj(response);

        data = options.outputPaths
          ? filterKeys(flatData, startsWithOneOf(options.outputPaths))
          : flatData;

        if (apiCallProps.physicalResourceId?.responsePath) {
          physicalResourceId =
            flatData[apiCallProps.physicalResourceId.responsePath];
        }
      }
    }
    await respond(event, "SUCCESS", "OK", physicalResourceId, data);
  } catch (e: any) {
    await respond(
      event,
      "FAILED",
      e.message || "Internal Error",
      context.logStreamName,
      {},
    );
  }
}
