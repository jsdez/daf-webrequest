# Changelog

All notable changes to the DAF Web Request Plugin are documented here.

## Refactor milestone — August 3, 2026

This milestone decomposed the former monolithic plugin implementation into focused, tested modules without changing the Nintex-facing contract or the production bundle.

### Architecture

- Reduced `src/plugin.ts` from approximately 3,466 lines to an orchestration-focused component.
- Moved the 618-line Lit stylesheet to `src/styles/plugin.styles.ts`.
- Extracted the Nintex property contract and schema validation to `src/nintex/plugin-contract.ts`.
- Added architecture and verification guidance to `README.md`.

### Request, response, and authentication

- Extracted request body/header preparation.
- Extracted response classification and JSON path extraction.
- Extracted OAuth client-credentials transport with timeout handling and sanitised debug metadata.
- Extracted API response interpretation and strict Nintex output-value factories.

### Form behavior

- Extracted per-form coordination for submit interception, multiple-plugin support, and submit-button visibility.
- Extracted quick-submit delays, delayed-submit countdowns, cooldown scheduling, and timer cleanup.

### Formatter and Debug Mode

- Extracted formatter configuration building/parsing and configured-message resolution.
- Extracted field selection, ordering, available-field discovery, and preview logic.
- Extracted Debug Properties, Request Details, API Tools, JSON, formatter shell, and alert decision helpers.

### Verification

- Added a `tsx`-based automated test suite.
- Added coverage for request parsing, response interpretation, OAuth, formatter behavior, field selection, JSON editor utilities, alert decisions, Nintex value state, and the plugin contract.
- Final milestone validation: **34/34 tests passing**, TypeScript validation passing, and the isolated preview build confirmed that `dist/plugin.bundle.js` was unchanged.

### Selected commits

| Commit | Change |
| --- | --- |
| `86b0c34` | Extract submission scheduling |
| `17469a8` | Extract OAuth token service |
| `3cb3565` | Extract API response value factory |
| `859fd8c` | Extract API response interpretation |
| `476665d` | Extract component styles |
| `2acf241` | Extract Nintex plugin contract |
| `cba1664` | Document plugin architecture |

## Preview and release workflow

Use the fixed preview artifact for Nintex smoke tests:

```text
https://jsdez.github.io/daf-webrequest/test/plugin.bundle.js
```

Run before publishing a refactor or feature milestone:

```sh
npm test
npm run typecheck
npm run build:test
```

`npm run build:test` writes only `test/plugin.bundle.js` and verifies that the production artifact at `dist/plugin.bundle.js` has not changed.
