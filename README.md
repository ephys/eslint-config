# @ephys/eslint-config

Custom-built ESLint configuration designed for use in ESM, CJS, TypeScript, Vanilla JS, React & Node.

## Usage

- Install using `npm i -D @ephys/eslint-config` or `npm i -D @ephys/eslint-config-typescript`
- Create a `.eslintrc` file containing the following:
    ```json
    {
      "extends": "@ephys/eslint-config"
    }
    ```

## Presets

We have more than one preset available for our different environments. You can enable these variants by inheriting from more of our configuration presets:

```json5
{
  "extends": [
    // add this if you're using Vanilla JS.
    "@ephys/eslint-config",
    // or this if you're using TypeScript and Vanilla JS.
    "@ephys/eslint-config-typescript"
  ]
}
```

The following presets files are available:

- `@ephys/eslint-config-typescript`: [Typescript](https://www.typescriptlang.org/) support.
- `@ephys/eslint-config/browser`: Enable browser environment.
- `@ephys/eslint-config/react`: Turn on react-specific rules.
- `@ephys/eslint-config/node`: Enable node environment.
