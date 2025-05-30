/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import { Aws, Fn, Token, Annotations } from "aws-cdk-lib";
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
 * Additional optimizations:
 * - When subnet selection returns more then 1 subnets. A first one is picked. Warning is annotated
 *
 *
 * see: https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/single-broker-deployment.html
 */
export class ActiveMqBrokerInstance
  extends ActiveMqBrokerDeploymentBase
  implements IActiveMqBrokerInstance
{
  /**
   * Reference an existing ActiveMQ Broker Instance, defined outside of the CDK code, by ARN.
   *
   * @param scope
   * @param logicalId the construct's logical ID
   * @param arn the ARN of the existing ActiveMQ Broker Instance that is imported
   * @param securityGroups optionally pass security groups for working with network connections
   * @returns a representation of the ActiveMQ Broker Instance
   */
  public static fromActiveMqBrokerInstanceArn(
    scope: Construct,
    logicalId: string,
    arn: string,
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

  /**
   * Reference an existing ActiveMQ Broker Instance, defined outside of the CDK code, by its name and id.
   *
   * @param scope
   * @param logicalId
   * @param name the name of the existing ActiveMQ Broker Instance to be imported
   * @param id the ID of the existing ActiveMQ Broker Instance to be imported
   * @param securityGroups (optional) pass security groups for working with network connections
   * @returns a representation of the ActiveMQ Broker Instance
   */
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

        if (subnets.subnets.length > 1) {
          // Annotate the fact of taking first one when more then one were selected
          annotationWarnings.push(
            `Exactly 1 subnet in [SINGLE_INSTANCE] deployment mode is needed. vpcSubnets selection returned ${subnets.subnets.length}. Taking first one from the selection`,
          );
        }
      }
    }

    super(scope, id, {
      ...props,
      vpcSubnets: subnetSelection,
      deploymentMode: BrokerDeploymentMode.SINGLE_INSTANCE,
    });

    // Provide Annotation to the resource.
    if (annotationWarnings.length > 0) {
      annotationWarnings.forEach((msg) => Annotations.of(this).addWarning(msg));
    }

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
        url: `https://${this.id}.mq.${Aws.REGION}.${Aws.URL_SUFFIX}:8162`,
        port: 8162,
      },
    };

    this.ipAddress = Fn.select(0, this._resource.attrIpAddresses);
  }
}
