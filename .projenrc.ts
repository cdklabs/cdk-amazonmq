/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import { CdklabsConstructLibrary } from 'cdklabs-projen-project-types';
import { Stability } from 'projen/lib/cdk';

const cdkVersion = '2.150.0';

const project = new CdklabsConstructLibrary({
  cdkVersion,
  defaultReleaseBranch: 'main',
  name: '@cdklabs/cdk-amazonmq',
  projenrcTs: true,
  repositoryUrl: 'https://gitlab.aws.dev/rpawlasz/aws-amazonmq-alpha',
  stability: Stability.EXPERIMENTAL,
  author: 'Rafał K. Pawłaszek',
  authorAddress: 'rpawlasz@amazon.pl',
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
  jsiiVersion: '~5.4.0',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();