/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import { CdklabsConstructLibrary } from "cdklabs-projen-project-types";
import { Stability } from "projen/lib/cdk";

const cdkVersion = "2.162.0";

const project = new CdklabsConstructLibrary({
  name: "@cdklabs/cdk-amazonmq",
  author: "AWS",
  authorAddress: "cdk-amazonmq-maintainers@amazon.com",
  cdkVersion,
  defaultReleaseBranch: "main",
  projenrcTs: true,
  private: false,
  repositoryUrl: "https://github.com/cdklabs/cdk-amazonmq.git",
  prettier: true,
  stability: Stability.EXPERIMENTAL,
  docgen: true,
  devDeps: [
    "cdklabs-projen-project-types",
    "cdk-nag",
    "@aws-sdk/client-ec2",
    "@aws-sdk/client-lambda",
    "@aws-sdk/client-secrets-manager",
    "@aws-sdk/client-ssm",
    "@aws-sdk/util-arn-parser",
    "@types/aws-lambda",
    "esbuild",
    "mqtt",
    "rabbitmq-client",
    "rhea",
  ],
  keywords: ["aws", "Amazon MQ", "ActiveMQ", "RabbitMQ", "AWS CDK"],
  gitignore: [".vscode", "**/.DS_Store"],
});

project.bundler.addBundle("src/rabbitmq/custom-resource/handler/index.ts", {
  target: "node18",
  platform: "node",
  externals: ["@aws-sdk/*"],
  tsconfigPath: "tsconfig.dev.json",
});

project.eslint?.allowDevDeps(
  "src/rabbitmq/custom-resource/handler/dynamic-references/secret.ts",
);

project.synth();
