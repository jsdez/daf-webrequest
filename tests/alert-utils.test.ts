import assert from 'node:assert/strict';
import test from 'node:test';
import { getAlertIcon, shouldShowAlert, shouldShowMoreDetails } from '../src/debug/alert-utils.js';

test('selects alert icons and detail visibility rules', () => {
  assert.equal(getAlertIcon('success'), '✓');
  assert.equal(getAlertIcon('warning'), '⚠');
  assert.equal(shouldShowMoreDetails('Never', 'error'), false);
  assert.equal(shouldShowMoreDetails('Always', 'success'), true);
  assert.equal(shouldShowMoreDetails('On Error/Warning', 'warning'), true);
  assert.equal(shouldShowMoreDetails('On Error/Warning', 'success'), false);
});

test('preserves cooldown and response alert visibility decisions', () => {
  const base = { now: 10_000, lastApiCallTime: 9_500, countdownTimer: 1, countdownEnabled: true, showCooldownAlert: true, apiResponse: '', responseType: null, lastCooldownAlertTime: 0 };
  assert.equal(shouldShowAlert(base), true);
  assert.equal(shouldShowAlert({ ...base, showCooldownAlert: false }), false);
  assert.equal(shouldShowAlert({ ...base, countdownEnabled: false, apiResponse: 'ok', responseType: 'success' }), true);
  assert.equal(shouldShowAlert({ ...base, countdownEnabled: false, apiResponse: 'ok', responseType: 'success', lastCooldownAlertTime: 10_001 }), false);
});
