# @ephys/eslint-config

Custom-built ESLint configuration designed for use in ESM, CJS, TypeScript, Vanilla JS, React & Node.

This preset includes some stylistic rules, but it's mostly focused on catching bugs and enforcing best practices.
Any rule that conflicts with Prettier are not included.
This preset is designed to be used with Prettier and `prettier-plugin-organize-imports`.

## Usage

- Install using `npm i -D @ephys/eslint-config` or `npm i -D @ephys/eslint-config-typescript`
- Create a `.eslintrc` file containing the following:
  ```json5
  {
    "extends": [
      // add this if you're using Vanilla JS.
      "@ephys/eslint-config",
      // or this if you're using TypeScript.
      // This one also supports vanilla JS files!
      "@ephys/eslint-config-typescript"
    ]
  }
  ```

## Presets

We have more than one preset available for our different environments. 
You can enable these variants by inheriting from more of our configuration presets.

The following presets files are available:

- `@ephys/eslint-config/browser`: Enable browser environment.
- `@ephys/eslint-config/react`: Turn on react-specific rules.
- `@ephys/eslint-config/node`: Enable node environment.
- `@ephys/eslint-config/jest`: Enable jest-specific rules.
- `@ephys/eslint-config/commonjs`: We assume ESM. Use this preset to require commonjs instead. 
  Note that you only need to this preset to treat `.js` files as CJS. `.cjs` files will already be treated as CJS.

Note: All of these presets are also available from `@ephys/eslint-config-typescript/<preset>`.
