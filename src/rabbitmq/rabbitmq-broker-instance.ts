/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import { Construct } from "constructs";
import { IRabbitMqBroker } from "./rabbitmq-broker";
import {
  RabbitMqBrokerDeploymentBase,
  RabbitMqBrokerDeploymentProps,
} from "./rabbitmq-broker-deployment";
import { BrokerDeploymentMode } from "../broker-deployment-mode";

export interface RabbitMqBrokerInstanceProps
  extends RabbitMqBrokerDeploymentProps {}

/**
 * A representation of a single-instance broker comprised of one broker in one Availability Zone behind a Network Load Balancer (NLB)
 */
export class RabbitMqBrokerInstance
  extends RabbitMqBrokerDeploymentBase
  implements IRabbitMqBroker
{
  constructor(
    scope: Construct,
    id: string,
    props: RabbitMqBrokerInstanceProps,
  ) {
    super(scope, id, {
      ...props,
      deploymentMode: BrokerDeploymentMode.SINGLE_INSTANCE,
    });
  }
}
