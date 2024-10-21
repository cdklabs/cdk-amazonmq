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

type VersionStage = 'AWSCURRENT' | 'AWSPENDING' | 'AWSPREVIOUS';

const client = new SecretsManagerClient({});

const createSecret = async (secretId: string, token: string) => {
  // make sure that the current secret exists
  const { SecretString: CurrentSecretString } = await client.send(
    new GetSecretValueCommand({
      SecretId: secretId,
      VersionStage: 'AWSCURRENT' as VersionStage, // AWSCURRENT or AWSPENDING or AWSPREVIOUS.'
    }),
  );

  try {
    await client.send(
      new GetSecretValueCommand({
        SecretId: secretId,
        VersionId: token,
        VersionStage: 'AWSPENDING' as VersionStage, // AWSCURRENT or AWSPENDING or AWSPREVIOUS.'
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
        VersionStages: ['AWSPENDING'] as VersionStage[], // AWSCURRENT or AWSPENDING or AWSPREVIOUS.
      }),
    );
  }
};

const setSecret = async (
  secretId: string,
  token: string,
  brokerUrl: string,
  adminCredsArn: string,
) => {
  const { SecretString: CurrentSecretString } = await client.send(
    new GetSecretValueCommand({
      SecretId: secretId,
      VersionStage: 'AWSCURRENT' as VersionStage, // AWSCURRENT or AWSPENDING or AWSPREVIOUS.'
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

  const { SecretString: PendingSecretString } = await client.send(
    new GetSecretValueCommand({
      SecretId: secretId,
      VersionId: token,
      VersionStage: 'AWSPENDING' as VersionStage, // AWSCURRENT or AWSPENDING or AWSPREVIOUS.'
    }),
  );

  if (PendingSecretString === undefined) {
    throw new Error('PendingSecretString');
  }

  const { password: newPassword } = JSON.parse(PendingSecretString) as {
    username: string;
    password: string;
  };

  const { username: adminUsername, password: adminPassword } =
    adminCredsArn === secretId
      ? { username: currentUsername, password: currentPassword }
      : await getCurrentCredentials(adminCredsArn);

  const getOptions = {
    rabbitUrl: new URL(brokerUrl),
    username: adminUsername,
    password: adminPassword,
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
    username: adminUsername,
    password: adminPassword,
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
  adminCredsArn: string,
) => {

  const { SecretString: PendingSecretString } = await client.send(
    new GetSecretValueCommand({
      SecretId: secretId,
      VersionId: token,
      VersionStage: 'AWSPENDING' as VersionStage, // AWSCURRENT or AWSPENDING or AWSPREVIOUS.'
    }),
  );

  if (PendingSecretString === undefined) {
    throw new Error('PendingSecretString');
  }

  const { username, password } = JSON.parse(PendingSecretString) as {
    username: string;
    password: string;
  };

  const { username: adminUsername, password: adminPassword } =
    adminCredsArn === secretId
      ? { username, password }
      : await getCurrentCredentials(adminCredsArn);

  const getOptions = {
    rabbitUrl: new URL(brokerUrl),
    username: adminUsername,
    password: adminPassword,
    method: 'GET' as HttpMethod,
    path: `/api/users/${username}`,
  };

  const { payload } = await send<{
    username: string;
    password: string;
    tags: string;
  }>(getOptions);

  // Tests if user exists, but doesn't test the user's password.
  // This is sufficient for the admin, as if the GET method goes through it means that the password works.
  // TODO: how to test the password?
  if (payload === undefined) {
    throw new Error('payload');
  }
};

const finishSecret = async (
  secretId: string,
  token: string,
  brokerUrl: string,
  adminCredsArn: string,
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

  const { username, password } = await getCurrentCredentials(secretId);

  const { username: adminUsername, password: adminPassword } =
    adminCredsArn === secretId
      ? { username, password }
      : await getCurrentCredentials(adminCredsArn);

  const deleteOptions = {
    rabbitUrl: new URL(brokerUrl),
    username: adminUsername,
    password: adminPassword,
    method: 'DELETE' as HttpMethod,
    path: `/api/connections/username/${username}`,
  };

  await send(deleteOptions);

  console.log(
    `finishSecret: Successfully invalidated all RabbitMQ connections for credentials in the secret ${secretId} of the version ${token}.`,
  );
};

export const handler: SecretsManagerRotationHandler = async (
  event: SecretsManagerRotationEvent,
) => {
  const {
    // AmazonMQ for RabbitMQ broker URL
    BROKER_URL,
    // Credentials of a RabbitMQ broker user with administrator permissions (to be able to update users)
    // see: https://www.rabbitmq.com/docs/management#permissions
    CREDENTIALS,
  } = process.env;

  if (BROKER_URL === undefined) {
    throw new Error('BROKER_URL');
  }

  if (CREDENTIALS === undefined) {
    throw new Error('CREDENTIALS');
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
      await setSecret(secretId, token, BROKER_URL, CREDENTIALS);
      console.log('handler: setSecret completed');
      break;
    case 'testSecret':
      console.log('handler: testSecret started');
      await testSecret(secretId, token, BROKER_URL, CREDENTIALS);
      console.log('handler: testSecret completed');
      break;
    case 'finishSecret':
      console.log('handler: finishSecret started.');
      await finishSecret(secretId, token, BROKER_URL, CREDENTIALS);
      console.log('handler: finishSecret completed. rotate secret done.');
      break;
    default:
      throw Error(`handler: Invalid step parameter. Step: ${step}`);
  }
};

const getCurrentCredentials = async (secretId: string) => {
  const { SecretString } = await client.send(
    new GetSecretValueCommand({
      SecretId: secretId,
      VersionStage: 'AWSCURRENT' as VersionStage, // AWSCURRENT or AWSPENDING or AWSPREVIOUS.'
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
