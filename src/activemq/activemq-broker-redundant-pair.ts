/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import { Aws, Fn, Token, Annotations } from "aws-cdk-lib";
import { ISubnet, ISecurityGroup } from "aws-cdk-lib/aws-ec2";
import { Construct } from "constructs";
import { IActiveMqBroker } from "./activemq-broker";
import {
  ActiveMqBrokerDeploymentBase,
  ActiveMqBrokerDeploymentProps,
  IActiveMqBrokerDeployment,
} from "./activemq-broker-deployment";
import { BrokerDeploymentMode } from "../broker-deployment-mode";

export interface IActiveMqBrokerRedundantPair
  extends IActiveMqBrokerDeployment {
  readonly first: IActiveMqBroker;
  readonly second: IActiveMqBroker;
}

export interface ActiveMqBrokerRedundantPairProps
  extends ActiveMqBrokerDeploymentProps {}

/**
 * A representation of an active/standby broker that is comprised of two brokers in two different Availability Zones.
 *
 * Additional optimizations:
 * - When subnet selection returns more then 2 subnets. Construct picks first two that do belong to different AZ. Warning is annotated. If subnet selection does not meet AZ criteria an error is thrown.
 *
 *
 * see: https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/active-standby-broker-deployment.html
 */
export class ActiveMqBrokerRedundantPair
  extends ActiveMqBrokerDeploymentBase
  implements IActiveMqBrokerRedundantPair
{
  /**
   * Reference an existing ActiveMQ Broker Redundant Pair, defined outside of the CDK code, by ARN.
   *
   * @param scope
   * @param logicalId the construct's logical ID
   * @param arn the ARN of the existing ActiveMQ Broker Redundant Pair that is imported
   * @param securityGroups optionally pass security groups for working with network connections
   * @returns a representation of the ActiveMQ Broker Redundant Pair
   */
  public static fromActiveMqBrokerRedundantPairArn(
    scope: Construct,
    logicalId: string,
    arn: string,
    securityGroups?: ISecurityGroup[],
  ): IActiveMqBrokerRedundantPair {
    return ActiveMqBrokerRedundantPair._assignEndpoints(
      ActiveMqBrokerRedundantPair._fromActiveMqBrokerDeploymentAttributes(
        scope,
        logicalId,
        arn,
        undefined,
        undefined,
        securityGroups,
      ),
    );
  }

  /**
   * Reference an existing ActiveMQ Broker Redundant Pair, defined outside of the CDK code, by its name and id.
   *
   * @param scope
   * @param logicalId
   * @param name the name of the existing ActiveMQ Broker Redundant Pair to be imported
   * @param id the ID of the existing ActiveMQ Broker Redundant Pair to be imported
   * @param securityGroups (optional) pass security groups for working with network connections
   * @returns a representation of the ActiveMQ Broker Redundant Pair
   */
  public static fromActiveMqBrokerRedundantPairNameAndId(
    scope: Construct,
    logicalId: string,
    name: string,
    id: string,
    securityGroups?: ISecurityGroup[],
  ) {
    return ActiveMqBrokerRedundantPair._assignEndpoints(
      ActiveMqBrokerRedundantPair._fromActiveMqBrokerDeploymentAttributes(
        scope,
        logicalId,
        undefined,
        name,
        id,
        securityGroups,
      ),
    ) as IActiveMqBrokerRedundantPair;
  }

  /**
   *
   * @internal
   */
  private static _assignEndpoints(
    imported: IActiveMqBrokerDeployment,
  ): IActiveMqBrokerRedundantPair {
    return Object.assign(imported, {
      first: ActiveMqBrokerRedundantPair._buildActiveMqBroker(imported, "-1"),
      second: ActiveMqBrokerRedundantPair._buildActiveMqBroker(imported, "-2"),
    } as IActiveMqBrokerRedundantPair);
  }

  /**
   * The first broker of the redundant pair for the deployment.
   */
  public readonly first: IActiveMqBroker;

  /**
   * The second broker of the redundant pair for the deployment.
   */
  public readonly second: IActiveMqBroker;

  constructor(
    scope: Construct,
    id: string,
    props: ActiveMqBrokerRedundantPairProps,
  ) {
    let subnetSelection = props.vpcSubnets;

    /* START - Validate subnets and select two with different AZ if more then 2 where found */
    // This flag is used to determine if a annotation needs to be done
    const annotations = {
      warnings: new Array<string>(),
      errors: new Array<string>(),
    };

    // check if subnet selection has been specified
    if (props.vpcSubnets && props.vpc) {
      let subnets = props.vpc?.selectSubnets(props.vpcSubnets);

      if (subnets) {
        if (subnets?.subnets.length < 2) {
          annotations.errors.push(
            `Need exactly 2 subnets. '${JSON.stringify(props.vpcSubnets)}', please use a different selection.`,
          );
        }

        if (subnets?.subnets.length >= 2) {
          const azSubnet: ISubnet[] = [];

          // find first two entries that has different az from subnets.availabilityZones
          subnets.subnets.find((subnet, index) => {
            const candidates = subnets.subnets.filter(
              (p) => p.availabilityZone != subnet.availabilityZone,
            );

            if (candidates.length > 0) {
              azSubnet.push(subnets.subnets[index]);
              azSubnet.push(candidates[0]);
              return true;
            }

            return false;
          });

          if (azSubnet.length >= 2) {
            // take only first two
            subnetSelection = { subnets: [azSubnet[0], azSubnet[1]] };

            // display warning if other were rejected
            if (azSubnet.length > 2)
              annotations.warnings.push(
                `Need exactly 2 subnets from different AZ found more. Selecting only two from different AZs: ${azSubnet[0].subnetId}, ${azSubnet[1].subnetId}`,
              );
          } else {
            annotations.warnings.push(
              `Requirement for exactly 2 subnets from different AZ is not be meet with '${JSON.stringify(props.vpcSubnets)}'`,
            );
          }
        }
      }
    }

    /* END - Validate subnets and select two with different AZ if more then 2 where found */

    super(scope, id, {
      ...props,
      vpcSubnets: subnetSelection,
      deploymentMode: BrokerDeploymentMode.ACTIVE_STANDBY_MULTI_AZ,
    });

    // Provide Annotation to the resource.
    if (annotations.warnings.length > 0) {
      annotations.warnings.forEach((msg) =>
        Annotations.of(this).addWarning(msg),
      );
    }

    if (annotations.errors.length > 0) {
      annotations.errors.forEach((msg) => Annotations.of(this).addWarning(msg));
    }

    this.first = {
      endpoints: {
        amqp: {
          url: Fn.select(0, this._resource.attrAmqpEndpoints),
          port: Token.asNumber(
            Fn.select(
              2,
              Fn.split(":", Fn.select(0, this._resource.attrAmqpEndpoints)),
            ),
          ),
        },
        stomp: {
          url: Fn.select(0, this._resource.attrStompEndpoints),
          port: Token.asNumber(
            Fn.select(
              2,
              Fn.split(":", Fn.select(0, this._resource.attrStompEndpoints)),
            ),
          ),
        },
        openWire: {
          url: Fn.select(0, this._resource.attrOpenWireEndpoints),
          port: Token.asNumber(
            Fn.select(
              2,
              Fn.split(":", Fn.select(0, this._resource.attrOpenWireEndpoints)),
            ),
          ),
        },
        mqtt: {
          url: Fn.select(0, this._resource.attrMqttEndpoints),
          port: Token.asNumber(
            Fn.select(
              2,
              Fn.split(":", Fn.select(0, this._resource.attrMqttEndpoints)),
            ),
          ),
        },
        wss: {
          url: Fn.select(0, this._resource.attrWssEndpoints),
          port: Token.asNumber(
            Fn.select(
              2,
              Fn.split(":", Fn.select(0, this._resource.attrWssEndpoints)),
            ),
          ),
        },
        console: {
          url: `https://${this.id}-1.mq.${Aws.REGION}.${Aws.URL_SUFFIX}:8162`,
          port: 8162,
        },
      },
      ipAddress: Fn.select(0, this._resource.attrIpAddresses),
    };

    this.second = {
      endpoints: {
        amqp: {
          url: Fn.select(1, this._resource.attrAmqpEndpoints),
          port: Token.asNumber(
            Fn.select(
              2,
              Fn.split(":", Fn.select(1, this._resource.attrAmqpEndpoints)),
            ),
          ),
        },
        stomp: {
          url: Fn.select(1, this._resource.attrStompEndpoints),
          port: Token.asNumber(
            Fn.select(
              2,
              Fn.split(":", Fn.select(1, this._resource.attrStompEndpoints)),
            ),
          ),
        },
        openWire: {
          url: Fn.select(1, this._resource.attrOpenWireEndpoints),
          port: Token.asNumber(
            Fn.select(
              2,
              Fn.split(":", Fn.select(1, this._resource.attrOpenWireEndpoints)),
            ),
          ),
        },
        mqtt: {
          url: Fn.select(1, this._resource.attrMqttEndpoints),
          port: Token.asNumber(
            Fn.select(
              2,
              Fn.split(":", Fn.select(1, this._resource.attrMqttEndpoints)),
            ),
          ),
        },
        wss: {
          url: Fn.select(1, this._resource.attrWssEndpoints),
          port: Token.asNumber(
            Fn.select(
              2,
              Fn.split(":", Fn.select(1, this._resource.attrWssEndpoints)),
            ),
          ),
        },
        console: {
          url: `https://${this.id}-2.mq.${Aws.REGION}.${Aws.URL_SUFFIX}:8162`,
          port: 8162,
        },
      },
      ipAddress: Fn.select(1, this._resource.attrIpAddresses),
    };
  }
}
