import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');

const pluginTsPath = path.join(repoRoot, 'src', 'plugin.ts');

function bumpPatchVersion(version) {
  const match = version.match(/^(\d+)\.(\d+)\.(\d+)$/);
  if (!match) {
    throw new Error(`Unsupported version format: ${version}`);
  }

  const major = Number.parseInt(match[1], 10);
  const minor = Number.parseInt(match[2], 10);
  const patch = Number.parseInt(match[3], 10) + 1;

  return `${major}.${minor}.${patch}`;
}

function updatePluginVersionConstant(newVersion) {
  const pluginSource = fs.readFileSync(pluginTsPath, 'utf8');
  const updatedSource = pluginSource.replace(
    /const PLUGIN_VERSION = '\d+\.\d+\.\d+';/,
    `const PLUGIN_VERSION = '${newVersion}';`
  );

  if (updatedSource === pluginSource) {
    throw new Error('Could not find PLUGIN_VERSION constant in src/plugin.ts');
  }

  fs.writeFileSync(pluginTsPath, updatedSource, 'utf8');
}

function main() {
  const pluginSource = fs.readFileSync(pluginTsPath, 'utf8');
  const match = pluginSource.match(/const PLUGIN_VERSION = '(\d+\.\d+\.\d+)';/);

  if (!match) {
    throw new Error('Could not find PLUGIN_VERSION constant in src/plugin.ts');
  }

  const oldVersion = match[1];
  const newVersion = bumpPatchVersion(oldVersion);

  updatePluginVersionConstant(newVersion);

  console.log(`[Plugin Version Bump] ${oldVersion} -> ${newVersion}`);
}

main();
