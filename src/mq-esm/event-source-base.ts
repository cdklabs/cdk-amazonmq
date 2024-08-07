/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import { Aws, CustomResource, Duration, Names, withResolved } from 'aws-cdk-lib';
import { Effect, PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { CfnEventSourceMapping, IEventSource, IFunction, SourceAccessConfiguration, SourceAccessConfigurationType } from 'aws-cdk-lib/aws-lambda';
import { ISecret } from 'aws-cdk-lib/aws-secretsmanager';
import { Provider } from 'aws-cdk-lib/custom-resources';
import { EsmDeleterIsCompleteFunction } from './esm-deleter.is-complete-function';
import { EsmDeleterOnEventFunction } from './esm-deleter.on-event-function';
import { IBrokerDeployment } from '../broker-deployment';

export interface EventSourceProps {
  /**
   * source at the time of invoking your function. Your function receives an
   * The largest number of records that AWS Lambda will retrieve from your event
   * event with all the retrieved records.
   *
   * Valid Range:
   * * Minimum value of 1
   * * Maximum value of: 10000
   *
   * @default 100
   */
  readonly batchSize?: number;

  /**
   * The maximum amount of time to gather records before invoking the function.
   * Maximum of Duration.minutes(5).
   *
   * @see https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventsourcemapping.html#invocation-eventsourcemapping-batching
   *
   * @default - Duration.millis(500) for Amazon MQ.
   */
  readonly maxBatchingWindow?: Duration;

  /**
   * If the stream event source mapping should be enabled.
   *
   * @default true
   */
  readonly enabled?: boolean;


  /**
   * A secret with credentials of the user to use when receiving messages.
   *
   * The credentials in the secret have fields required:
   *  * username
   *  * password
   */
  readonly credentials: ISecret;

  /**
   * The name of the queue that the function will receive messages from.
   */
  readonly queueName: string;

  /**
   * If the default permissions should be added to the Lambda function's execution role.
   *
   * @default true
   */
  readonly addPermissions?: boolean;
}

export interface EventSourceBaseProps extends EventSourceProps {

  /**
   * The Amazon MQ broker deployment to receive messages from.
   */
  readonly broker: IBrokerDeployment;
}

/**
 * Represents an AWS Lambda Event Source Mapping for RabbitMQ. This event source will add additional permissions to
 * the AWS Lambda function's IAM Role following https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#events-mq-permissions
 */
export abstract class EventSourceBase implements IEventSource {
  private sourceAccessConfigurations: SourceAccessConfiguration[] = [];

  /**
   * Instantiates an AWS Lambda Event Source Mapping for RabbitMQ. This event source will add additional permissions to
   * the AWS Lambda function's IAM Role following https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#events-mq-permissions
   *
   * @param props properties of the RabbitMQ event source
   */
  constructor(protected readonly props: EventSourceBaseProps, protected readonly mqType: string) {
    this.props.batchSize !== undefined && withResolved(this.props.batchSize, batchSize => {
      if (batchSize < 1 || batchSize > 10000) {
        throw new Error(`Maximum batch size must be between 1 and 10000 inclusive (given ${this.props.batchSize})`);
      }
    });
  }

  bind(target: IFunction): void {

    if (this.props.addPermissions === undefined || this.props.addPermissions) {
      this.props.credentials.grantRead(target);

      target.node.addMetadata('function-mq-permissions', 'Additional permissions following https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#events-mq-permissions');

      if (!target.isBoundToVpc) {
        // INFO: if the target is VPC bound then CDK attaches
        //       managed policy AWSLambdaVPCAccessExecutionRole
        //       which contains the necessary permissions.
        target.addToRolePolicy(new PolicyStatement({
          effect: Effect.ALLOW,
          actions: [
            'ec2:CreateNetworkInterface',
            'ec2:DeleteNetworkInterface',
            'ec2:DescribeNetworkInterfaces',
            'ec2:DescribeSubnets',
          ],
          resources: ['*'],
        }));
      }

      target.addToRolePolicy(new PolicyStatement({
        effect: Effect.ALLOW,
        actions: ['mq:DescribeBroker'],
        resources: [this.props.broker.arn],
      }));

      target.addToRolePolicy(new PolicyStatement({
        effect: Effect.ALLOW,
        actions: ['ec2:DescribeVpcs', 'ec2:DescribeSecurityGroups'],
        resources: ['*'],
      }));
    }

    // if (this.props.virtualHost) {
    //   this.sourceAccessConfigurations.push({
    //     type: SourceAccessConfigurationType.of('VIRTUAL_HOST'),
    //     uri: this.props.virtualHost,
    //   });
    // }

    this.sourceAccessConfigurations.push({
      type: SourceAccessConfigurationType.BASIC_AUTH,
      uri: this.props.credentials.secretArn,
    });

    const mapping = target.addEventSourceMapping(`RabbitMqEventSource:${Names.nodeUniqueId(this.props.broker.node)}`, {
      batchSize: this.props.batchSize,
      maxBatchingWindow: this.props.maxBatchingWindow,
      enabled: this.props.enabled,
      eventSourceArn: this.props.broker.arn,
      sourceAccessConfigurations: this.sourceAccessConfigurations,
    });

    const esMapping = mapping.node.defaultChild as CfnEventSourceMapping;

    // INFO: even though the property allows an array of items
    //       there can be no more than one queue
    esMapping.addPropertyOverride('Queues', [this.props.queueName]);

    // INFO: This is a (hopefully) temporary workaround due to the fact that ESM notifies CFN too early its deletion
    //       completion and as a result, target's IAM Role is being deleted before ESM is able to assume it to delete the ENIs.
    //       This in turn causes a deletion failure that requires manual ENIs' deletion to recover.
    if (target.role) {
      const provider = new Provider(mapping, `MqEsmDeleter:${Names.nodeUniqueId(mapping.node)}`, {
        onEventHandler: new EsmDeleterOnEventFunction(mapping, 'onevent', {
          initialPolicy: [
            new PolicyStatement({
              actions: [
                'lambda:DeleteEventSourceMapping',
              ],
              effect: Effect.ALLOW,
              resources: [`arn:${Aws.PARTITION}:lambda:${Aws.REGION}:${Aws.ACCOUNT_ID}:event-source-mapping:${mapping.eventSourceMappingId}`],
            }),
          ],
        }),
        isCompleteHandler: new EsmDeleterIsCompleteFunction(mapping, 'iscomplete', {
          initialPolicy: [
            new PolicyStatement({
              actions: [
                'ec2:DescribeNetworkInterfaces',
              ],
              effect: Effect.ALLOW,
              resources: ['*'],
            }),
          ],
        }),
        queryInterval: Duration.minutes(1),
      });

      const cr = new CustomResource(mapping, `MqEsmDeleterCR:${Names.nodeUniqueId(mapping.node)}`, {
        serviceToken: provider.serviceToken,
        properties: {
          MqType: this.mqType,
          EsmId: mapping.eventSourceMappingId,
          AccountId: Aws.ACCOUNT_ID,
        },
      });

      // INFO: the Amazon MQ service uses this role to provision/deprovision the ESM.
      //       we need it to remain until the ESM is deleted.
      cr.node.addDependency(target.role);
    }
  }

  protected addToSourceAccessConfigurations(config: SourceAccessConfiguration) {
    this.sourceAccessConfigurations.push(config);
  }
}