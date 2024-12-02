/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import {
  IEventSource,
  SourceAccessConfigurationType,
} from "aws-cdk-lib/aws-lambda";
import {
  EventSourceBase,
  EventSourceProps,
} from "../../mq-esm/event-source-base";
import { IRabbitMqBrokerDeployment } from "../rabbitmq-broker-deployment";

export interface RabbitMqEventSourceProps extends EventSourceProps {
  /**
   * The RabbitMQ broker deployment to receive messages from.
   */
  readonly broker: IRabbitMqBrokerDeployment;

  /**
   * he name of the RabbitMQ virtual host from which a queue will be the source of messages.
   *
   * @default - the default virtual host '/' will be used.
   */
  readonly virtualHost?: string;
}

/**
 * Represents an AWS Lambda Event Source Mapping for RabbitMQ. This event source will add additional permissions to
 * the AWS Lambda function's IAM Role following https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#events-mq-permissions
 */
export class RabbitMqEventSource
  extends EventSourceBase
  implements IEventSource
{
  /**
   * Instantiates an AWS Lambda Event Source Mapping for RabbitMQ. This event source will add additional permissions to
   * the AWS Lambda function's IAM Role following https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#events-mq-permissions
   *
   * @param props properties of the RabbitMQ event source
   */
  constructor(props: RabbitMqEventSourceProps) {
    super(props, "armq");

    if (props.virtualHost) {
      this.addToSourceAccessConfigurations({
        type: SourceAccessConfigurationType.of("VIRTUAL_HOST"),
        uri: props.virtualHost,
      });
    }
  }
}
