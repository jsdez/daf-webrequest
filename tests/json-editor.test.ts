import assert from 'node:assert/strict';
import test from 'node:test';
import { createSampleJson, formatJsonEditorValue, minifyJsonEditorValue } from '../src/debug/json-editor.js';

test('formats and minifies valid JSON without changing invalid input', () => {
  assert.equal(formatJsonEditorValue('{"id":1}'), '{\n  "id": 1\n}');
  assert.equal(minifyJsonEditorValue('{\n  "id": 1\n}'), '{"id":1}');
  assert.equal(formatJsonEditorValue('{'), null);
  assert.equal(minifyJsonEditorValue('{'), null);
});

test('creates the existing sample JSON shape', () => {
  const sample = JSON.parse(createSampleJson(123));
  assert.equal(sample.startData.options.metadata.requestId, 'req-123');
  assert.equal(sample.startData.se_input, 'This is a test');
});
