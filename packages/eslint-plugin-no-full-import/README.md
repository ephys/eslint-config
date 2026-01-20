# @ephys/eslint-plugin-no-full-import

ESLint plugin that discourages importing an entire package when you only need specific members.

## Installation

```sh
npm i -D @ephys/eslint-plugin-no-full-import
```

## Usage

```js
import noFullImport from '@ephys/eslint-plugin-no-full-import';

export default [
  {
    plugins: {
      '@ephys/no-full-import': noFullImport,
    },
    rules: {
      '@ephys/no-full-import/no-full-import': [
        'error',
        {
          packages: {
            lodash: '/',
            'date-fns': '/',
          },
        },
      ],
    },
  },
];
```

## Rule: `no-full-import`

This rule detects patterns like:

```js
import { map } from 'lodash';
```

…and autofixes them to:

```js
import map from 'lodash/map';
```

### Options

- `packages`: object map of package name to path prefix (currently unused; kept for compatibility with the original rule).

Example:

```js
{
  packages: {
    lodash: '/',
    rambda: '/src/',
  }
}
```
