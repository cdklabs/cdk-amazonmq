/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import { IResolvable, IResource, Lazy, Names, Resource } from 'aws-cdk-lib';
import { CfnBroker, CfnConfiguration } from 'aws-cdk-lib/aws-amazonmq';
import { Metric, MetricOptions } from 'aws-cdk-lib/aws-cloudwatch';
import { ISecurityGroup, InstanceType, IVpc, SubnetSelection, Connections, Port, SecurityGroup } from 'aws-cdk-lib/aws-ec2';
import { IRole } from 'aws-cdk-lib/aws-iam';
import { IKey } from 'aws-cdk-lib/aws-kms';
import { LogRetention, RetentionDays } from 'aws-cdk-lib/aws-logs';
import { Construct } from 'constructs';
import { BrokerCloudwatchLogsExports } from './broker-cloudwatch-logs-exports';
import { BrokerDeploymentMode } from './broker-deployment-mode';
import { BrokerStorageType } from './broker-storage-type';
import { IBrokerConfiguration } from './configuration';
import { MaintenanceWindowStartTime } from './maintenance-window-start-time';

export interface IBrokerDeployment extends IResource {

  readonly arn: string;

  readonly id: string;

  readonly name: string;

  readonly connections: Connections | undefined;

  /***
   * @internal
   */
  readonly _authenticationStrategy?: string;

  /***
   * @internal
   */
  readonly _engineVersion: string;

  metric(metricName: string, options?: MetricOptions): Metric;
}

export interface BrokerDeploymentProps {
  readonly key?: IKey;
  readonly brokerName?: string;

  /**
   * Specifies whether the broker is open to public Internet or deployed with
   * endpoints in own VPC.
   */
  readonly publiclyAccessible: boolean;
  /**
   * vpcSubnets and vpc are optional. But when present - publiclyAccessible attribute must equal false.
   *
   * @default - undefined. If vpc is present - this attribute must be present.
   */
  readonly vpcSubnets?: SubnetSelection;

  /**
   * The VPC in which create the communication endpoints for a private broker.
   *
   * @default - undefined. A default VPC will be used
   */
  readonly vpc?: IVpc;
  /**
   * The Security Groups to apply for a non publicly accessible broker.
   *
   * NOTE: This needs to be set only if `publiclyAccessible` is true.
   *
   * @default - undefined. If no VPC is selected then a default VPC's default SG will be used.
   *                       Otherwise - a security group will be created.
   */
  readonly securityGroups?: ISecurityGroup[];

  /**
   * An instance type to use for the broker. Only a subset of available instance types is allowed.
   *
   * @see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-instance-types.html
   */
  readonly instanceType: InstanceType;

  /**
   * Determines whether the broker will undergo a minor version upgrade during the maintenance window.
   *
   * @default - false. No minor version upgrade happens.
   */
  readonly autoMinorVersionUpgrade: boolean;
  readonly maintenanceWindowStartTime?: MaintenanceWindowStartTime;

  /**
   * Sets the retention days for the broker's CloudWatch LogGroups
   *
   * @default - undefined; CloudWatch Log Groups retention is set to never expire
   */
  readonly cloudwatchLogsRetention?: RetentionDays;
  readonly cloudwatchLogsRetentionRole?: IRole;
}

export enum BrokerEngine {
  RABBITMQ = 'RABBITMQ',
  ACTIVEMQ = 'ACTIVEMQ'
}

export interface BrokerDeploymentBaseProps extends BrokerDeploymentProps {
  readonly authenticationStrategy?: string;
  readonly version: string;
  readonly deploymentMode: BrokerDeploymentMode;
  readonly defaultPort?: Port;
  readonly engine: BrokerEngine;
  readonly storageType?: BrokerStorageType;
  readonly configuration?: IBrokerConfiguration;
  readonly cloudwatchLogsExports?: BrokerCloudwatchLogsExports;
  readonly users: CfnBroker.UserProperty[];
  readonly ldapServerMetadata?: IResolvable | CfnBroker.LdapServerMetadataProperty;
}

export abstract class BrokerDeploymentBase extends Resource implements IBrokerDeployment {

  public readonly arn: string;

  public readonly id: string;

  public readonly name: string;

  /** @internal  */
  public readonly _authenticationStrategy?: string;

  /** @internal */
  public readonly _engineVersion: string;

  /** @internal */
  protected readonly _conns: Connections | undefined;

  /** @internal */
  protected readonly _resource: CfnBroker;

  /** @internal */
  protected _configuration: CfnConfiguration | undefined;

  private readonly cloudwatchLogsExports?: BrokerCloudwatchLogsExports;
  private readonly cloudwatchLogsRetention?: RetentionDays;
  private readonly cloudwatchLogsRetentionRole?: IRole;


  /** Manages connections for the cluster */
  public get connections(): Connections | undefined {
    return this._conns;
  }

  constructor(scope: Construct, id: string, props: BrokerDeploymentBaseProps) {
    super(scope, id);

    this._authenticationStrategy = props.authenticationStrategy;
    this._engineVersion = props.version;

    this._conns =
      props.vpcSubnets && props.vpc
        ? new Connections({
          defaultPort: props.defaultPort,
          securityGroups: props.securityGroups ?? [
            new SecurityGroup(this, 'AMQ_SG', {
              description: `Automatic security group for broker ${Names.uniqueId(this)}`,
              vpc: props.vpc,
              allowAllOutbound: false,
            }),
          ],
        })
        : undefined;

    this.name = props.brokerName ?? id;

    this._resource = new CfnBroker(this, 'Resource', {
      brokerName: this.name,
      configuration: Lazy.any({
        produce: () => this._configuration && {
          id: this._configuration.ref,
          revision: this._configuration.attrRevision,
        },
      }),
      engineType: props.engine,
      engineVersion: props.version,
      autoMinorVersionUpgrade: props.autoMinorVersionUpgrade,
      deploymentMode: props.deploymentMode,
      encryptionOptions: {
        kmsKeyId: props.key?.keyId,
        useAwsOwnedKey: props.key === undefined,
      },
      maintenanceWindowStartTime: props.maintenanceWindowStartTime && {
        dayOfWeek: props.maintenanceWindowStartTime.dayOfWeek,
        timeOfDay: props.maintenanceWindowStartTime.timeOfDay,
        timeZone: props.maintenanceWindowStartTime.timeZone?.timezoneName,
      },
      storageType: props.storageType,
      logs: props.cloudwatchLogsExports,
      hostInstanceType: `mq.${props.instanceType.toString()}`,
      publiclyAccessible: props.publiclyAccessible,
      securityGroups: this._conns?.securityGroups.map((sg) => sg.securityGroupId),
      subnetIds: props.vpc?.selectSubnets(props.vpcSubnets).subnetIds,
      users: props.users,
      authenticationStrategy: props.authenticationStrategy,
      ldapServerMetadata: props.ldapServerMetadata,
    });

    this.arn = this._resource.attrArn;
    this.id = this._resource.ref;

    // TODO: this is ugly. Make it more self-explanatory
    this.cloudwatchLogsExports = props.engine === BrokerEngine.RABBITMQ && props.cloudwatchLogsExports && 'general' in props.cloudwatchLogsExports
      ? {
        general: true,
        channel: true,
        connection: true,
        mirroring: props.deploymentMode === BrokerDeploymentMode.CLUSTER_MULTI_AZ,
      }
      : props.cloudwatchLogsExports;

    this.cloudwatchLogsRetention = props.cloudwatchLogsRetention;
    this.cloudwatchLogsRetentionRole = props.cloudwatchLogsRetentionRole;

    if (props.configuration) {
      this._attachConfiguration(props.configuration);
    }

    this.configureLogRetention();
  }

  public metric(metricName: string, options?: MetricOptions): Metric {
    return new Metric({
      namespace: 'AWS/AmazonMQ',
      metricName,
      dimensionsMap: {
        Broker: this.id,
      },
      ...options,
    });
  }

  protected configureLogRetention() {
    const [logExports, retention, retentionRole] = [
      this.cloudwatchLogsExports,
      this.cloudwatchLogsRetention,
      this.cloudwatchLogsRetentionRole,
    ];
    if (logExports !== undefined && retention !== undefined) {
      const availableValues = ['general', 'audit', 'channel', 'connection', 'mirroring'];
      Object.entries(logExports)
        .filter(([log, enabled]: [string, boolean]) => availableValues.includes(log) && enabled)
        .map(([log, _]) => log)
        .forEach((log) => {
          new LogRetention(this, `LogRetention${log}`, {
            logGroupName: `/aws/amazonmq/broker/${this.id}/${log}`,
            retention,
            role: retentionRole,
          });
        });
    }
  }

  /***
   * @internal
   */
  protected _attachConfiguration(configuration: IBrokerConfiguration) {
    this._configuration = configuration.node.defaultChild as CfnConfiguration;
    this.node.addDependency(configuration);
  }
}