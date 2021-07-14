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
    // this is handled by Typescript itself
    'no-undef': 'off',

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

    semi: 'off',
    '@typescript-eslint/semi': ['error'],

    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': ['error'],

    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': ['error'],

    'space-infix-ops': 'off',
    '@typescript-eslint/space-infix-ops': ['error', { int32Hint: true }],

    'no-return-await': 'off',
    // consider setting to "always"?
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/return-await.md
    '@typescript-eslint/return-await': ['error', 'in-try-catch'],

    'quotes': 'off',
    '@typescript-eslint/quotes': ['error', 'single'],

    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],

    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': ['error', {
      allowShortCircuit: true,
      allowTernary: true,
    }],

    'no-throw-literal': 'off',
    '@typescript-eslint/no-throw-literal': ['error'],

    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-loss-of-precision': ['error'],

    'no-invalid-this': 'off',
    '@babel/no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this': ['error', {
      capIsConstructor: false,
    }],

    'no-implied-eval': 'off',
    '@typescript-eslint/no-implied-eval': ['error'],

    'no-duplicate-imports': 'off',
    '@typescript-eslint/no-duplicate-imports': ['error'],

    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': ['error'],

    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': ['error'],

    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': ['error', 'always', {
      exceptAfterOverload: true,
    }],

    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': ['error', 'never'],

    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': ['error', {
      after: true,
      before: false,
    }],

    'brace-style': 'off',
    '@typescript-eslint/brace-style': ['error', '1tbs'],

    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
      enums: 'always-multiline',
      generics: 'always-multiline',
      tuples: 'always-multiline',
    }],

    // indent not used yet because https://github.com/typescript-eslint/typescript-eslint/issues/1824
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md

    // ===============================================================

    // '@typescript-eslint/restrict-template-expressions': ['error', {
    //   allowNumber: true,
    // }],

    // already handled by no-restricted-syntax
    // '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
    '@typescript-eslint/method-signature-style': ['error', 'method'],
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    '@typescript-eslint/no-invalid-void-type': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-floating-promises': ['error', {
      ignoreIIFE: true,
    }],
    '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',
    '@typescript-eslint/no-unsafe-return': 'error',
    '@typescript-eslint/non-nullable-type-assertion-style': 'error',
    '@typescript-eslint/prefer-enum-initializers': 'error',
    '@typescript-eslint/prefer-includes': 1,
    '@typescript-eslint/prefer-literal-enum-member': 'error',
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/restrict-plus-operands': ['error', {
      checkCompoundAssignments: true,
    }],
    '@typescript-eslint/require-array-sort-compare': ['error', {
      ignoreStringArrays: true,
    }],
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/type-annotation-spacing': ['error', {
      before: false,
      after: true,
    }],
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'comma',
          requireLast: true,
        },
        singleline: {
          delimiter: 'comma',
          requireLast: false,
        },
        overrides: {
          interface: {
            multiline: {
              delimiter: 'semi',
              requireLast: true,
            },
            singleline: {
              delimiter: 'semi',
              requireLast: true,
            },
          },
        },
      },
    ],

    // Test before installing:
    // - https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md
    // - https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-confusing-void-expression.md
    // - https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md
    // - https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-assignment.md
    // - https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-call.md
    // - https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-member-access.md
    // - https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md
    // - https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly-parameter-types.md

    // if an import is only used as a type, require tagging it with `type` in the import so it can be removed
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
      'babel-eslint': ['.js', '.jsx', '.mjs'],
    },
  },
};
