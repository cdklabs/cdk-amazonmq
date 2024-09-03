/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import { Arn, ArnFormat, Fn, Resource, Stack, Token } from 'aws-cdk-lib';
import { AwsCustomResource, AwsCustomResourcePolicy, AwsSdkCall, PhysicalResourceId } from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';
import { RabbitMqBrokerConfigurationDefinition } from './rabbitmq-broker-configuration-definition';
import { IRabbitMqBrokerDeployment } from './rabbitmq-broker-deployment';
import { RabbitMqBrokerEngineVersion } from './rabbitmq-broker-engine-version';
import { ActiveMqAuthenticationStrategy } from '../activemq/activemq-authentication-strategy';
import { BrokerEngine } from '../broker-deployment';
import { BrokerConfiguration, BrokerConfigurationAttributes, IBrokerConfiguration } from '../configuration';
import { ConfigurationAssociation } from '../configuration-association';

export interface RabbitMqBrokerConfigurationOptions {
  readonly description?: string;
  readonly definition: RabbitMqBrokerConfigurationDefinition;
}

export interface RabbitMqBrokerConfigurationProps extends RabbitMqBrokerConfigurationOptions {
  readonly configurationName?: string;
  readonly engineVersion: RabbitMqBrokerEngineVersion;
}

export interface IRabbitMqBrokerConfiguration extends IBrokerConfiguration {
  associateWith(broker: IRabbitMqBrokerDeployment): ConfigurationAssociation;
  createRevision(options: RabbitMqBrokerConfigurationOptions): IRabbitMqBrokerConfiguration;
}

export class RabbitMqBrokerConfiguration extends BrokerConfiguration {
  public static fromAttributes(scope: Construct, logicalId: string, attrs: BrokerConfigurationAttributes): IRabbitMqBrokerConfiguration {
    if (attrs.id === undefined && attrs.arn === undefined) {
      throw new Error('Either id or arn must be provided');
    }

    const { id, arn } = attrs;

    class Import extends Resource implements IRabbitMqBrokerConfiguration {
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

      associateWith(broker: IRabbitMqBrokerDeployment): ConfigurationAssociation {
        return new ConfigurationAssociation(this, 'Configuration', {
          broker,
          configuration: this,
        });
      }

      createRevision(options: RabbitMqBrokerConfigurationOptions): IRabbitMqBrokerConfiguration {
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

        return RabbitMqBrokerConfiguration.fromAttributes(this, 'Revision', {
          id: revisor.getResponseField('Id'),
          arn: revisor.getResponseField('Arn'),
          revision: Token.asNumber(revisor.getResponseField('LatestRevision.Revision')),
        });
      }
    }

    return new Import();
  }

  constructor(scope: Construct, id: string, props: RabbitMqBrokerConfigurationProps) {
    super(scope, id, {
      ...props,
      authenticationStrategy: ActiveMqAuthenticationStrategy.SIMPLE,
      engineVersion: props.engineVersion?.toString(),
      engine: BrokerEngine.RABBITMQ,
      data: props.definition.toString(),
    });
  }

  public associateWith(broker: IRabbitMqBrokerDeployment) {
    return this._associateWith(broker);
  }

  public createRevision(options: RabbitMqBrokerConfigurationOptions) {
    const revisor = this._createRevisor(options.definition.toString(), options.description);

    return RabbitMqBrokerConfiguration.fromAttributes(this, 'Revision', {
      id: revisor.getResponseField('Id'),
      arn: revisor.getResponseField('Arn'),
      revision: Token.asNumber(revisor.getResponseField('LatestRevision.Revision')),
    });
  }
}