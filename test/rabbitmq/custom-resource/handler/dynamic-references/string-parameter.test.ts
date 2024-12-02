import {
  StringParameterDynamicRefereceComponents,
  StringParameterDynamicRefereceParser,
} from "../../../../../src/rabbitmq/custom-resource/handler/dynamic-references/string-parameter";

describe("StringParameterDynamicReferenceParser", () => {
  it.each([
    {
      param: "{{resolve:ssm:golden-ami:2}}",
      expected: {
        parameterName: "golden-ami",
        version: 2,
        isSecure: false,
      } as StringParameterDynamicRefereceComponents,
    },
    {
      param: "{{resolve:ssm-secure:IAMUserPassword}}",
      expected: {
        parameterName: "IAMUserPassword",
        isSecure: true,
      } as StringParameterDynamicRefereceComponents,
    },
    {
      param: "resolve:ssm-secure:IAMUserPassword}}",
      expected: undefined,
    },
  ])("should parse secrets", ({ param, expected }) => {
    const actual = StringParameterDynamicRefereceParser.parse(param);
    expect(actual).toEqual(expected);
  });
});
