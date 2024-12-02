/* eslint-disable import/no-extraneous-dependencies */

import {
  DeleteEventSourceMappingCommand,
  LambdaClient,
} from "@aws-sdk/client-lambda";
import {
  CloudFormationCustomResourceEvent,
  CloudFormationCustomResourceDeleteEvent,
  CloudFormationCustomResourceUpdateEvent,
  CloudFormationCustomResourceCreateEvent,
} from "aws-lambda";

const lambdaClient = new LambdaClient();

interface Response {
  PhysicalResourceId: string;
}

export async function handler(event: CloudFormationCustomResourceEvent) {
  let response: Promise<Response>;
  switch (event.RequestType) {
    case "Create":
      response = onCreate(event);
      break;
    case "Delete":
      response = onDelete(event);
      break;
    case "Update":
      response = onUpdate(event);
      break;
    default:
      throw new Error("Unknown Request Type of CloudFormation");
  }
  return response;
}

async function onCreate(
  event: CloudFormationCustomResourceCreateEvent,
): Promise<Response> {
  return {
    PhysicalResourceId: "abcdef-" + event.RequestId,
  };
}

async function onDelete(
  event: CloudFormationCustomResourceDeleteEvent,
): Promise<Response> {
  const { EsmId } = event.ResourceProperties;

  if (EsmId === undefined) {
    throw new Error("EsmId");
  }

  // TODO: add error handling here. It might be that someone just deleted it earlier manually
  await lambdaClient.send(
    new DeleteEventSourceMappingCommand({
      UUID: EsmId,
    }),
  );

  return {
    PhysicalResourceId: event.PhysicalResourceId || "",
  };
}

async function onUpdate(
  event: CloudFormationCustomResourceUpdateEvent,
): Promise<Response> {
  return {
    PhysicalResourceId: event.PhysicalResourceId || "",
  };
}
