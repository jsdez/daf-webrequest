import assert from 'node:assert/strict';
import test from 'node:test';
import { fetchOAuthToken } from '../src/services/oauth-token-service.js';

const originalFetch = globalThis.fetch;
const originalWindow = globalThis.window;

function installBrowserTimerShim(): void {
  Object.defineProperty(globalThis, 'window', {
    configurable: true,
    value: globalThis,
  });
}

function restoreGlobals(): void {
  Object.defineProperty(globalThis, 'fetch', { configurable: true, value: originalFetch });
  Object.defineProperty(globalThis, 'window', { configurable: true, value: originalWindow });
}

test('returns an access token with sanitised debug metadata', async () => {
  installBrowserTimerShim();
  globalThis.fetch = async () => new Response(JSON.stringify({
    access_token: 'secret-token',
    token_type: 'Bearer',
    expires_in: 3600,
    scope: 'forms.read',
  }), { status: 200 });

  try {
    const result = await fetchOAuthToken({
      tokenUrl: 'https://example.test/token',
      clientId: 'client',
      clientSecret: 'secret',
      timeoutSeconds: null,
    });

    assert.equal(result.accessToken, 'secret-token');
    assert.equal(result.debugMetadata.token_type, 'Bearer');
    assert.equal(result.debugMetadata.expires_in, 3600);
    assert.equal(result.debugMetadata.scope, 'forms.read');
    assert.equal('access_token' in result.debugMetadata, false);
  } finally {
    restoreGlobals();
  }
});

test('preserves HTTP and missing-token failures', async () => {
  installBrowserTimerShim();
  try {
    globalThis.fetch = async () => new Response('', { status: 401 });
    await assert.rejects(
      () => fetchOAuthToken({ tokenUrl: 'https://example.test/token', clientId: 'a', clientSecret: 'b', timeoutSeconds: null }),
      /Token request failed with status 401/,
    );

    globalThis.fetch = async () => new Response(JSON.stringify({ token_type: 'Bearer' }), { status: 200 });
    await assert.rejects(
      () => fetchOAuthToken({ tokenUrl: 'https://example.test/token', clientId: 'a', clientSecret: 'b', timeoutSeconds: null }),
      /No access_token in response/,
    );
  } finally {
    restoreGlobals();
  }
});
