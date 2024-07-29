/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import { Aws, Fn, Token } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { IActiveMqBroker } from './activemq-broker';
import { ActiveMqBrokerConfiguration, IActiveMqBrokerConfiguration } from './activemq-broker-configuration';
import { ActiveMqBrokerDeploymentBase, ActiveMqBrokerDeploymentProps } from './activemq-broker-deployment';
import { ActiveMqBrokerEndpoints } from './activemq-broker-endpoints';
import { BrokerDeploymentMode } from '../broker-deployment-mode';

export interface ActiveMqBrokerInstanceProps extends ActiveMqBrokerDeploymentProps {

}

/**
 * A representation of a single-instance broker comprised of one broker in one Availability Zone.
 *
 * see: https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/single-broker-deployment.html
 */
export class ActiveMqBrokerInstance extends ActiveMqBrokerDeploymentBase implements IActiveMqBroker {

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

  public readonly configuration: IActiveMqBrokerConfiguration;

  constructor(scope: Construct, id: string, props: ActiveMqBrokerInstanceProps) {
    super(scope, id, {
      ...props,
      deploymentMode: BrokerDeploymentMode.SINGLE_INSTANCE,
    });

    this.endpoints = {
      amqp: {
        url: Fn.select(0, this._resource.attrAmqpEndpoints),
        port: Token.asNumber(Fn.select(2, Fn.split(':', Fn.select(0, this._resource.attrAmqpEndpoints)))),
      },
      stomp: {
        url: Fn.select(0, this._resource.attrStompEndpoints),
        port: Token.asNumber(Fn.select(2, Fn.split(':', Fn.select(0, this._resource.attrStompEndpoints)))),
      },
      openWire: {
        url: Fn.select(0, this._resource.attrOpenWireEndpoints),
        port: Token.asNumber(Fn.select(2, Fn.split(':', Fn.select(0, this._resource.attrOpenWireEndpoints)))),
      },
      mqtt: {
        url: Fn.select(0, this._resource.attrMqttEndpoints),
        port: Token.asNumber(Fn.select(2, Fn.split(':', Fn.select(0, this._resource.attrMqttEndpoints)))),
      },
      wss: {
        url: Fn.select(0, this._resource.attrWssEndpoints),
        port: Token.asNumber(Fn.select(2, Fn.split(':', Fn.select(0, this._resource.attrWssEndpoints)))),
      },
      console: {
        url: `https://${this.id}.mq.${Aws.REGION}.amazonaws.com:8162`,
        port: 8162,
      },
    };

    this.ipAddress = Fn.select(0, this._resource.attrIpAddresses);

    this.configuration = ActiveMqBrokerConfiguration.fromAttributes(this.stack, `${id}Configuration`, {
      id: this._resource.attrConfigurationId,
      revision: this._resource.attrConfigurationRevision,
    });
  }
}