/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import { CfnOutput, SecretValue, Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { InstanceClass, InstanceSize, InstanceType } from "aws-cdk-lib/aws-ec2";
import {
  ActiveMqBrokerEngineVersion,
  ActiveMqBrokerInstance,
  ActiveMqBrokerUserManagement,
} from "../../src";

const createBroker = (stack: Stack) => {
  return new ActiveMqBrokerInstance(stack, "TestBroker", {
    publiclyAccessible: true,
    version: ActiveMqBrokerEngineVersion.V5_18,
    instanceType: InstanceType.of(InstanceClass.M5, InstanceSize.LARGE),
    userManagement: ActiveMqBrokerUserManagement.simple({
      users: [
        {
          username: "username",
          password: SecretValue.unsafePlainText("password"),
        },
      ],
    }),
    autoMinorVersionUpgrade: false,
  });
};

describe("ActiveMqBrokerEndpoints", () => {
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

  test("STOMP Endpoints render correctly", () => {
    const stack = new Stack();

    const broker = createBroker(stack);

    new CfnOutput(stack, "Url", {
      value: broker.endpoints.stomp.url,
    });

    new CfnOutput(stack, "Port", {
      value: broker.endpoints.stomp.port.toString(),
    });

    const template = Template.fromStack(stack);

    template.hasOutput("Url", {
      Value: {
        "Fn::Select": [
          0,
          {
            "Fn::GetAtt": ["TestBrokerBD4D5330", "StompEndpoints"],
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
                    "Fn::GetAtt": ["TestBrokerBD4D5330", "StompEndpoints"],
                  },
                ],
              },
            ],
          },
        ],
      },
    });
  });

  test("OpenWire Endpoints render correctly", () => {
    const stack = new Stack();

    const broker = createBroker(stack);

    new CfnOutput(stack, "Url", {
      value: broker.endpoints.openWire.url,
    });

    new CfnOutput(stack, "Port", {
      value: broker.endpoints.openWire.port.toString(),
    });

    const template = Template.fromStack(stack);

    template.hasOutput("Url", {
      Value: {
        "Fn::Select": [
          0,
          {
            "Fn::GetAtt": ["TestBrokerBD4D5330", "OpenWireEndpoints"],
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
                    "Fn::GetAtt": ["TestBrokerBD4D5330", "OpenWireEndpoints"],
                  },
                ],
              },
            ],
          },
        ],
      },
    });
  });

  test("MQTT Endpoints render correctly", () => {
    const stack = new Stack();

    const broker = createBroker(stack);

    new CfnOutput(stack, "Url", {
      value: broker.endpoints.mqtt.url,
    });

    new CfnOutput(stack, "Port", {
      value: broker.endpoints.mqtt.port.toString(),
    });

    const template = Template.fromStack(stack);

    template.hasOutput("Url", {
      Value: {
        "Fn::Select": [
          0,
          {
            "Fn::GetAtt": ["TestBrokerBD4D5330", "MqttEndpoints"],
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
                    "Fn::GetAtt": ["TestBrokerBD4D5330", "MqttEndpoints"],
                  },
                ],
              },
            ],
          },
        ],
      },
    });
  });

  test("WSS Endpoints render correctly", () => {
    const stack = new Stack();

    const broker = createBroker(stack);

    new CfnOutput(stack, "Url", {
      value: broker.endpoints.wss.url,
    });

    new CfnOutput(stack, "Port", {
      value: broker.endpoints.wss.port.toString(),
    });

    const template = Template.fromStack(stack);

    template.hasOutput("Url", {
      Value: {
        "Fn::Select": [
          0,
          {
            "Fn::GetAtt": ["TestBrokerBD4D5330", "WssEndpoints"],
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
                    "Fn::GetAtt": ["TestBrokerBD4D5330", "WssEndpoints"],
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
      Value: "8162",
    });
  });
});
