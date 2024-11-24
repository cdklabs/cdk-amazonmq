/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/

import { build } from '@aws-sdk/util-arn-parser';
// see: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/dynamic-references-secretsmanager.html

export interface SecretDynamicRefereceComponents {
  readonly secretId: string;
  readonly secretString?: 'SecretString';
  readonly jsonKey?: string;
  readonly versionStage?: string;
  readonly versionId?: string;
}

export class SecretsDynamicRefereceParser {
  private static get regex() {
    return /^\{\{(resolve:secretsmanager[a-zA-Z0-9:_-]*?)\}\}$/;
  }

  public static looksLikeSecretDynamicReference(text: string) {
    return SecretsDynamicRefereceParser.regex.test(text);
  }

  public static parse(
    text: string,
  ): SecretDynamicRefereceComponents | undefined {
    if (!SecretsDynamicRefereceParser.looksLikeSecretDynamicReference(text)) {
      return undefined;
    }

    const matches = text.match(SecretsDynamicRefereceParser.regex);

    if (!matches) {
      throw new Error(`Invalid secret dynamic reference: ${text}`);
    }

    const referenceContents = matches[matches.length === 2 ? 1 : 2];

    const arnBased = referenceContents.startsWith(
      'resolve:secretsmanager:arn:',
    );

    const parts = referenceContents.split(':');

    const valueAtOrDefault = <T>(
      arr: string[],
      idx: number,
      defaultValue?: T,
    ): T | undefined =>
      arr.length > idx && arr[idx] !== '' ? (arr[idx] as T) : defaultValue;

    if (!arnBased) {
      return {
        secretId: parts[2],
        secretString: valueAtOrDefault(parts, 3),
        jsonKey: valueAtOrDefault(parts, 4),
        versionStage: valueAtOrDefault(parts, 5),
        versionId: valueAtOrDefault(parts, 6),
      };
    }

    return {
      secretId: build({
        partition: parts[3],
        service: parts[4],
        region: parts[5],
        accountId: parts[6],
        resource: `${parts[7]}:${parts[8]}`,
      }),
      secretString: valueAtOrDefault(parts, 9),
      jsonKey: valueAtOrDefault(parts, 10),
      versionStage: valueAtOrDefault(parts, 11),
      versionId: valueAtOrDefault(parts, 12),
    };
  }
}
