import assert from 'node:assert/strict';
import test from 'node:test';
import {
  getSortedSelectedFields,
  removeFormatterField,
  reorderFormatterFields,
  toggleFormatterField,
  updateFormatterFieldTitle,
} from '../src/formatters/field-selection.js';

test('adds, updates, and removes formatter fields with sequential ordering', () => {
  const fields = new Map();
  toggleFormatterField(fields, 'data.name', true, 'Name');
  toggleFormatterField(fields, 'data.status', true, 'Status');
  updateFormatterFieldTitle(fields, 'data.name', 'Display name');

  assert.deepEqual(getSortedSelectedFields(fields), [
    ['data.name', { title: 'Display name', checked: true, order: 0 }],
    ['data.status', { title: 'Status', checked: true, order: 1 }],
  ]);

  removeFormatterField(fields, 'data.name');
  assert.deepEqual(getSortedSelectedFields(fields), [
    ['data.status', { title: 'Status', checked: true, order: 1 }],
  ]);
});

test('reorders selected formatter fields by drag indices', () => {
  const fields = new Map([
    ['first', { title: 'First', checked: true, order: 0 }],
    ['second', { title: 'Second', checked: true, order: 1 }],
    ['third', { title: 'Third', checked: true, order: 2 }],
  ]);

  reorderFormatterFields(fields, 2, 0);
  assert.deepEqual(getSortedSelectedFields(fields).map(([key]) => key), ['third', 'first', 'second']);
  assert.deepEqual(getSortedSelectedFields(fields).map(([, value]) => value.order), [0, 1, 2]);
});
