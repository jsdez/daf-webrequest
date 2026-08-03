export type OAuthTokenConfig = {
  tokenUrl: string;
  clientId: string;
  clientSecret: string;
  timeoutSeconds: number | null;
};

export type OAuthTokenDebugMetadata = {
  token_type: string;
  expires_in: unknown;
  scope: unknown;
  fetched_at: string;
  expires_at: string | null;
};

export type OAuthTokenResult = {
  accessToken: string;
  debugMetadata: OAuthTokenDebugMetadata;
};

/** Fetches an OAuth client-credentials token and returns only sanitised debug metadata. */
export async function fetchOAuthToken(config: OAuthTokenConfig): Promise<OAuthTokenResult> {
  const controller = new AbortController();
  let timedOut = false;
  const timeoutId = config.timeoutSeconds === null
    ? null
    : window.setTimeout(() => {
      timedOut = true;
      controller.abort();
    }, config.timeoutSeconds * 1000);

  try {
    const response = await fetch(config.tokenUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: config.clientId,
        client_secret: config.clientSecret,
      }),
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`Token request failed with status ${response.status}`);
    }

    const data = await response.json();
    if (!data.access_token) {
      throw new Error('No access_token in response');
    }

    return {
      accessToken: data.access_token,
      debugMetadata: {
        token_type: data.token_type || 'Bearer',
        expires_in: data.expires_in,
        scope: data.scope,
        fetched_at: new Date().toISOString(),
        expires_at: data.expires_in ? new Date(Date.now() + (data.expires_in * 1000)).toISOString() : null,
      },
    };
  } catch (error) {
    if (timedOut && config.timeoutSeconds !== null) {
      throw new Error(`OAuth token request timed out after ${config.timeoutSeconds} seconds.`);
    }
    throw error;
  } finally {
    if (timeoutId !== null) {
      window.clearTimeout(timeoutId);
    }
  }
}
