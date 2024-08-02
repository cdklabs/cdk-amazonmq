/* eslint-disable import/no-extraneous-dependencies */
import { DescribeNetworkInterfacesCommand, EC2Client } from '@aws-sdk/client-ec2';
import { CloudFormationCustomResourceEvent } from 'aws-lambda';

const ec2Client = new EC2Client();

export async function handler(event: CloudFormationCustomResourceEvent) {
  console.log('Event 👉', event);
  const requestType = event.RequestType;
  console.log('Request Type is 👉', requestType);
  let isReady = true;

  if (requestType === 'Delete') {
    const { MqType, EsmId, AccountId } = event.ResourceProperties;

    if (MqType === undefined) {
      throw new Error('MqType');
    }

    if (EsmId === undefined) {
      throw new Error('EsmId');
    }

    if (AccountId === undefined) {
      throw new Error('AccountId');
    }

    const response = await ec2Client.send(new DescribeNetworkInterfacesCommand({
      Filters: [{
        Name: 'description',
        Values: [`AWS Lambda VPC ENI-${MqType}-${AccountId}-${EsmId}*`],
      }],
    }));

    if (response.NetworkInterfaces && response.NetworkInterfaces.length > 0) {
      // INFO: still waiting for the ESM to clean up
      isReady = false;
    }
  };

  const response = {
    IsComplete: isReady,
  };

  console.log('Return value:', JSON.stringify(response));
  return response;
}