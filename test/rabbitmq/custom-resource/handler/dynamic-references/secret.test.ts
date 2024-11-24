import {
  SecretDynamicRefereceComponents,
  SecretsDynamicRefereceParser,
} from '../../../../../src/rabbitmq/custom-resource/handler/dynamic-references/secret';

describe('SecretsDynamicReferenceParser', () => {
  it.each([
    {
      secret:
        '{{resolve:secretsmanager:arn:aws:secretsmanager:us-west-2:123456789012:secret:MySecret-a1b2c3}}',
      expected: {
        secretId: 'arn:aws:secretsmanager:us-west-2:123456789012:secret:MySecret-a1b2c3',
      } as SecretDynamicRefereceComponents,
    },
    {
      secret: '{{resolve:secretsmanager:MySecret}}',
      expected: {
        secretId: 'MySecret',
      } as SecretDynamicRefereceComponents,
    },
    {
      secret: '{{resolve:secretsmanager:MySecret::::}}',
      expected: {
        secretId: 'MySecret',
      } as SecretDynamicRefereceComponents,
    },
    {
      secret: '{{resolve:secretsmanager:MySecret:SecretString:password}}',
      expected: {
        secretId: 'MySecret',
        jsonKey: 'password',
        secretString: 'SecretString',
      } as SecretDynamicRefereceComponents,
    },
    {
      secret:
        '{{resolve:secretsmanager:arn:aws:secretsmanager:us-west-2:123456789012:secret:MySecret-a1b2c3}}',
      expected: {
        secretId: 'arn:aws:secretsmanager:us-west-2:123456789012:secret:MySecret-a1b2c3',
      } as SecretDynamicRefereceComponents,
    },
    {
      secret:
        '{{resolve:secretsmanager:arn:aws:secretsmanager:us-west-2:123456789012:secret:MySecret-a1b2c3:SecretString:password}}',
      expected: {
        secretId: 'arn:aws:secretsmanager:us-west-2:123456789012:secret:MySecret-a1b2c3',
        jsonKey: 'password',
        secretString: 'SecretString',
      } as SecretDynamicRefereceComponents,
    },
    {
      secret:
        '{{resolve:secretsmanager:MySecret:SecretString:password:AWSPREVIOUS}}',
      expected: {
        secretId: 'MySecret',
        jsonKey: 'password',
        secretString: 'SecretString',
        versionStage: 'AWSPREVIOUS',
      } as SecretDynamicRefereceComponents,
    },
  ])('should parse secrets', ({ secret, expected }) => {
    const actual = SecretsDynamicRefereceParser.parse(secret);
    expect(actual).toEqual(expected);
  });
});
