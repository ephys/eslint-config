'use strict';

// https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules

module.exports = {
  extends: ['@ephys/eslint-config'],
  overrides: [{
    files: ['*.ts', '*.tsx', '*.mts', '*.cts', '*.d.ts'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {
      // handled by TypeScript
      'import/named': 'off',
      'consistent-return': 'off',

      '@typescript-eslint/no-unused-vars': ['error', {
        varsIgnorePattern: '^ignore',
        argsIgnorePattern: '^ignore|^_',
      }],

      // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/space-before-blocks.md
      '@typescript-eslint/space-before-blocks': ['error', 'always'],

      '@typescript-eslint/no-useless-constructor': 'error',

      '@typescript-eslint/default-param-last': 'error',

      '@typescript-eslint/space-before-function-paren': ['error', {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      }],

      '@typescript-eslint/no-shadow': ['error', {
        allow: ['i', 'j', 'k', 'l'],
      }],

      '@typescript-eslint/no-redeclare': ['error', {
        ignoreDeclarationMerge: true,
      }],

      '@typescript-eslint/no-loop-func': 'error',
      '@typescript-eslint/semi': ['error', 'always'],

      '@typescript-eslint/no-extra-semi': 'error',
      '@typescript-eslint/dot-notation': 'error',

      '@typescript-eslint/space-infix-ops': ['error', { int32Hint: true }],

      '@typescript-eslint/return-await': ['error', 'in-try-catch'],

      '@typescript-eslint/quotes': ['error', 'single', { allowTemplateLiterals: true }],

      '@typescript-eslint/object-curly-spacing': ['error', 'always'],

      '@typescript-eslint/no-unused-expressions': ['error', {
        allowShortCircuit: true,
        allowTernary: true,
      }],

      '@typescript-eslint/no-throw-literal': 'error',

      '@typescript-eslint/no-loss-of-precision': 'error',

      '@typescript-eslint/no-invalid-this': ['error', {
        capIsConstructor: false,
      }],

      '@typescript-eslint/no-implied-eval': 'error',

      '@typescript-eslint/no-dupe-class-members': 'error',

      '@typescript-eslint/no-array-constructor': 'error',

      '@typescript-eslint/lines-between-class-members': ['error', 'always', {
        exceptAfterOverload: true,
        exceptAfterSingleLine: true,
      }],

      '@typescript-eslint/func-call-spacing': ['error', 'never'],

      '@typescript-eslint/comma-spacing': ['error', {
        after: true,
        before: false,
      }],

      '@typescript-eslint/brace-style': ['error', '1tbs'],

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

      '@typescript-eslint/keyword-spacing': ['error', {
        before: true,
        after: true,
      }],

      'key-spacing': 'off',
      '@typescript-eslint/key-spacing': ['error', {
        beforeColon: false,
        afterColon: true,
        mode: 'strict',
      }],

      'block-spacing': 'off',
      '@typescript-eslint/block-spacing': ['error', 'always'],

      // indent not used yet because https://github.com/typescript-eslint/typescript-eslint/issues/1824
      // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md

      // ===============================================================

      // '@typescript-eslint/restrict-template-expressions': ['error', {
      //   allowNumber: true,
      // }],

      // already handled by no-restricted-syntax
      // '@typescript-eslint/no-for-in-array': 'error',
      '@typescript-eslint/consistent-type-assertions': 'error',
      // '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
      '@typescript-eslint/method-signature-style': ['error', 'method'],
      '@typescript-eslint/no-confusing-non-null-assertion': 'error',
      '@typescript-eslint/no-invalid-void-type': 'error',
      '@typescript-eslint/no-misused-new': 'error',
      '@typescript-eslint/no-floating-promises': ['error', {
        ignoreIIFE: true,
      }],
      '@typescript-eslint/no-misused-promises': ['error', {
        checksVoidReturn: false,
      }],
      '@typescript-eslint/no-require-imports': 'error',

      // disable for now because it doesn't handle ?. operator properly (eg. user?.isRegistered === false)
      // '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      '@typescript-eslint/no-unnecessary-type-constraint': 'error',
      // '@typescript-eslint/no-unsafe-return': 'error',
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
      '@typescript-eslint/type-annotation-spacing': 'error',
      '@typescript-eslint/prefer-ts-expect-error': 'error',
      '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
      '@typescript-eslint/adjacent-overload-signatures': 'error',

      'default-case': 'off',
      '@typescript-eslint/switch-exhaustiveness-check': 'error',

      '@typescript-eslint/ban-ts-comment': ['error', {
        // handled by prefer-ts-expect-error
        'ts-ignore': false,
        'ts-expect-error': {
          descriptionFormat: '^ -- .+$',
        },
      }],
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
      // - https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly-parameter-types.md

      // if an import is only used as a type, require tagging it with `type` in the import so it can be removed
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
      '@typescript-eslint/consistent-type-exports': ['error', { fixMixedExportsWithInlineTypeSpecifier: true }],
      '@typescript-eslint/no-useless-empty-export': 'error',

      '@typescript-eslint/prefer-return-this-type': 'error',

      '@typescript-eslint/explicit-member-accessibility': ['error', {
        accessibility: 'no-public',
      }],

      // TODO: padding-line-between-statements
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx', '.cts', '.mts', '.d.ts'],
        '@babel/eslint-parser': ['.js', '.jsx', '.mjs'],
      },
      'import/resolver': {
        'eslint-import-resolver-typescript': {},
      },
    },
    parserOptions: {
      project: ['./tsconfig.json'],
      requireConfigFile: false,
    },
  }, {
    files: ['*.cts'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  }],
  parserOptions: {
    requireConfigFile: false,
  },
};
