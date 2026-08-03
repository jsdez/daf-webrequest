import assert from 'node:assert/strict';
import test from 'node:test';
import { getFormatterPreviewItems } from '../src/debug/formatter-preview-view.js';

test('creates selected formatter preview values in map insertion order', () => {
  const fields = new Map([
    ['data.name', { title: 'Name', checked: true, order: 0 }],
    ['data.hidden', { title: 'Hidden', checked: false, order: 1 }],
    ['data.missing', { title: '', checked: true, order: 2 }],
  ]);

  assert.deepEqual(getFormatterPreviewItems(fields, { data: { name: 'Ada' } }), [
    { title: 'Name', value: 'Ada' },
    { title: 'data.missing', value: 'N/A' },
  ]);
});
