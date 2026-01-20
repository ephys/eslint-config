import { basePreset as vanillaBasePreset } from '@ephys/eslint-config';
import type { Linter } from 'eslint';
import tseslint from 'typescript-eslint';

export {
  browserAddon,
  jestAddon,
  nodeAddon,
  reactAddon,
} from '@ephys/eslint-config';

export function basePreset(tsconfigRootDir: string): readonly Linter.Config[] {
  return [
    ...vanillaBasePreset,
    {
      files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts', '**/*.d.ts'],
      languageOptions: {
        parser: tseslint.parser,
        parserOptions: {
          projectService: true,
          tsconfigRootDir,
        },
      },
      plugins: {
        '@typescript-eslint': tseslint.plugin,
      },
      rules: {
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],

        '@typescript-eslint/ban-ts-comment': [
          'error',
          {
            // handled by prefer-ts-expect-error
            'ts-ignore': false,
            'ts-expect-error': {
              descriptionFormat: '^ -- .+$',
            },
          },
        ],

        '@typescript-eslint/consistent-generic-constructors': [
          'error',
          'constructor',
        ],

        '@typescript-eslint/consistent-type-assertions': 'error',

        '@typescript-eslint/consistent-type-exports': [
          'error',
          { fixMixedExportsWithInlineTypeSpecifier: true },
        ],
        '@typescript-eslint/consistent-type-imports': [
          'error',
          { prefer: 'type-imports' },
        ],

        '@typescript-eslint/default-param-last': 'error',
        '@typescript-eslint/dot-notation': 'error',
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          {
            accessibility: 'no-public',
          },
        ],

        '@typescript-eslint/member-ordering': [
          'error',
          {
            /** class declarations & class expressions */
            default: {
              memberTypes: [
                // Index signature
                'signature',
                'call-signature',

                ['static-field', 'static-get', 'static-set'],
                'static-initialization',

                ['instance-field', 'instance-get', 'instance-set'],

                'constructor',

                // Methods
                'static-method',
                'instance-method',
              ],
            },
            interfaces: {
              memberTypes: 'never',
              order: 'natural-case-insensitive',
            },
            typeLiterals: {
              memberTypes: 'never',
              order: 'natural-case-insensitive',
            },
          },
        ],

        '@typescript-eslint/method-signature-style': ['error', 'method'],

        '@typescript-eslint/naming-convention': [
          'error',
          {
            format: ['StrictPascalCase'],
            selector: ['class', 'enum', 'interface', 'typeAlias'],
          },
        ],

        '@typescript-eslint/no-array-constructor': 'error',

        '@typescript-eslint/no-confusing-non-null-assertion': 'error',

        '@typescript-eslint/no-dupe-class-members': 'error',

        '@typescript-eslint/no-floating-promises': [
          'error',
          {
            ignoreIIFE: true,
            allowForKnownSafeCalls: [
              {
                from: 'package',
                name: ['describe', 'it', 'test'],
                package: 'node:test',
              },
            ],
          },
        ],

        '@typescript-eslint/no-implied-eval': 'error',

        '@typescript-eslint/no-invalid-this': [
          'error',
          {
            capIsConstructor: false,
          },
        ],

        '@typescript-eslint/no-loop-func': 'error',

        '@typescript-eslint/no-loss-of-precision': 'error',
        '@typescript-eslint/no-misused-new': 'error',

        '@typescript-eslint/no-misused-promises': [
          'error',
          {
            checksVoidReturn: false,
          },
        ],
        '@typescript-eslint/no-redeclare': [
          'error',
          {
            ignoreDeclarationMerge: true,
          },
        ],

        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-restricted-types': [
          'error',
          {
            types: {
              NonNullable: {
                message: `NonNullable isn't explicit about the fact that is excludes undefined too. Use NonNullish instead.`,
                fixWith: 'NonNullish',
              },
              Maybe: {
                message: `Use 'x | null' instead.`,
              },
            },
          },
        ],
        '@typescript-eslint/no-shadow': [
          'error',
          {
            allow: ['i', 'j', 'k', 'l'],
          },
        ],

        '@typescript-eslint/no-unnecessary-condition': [
          'error',
          { allowConstantLoopConditions: true },
        ],

        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-unnecessary-type-constraint': 'error',
        '@typescript-eslint/no-unused-expressions': [
          'error',
          {
            allowShortCircuit: true,
            allowTernary: true,
          },
        ],
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            varsIgnorePattern: '^ignore',
            argsIgnorePattern: '^ignore|^_',
          },
        ],
        '@typescript-eslint/no-useless-constructor': 'error',

        '@typescript-eslint/no-useless-empty-export': 'error',
        '@typescript-eslint/non-nullable-type-assertion-style': 'error',
        /** errors should always be an instanceof Error */
        '@typescript-eslint/only-throw-error': [
          'error',
          {
            allowRethrowing: true,
            allowThrowingUnknown: true,
          },
        ],
        '@typescript-eslint/prefer-as-const': 'error',
        '@typescript-eslint/prefer-enum-initializers': 'error',
        '@typescript-eslint/prefer-includes': 'error',
        '@typescript-eslint/prefer-literal-enum-member': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/prefer-readonly': 'error',
        '@typescript-eslint/prefer-reduce-type-parameter': 'error',
        '@typescript-eslint/prefer-return-this-type': 'error',
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        '@typescript-eslint/prefer-ts-expect-error': 'error',

        '@typescript-eslint/promise-function-async': 'error',
        '@typescript-eslint/require-array-sort-compare': [
          'error',
          {
            ignoreStringArrays: true,
          },
        ],
        '@typescript-eslint/restrict-plus-operands': 'error',
        '@typescript-eslint/return-await': ['error', 'in-try-catch'],

        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        '@typescript-eslint/unbound-method': 'error',
        'consistent-return': 'off',
        'default-case': 'off',
        'import/named': 'off',
      },
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx', '.cts', '.mts', '.d.ts'],
          '@babel/eslint-parser': ['.js', '.jsx', '.mjs'],
        },
        'import/resolver': {
          // eslint-disable-next-line no-restricted-syntax -- lib is not available
          'eslint-import-resolver-typescript': {},
        },
      },
    },
    {
      files: ['**/*.cts'],
      rules: {
        '@typescript-eslint/no-require-imports': 'off',
      },
    },
  ];
}
