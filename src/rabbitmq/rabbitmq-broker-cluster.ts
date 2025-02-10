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

export interface IRabbitMqBrokerCluster
  extends IRabbitMqBroker,
    IRabbitMqBrokerDeployment {}

export interface RabbitMqBrokerClusterProps
  extends RabbitMqBrokerDeploymentProps {}

/**
 * A representation of a RabbitMQ cluster deployment is a logical grouping of three RabbitMQ broker nodes behind a Network Load Balancer, each sharing users, queues, and a distributed state across multiple Availability Zones (AZ).
 */
export class RabbitMqBrokerCluster
  extends RabbitMqBrokerDeploymentBase
  implements IRabbitMqBrokerCluster
{
  public static fromRabbitMqBrokerClusterArn(
    scope: Construct,
    id: string,
    arn: string,
    securityGroups?: ISecurityGroup[],
  ) {
    return RabbitMqBrokerCluster._fromRabbitMqBrokerDeploymentAttributes(
      scope,
      id,
      arn,
      undefined,
      undefined,
      securityGroups,
    ) as IRabbitMqBrokerCluster;
  }

  public static fromRabbitMqBrokerClusterNameAndId(
    scope: Construct,
    logicalId: string,
    name: string,
    id: string,
    securityGroups?: ISecurityGroup[],
  ) {
    return RabbitMqBrokerCluster._fromRabbitMqBrokerDeploymentAttributes(
      scope,
      logicalId,
      undefined,
      name,
      id,
      securityGroups,
    ) as IRabbitMqBrokerCluster;
  }

  constructor(scope: Construct, id: string, props: RabbitMqBrokerClusterProps) {
    super(scope, id, {
      ...props,
      deploymentMode: BrokerDeploymentMode.CLUSTER_MULTI_AZ,
    });
  }
}
