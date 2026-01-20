import lodash from 'eslint-plugin-lodash';
import globals from 'globals';
import { jsonConfigs } from './json.js';
import { modulesConfig } from './modules.js';
import { regexConfig } from './regex.js';
import { switchCaseConfig } from './switch-case.js';
import { unicornConfig } from './unicorn.js';
import { vanillaConfig } from './vanilla.js';

export const basePreset = [
  {
    // default ignores for all consumers
    ignores: ['**/node_modules/**', '**/.yarn/**', '**/.pnp.*'],
  },
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parserOptions: {
        requireConfigFile: false,
      },
      globals: {
        ...globals.node,
        ...globals.es2021,
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
  },
  ...modulesConfig,
  ...vanillaConfig,
  switchCaseConfig,
  regexConfig,
  {
    rules: {
      'no-alert': 2,
      'no-script-url': 2,
    },
  },
  ...jsonConfigs,
  ...unicornConfig,
  {
    plugins: {
      lodash,
    },
    rules: {
      // these two are handled by no-invalid-this + this is too slow
      // 'lodash/callback-binding': 2,
      // 'lodash/no-unbound-this': 2,
      'lodash/import-scope': [2, 'method'],
      'unicorn/prefer-top-level-await': 'error',
      'unicorn/prefer-module': 'error',
      'import/no-commonjs': 'error',
    },
  },
  {
    files: ['**/*.cjs', '**/*.cts'],
    rules: {
      'unicorn/prefer-top-level-await': 'off',
      'unicorn/prefer-module': 'off',
      'import/no-commonjs': 'off',
    },
  },
];
