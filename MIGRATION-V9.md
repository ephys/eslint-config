# Migration Guide to ESLint 9

This package has been updated to support ESLint 9's flat config format. Here's how to migrate your projects.

## Breaking Changes

### 1. Configuration File Format

ESLint 9 uses a new flat config format. You need to:

- Replace `.eslintrc.js` (or `.eslintrc.json`, etc.) with `eslint.config.js`
- Use the new flat config array format instead of the old object format

### 2. Import Syntax

The configs now use **named exports** instead of default exports.

**Old (ESLint 8):**

```javascript
// .eslintrc.js
module.exports = {
  extends: ['@ephys/eslint-config'],
};
```

**New (ESLint 9):**

```javascript
// eslint.config.js
import { basePreset } from '@ephys/eslint-config';

export default basePreset;
```

### 3. Using TypeScript Config

**Old (ESLint 8):**

```javascript
// .eslintrc.js
module.exports = {
  extends: ['@ephys/eslint-config-typescript'],
};
```

**New (ESLint 9):**

```javascript
// eslint.config.js
import { basePreset } from '@ephys/eslint-config-typescript';

export default basePreset(import.meta.dirname + '/tsconfig.json');
```

### 4. Using Additional Configs (Browser, Node, React, Jest)

**Old (ESLint 8):**

```javascript
// .eslintrc.js
module.exports = {
  extends: [
    '@ephys/eslint-config',
    '@ephys/eslint-config/browser',
    '@ephys/eslint-config/react',
  ],
};
```

**New (ESLint 9):**

```javascript
// eslint.config.js
import { basePreset, browserAddon, reactAddon } from '@ephys/eslint-config';

export default [...basePreset, ...browserAddon, ...reactAddon];
```

### 5. TypeScript with React and Browser

**Old (ESLint 8):**

```javascript
// .eslintrc.js
module.exports = {
  extends: [
    '@ephys/eslint-config-typescript',
    '@ephys/eslint-config-typescript/browser',
    '@ephys/eslint-config-typescript/react',
  ],
};
```

**New (ESLint 9):**

```javascript
// eslint.config.js
import {
  basePreset,
  browserAddon,
  reactAddon,
} from '@ephys/eslint-config-typescript';

export default [
  ...basePreset(import.meta.dirname + '/tsconfig.json'),
  ...browserAddon,
  ...reactAddon,
];
```

### 6. Adding Custom Rules

**Old (ESLint 8):**

```javascript
// .eslintrc.js
module.exports = {
  extends: ['@ephys/eslint-config'],
  rules: {
    'no-console': 'off',
  },
};
```

**New (ESLint 9):**

```javascript
// eslint.config.js
import { basePreset } from '@ephys/eslint-config/lib/base-preset';

export default [
  ...basePreset,
  {
    rules: {
      'no-console': 'off',
    },
  },
];
```
