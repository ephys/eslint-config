'use strict';

module.exports = {
  extends: '@foobarhq/eslint-config',
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    // TODO
    // '@typescript-eslint/tslint',
  ],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', {
      'varsIgnorePattern': '^ignore',
      'argsIgnorePattern': '^ignore|^_',
    }],

    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',

    // method signature overloading conflicts. Replaced by TSC in this case
    'no-dupe-class-members': 'off',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
      'babel-eslint': ['.js', '.jsx', '.mjs'],
    },
  },
};
