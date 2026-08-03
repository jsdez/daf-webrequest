import assert from 'node:assert/strict';
import test from 'node:test';
import {
  countJsonKeys,
  formatJsonForDisplay,
  formatValue,
  getJsonStatus,
  isValidJson,
} from '../src/utils/json.js';
import { renderJsonWithSyntaxHighlight } from '../src/debug/json-tools-view.js';

test('formats values consistently for formatter output', () => {
  assert.equal(formatValue(true), 'true');
  assert.equal(formatValue('value'), '"value"');
  assert.equal(formatValue(null), 'null');
  assert.equal(formatValue({ id: 1 }), '{"id":1}');
});

test('formats, validates, and reports JSON editor status', () => {
  assert.equal(formatJsonForDisplay('{"id":1}'), '{\n  "id": 1\n}');
  assert.equal(formatJsonForDisplay('not json'), 'not json');
  assert.equal(isValidJson(''), true);
  assert.equal(isValidJson('{"id":1}'), true);
  assert.equal(isValidJson('{'), false);
  assert.equal(countJsonKeys({ id: 1, child: { enabled: true }, list: [{ item: 1 }] }), 5);
  assert.match(getJsonStatus('{"id":1}'), /^Valid JSON • 8 chars • 1 lines • 1 keys$/);
  assert.equal(getJsonStatus(''), 'Empty');
});

test('renders JSON syntax highlighting consistently', () => {
  assert.equal(renderJsonWithSyntaxHighlight({ enabled: true, items: [1] }), [
    '<span class="json-syntax-punctuation">{</span>',
    '  <span class="json-syntax-key">"enabled"</span><span class="json-syntax-punctuation">:</span> <span class="json-syntax-boolean">true</span>,',
    '  <span class="json-syntax-key">"items"</span><span class="json-syntax-punctuation">:</span> <span class="json-syntax-punctuation">[</span>',
    '    <span class="json-syntax-number">1</span>',
    '  <span class="json-syntax-punctuation">]</span>',
    '<span class="json-syntax-punctuation">}</span>',
  ].join('\n'));
});
