const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['src/plugin.ts'],
  bundle: true,
  minify: true,
  format: 'esm',
  outfile: 'plugin.bundle.js',
  target: ['es2017'],
  external: [],
  platform: 'browser',
  sourcemap: false,
}).catch(() => process.exit(1));
