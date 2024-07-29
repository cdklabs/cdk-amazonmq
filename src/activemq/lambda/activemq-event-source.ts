/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import { IEventSource } from 'aws-cdk-lib/aws-lambda';
import { EventSourceBase, EventSourceProps } from '../../mq-esm/event-source-base';
import { IActiveMqBrokerDeployment } from '../activemq-broker-deployment';

export interface ActiveMqEventSourceProps extends EventSourceProps {
  /**
   * The ActiveMQ broker deployment to receive messages from.
   */
  readonly broker: IActiveMqBrokerDeployment;
}

/**
 * Represents an AWS Lambda Event Source Mapping for ActiveMQ. This event source will add additional permissions to
 * the AWS Lambda function's IAM Role following https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#events-mq-permissions
 */
export class ActiveMqEventSource extends EventSourceBase implements IEventSource {

  /**
   * Instantiates an AWS Lambda Event Source Mapping for ActiveMQ. This event source will add additional permissions to
   * the AWS Lambda function's IAM Role following https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#events-mq-permissions
   *
   * @param props properties of the ActiveMQ event source
   */
  constructor(props: ActiveMqEventSourceProps) {
    super(props);
  }
}