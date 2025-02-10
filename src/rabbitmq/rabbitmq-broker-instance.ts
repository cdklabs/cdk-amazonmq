/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import { ISecurityGroup } from "aws-cdk-lib/aws-ec2";
import { Construct } from "constructs";
import { IRabbitMqBroker } from "./rabbitmq-broker";
import {
  IRabbitMqBrokerDeployment,
  RabbitMqBrokerDeploymentBase,
  RabbitMqBrokerDeploymentProps,
} from "./rabbitmq-broker-deployment";
import { BrokerDeploymentMode } from "../broker-deployment-mode";

export interface IRabbitMqBrokerInstance
  extends IRabbitMqBrokerDeployment,
    IRabbitMqBroker {}

export interface RabbitMqBrokerInstanceProps
  extends RabbitMqBrokerDeploymentProps {}

/**
 * A representation of a single-instance broker comprised of one broker in one Availability Zone behind a Network Load Balancer (NLB)
 */
export class RabbitMqBrokerInstance
  extends RabbitMqBrokerDeploymentBase
  implements IRabbitMqBrokerInstance
{
  public static fromRabbitMqBrokerInstanceArn(
    scope: Construct,
    id: string,
    arn: string,
    securityGroups?: ISecurityGroup[],
  ) {
    return RabbitMqBrokerInstance._fromRabbitMqBrokerDeploymentAttributes(
      scope,
      id,
      arn,
      undefined,
      undefined,
      securityGroups,
    ) as IRabbitMqBrokerInstance;
  }

  public static fromRabbitMqBrokerInstanceNameAndId(
    scope: Construct,
    logicalId: string,
    name: string,
    id: string,
    securityGroups?: ISecurityGroup[],
  ) {
    return RabbitMqBrokerInstance._fromRabbitMqBrokerDeploymentAttributes(
      scope,
      logicalId,
      undefined,
      name,
      id,
      securityGroups,
    ) as IRabbitMqBrokerInstance;
  }

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
