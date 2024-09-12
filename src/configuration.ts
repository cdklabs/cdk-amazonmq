/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import {
  Arn,
  ArnFormat,
  Fn,
  IResource,
  Lazy,
  Names,
  Resource,
  Stack,
} from 'aws-cdk-lib';
import { CfnConfiguration } from 'aws-cdk-lib/aws-amazonmq';
import {
  AwsCustomResource,
  AwsCustomResourcePolicy,
  AwsSdkCall,
  PhysicalResourceId,
} from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';
import { ActiveMqAuthenticationStrategy } from './activemq/activemq-authentication-strategy';
import { BrokerEngine, IBrokerDeployment } from './broker-deployment';
import { ConfigurationAssociation } from './configuration-association';

export interface ConfigurationProps {
  readonly configurationName?: string;
  readonly description?: string;
  readonly data: string;
  readonly engine: BrokerEngine;
  readonly engineVersion?: string;
  readonly authenticationStrategy?: ActiveMqAuthenticationStrategy;
}

export interface IBrokerConfiguration extends IResource {
  readonly arn: string;
  readonly id: string;
  readonly revision: number;
}

export interface BrokerConfigurationAttributes {
  readonly id?: string;
  readonly arn?: string;
  readonly revision: number;
}

export abstract class BrokerConfiguration
  extends Resource
  implements IBrokerConfiguration {
  /***
   * @internal
   */
  protected static _fromAttributes(
    scope: Construct,
    logicalId: string,
    attrs: BrokerConfigurationAttributes,
  ): IBrokerConfiguration {
    if (attrs.id === undefined && attrs.arn === undefined) {
      throw new Error("Either 'id' or 'arn' needs to be defined");
    }

    const { id, arn } = attrs;

    class Import extends Resource implements IBrokerConfiguration {
      public readonly arn: string;
      public readonly id: string;
      public readonly revision: number;
      constructor() {
        super(scope, logicalId);
        this.revision = attrs.revision;
        this.arn = arn
          ? arn
          : Stack.of(this).formatArn({
            service: 'mq',
            resource: 'configuration',
            resourceName: id,
            arnFormat: ArnFormat.COLON_RESOURCE_NAME,
          });
        this.id = id
          ? id
          : Arn.split(arn!, ArnFormat.COLON_RESOURCE_NAME).resourceName!;
      }
    }

    return new Import();
  }

  public readonly arn: string;
  public readonly id: string;
  public readonly revision: number;

  /** @internal */
  protected _authenticationStrategy: string | undefined;
  private isAuthenticationStrategySet: boolean = false;
  /***
   * @internal
   */
  protected _engineVersion: string | undefined;
  private isEngineVersionSet: boolean = false;

  constructor(scope: Construct, id: string, props: ConfigurationProps) {
    super(scope, id, {
      physicalName:
        props.configurationName ||
        Lazy.string({
          produce: () =>
            Names.uniqueResourceName(this, {
              maxLength: 150, allowedSpecialCharacters: '-._~',
            }),
        }),
    });

    const resource = new CfnConfiguration(this, 'Resource', {
      name: this.physicalName,
      description: props.description,
      data: Fn.base64(props.data),
      engineType: props.engine,
      authenticationStrategy: Lazy.string({
        produce: () => this._authenticationStrategy,
      }),
      engineVersion: Lazy.string({ produce: () => this._engineVersion }),
    });

    this.id = this.getResourceNameAttribute(resource.ref);
    this.arn = this.getResourceArnAttribute(resource.attrArn, {
      service: 'mq',
      resource: 'configuration',
      resourceName: this.physicalName,
      arnFormat: ArnFormat.COLON_RESOURCE_NAME,
    });

    this.revision = resource.attrRevision;
    this.configureEngineVersion(props.engineVersion);
    this.configureAuthenticationStrategy(props.authenticationStrategy);
  }

  private configureEngineVersion(engineVersion: string | undefined) {
    if (engineVersion) {
      if (!this.isEngineVersionSet) {
        this._engineVersion = engineVersion;
        this.isEngineVersionSet = true;
      } else if (this._engineVersion !== engineVersion) {
        throw new Error(
          `A configuraiton can be associated with only one engine version. (current: ${this._engineVersion}, new: ${engineVersion})`,
        );
      }
    }
  }

  private configureAuthenticationStrategy(
    authenticationStrategy: string | undefined,
  ) {
    // TODO: think if this is the best approach
    //       maybe we should compeare and fail if things are/aren't set
    if (!this.isAuthenticationStrategySet) {
      this._authenticationStrategy = authenticationStrategy;
      this.isAuthenticationStrategySet = true;
    } else if (this._authenticationStrategy !== authenticationStrategy) {
      // INFO: this way, as the default is simple, so an undefined will equal SIMPLE
      if (
        this._authenticationStrategy === ActiveMqAuthenticationStrategy.LDAP ||
        authenticationStrategy === ActiveMqAuthenticationStrategy.LDAP
      ) {
        throw new Error(
          `A configuration can be assigned only a single authentication strategy. (current: ${this._authenticationStrategy}, new: ${authenticationStrategy})`,
        );
      }
    }
  }

  /***
   * @internal
   */
  protected _associateWith(broker: IBrokerDeployment) {
    this.configureEngineVersion(broker._engineVersion);
    this.configureAuthenticationStrategy(broker._authenticationStrategy);

    return new ConfigurationAssociation(this, 'Configuration', {
      broker,
      configuration: this,
    });
  }

  /***
   * @internal
   */
  protected _createRevisor(data: string, description?: string) {
    const call: AwsSdkCall = {
      service: 'mq',
      action: 'UpdateConfiguration',
      parameters: {
        ConfigurationId: this.id,
        Data: Fn.base64(data),
        Description: description,
      },
      physicalResourceId: PhysicalResourceId.fromResponse('Id'),
    };

    const revisor = new AwsCustomResource(this, 'Revisor', {
      onCreate: call,
      policy: AwsCustomResourcePolicy.fromSdkCalls({
        resources: [this.arn],
      }),
    });

    return revisor;
  }
}
