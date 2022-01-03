# @foobarhq/eslint-config

ESLint configuration for the MAD Kings javascript style guide.

see [rules/](https://github.com/foobarhq/eslint-config-foobarhq/tree/master/rules) for details on the code style.

## Usage

- Install using `npm i -D @foobarhq/eslint-config`, `npm i -D @foobarhq/eslint-config-flow`, or `npm i -D @foobarhq/eslint-config-typescript`
- Create a `.eslintrc` file containing the following:
    ```json
    {
      "extends": "@foobarhq/eslint-config"
    }
    ```

## Presets

We have more than one preset available for our different environments. You can enable these variants by inheriting from more of our configuration presets:

```json5
{
  "extends": [
    "@foobarhq/eslint-config",
    // add support for flowtype:
    "@foobarhq/eslint-config-flow",
    // add support for typescript:
    "@foobarhq/eslint-config-typescript"
  ]
}
```

The following presets files are available:

- `@foobarhq/eslint-config-flow`: [flow](https://flow.org) support.
- `@foobarhq/eslint-config-typescript`: [Typescript](https://www.typescriptlang.org/) support.
- `@foobarhq/eslint-config/browser`: Enable browser environment.
- `@foobarhq/eslint-config/node`: Enable node environment.
