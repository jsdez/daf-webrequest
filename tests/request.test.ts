import assert from 'node:assert/strict';
import test from 'node:test';
import { parseRequestHeaders, prepareRequestBody } from '../src/utils/request.js';

test('prepares JSON request bodies without changing their parsed value', () => {
  assert.deepEqual(prepareRequestBody('application/json', '{"id": 42}'), {
    body: { id: 42 },
  });
  assert.deepEqual(prepareRequestBody('application/json', ''), { body: undefined });
});

test('reports invalid JSON before a request can be sent', () => {
  const result = prepareRequestBody('application/json', '{"id":');
  assert.equal(result.body, undefined);
  assert.match(result.error ?? '', /Expected|JSON|end/i);
});

test('preserves url-encoded and text bodies', () => {
  assert.deepEqual(prepareRequestBody('application/x-www-form-urlencoded', 'a=1&b=two'), {
    body: 'a=1&b=two',
  });
  assert.deepEqual(prepareRequestBody('text/plain', 'hello'), { body: 'hello' });
});

test('parses JSON or line-based headers', () => {
  assert.deepEqual(parseRequestHeaders('{"Accept":"application/json"}'), {
    Accept: 'application/json',
  });
  assert.deepEqual(parseRequestHeaders('Accept: application/json\nX-Trace: abc'), {
    Accept: 'application/json',
    'X-Trace': 'abc',
  });
});
