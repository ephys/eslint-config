import jestPlugin from 'eslint-plugin-jest';
import globals from 'globals';

export const jestAddon = [
  {
    files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    plugins: {
      jest: jestPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    rules: {
      ...jestPlugin.configs.recommended.rules,
      ...jestPlugin.configs.style.rules,
      'jest/prefer-todo': 'error',
    },
  },
];
