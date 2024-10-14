/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/

// TODO: singleton functions or singletons per vpc/vpcSubnets/brokers/creds/policies
import { CustomResource, Duration, Lazy, Reference, Stack } from 'aws-cdk-lib';
import {
  Connections,
  IConnectable,
  IVpc,
  SecurityGroup,
  SubnetSelection,
} from 'aws-cdk-lib/aws-ec2';
import {
  IGrantable,
  IPrincipal,
  IRole,
  PolicyStatement,
} from 'aws-cdk-lib/aws-iam';
import { Architecture } from 'aws-cdk-lib/aws-lambda';
import { LogGroup, RetentionDays } from 'aws-cdk-lib/aws-logs';
import { ISecret } from 'aws-cdk-lib/aws-secretsmanager';
import { Logging, PhysicalResourceId } from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';
import { IRabbitMqBroker } from '../rabbitmq-broker';
import { RabbitMqApiCallFunction } from './handler/rabbit-mq-api-call-function';

export interface RabbitMqApiCall {
  readonly path: string;
  readonly method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  readonly payload?: any;
  /**
   * The physical resource id of the custom resource for this call.
   * Mandatory for onCreate call.
   * In onUpdate, you can omit this to passthrough it from request.
   *
   * @default - no physical resource id
   */
  readonly physicalResourceId?: PhysicalResourceId;
  readonly outputPaths?: string[];
  /**
   * A property used to configure logging during lambda function execution.
   *
   * Note: The default Logging configuration is all. This configuration will enable logging on all logged data
   * in the lambda handler. This includes:
   *  - The event object that is received by the lambda handler
   *  - The response received after making a API call
   *  - The response object that the lambda handler will return
   *  - SDK versioning information
   *  - Caught and uncaught errors
   *
   * @default Logging.all()
   */
  readonly logging?: Logging;
}

export class RabbitMqCustomResourcePolicy {
  /**
   * Use this constant to configure access to any resource.
   */
  public static readonly ANY_RESOURCE = ['*'];

  /**
   * Explicit IAM Policy Statements.
   *
   * @param statements the statements to propagate to the SDK calls.
   */
  public static fromStatements(statements: PolicyStatement[]) {
    return new RabbitMqCustomResourcePolicy(statements);
  }

  /**
   * @param statements statements for explicit policy.
   * @param resources resources for auto-generated from SDK calls.
   */
  private constructor(public readonly statements: PolicyStatement[]) {}
}

export interface RabbitMqCustomResourceProps {
  /**
   * The broker to send requests to.
   */
  readonly broker: IRabbitMqBroker;

  /**
   * The secret containing the broker login credentials.
   */
  readonly credentials: ISecret;

  /**
   * The RabbitMQ Management HTTP API call to make when the resource is created
   *
   * @default - the call when the resource is updated
   */
  readonly onCreate?: RabbitMqApiCall;

  /**
   * The RabbitMQ Management HTTP API call to make when the resource is updated
   *
   * @default - no call
   */
  readonly onUpdate?: RabbitMqApiCall;

  /**
   * The RabbitMQ Management HTTP API call to make when the resource is updated
   *
   * @default - no call
   */
  readonly onDelete?: RabbitMqApiCall;

  /**
   * The vpc to connect to.
   */
  readonly vpc?: IVpc;

  /**
   * The vpc subnets to connect to.
   */
  readonly vpcSubnets?: SubnetSelection;

  /**
   * The security groups to assign to the function.
   */
  readonly securityGroups?: SecurityGroup[];

  /**
   * LogGroup retention to use for the function
   *
   * @default RetentionDays.INFINITE
   * @deprecated use logGroup instead
   */
  readonly logRetention?: RetentionDays;

  /**
   * The logGroup to use for the function
   */
  readonly logGroup?: LogGroup;

  /**
   * The timeout for the custom resource.
   *
   * @default Duration.minutes(1)
   */
  readonly timeout?: Duration;

  /**
   * The execution role for the function.
   */
  readonly role?: IRole;

  /**
   * The policies to attach to the function's role
   */
  readonly policy?: RabbitMqCustomResourcePolicy;
}

export class RabbitMqCustomResource
  extends Construct
  implements IConnectable, IGrantable {
  public readonly connections: Connections;

  public readonly grantPrincipal: IPrincipal;

  private readonly resource: CustomResource;

  constructor(
    scope: Construct,
    id: string,
    props: RabbitMqCustomResourceProps,
  ) {
    super(scope, id);

    if (!props.onCreate && !props.onUpdate && !props.onDelete) {
      throw new Error(
        'At least `onCreate`, `onUpdate` or `onDelete` must be specified.',
      );
    }

    if (props.onCreate && !props.onCreate.physicalResourceId) {
      throw new Error(
        "'physicalResourceId' must be specified for 'onCreate' call.",
      );
    }

    if (
      !props.onCreate &&
      props.onUpdate &&
      !props.onUpdate.physicalResourceId
    ) {
      throw new Error(
        "'physicalResourceId' must be specified for 'onUpdate' call when 'onCreate' is omitted.",
      );
    }

    let securityGroups = props.vpc
      ? props.securityGroups || [
        new SecurityGroup(this, 'ProviderSG', { vpc: props.vpc }),
      ]
      : undefined;

    const provider = new RabbitMqApiCallFunction(this, 'Provider', {
      vpc: props.vpc,
      vpcSubnets: props.vpcSubnets,
      securityGroups: securityGroups,
      ...(props.logRetention ? { logRetention: props.logRetention } : {}),
      logGroup: props.logGroup,
      timeout: props.timeout || Duration.minutes(1),
      initialPolicy: props.policy?.statements,
      architecture: Architecture.ARM_64,
    });

    const onUpdate = props.onUpdate && this.formatSdkCall(props.onUpdate);
    const onCreate =
      (props.onCreate && this.formatSdkCall(props.onCreate)) || onUpdate;
    const onDelete = props.onDelete && this.formatSdkCall(props.onDelete);

    this.resource = new CustomResource(this, 'Resource', {
      resourceType: 'Custom::RabbitMqApiCall',
      serviceToken: provider.functionArn,
      pascalCaseProperties: true,
      properties: {
        url: props.broker.endpoints.console.url,
        credentials: props.credentials.secretArn,
        create: onCreate,
        update: onUpdate,
        delete: onDelete,
      },
    });

    // TODO: check if this is even needed
    this.resource.node.addDependency(props.broker);
    this.resource.node.addDependency(props.credentials);

    this.connections = new Connections({
      securityGroups,
    });

    props.credentials.grantRead(provider);

    this.grantPrincipal = provider.grantPrincipal;
  }

  public getResponseField(key: string): string {
    return this.resource.getAttString(key);
  }

  public getResponseFieldReference(key: string): Reference {
    return this.resource.getAtt(key);
  }

  private formatSdkCall(sdkCall: RabbitMqApiCall) {
    const { logging, ...call } = sdkCall;
    const renderedLogging = (logging ?? Logging.all())._render(this);
    return this.encodeJson({
      ...call,
      ...renderedLogging,
    });
  }

  private encodeJson(obj: any) {
    return Lazy.uncachedString({
      produce: () => Stack.of(this).toJsonString(obj),
    });
  }
}
