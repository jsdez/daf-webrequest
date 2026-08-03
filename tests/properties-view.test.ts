import assert from 'node:assert/strict';
import test from 'node:test';
import { getDebugProperties } from '../src/debug/properties-view.js';

test('keeps metadata declaration order while excluding output and sensitive fields', () => {
  const properties = getDebugProperties({
    apiUrl: { type: 'string', defaultValue: '' },
    clientSecret: { type: 'string', defaultValue: '' },
    value: { type: 'object', defaultValue: {} },
    requestTimeout: { type: 'number', defaultValue: 30 },
  }, new Set(['clientSecret']));

  assert.deepEqual(properties.map((property) => property.name), ['apiUrl', 'requestTimeout']);
  assert.deepEqual(properties.map((property) => property.default), ['', 30]);
});
