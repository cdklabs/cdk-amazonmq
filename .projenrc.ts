/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import { CdklabsConstructLibrary } from 'cdklabs-projen-project-types';
import { Stability } from 'projen/lib/cdk';

const cdkVersion = '2.157.0';

const project = new CdklabsConstructLibrary({
  name: '@cdklabs/cdk-amazonmq',
  author: 'AWS',
  authorAddress: 'cdk-amazonmq-maintainers@amazon.com',
  cdkVersion,
  defaultReleaseBranch: 'main',
  projenrcTs: true,
  private: false,
  repositoryUrl: 'https://github.com/cdklabs/cdk-amazonmq.git',
  stability: Stability.EXPERIMENTAL,
  docgen: true,
  devDeps: [
    'cdklabs-projen-project-types',
    'cdk-nag',
    '@aws-sdk/client-ec2',
    '@aws-sdk/client-lambda',
    '@aws-sdk/client-secrets-manager',
    '@types/aws-lambda',
    'esbuild',
    'mqtt',
    'rabbitmq-client',
    'rhea',
  ],
  jsiiVersion: '~5.4.30',
  keywords: [
    'aws',
    'Amazon MQ',
    'ActiveMQ',
    'RabbitMQ',
    'AWS CDK',
  ],
  gitignore: [
    '.vscode', '**/.DS_Store',
  ],
});

project.synth();