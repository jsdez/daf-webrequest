import esbuild from 'esbuild';

esbuild.build({
  entryPoints: ['src/plugin.ts'],
  bundle: true,
  minify: true,
  format: 'esm',
  outfile: 'plugin.bundle.js',
  target: ['es2017'],
  platform: 'browser',
  sourcemap: false,
}).catch((err) => { console.error(err); process.exit(1); });
