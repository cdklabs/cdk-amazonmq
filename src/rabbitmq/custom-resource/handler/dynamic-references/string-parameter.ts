/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/

// see: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/dynamic-references-ssm.html
//      https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/dynamic-references-ssm-secure-strings.html

export interface StringParameterDynamicRefereceComponents {
  readonly parameterName: string;
  readonly version?: number;
  readonly isSecure?: boolean;
}

export class StringParameterDynamicRefereceParser {
  private static get regex() {
    return /^\{\{(resolve:ssm[a-zA-Z0-9:_-]*?)\}\}$/;
  }

  public static looksLikeParameterDynamicReference(text: string) {
    return StringParameterDynamicRefereceParser.regex.test(text);
  }

  public static parse(
    text: string,
  ): StringParameterDynamicRefereceComponents | undefined {
    if (
      !StringParameterDynamicRefereceParser.looksLikeParameterDynamicReference(
        text,
      )
    ) {
      return undefined;
    }

    const matches = text.match(StringParameterDynamicRefereceParser.regex);

    if (!matches) {
      throw new Error(`Invalid secret dynamic reference: ${text}`);
    }

    const referenceContents = matches[matches.length === 2 ? 1 : 2];

    const parts = referenceContents.split(":");

    if (parts.length < 3) {
      throw new Error(`Invalid secret dynamic reference: ${text}`);
    }

    return {
      isSecure: parts[1] === "ssm-secure",
      parameterName: parts[2],
      version: parts.length === 4 ? parseInt(parts[3]) : undefined,
    };
  }
}
