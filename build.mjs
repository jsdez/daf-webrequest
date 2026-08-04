import esbuild from 'esbuild';

esbuild.build({
  entryPoints: ['src/plugin.ts'],
  bundle: true,
  minify: true,
  format: 'esm',
  outfile: 'dist/plugin.bundle.js',
  target: ['es2017'],
  platform: 'browser',
  sourcemap: false,
  define: {
    // Keep the live component and Nintex control identities stable for existing forms.
    __DAF_WEBREQUEST_PLUGIN_TAG__: JSON.stringify('daf-webrequest-plugin'),
    __DAF_WEBREQUEST_CONTROL_NAME__: JSON.stringify('Web Request Plugin'),
  },
}).catch((err) => { console.error(err); process.exit(1); });
