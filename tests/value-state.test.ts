import assert from 'node:assert/strict';
import test from 'node:test';
import { createApiResponseValue, createConfigurationErrorValue, createPendingApiValue } from '../src/nintex/value-state.js';

test('creates the pending value consumed by Nintex form rules', () => {
  assert.deepEqual(createPendingApiValue('2026-08-03T00:00:00.000Z'), {
    success: false, valid: false, statusCode: 0, responseType: 'pending', data: '', message: '', formattedResponse: '', timestamp: '2026-08-03T00:00:00.000Z', executionTime: 0,
  });
});

test('creates strict successful and failed API response values', () => {
  assert.deepEqual(createApiResponseValue({
    success: true, responseType: 'success', data: 'ok', message: 'Done', formattedResponse: 'Configured', timestamp: 'time', executionTime: 5, accessToken: 'token', output: 42,
  }), {
    success: true, valid: true, statusCode: 200, responseType: 'success', data: 'ok', message: 'Done', formattedResponse: 'Configured', timestamp: 'time', executionTime: 5, access_token: 'token', output: 42,
  });
  assert.equal(createApiResponseValue({ success: true, responseType: 'warning', data: '', message: '', formattedResponse: '', timestamp: 'time', executionTime: 0 }).success, false);
});

test('creates local request configuration error values', () => {
  assert.deepEqual(createConfigurationErrorValue('Bad JSON', 'Configured error', 'time', 42), {
    success: false, valid: false, statusCode: 0, responseType: 'error', data: 'Bad JSON', message: 'Bad JSON', formattedResponse: 'Configured error', timestamp: 'time', executionTime: 42,
  });
});
