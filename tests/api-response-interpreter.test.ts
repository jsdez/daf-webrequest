import assert from 'node:assert/strict';
import test from 'node:test';
import { interpretApiResponse } from '../src/services/api-response-interpreter.js';

test('interprets JSON response type, token, output, and preferred message', () => {
  assert.deepEqual(interpretApiResponse('{"access_token":"token","data":{"id":7,"message":"Hello"}}', true, 'data.id'), {
    responseType: 'success', accessToken: 'token', output: 7, message: 'Hello',
  });
});

test('handles non-JSON and explicit transport failure', () => {
  assert.deepEqual(interpretApiResponse('Plain response', true, ''), {
    responseType: 'success', accessToken: undefined, output: undefined, message: '',
  });
  assert.equal(interpretApiResponse('{"message":"Ignored"}', false, '').responseType, 'error');
});
