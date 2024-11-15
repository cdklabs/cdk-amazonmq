// eslint-disable-next-line import/no-extraneous-dependencies

// see: https://www.rabbitmq.com/docs/access-control#credential-rotation

import {
  SecretsManagerClient,
  GetSecretValueCommand,
  PutSecretValueCommand,
  GetRandomPasswordCommand,
  DescribeSecretCommand,
  UpdateSecretVersionStageCommand,
  ResourceNotFoundException,
} from '@aws-sdk/client-secrets-manager';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  SecretsManagerRotationEvent,
  SecretsManagerRotationHandler,
} from 'aws-lambda';
import { send, HttpMethod } from './rabbitmq-management-sdk';

enum VersionStage {
  AWSCURRENT = 'AWSCURRENT',
  AWSPENDING = 'AWSPENDING',
  AWSPREVIOUS = 'AWSPREVIOUS',
}

const client = new SecretsManagerClient({});

const createSecret = async (secretId: string, token: string) => {
  // make sure that the current secret exists
  const { SecretString: CurrentSecretString } = await client.send(
    new GetSecretValueCommand({
      SecretId: secretId,
      VersionStage: 'AWSCURRENT' as VersionStage,
    }),
  );

  try {
    await client.send(
      new GetSecretValueCommand({
        SecretId: secretId,
        VersionId: token,
        VersionStage: VersionStage.AWSPENDING,
      }),
    );
    console.log(`createSecret: Successfully retrieved secret for ${secretId}.`);
  } catch (e) {
    // filter duplicated lambda invoke.
    if (e instanceof ResourceNotFoundException) {
      console.log(
        'createSecret: secret already exist. considered as duplicated lambda invoke.',
      );
    } else {
      throw Error(`createSecret: ${e}`);
    }

    if (CurrentSecretString === undefined) {
      throw new Error('CurrentSecretString');
    }

    const secret = JSON.parse(CurrentSecretString) as {
      username: string;
      password: string;
    };

    const { RandomPassword: newPassword } = await client.send(
      new GetRandomPasswordCommand({
        ExcludePunctuation: true,
        PasswordLength: 24,
      }),
    );

    if (newPassword === undefined) {
      throw new Error('RandomPassword');
    }

    await client.send(
      new PutSecretValueCommand({
        SecretId: secretId,
        ClientRequestToken: token,
        SecretString: JSON.stringify({ ...secret, password: newPassword }),
        VersionStages: [VersionStage.AWSPENDING],
      }),
    );
  }
};

const setSecret = async (
  secretId: string,
  token: string,
  brokerUrl: string,
  mgmntCredsArn?: string,
) => {
  const { SecretString: CurrentSecretString } = await client.send(
    new GetSecretValueCommand({
      SecretId: secretId,
      VersionStage: VersionStage.AWSCURRENT,
    }),
  );

  if (CurrentSecretString === undefined) {
    throw new Error('CurrentSecretString');
  }

  const { username: currentUsername, password: currentPassword } = JSON.parse(
    CurrentSecretString,
  ) as {
    username: string;
    password: string;
  };

  const { SecretString: NewSecretString } = await client.send(
    new GetSecretValueCommand({
      SecretId: secretId,
      VersionId: token,
      VersionStage: VersionStage.AWSPENDING,
    }),
  );

  if (NewSecretString === undefined) {
    throw new Error('NewSecretString');
  }

  const secret = JSON.parse(NewSecretString) as {
    username: string;
    password: string;
  };

  const { password: newPassword } = secret;

  const { username: mgmntUsername, password: mgmntPassword } =
    secretId === mgmntCredsArn || mgmntCredsArn === undefined
      ? {
        username: currentUsername,
        password: currentPassword,
      }
      : await getCredentials(mgmntCredsArn, VersionStage.AWSCURRENT);

  const getOptions = {
    rabbitUrl: new URL(brokerUrl),
    username: mgmntUsername,
    password: mgmntPassword,
    method: 'GET' as HttpMethod,
    path: `/api/users/${currentUsername}`,
  };

  const { payload } = await send<{
    tags: string;
  }>(getOptions);

  if (payload === undefined) {
    throw new Error('payload');
  }

  const putOptions = {
    rabbitUrl: new URL(brokerUrl),
    username: mgmntUsername,
    password: mgmntPassword,
    method: 'PUT' as HttpMethod,
    path: `/api/users/${currentUsername}`,
    payload: { tags: payload.tags, password: newPassword },
  };

  await send(putOptions);
};

const testSecret = async (
  secretId: string,
  token: string,
  brokerUrl: string,
  mgmntCredsArn?: string,
) => {
  const { SecretString: NewSecretString } = await client.send(
    new GetSecretValueCommand({
      SecretId: secretId,
      VersionId: token,
      VersionStage: VersionStage.AWSPENDING,
    }),
  );

  if (NewSecretString === undefined) {
    throw new Error('NewSecretString');
  }
  const { username, password } = JSON.parse(NewSecretString) as {
    username: string;
    password: string;
  };

  const { username: mgmntUsername, password: mgmntPassword } =
    secretId === mgmntCredsArn || mgmntCredsArn === undefined
      ? { username, password }
      : await getCredentials(mgmntCredsArn, VersionStage.AWSCURRENT);


  // INFO: In RabbitMQ only users with "management" tag are allowed to interact with the Management HTTP API.
  //       With this - only these we are able to test for whether they can get information about themselves.
  //       This means that to 'actually' test for changes of the non-"management" users there needs to be
  //       other method here used.
  //
  //       This method is a basic method for identifying if we can get the info about a particular user with
  //       the newly created password (only works with users with management permissions)
  const getOptions = {
    rabbitUrl: new URL(brokerUrl),
    username: mgmntUsername,
    password: mgmntPassword,
    method: 'GET' as HttpMethod,
    path: `/api/users/${username}`,
  };

  const { payload } = await send<{
    username: string;
    password: string;
    tags: string;
  }>(getOptions);

  if (payload === undefined) {
    throw new Error('payload');
  }
};

const finishSecret = async (
  secretId: string,
  token: string,
  brokerUrl: string,
  mgmntCredsArn?: string,
) => {
  const metadata = await client.send(
    new DescribeSecretCommand({ SecretId: secretId }),
  );

  let currentVersion: string | undefined;

  if (metadata.VersionIdsToStages === undefined) {
    console.error(`Secret ${secretId} does not have any versions`);
    throw new Error(`Secret ${secretId} does not have any versions`);
  }

  const versions = metadata.VersionIdsToStages;

  // eslint-disable-next-line no-restricted-syntax
  for (const [version, stages] of Object.entries(versions)) {
    if (stages.includes('AWSCURRENT')) {
      if (version === token) {
        // The correct version is already marked as current, return
        console.log(
          `finishSecret: Version ${version} already marked as AWSCURRENT for ${secretId}`,
        );
        return;
      }
      currentVersion = version;
      break;
    }
  }

  // Finalize by staging the secret version current
  await client.send(
    new UpdateSecretVersionStageCommand({
      SecretId: secretId,
      VersionStage: 'AWSCURRENT' as VersionStage, // AWSCURRENT or AWSPENDING or AWSPREVIOUS.,
      MoveToVersionId: token,
      RemoveFromVersionId: currentVersion,
    }),
  );

  console.log(
    `finishSecret: Successfully set AWSCURRENT stage to version ${token} for secret ${secretId}.`,
  );

  const { username, password } = await getCredentials(
    secretId,
    VersionStage.AWSCURRENT,
  );

  const { username: mgmntUsername, password: mgmntPassword } =
    secretId === mgmntCredsArn || mgmntCredsArn === undefined
      ? { username, password }
      : await getCredentials(mgmntCredsArn, VersionStage.AWSCURRENT);

  const deleteConnections = {
    rabbitUrl: new URL(brokerUrl),
    username: mgmntUsername,
    password: mgmntPassword,
    method: 'DELETE' as HttpMethod,
    path: `/api/connections/username/${username}`,
  };

  await send(deleteConnections);

  console.log(
    `finishSecret: Successfully invalidated all RabbitMQ connections for credentials in the secret ${secretId} of the version ${token}.`,
  );
};

export const handler: SecretsManagerRotationHandler = async (
  event: SecretsManagerRotationEvent,
) => {
  const { BROKER_URL, MGMT_CREDENTIALS } = process.env;

  if (BROKER_URL === undefined) {
    throw new Error('BROKER_URL');
  }

  // event initialize
  const secretId = event.SecretId;
  const token = event.ClientRequestToken;
  const step = event.Step;

  // Make sure the version is staged correctly
  const metadata = await client.send(
    new DescribeSecretCommand({ SecretId: secretId }),
  );

  if (metadata.RotationEnabled === undefined) {
    console.error(`Secret ${secretId} is not enabled for rotation`);
    throw new Error(`Secret ${secretId} is not enabled for rotation`);
  }

  if (metadata.VersionIdsToStages === undefined) {
    console.error(`Secret ${secretId} does not have any versions`);
    throw new Error(`Secret ${secretId} does not have any versions`);
  }

  const versions = metadata.VersionIdsToStages;

  if (!(token in versions)) {
    console.error(
      `Secret version ${token} has no stage for rotation of secret ${secretId}.`,
    );
    throw new Error(
      `Secret version ${token} has no stage for rotation of secret ${secretId}.`,
    );
  }

  if ('AWSCURRENT' in versions[token]) {
    console.log(
      `Secret version ${token} already set as AWSCURRENT for secret ${secretId}`,
    );
    return;
  }
  if (!versions[token].includes('AWSPENDING')) {
    console.error(
      `Secret version ${token} not set as AWSPENDING for rotation of secret ${secretId}.`,
    );
    throw new Error(
      `Secret version ${token} not set as AWSPENDING for rotation of secret ${secretId}.`,
    );
  }

  // step handle
  switch (step) {
    case 'createSecret':
      console.log('handler: createSecret started');
      await createSecret(secretId, token);
      console.log('handler: createSecret completed');
      break;
    case 'setSecret':
      console.log('handler: setSecret started');
      await setSecret(secretId, token, BROKER_URL, MGMT_CREDENTIALS);
      console.log('handler: setSecret completed');
      break;
    case 'testSecret':
      console.log('handler: testSecret started');
      await testSecret(secretId, token, BROKER_URL, MGMT_CREDENTIALS);
      console.log('handler: testSecret completed');
      break;
    case 'finishSecret':
      console.log('handler: finishSecret started.');
      await finishSecret(secretId, token, BROKER_URL, MGMT_CREDENTIALS);
      console.log('handler: finishSecret completed. rotate secret done.');
      break;
    default:
      throw Error(`handler: Invalid step parameter. Step: ${step}`);
  }
};

const getCredentials = async (secretId: string, versionStage: VersionStage) => {
  const { SecretString } = await client.send(
    new GetSecretValueCommand({
      SecretId: secretId,
      VersionStage: versionStage, // AWSCURRENT or AWSPENDING or AWSPREVIOUS.'
    }),
  );

  if (SecretString === undefined) {
    throw new Error('SecretString');
  }

  return JSON.parse(SecretString) as {
    username: string;
    password: string;
  };
};
