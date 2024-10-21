import * as https from 'https';

export type RabbitApiResponse<TResponse> = {
  headers: { [key: string]: string };
  statusCode: number | undefined;
  payload?: TResponse;
};

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export type RabbitApiRequestInput = {
  rabbitUrl: URL;
  username: string;
  password: string;
  path: string;
  method?: HttpMethod;
  payload?: unknown;
};

export type RabbitApiRequest = <TResponse = unknown>(
  input: RabbitApiRequestInput
) => Promise<RabbitApiResponse<TResponse>>;

export const send: RabbitApiRequest = <TResponse = unknown>(
  input: RabbitApiRequestInput,
) => {
  const { rabbitUrl, path, method, username, password, payload } = input;

  const options = {
    hostname: rabbitUrl.hostname,
    port: 443,
    path,
    method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${Buffer.from(`${username}:${password}`).toString(
        'base64',
      )}`,
    },
  };

  return new Promise<RabbitApiResponse<TResponse>>((resolve, reject) => {
    const req = https.request(options, (res) => {
      res.setEncoding('utf8');
      let rawData = '';

      res.on('data', (chunk) => {
        rawData += chunk;
      });

      res.on('end', () => {
        try {
          if (res.statusCode && res.statusCode >= 200 && res.statusCode < 300) {
            resolve({
              headers: res.headers as { [key: string]: string },
              statusCode: res.statusCode,
              payload:
                rawData !== '' ? (JSON.parse(rawData) as TResponse) : undefined,
            });
          } else {
            reject(
              new Error(
                `Request failed with status code ${res.statusCode}: ${rawData}`,
              ),
            );
          }
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on('error', (e) => {
      reject(e);
    });

    if (payload !== undefined) {
      req.write(JSON.stringify(payload));
    }

    req.end();
  });
};
