import globals from 'globals';
import { modulesConfig } from './modules.js';
import { vanillaConfig } from './vanilla.js';
import { switchCaseConfig } from './switch-case.js';
import { regexConfig } from './regex.js';
import { lodashConfig } from './lodash.js';
import { jsonConfigs } from './json.js';
import { unicornConfig } from './unicorn.js';

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
  modulesConfig,
  vanillaConfig,
  switchCaseConfig,
  regexConfig,
  lodashConfig,
  {
    rules: {
      'no-alert': 2,
      'no-script-url': 2,
    },
  },
  ...jsonConfigs,
  unicornConfig,
  {
    rules: {
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
