/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/

import {
  SecretDynamicRefereceComponents,
  SecretsDynamicRefereceParser,
} from "./secret";
import {
  StringParameterDynamicRefereceComponents,
  StringParameterDynamicRefereceParser,
} from "./string-parameter";

export class DynamicReferenceExtractor {
  private static get regex() {
    return /(\{\{resolve:[a-zA-Z0-9:_-]*?\}\})/gm;
  }

  public static extract(text: string): [
    (
      | {
          reference: string;
          components: SecretDynamicRefereceComponents;
        }[]
      | undefined
    ),
    (
      | {
          reference: string;
          components: StringParameterDynamicRefereceComponents;
        }[]
      | undefined
    ),
  ] {
    let secrets:
      | {
          reference: string;
          components: SecretDynamicRefereceComponents;
        }[]
      | undefined;
    let parameters:
      | {
          reference: string;
          components: StringParameterDynamicRefereceComponents;
        }[]
      | undefined;

    const matches = text.matchAll(DynamicReferenceExtractor.regex);

    if (!matches) {
      return [secrets, parameters];
    }
    const matchesArray = [...matches];

    const secretsArray = matchesArray
      .filter((m) =>
        SecretsDynamicRefereceParser.looksLikeSecretDynamicReference(m[0]),
      )
      .map((m) => ({
        reference: m[0],
        components: SecretsDynamicRefereceParser.parse(m[0]),
      }))
      .filter((s) => s.reference !== undefined) as {
      reference: string;
      components: SecretDynamicRefereceComponents;
    }[];

    if (secretsArray.length > 0) {
      secrets = secretsArray;
    }

    const paramsArray = matchesArray
      .filter((m) =>
        StringParameterDynamicRefereceParser.looksLikeParameterDynamicReference(
          m[0],
        ),
      )
      .map((m) => ({
        reference: m[0],
        components: StringParameterDynamicRefereceParser.parse(m[0]),
      }))
      .filter((s) => s.reference !== undefined) as {
      reference: string;
      components: StringParameterDynamicRefereceComponents;
    }[];

    if (paramsArray.length > 0) {
      parameters = paramsArray;
    }

    return [secrets, parameters];
  }
}

// const drs = [
//   "{{resolve:secretsmanager:arn:aws:secretsmanager:us-west-2:123456789012:secret:MySecret-a1b2c3}}",
//   "{{resolve:secretsmanager:MySecret}}",
//   "{{resolve:secretsmanager:MySecret::::}}",
//   "{{resolve:secretsmanager:MySecret:SecretString:password}}",
//   "{{resolve:secretsmanager:arn:aws:secretsmanager:us-west-2:123456789012:secret:MySecret-a1b2c3}}",
//   "{{resolve:secretsmanager:arn:aws:secretsmanager:us-west-2:123456789012:secret:MySecret-a1b2c3:SecretString:password}}",
//   "{{resolve:secretsmanager:MySecret:SecretString:password:AWSPREVIOUS}}",
//   "resolve:ssm:golden-ami:2}}",
//   "{{resolve:ssm:golden-ami:2}}",
//   "{{resolve:ssm-secure:IAMUserPassword:10}}",
// ].join("\n");

// const [secrets, parameters] = DynamicReferenceExtractor.extract(drs);

// console.log("SECRETS", JSON.stringify(secrets, null, 2));
// console.log("PARAMETERS", JSON.stringify(parameters, null, 2));
