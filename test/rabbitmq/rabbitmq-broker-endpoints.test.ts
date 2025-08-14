/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import { CfnOutput, SecretValue, Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { InstanceClass, InstanceSize, InstanceType } from "aws-cdk-lib/aws-ec2";
import { RabbitMqBrokerEngineVersion, RabbitMqBrokerInstance } from "../../src";

const createBroker = (stack: Stack) => {
  return new RabbitMqBrokerInstance(stack, "TestBroker", {
    publiclyAccessible: true,
    version: RabbitMqBrokerEngineVersion.V3_12_13,
    instanceType: InstanceType.of(InstanceClass.M5, InstanceSize.LARGE),
    admin: {
      username: "username",
      password: SecretValue.unsafePlainText("password"),
    },
    autoMinorVersionUpgrade: false,
  });
};

describe("RabbitMqBrokerEndpoints", () => {
  test("AMQP Endpoints render correctly", () => {
    const stack = new Stack();

    const broker = createBroker(stack);

    new CfnOutput(stack, "Url", {
      value: broker.endpoints.amqp.url,
    });

    new CfnOutput(stack, "Port", {
      value: broker.endpoints.amqp.port.toString(),
    });

    const template = Template.fromStack(stack);

    template.hasOutput("Url", {
      Value: {
        "Fn::Select": [
          0,
          {
            "Fn::GetAtt": ["TestBrokerBD4D5330", "AmqpEndpoints"],
          },
        ],
      },
    });

    template.hasOutput("Port", {
      Value: {
        "Fn::Select": [
          2,
          {
            "Fn::Split": [
              ":",
              {
                "Fn::Select": [
                  0,
                  {
                    "Fn::GetAtt": ["TestBrokerBD4D5330", "AmqpEndpoints"],
                  },
                ],
              },
            ],
          },
        ],
      },
    });
  });

  test("Console Endpoints render correctly", () => {
    const stack = new Stack();

    const broker = createBroker(stack);

    new CfnOutput(stack, "Url", {
      value: broker.endpoints.console.url,
    });

    new CfnOutput(stack, "Port", {
      value: broker.endpoints.console.port.toString(),
    });

    const template = Template.fromStack(stack);

    template.hasOutput("Url", {
      Value: {
        "Fn::Select": [
          0,
          { "Fn::GetAtt": ["TestBrokerBD4D5330", "ConsoleURLs"] },
        ],
      },
    });

    template.hasOutput("Port", {
      Value: "443",
    });
  });
});
