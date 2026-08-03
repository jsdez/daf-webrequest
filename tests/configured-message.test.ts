import assert from 'node:assert/strict';
import test from 'node:test';
import { resolveConfiguredMessage } from '../src/formatters/configured-message.js';

const configurations = {
  success: 'Complete',
  warning: '',
  error: '',
};

test('returns a plain configured message unchanged', () => {
  assert.deepEqual(resolveConfiguredMessage('success', configurations, '{}'), {
    title: null,
    message: 'Complete',
  });
});

test('resolves quoted and unquoted formatter configurations', () => {
  const config = { title: 'Result', fields: [{ path: 'data.name', title: 'Name' }] };
  const unquoted = JSON.stringify(config);
  const quoted = `"${unquoted.replace(/"/g, '\\"')}"`;

  assert.deepEqual(resolveConfiguredMessage('warning', { ...configurations, warning: unquoted }, '{"data":{"name":"Ada"}}'), {
    title: 'Result',
    message: 'Name: Ada',
  });
  assert.deepEqual(resolveConfiguredMessage('error', { ...configurations, error: quoted }, '{"data":{"name":"Grace"}}'), {
    title: 'Result',
    message: 'Name: Grace',
  });
});
