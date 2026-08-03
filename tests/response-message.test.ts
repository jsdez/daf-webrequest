import assert from 'node:assert/strict';
import test from 'node:test';
import {
  formatMessageWithBoldLabels,
  formatRawResponse,
  formatResponseWithConfig,
} from '../src/formatters/response-message.js';

test('formats labelled response lines as the existing alert markup', () => {
  assert.equal(
    formatMessageWithBoldLabels('Code: 123\nDetail: one: two\nNo label'),
    '<strong>Code:</strong> 123<br><strong>Detail:</strong> one: two<br>No label',
  );
  assert.equal(formatMessageWithBoldLabels(''), '');
});

test('formats raw JSON responses and preserves plain text', () => {
  assert.equal(formatRawResponse('{"id":1}'), '{\n  "id": 1\n}');
  assert.equal(formatRawResponse('Plain response'), 'Plain response');
});

test('formats configured response fields, arrays, and missing values', () => {
  const config = {
    fields: [
      { path: 'data.name', title: 'Name' },
      { path: 'data.tags[*]', title: 'Tags' },
      { path: 'data.missing', title: 'Missing' },
    ],
  };
  assert.equal(
    formatResponseWithConfig(config, '{"data":{"name":"Ada","tags":["one","two"]}}'),
    'Name: Ada\nTags:\n  1. one\n  2. two\nMissing: N/A',
  );
  assert.equal(formatResponseWithConfig({}, '{}'), 'Invalid configuration format');
  assert.equal(formatResponseWithConfig(config, 'not json'), 'Unable to parse response data');
});
