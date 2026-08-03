import assert from 'node:assert/strict';
import test from 'node:test';
import {
  buildResponseFormatterConfig,
  generateResponseConfig,
  generateResponseConfigQuoted,
} from '../src/formatters/response-config.js';

test('builds formatter config from checked fields in display order', () => {
  const fields = new Map([
    ['data.second', { title: '', checked: true, order: 2 }],
    ['data.hidden', { title: 'Hidden', checked: false, order: 0 }],
    ['data.first', { title: 'First field', checked: true, order: 1 }],
  ]);

  assert.deepEqual(buildResponseFormatterConfig(fields, '  Response title  '), {
    title: 'Response title',
    fields: [
      { path: 'data.first', title: 'First field' },
      { path: 'data.second', title: 'data.second' },
    ],
  });
});

test('omits blank titles and preserves current quoted serialization', () => {
  const fields = new Map([
    ['status', { title: '', checked: true, order: 0 }],
  ]);
  const formatted = generateResponseConfig(fields, '   ');
  const quoted = generateResponseConfigQuoted(fields, '   ');

  assert.deepEqual(JSON.parse(formatted), {
    fields: [{ path: 'status', title: 'status' }],
  });
  assert.equal(JSON.parse(quoted), '{"fields":[{"path":"status","title":"status"}]}');
});
