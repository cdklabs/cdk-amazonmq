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
import { ActiveMqBrokerEndpoints } from "./activemq-broker-endpoints";
import { BrokerDeploymentMode } from "../broker-deployment-mode";
import { StorageType } from "../storage-type";

export interface IActiveMqBrokerInstance
  extends IActiveMqBrokerDeployment,
    IActiveMqBroker {}

export interface ActiveMqBrokerInstanceProps
  extends ActiveMqBrokerDeploymentProps {
  /**
   * Sets the storage type of the Amazon MQ for ActiveMQ broker.
   * @default - undefined; EFS will be used.
   */
  readonly storageType?: StorageType;
}

/**
 * A representation of a single-instance broker comprised of one broker in one Availability Zone.
 *
 * see: https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/single-broker-deployment.html
 */
export class ActiveMqBrokerInstance
  extends ActiveMqBrokerDeploymentBase
  implements IActiveMqBrokerInstance
{
  public static fromActiveMqBrokerInstanceArn(
    scope: Construct,
    logicalId: string,
    arn?: string,
    securityGroups?: ISecurityGroup[],
  ): IActiveMqBrokerInstance {
    return ActiveMqBrokerInstance._assignEndpoints(
      ActiveMqBrokerInstance._fromActiveMqBrokerDeploymentAttributes(
        scope,
        logicalId,
        arn,
        undefined,
        undefined,
        securityGroups,
      ),
    );
  }
  public static fromActiveMqBrokerInstanceNameAndId(
    scope: Construct,
    logicalId: string,
    name: string,
    id: string,
    securityGroups?: ISecurityGroup[],
  ) {
    return ActiveMqBrokerInstance._assignEndpoints(
      ActiveMqBrokerInstance._fromActiveMqBrokerDeploymentAttributes(
        scope,
        logicalId,
        undefined,
        name,
        id,
        securityGroups,
      ),
    ) as IActiveMqBrokerInstance;
  }

  /**
   *
   * @internal
   */
  private static _assignEndpoints(
    imported: IActiveMqBrokerDeployment,
  ): IActiveMqBrokerInstance {
    return Object.assign(
      imported,
      ActiveMqBrokerInstance._buildActiveMqBroker(imported),
    );
  }

  /**
   * Gets the IP address of the ENI of the Amazon MQ for ActiveMQ broker.
   *
   * @attribute
   */
  public readonly ipAddress: string;

  /**
   * Gets the available endpoints of the Amazon MQ for ActiveMQ broker.
   */
  public readonly endpoints: ActiveMqBrokerEndpoints;

  constructor(
    scope: Construct,
    id: string,
    props: ActiveMqBrokerInstanceProps,
  ) {
    super(scope, id, {
      ...props,
      deploymentMode: BrokerDeploymentMode.SINGLE_INSTANCE,
    });

    this.endpoints = {
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
        url: `https://${this.id}.mq.${Aws.REGION}.amazonaws.com:8162`,
        port: 8162,
      },
    };

    this.ipAddress = Fn.select(0, this._resource.attrIpAddresses);
  }
}
