import * as path from "path";
import * as lambda from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";

export interface RabbitMqCustomResourceSingletonFunctionProps
  extends lambda.FunctionOptions {
  uuid: string;
}

export class RabbitMqCustomResourceSingletonFunction extends lambda.SingletonFunction {
  constructor(
    scope: Construct,
    id: string,
    props: RabbitMqCustomResourceSingletonFunctionProps,
  ) {
    super(scope, id, {
      description:
        "src/rabbitmq/custom-resource/handler/rabbit-mq-api-call.lambda/index.ts",
      ...props,
      lambdaPurpose: "RMQ",
      runtime: lambda.determineLatestNodeRuntime(scope),
      handler: "index.handler",
      code: lambda.Code.fromAsset(
        path.join(
          __dirname,
          "../../../assets/rabbitmq/custom-resource/handler/index",
        ),
      ),
    });
  }
}
