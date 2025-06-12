# Nintex Form Plugin Example

This project demonstrates how to build a Nintex Form Plugin using TypeScript and the `@nintex/form-plugin-contract` package.

## Development

- Source code: `src/plugin.ts`
- Build output: `dist/`

## Build

```sh
npm run build
```

## Publish to npm

1. Update `package.json` fields (name, version, etc).
2. Run:
   ```sh
   npm publish --access public
   ```

## CDN Hosting (jsDelivr)

Once published to npm, your plugin can be loaded via jsDelivr:

```
https://cdn.jsdelivr.net/npm/<your-package-name>@<version>/dist/plugin.js
```

Replace `<your-package-name>` and `<version>` accordingly.

## References
- [Nintex Form Plugin Docs](https://help.nintex.com/en-US/formplugins/Reference/Create.htm)
