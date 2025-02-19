/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import { Annotations } from "aws-cdk-lib";
import { ISubnet } from "aws-cdk-lib/aws-ec2";
import { Construct } from "constructs";
import { IRabbitMqBroker } from "./rabbitmq-broker";
import {
  RabbitMqBrokerDeploymentBase,
  RabbitMqBrokerDeploymentProps,
} from "./rabbitmq-broker-deployment";
import { BrokerDeploymentMode } from "../broker-deployment-mode";

export interface RabbitMqBrokerClusterProps
  extends RabbitMqBrokerDeploymentProps {}

/**
 * A representation of a RabbitMQ cluster deployment is a logical grouping of three RabbitMQ broker nodes behind a Network Load Balancer, each sharing users, queues, and a distributed state across multiple Availability Zones (AZ).
 */
export class RabbitMqBrokerCluster
  extends RabbitMqBrokerDeploymentBase
  implements IRabbitMqBroker
{
  constructor(scope: Construct, id: string, props: RabbitMqBrokerClusterProps) {
    let subnetSelection = props.vpcSubnets;

    /* START - Validate subnets and select two with different AZ if more then 2 where found */

    // check if subnet selection has been specified
    if (props.vpcSubnets) {
      let subnets = props.vpc?.selectSubnets(props.vpcSubnets);

      if (subnets) {
        if (subnets?.subnets.length < 1) {
          Annotations.of(scope).addError(
            `Need at leasts 1 subnet. '${JSON.stringify(props.vpcSubnets)}', please use a different selection.`,
          );
        }

        // Get subnets from different AZ
        const selected = subnets?.subnets.reduce<ISubnet[]>((acc, curr) => {
          if (!acc.find((a) => a.availabilityZone === curr.availabilityZone)) {
            acc.push(curr);
          }
          return acc;
        }, []);

        subnetSelection = { subnets: selected };
      }
    }

    /* END - Validate subnets and select two with different AZ if more then 2 where found */

    super(scope, id, {
      ...props,
      vpcSubnets: subnetSelection,
      deploymentMode: BrokerDeploymentMode.CLUSTER_MULTI_AZ,
    });
  }
}
