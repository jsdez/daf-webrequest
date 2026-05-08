const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['src/plugin.ts'],
  bundle: true,
  minify: true,
  format: 'esm',
  outfile: 'dist/plugin.bundle.js',
  target: ['es2017'],
  external: [],
  platform: 'browser',
  sourcemap: false,
}).catch(() => process.exit(1));
