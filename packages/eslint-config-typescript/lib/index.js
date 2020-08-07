'use strict';

// https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules

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

    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': ['error'],

    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],

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
