/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import { Aws, Fn, Token } from "aws-cdk-lib";
import { ISecurityGroup } from "aws-cdk-lib/aws-ec2";
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
 * see: https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/active-standby-broker-deployment.html
 */
export class ActiveMqBrokerRedundantPair
  extends ActiveMqBrokerDeploymentBase
  implements IActiveMqBrokerRedundantPair
{
  public static fromActiveMqBrokerRedundantPairArn(
    scope: Construct,
    logicalId: string,
    arn?: string,
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
    super(scope, id, {
      ...props,
      deploymentMode: BrokerDeploymentMode.ACTIVE_STANDBY_MULTI_AZ,
    });

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
          url: `https://${this.id}-1.mq.${Aws.REGION}.amazonaws.com:8162`,
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
          url: `https://${this.id}-2.mq.${Aws.REGION}.amazonaws.com:8162`,
          port: 8162,
        },
      },
      ipAddress: Fn.select(1, this._resource.attrIpAddresses),
    };
  }
}
