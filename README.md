# @foobarhq/eslint-config

ESLint configuration for the MAD Kings javascript style guide.

see [rules/](https://github.com/foobarhq/eslint-config-foobarhq/tree/master/rules) for details on the code style.

## Usage

- Install using `npm i -D @foobarhq/eslint-config`
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
    "@foobarhq/eslint-config/flow"
  ]
}
```

The following presets files are available:

- `@foobarhq/eslint-config/flow`: [flow](http://flow.org) support.
- `@foobarhq/eslint-config/browser`: Enable browser environment.
