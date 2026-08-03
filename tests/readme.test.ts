import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const readme = readFileSync(new URL('../README.md', import.meta.url), 'utf8');

test('documents current live and preview plugin URLs and required validation workflow', () => {
  assert.match(readme, /https:\/\/jsdez\.github\.io\/daf-webrequest\/dist\/plugin\.bundle\.js/);
  assert.match(readme, /https:\/\/jsdez\.github\.io\/daf-webrequest\/test\/plugin\.bundle\.js/);
  assert.match(readme, /npm test/);
  assert.match(readme, /npm run typecheck/);
  assert.match(readme, /npm run build:test/);
  assert.match(readme, /\[Changelog\]\(CHANGELOG\.md\)/);
});

test('does not document removed or incorrect distribution behavior', () => {
  assert.doesNotMatch(readme, /cdn\.jsdelivr\.net/);
  assert.doesNotMatch(readme, /Wait for Callback Response/);
  assert.doesNotMatch(readme, /shows access_token/);
});
