import assert from 'node:assert/strict';
import test from 'node:test';
import { pluginContractSchema } from '@nintex/form-plugin-contract';
import { getPluginContract } from '../src/nintex/plugin-contract.js';

test('returns a schema-valid Nintex contract with required stable properties', () => {
  const contract = getPluginContract();
  assert.equal(pluginContractSchema.safeParse(contract).success, true);
  assert.equal(contract.controlName, 'Web Request Plugin');
  assert.ok(contract.properties);
  assert.equal(contract.properties.requestTimeout.defaultValue, 30);
  assert.equal(contract.properties.submissionAction.defaultValue, 'no-submit');
  assert.equal(contract.properties.waitForResponse, undefined);
});
