import assert from 'node:assert/strict';
import test from 'node:test';
import { determineResponseType, extractNestedValue } from '../src/utils/response.js';

test('classifies textual and JSON response states', () => {
  assert.equal(determineResponseType('Completed'), 'success');
  assert.equal(determineResponseType('Request failed'), 'error');
  assert.equal(determineResponseType('{"status":"warning"}'), 'warning');
  assert.equal(determineResponseType('{"error":"Denied"}'), 'error');
});

test('extracts exact keys, nested paths, indexed arrays, and wildcards', () => {
  const response = {
    'developer.email': 'exact@example.com',
    data: {
      users: [
        { name: 'Ada', tags: ['a'] },
        { name: 'Grace', tags: ['b'] },
      ],
    },
  };

  assert.equal(extractNestedValue(response, 'developer.email'), 'exact@example.com');
  assert.equal(extractNestedValue(response, 'data.users[1].name'), 'Grace');
  assert.deepEqual(extractNestedValue(response, 'data.users[*].name'), ['Ada', 'Grace']);
  assert.equal(extractNestedValue(response, 'data.unknown'), undefined);
});
