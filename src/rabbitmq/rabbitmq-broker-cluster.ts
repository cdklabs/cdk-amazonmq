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

    // This place holder for annotation errors
    const annotationErrors = [];

    /* START - Validate subnets and select two with different AZ if more then 2 where found */

    // check if subnet selection has been specified
    if (props.vpcSubnets && props.vpc) {
      let subnets = props.vpc?.selectSubnets(props.vpcSubnets);

      if (subnets) {
        // Get subnets from different AZ. CFN does not have requirement for the number but they need to be in different AZ
        const selected = subnets?.subnets.reduce<ISubnet[]>((acc, curr) => {
          if (!acc.find((a) => a.availabilityZone === curr.availabilityZone)) {
            acc.push(curr);
          }
          return acc;
        }, []);

        if (selected.length < 1)
          annotationErrors.push(
            `Need at leasts 1 subnet. '${JSON.stringify(props.vpcSubnets)}', please use a different selection.`,
          );

        subnetSelection = { subnets: selected };
      }
    }

    /* END - Validate subnets and select two with different AZ if more then 2 where found */

    super(scope, id, {
      ...props,
      vpcSubnets: subnetSelection,
      deploymentMode: BrokerDeploymentMode.CLUSTER_MULTI_AZ,
    });

    // Provide Annotation to the resource.
    if (annotationErrors.length > 0) {
      annotationErrors.forEach((msg) => Annotations.of(this).addError(msg));
    }
  }
}
