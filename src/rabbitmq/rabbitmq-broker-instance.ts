/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import { Annotations } from "aws-cdk-lib";
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
 *
 * Additional optimizations:
 * - When subnet selection returns more then 1 subnets. A first one is picked. Warning is annotated
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
    let subnetSelection = props.vpcSubnets;

    // This flag is used to determine if a annotation needs to be done
    const annotationWarnings = [];

    // check if subnet selection has been specified
    if (props.vpcSubnets && props.vpc) {
      const subnets = props.vpc?.selectSubnets(props.vpcSubnets);

      // if selection is valid for a vpc
      if (subnets) {
        // single instance allows only one subnet take the first one
        subnetSelection = { subnets: [subnets.subnets[0]] };

        if (subnets.subnets.length > 1)
          // Annotate the fact of taking first one when more then one were selected
          annotationWarnings.push(
            `Exactly 1 subnet in [SINGLE_INSTANCE] deployment mode is needed. vpcSubnets selection returned ${subnets.subnets.length}. Taking first one from the selection`,
          );
      }
    }

    super(scope, id, {
      ...props,
      vpcSubnets: subnetSelection,
      deploymentMode: BrokerDeploymentMode.SINGLE_INSTANCE,
    });

    // Provide Annotation to the resource.
    if (annotationWarnings.length > 0) {
      annotationWarnings.forEach((msg) =>
        Annotations.of(scope).addWarning(msg),
      );
    }
  }
}
