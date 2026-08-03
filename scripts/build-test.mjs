import { createHash } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import esbuild from 'esbuild';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');
const liveBundlePath = path.join(repoRoot, 'dist', 'plugin.bundle.js');
const testBundlePath = path.join(repoRoot, 'test', 'plugin.bundle.js');

function checksum(filePath) {
  if (!fs.existsSync(filePath)) {
    return null;
  }

  return createHash('sha256').update(fs.readFileSync(filePath)).digest('hex');
}

const liveBundleChecksumBefore = checksum(liveBundlePath);

await esbuild.build({
  entryPoints: [path.join(repoRoot, 'src', 'plugin.ts')],
  bundle: true,
  minify: true,
  format: 'esm',
  outfile: testBundlePath,
  target: ['es2017'],
  platform: 'browser',
  sourcemap: false,
});

const liveBundleChecksumAfter = checksum(liveBundlePath);

if (liveBundleChecksumBefore !== liveBundleChecksumAfter) {
  throw new Error('Test build changed dist/plugin.bundle.js; refusing to use a live artifact for preview testing.');
}

console.log('Test bundle written to test/plugin.bundle.js without changing dist/plugin.bundle.js.');
