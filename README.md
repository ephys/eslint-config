# @ephys/eslint-config

Custom-built ESLint configuration designed for use in ESM, CJS, TypeScript, Vanilla JS, React & Node.

This preset includes some stylistic rules, but it's mostly focused on catching bugs and enforcing best practices.
Any rule that conflicts with Prettier are not included.
This preset is designed to be used with Prettier and `prettier-plugin-organize-imports`.

## ESLint 9 Migration

**This package now supports ESLint 9's flat config format!**

If you're upgrading from ESLint 8, please see [MIGRATION-V9.md](MIGRATION-V9.md) for detailed migration instructions.

## Usage (ESLint 9)

- Install using `npm i -D @ephys/eslint-config` or `npm i -D @ephys/eslint-config-typescript`
- Create an `eslint.config.js` file:

  **For Vanilla JavaScript:**

  ```javascript
  import { basePreset } from '@ephys/eslint-config';

  export default basePreset;
  ```

  **For TypeScript:**

  ```javascript
  import { basePreset } from '@ephys/eslint-config-typescript';

  export default basePreset(import.meta.dirname + '/tsconfig.json');
  ```

## Presets

We have more than one preset available for our different environments.
You can enable these variants by importing the named exports from our configuration presets.

The following preset exports are available:

- `browserAddon`: Enable browser environment.
- `reactAddon`: Turn on react-specific rules.
- `nodeAddon`: Enable node environment.
- `jestAddon`: Enable jest-specific rules.
  Note that you only need to this preset to treat `.js` files as CJS. `.cjs` files will already be treated as CJS.

Note: All of these presets are also available from `@ephys/eslint-config-typescript`.

### Example: TypeScript + React + Browser

```javascript
import {
  basePreset,
  browserAddon,
  reactAddon,
  jestAddon,
} from '@ephys/eslint-config-typescript';

export default [
  ...basePreset(import.meta.dirname + '/tsconfig.json'),
  ...browserAddon,
  ...reactAddon,
  ...jestAddon,
];
```
