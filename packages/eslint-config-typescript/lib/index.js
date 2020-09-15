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

    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error', {
      allow: ['i', 'j', 'k', 'l'],
    }],

    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': ['error', {
      ignoreDeclarationMerge: true,
    }],

    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': 'error',

    // method signature overloading conflicts. Replaced by TSC in this case
    'no-dupe-class-members': 'off',

    // FIXME: https://github.com/typescript-eslint/typescript-eslint/issues/2538
    // if an import is only used as a type, require tagging it with `type` in the import so it can be removed
    // '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],

    /*
    TODO:
     https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin

     https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md
     https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-assertions.md
     https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md
     https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/method-signature-style.md
     https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-confusing-non-null-assertion.md
     https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-non-null-assertion.md
     https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-for-in-array.md
     https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-void-type.md
     https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-new.md
     https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-promises.md
     https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-asserted-optional-chain.md
     https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-arguments.md
     https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.md
     https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-as-const.md
     https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-includes.md
     https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md
     https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-ts-expect-error.md
     https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/promise-function-async.md
     https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/type-annotation-spacing.md

     https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly-parameter-types.md ?
     */
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
      'babel-eslint': ['.js', '.jsx', '.mjs'],
    },
  },
};
