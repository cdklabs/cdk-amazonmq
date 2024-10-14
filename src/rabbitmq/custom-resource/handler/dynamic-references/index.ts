/* eslint-disable import/no-extraneous-dependencies */
/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/

/**
 * When invoking custom resources dynamics references to SecretsManager's Secrets are not resolved although they appera to be passed.
 * As it is most likely that the users of this custom resource would like to use these to pass parameters not by actual value \
 * the capability to resolve SecretsManager's Secrets (and SSM Parameters although it does not work with CFN ATM) has been added.
 * This is achieved by replacing the dynamic references with the actual values (encoded
 */

export * from './secret';
export * from './string-parameter';
export * from './dynamic-reference-extractor';

import {
  GetSecretValueCommand,
  SecretsManagerClient,
} from '@aws-sdk/client-secrets-manager';
import { GetParameterCommand, SSMClient } from '@aws-sdk/client-ssm';
import { DynamicReferenceExtractor } from './dynamic-reference-extractor';
import { SecretDynamicRefereceComponents } from './secret';
import { StringParameterDynamicRefereceComponents } from './string-parameter';

const smClient = new SecretsManagerClient({});
const ssmClient = new SSMClient({});

export async function replaceDynamicReferences(text?: string) {
  if (!text) {
    return text;
  }

  let resultText: string = text;

  const [secrets, parameters] = DynamicReferenceExtractor.extract(text);

  resultText = await processSecrets(secrets, resultText);
  resultText = await processParameters(parameters, resultText);

  return resultText;
}

async function processParameters(
  parameters:
  | {
    reference: string;
    components: StringParameterDynamicRefereceComponents;
  }[]
  | undefined,
  resultText: string,
) {
  if (parameters) {
    for (const { reference, components } of parameters) {
      const { Parameter } = await ssmClient.send(
        new GetParameterCommand({
          Name: components.version
            ? `${components.parameterName}:${components.version}`
            : components.parameterName,
          WithDecryption: components.isSecure,
        }),
      );
      if (Parameter && Parameter.Value) {
        if (components.parameterName) {
          resultText = resultText.replace(
            reference,
            encodeURIComponent(Parameter.Value),
          );
        }
      }
    }
  }
  return resultText;
}

async function processSecrets(
  secrets:
  | { reference: string; components: SecretDynamicRefereceComponents }[]
  | undefined,
  resultText: string,
) {
  if (secrets) {
    for (const { reference, components } of secrets) {
      const { SecretString } = await smClient.send(
        new GetSecretValueCommand({
          SecretId: components.secretId,
          VersionId: components.versionId,
          VersionStage: components.versionStage,
        }),
      );

      if (!SecretString) {
        continue;
      }

      if (components.jsonKey) {
        resultText = resultText.replace(
          reference,
          encodeURIComponent(JSON.parse(SecretString)[components.jsonKey]),
        );
      } else {
        resultText = resultText.replace(
          reference,
          encodeURIComponent(SecretString),
        );
      }
    }
  }
  return resultText;
}
