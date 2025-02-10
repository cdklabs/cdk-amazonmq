/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/

import { createHash } from "crypto";
import {
  CustomResource,
  Duration,
  IResource,
  Lazy,
  Names,
  Reference,
  Stack,
} from "aws-cdk-lib";
import {
  Connections,
  IConnectable,
  ISecurityGroup,
  IVpc,
  SecurityGroup,
  SubnetSelection,
} from "aws-cdk-lib/aws-ec2";
import {
  IGrantable,
  IPrincipal,
  IRole,
  PolicyStatement,
} from "aws-cdk-lib/aws-iam";
import { LogGroup, RetentionDays } from "aws-cdk-lib/aws-logs";
import { ISecret } from "aws-cdk-lib/aws-secretsmanager";
import { Logging, PhysicalResourceId } from "aws-cdk-lib/custom-resources";
import { Construct } from "constructs";
import { IRabbitMqBroker } from "../rabbitmq-broker";
import { RabbitMqCustomResourceSingletonFunction } from "./rabbitmq-custom-resource-singleton-function";

const HASH_LEN = 16;

/**
 * All http request methods
 */
export enum HttpMethods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

/**
 * A RabbitMQ Management HTTP API call
 */
export interface RabbitMqApiCall {
  /**
   * The RabbitMQ Management HTTP API call path.
   */
  readonly path: string;

  /**
   * The HTTP Method used when invoking the RabbitMQ Management HTTP API call.
   * @default GET
   */
  readonly method?: HttpMethods;

  /**
   * The payload expected by the RabbitMQ Management HTTP API call.
   */
  readonly payload?: { [key: string]: any };
  /**
   * The physical resource id of the custom resource for this call.
   * Mandatory for onCreate call.
   * In onUpdate, you can omit this to passthrough it from request.
   *
   * @default - no physical resource id
   */
  readonly physicalResourceId?: PhysicalResourceId;

  /**
   * Restrict the data returned by the custom resource to specific paths in the API response.
   *
   * Use this to limit the data returned by the custom resource if working with API calls that could potentially result in custom response objects exceeding the hard limit of 4096 bytes.
   */
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

/**
 * The IAM Policy that will be applied to the calls.
 */
export class RabbitMqCustomResourcePolicy {
  /**
   * Use this constant to configure access to any resource.
   */
  public static readonly ANY_RESOURCE = ["*"];

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

/**
 * Properties for RabbitMqCustomResource.
 *
 * Note that at least onCreate, onUpdate or onDelete must be specified.
 */
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

/**
 * @experimental
 *
 * Defines a custom resource that is materialized using specific RabbitMQ Management HTTP API calls.
 *
 * Use this to interact with the Amazon MQ for RabbitMQ broker. You can specify exactly which calls are invoked for the 'CREATE', 'UPDATE' and 'DELETE' life cycle events.
 */
export class RabbitMqCustomResource
  extends Construct
  implements IConnectable, IGrantable
{
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
        "At least `onCreate`, `onUpdate` or `onDelete` must be specified.",
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
          new SecurityGroup(this, "ProviderSG", { vpc: props.vpc }),
        ]
      : undefined;

    const uuid = this.renderUniqueId(
      props.broker,
      props.credentials,
      props.vpc,
      props.vpcSubnets,
      props.securityGroups,
    );

    const provider = new RabbitMqCustomResourceSingletonFunction(
      this,
      "Provider",
      {
        uuid,
        vpc: props.vpc,
        vpcSubnets: props.vpcSubnets,
        securityGroups: securityGroups,
        ...(props.logRetention ? { logRetention: props.logRetention } : {}),
        logGroup: props.logGroup,
        timeout: props.timeout || Duration.minutes(1),
        initialPolicy: props.policy?.statements,
      },
    );

    const onUpdate = props.onUpdate && this.formatSdkCall(props.onUpdate);
    const onCreate =
      (props.onCreate && this.formatSdkCall(props.onCreate)) || onUpdate;
    const onDelete = props.onDelete && this.formatSdkCall(props.onDelete);

    this.resource = new CustomResource(this, `Resource${uuid}`, {
      resourceType: "Custom::RMQAPI",
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

  private renderUniqueId(
    broker: IRabbitMqBroker,
    creds: ISecret,
    vpc?: IVpc,
    subnets?: SubnetSelection,
    securityGroups?: ISecurityGroup[],
  ) {
    let hashContent = "";
    const resourceBroker = broker as IResource;
    hashContent += Names.uniqueId(resourceBroker);
    hashContent += Names.uniqueId(creds);
    if (vpc) {
      hashContent += Names.uniqueId(vpc);
      if (subnets) {
        hashContent += vpc
          .selectSubnets(subnets)
          .subnets.map((s) => Names.uniqueId(s))
          .join("");
      }
      if (securityGroups) {
        hashContent += securityGroups.map((sg) => Names.uniqueId(sg)).join("");
      }
    }

    // INFO: run this through the CDK team as in the S3 Bucket Deployment implementation there is no hashing, just verbatim value addition
    // see: https://github.com/aws/aws-cdk/blob/318eae6c9eca456e0c34ed21855dad9d2bfa2a0f/packages/aws-cdk-lib/aws-s3-deployment/lib/bucket-deployment.ts#L556

    return createHash("sha256")
      .update(hashContent)
      .digest("hex")
      .slice(0, HASH_LEN)
      .toUpperCase();
  }
}
