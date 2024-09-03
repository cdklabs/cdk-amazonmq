/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/

import { Arn, ArnFormat, Fn, Resource, Stack, Token } from 'aws-cdk-lib';
import { AwsCustomResource, AwsCustomResourcePolicy, AwsSdkCall, PhysicalResourceId } from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';
import { ActiveMqAuthenticationStrategy } from './activemq-authentication-strategy';
import { ActiveMqBrokerConfigurationDefinition } from './activemq-broker-configuration-definition';
import { IActiveMqBrokerDeployment } from './activemq-broker-deployment';
import { ActiveMqBrokerEngineVersion } from './activemq-broker-engine-version';
import { BrokerEngine } from '../broker-deployment';
import { BrokerConfiguration, BrokerConfigurationAttributes, IBrokerConfiguration } from '../configuration';
import { ConfigurationAssociation } from '../configuration-association';

export interface ActiveMqBrokerConfigurationOptions {
  readonly description?: string;
  readonly definition: ActiveMqBrokerConfigurationDefinition;
}

export interface ActiveMqBrokerConfigurationProps extends ActiveMqBrokerConfigurationOptions {
  readonly configurationName?: string;
  readonly engineVersion: ActiveMqBrokerEngineVersion;

  /**
   * Sets authentication strategy for the broker
   *
   * @default - undefined; a SIMPLE authentication strategy will be applied
   */
  readonly authenticationStrategy?: ActiveMqAuthenticationStrategy;
}

export interface IActiveMqBrokerConfiguration extends IBrokerConfiguration {
  associateWith(broker: IActiveMqBrokerDeployment): ConfigurationAssociation;
  createRevision(options: ActiveMqBrokerConfigurationOptions): IActiveMqBrokerConfiguration;
}

export class ActiveMqBrokerConfiguration extends BrokerConfiguration {
  public static fromAttributes(scope: Construct, logicalId: string, attrs: BrokerConfigurationAttributes): IActiveMqBrokerConfiguration {
    if (attrs.id === undefined && attrs.arn === undefined) {
      throw new Error('Either id or arn must be provided');
    }

    const { id, arn } = attrs;

    class Import extends Resource implements IActiveMqBrokerConfiguration {
      public readonly arn: string;
      public readonly id: string;
      public readonly revision: number;
      constructor() {
        super(scope, logicalId);
        this.revision = attrs.revision;
        this.arn = arn ? arn : Stack.of(this).formatArn({
          service: 'mq',
          resource: 'configuration',
          resourceName: id,
          arnFormat: ArnFormat.COLON_RESOURCE_NAME,
        });
        this.id = id ? id : Arn.split(arn!, ArnFormat.COLON_RESOURCE_NAME).resourceName!;
      }

      associateWith(broker: IActiveMqBrokerDeployment): ConfigurationAssociation {
        return new ConfigurationAssociation(this, 'Configuration', {
          broker,
          configuration: this,
        });
      }

      createRevision(options: ActiveMqBrokerConfigurationOptions): IActiveMqBrokerConfiguration {
        const call: AwsSdkCall = {
          service: 'mq',
          action: 'UpdateConfiguration',
          parameters: {
            ConfigurationId: this.id,
            Data: Fn.base64(options.definition.toString()),
            Description: options.description,
          },
          physicalResourceId: PhysicalResourceId.fromResponse('Id'),
        };

        const revisor = new AwsCustomResource(this, 'Revisor', {
          onCreate: call,
          policy: AwsCustomResourcePolicy.fromSdkCalls({
            resources: [this.arn],
          }),
        });

        return ActiveMqBrokerConfiguration.fromAttributes(this, 'Revision', {
          id: revisor.getResponseField('Id'),
          arn: revisor.getResponseField('Arn'),
          revision: Token.asNumber(revisor.getResponseField('LatestRevision.Revision')),
        });
      }
    }

    return new Import();
  }

  constructor(scope: Construct, id: string, props: ActiveMqBrokerConfigurationProps) {
    super(scope, id, {
      ...props,
      authenticationStrategy: props.authenticationStrategy,
      engineVersion: props.engineVersion?.toString(),
      engine: BrokerEngine.ACTIVEMQ,
      data: props.definition.toString(),
    });

    // TODO: Add some validation regarding the configuration contents
    //       with SIMPLE auth strategy we need to have AuthorizationMap in data
    //       with LDAP auth strategy we need to have CachedLDAPAuthorizationMap in data
  }

  public associateWith(broker: IActiveMqBrokerDeployment) {
    return this._associateWith(broker);
  }

  public createRevision(options: ActiveMqBrokerConfigurationOptions) {
    const revisor = this._createRevisor(options.definition.toString(), options.description);

    return ActiveMqBrokerConfiguration.fromAttributes(this, 'Revision', {
      id: revisor.getResponseField('Id'),
      arn: revisor.getResponseField('Arn'),
      revision: Token.asNumber(revisor.getResponseField('LatestRevision.Revision')),
    });
  }
}