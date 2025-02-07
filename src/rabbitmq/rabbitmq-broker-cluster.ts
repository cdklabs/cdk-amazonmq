/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import { Annotations} from "aws-cdk-lib";
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


		let subnetSelection = props.vpcSubnets
				
		/* START - Validate subnets and select two with different AZ if more then 2 where found */

		// check if subnet selection has been specified 
		if(props.vpcSubnets){
				
			let subnets = props.vpc?.selectSubnets(props.vpcSubnets);

			if(subnets){
				if(subnets?.subnets.length < 3) {
					Annotations.of(scope).addError(
						`Need exactly 2 subnets. '${JSON.stringify(props.vpcSubnets)}', please use a different selection.`,
					);
				}

				if (subnets?.subnets.length >= 2) {
					const azSubnet: ISubnet[] = [];
					const usedAzs = new Set<string>();

					// find first three entries that has different az from subnets.availabilityZones
					subnets.subnets.find((subnet, index) => {
						const candidates = subnets.subnets.filter(p => p.availabilityZone != subnet.availabilityZone);

						if (candidates.length > 1 && usedAzs.has(candidates[0].availabilityZone) === false) {
							azSubnet.push(subnets.subnets[index]);
							azSubnet.push(candidates[0]);
							usedAzs.add(subnets.subnets[index].availabilityZone);
							usedAzs.add(candidates[0].availabilityZone);

							// we assume that there no subnet limitations for RabbitMQ thus we take all that belong to different AZ
						}else{
							Annotations.of(scope).addWarning(
								`CLUSTER_MULTI_AZ deployment requires that each subnet will be in different AZ. Rejecting ${subnet.subnetId}. Taking first one from the selection`)
						}
						return false;
					});
					
					subnetSelection = { subnets: azSubnet };
				}
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
