import sortDestructureKeys from 'eslint-plugin-sort-destructure-keys';

export const vanillaConfig = {
  plugins: {
    'sort-destructure-keys': sortDestructureKeys,
  },
  rules: {
    'array-callback-return': ['error', { allowImplicit: true }],
    'arrow-body-style': [0, 'as-needed', { requireReturnForObjectLiteral: false }],

    'consistent-return': ['error', { treatUndefinedAsUnspecified: true }],
    'consistent-this': ['error', 'that'],
    'constructor-super': 'error',
    curly: 'error',

    eqeqeq: ['error', 'always', { null: 'ignore' }],

    'func-names': ['error', 'always'],
    'getter-return': 'error',

    'grouped-accessor-pairs': ['error', 'anyOrder'],

    'logical-assignment-operators': ['error', 'always'],
    'max-depth': ['error', 4],

    'new-parens': 'error',
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',

    'no-caller': 'error',
    'no-class-assign': 'error',

    'no-compare-neg-zero': 'error',

    'no-cond-assign': ['error', 'except-parens'],
    'no-confusing-arrow': 'error',

    'no-console': ['error', {
      allow: ['debug', 'info', 'warn', 'error'],
    }],

    'no-const-assign': 'error',

    'no-constant-condition': 'error',
    'no-constructor-return': 'error',

    'no-debugger': 'error',
    'no-delete-var': 'error',
    'no-dupe-args': 'error',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-else-return': 'error',

    'no-empty': 'error',

    'no-empty-pattern': 'error',
    'no-empty-static-block': 'error',
    'no-eval': 'error',

    'no-ex-assign': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'error',
    'no-floating-decimal': 'error',
    'no-func-assign': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': ['error', {
      boolean: true,
      number: true,
      string: true,
    }],
    'no-implicit-globals': 'error',
    'no-inner-declarations': 'error',
    'no-irregular-whitespace': 'error',

    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-multi-assign': 'error',
    'no-multi-str': 'error',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-symbol': 'error',
    'no-new-wrappers': 'error',
    'no-obj-calls': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-promise-executor-return': 'error',
    'no-proto': 'error',
    'no-prototype-builtins': 'error',
    'no-restricted-globals': ['error',
      // commonly named local variable
      ...commonlyNamedGlobals(['name', 'location', 'history', 'blur', 'caches', 'close', 'closed',
        'content', 'devicePixelRatio', 'focus', 'find', 'external', 'frames', 'fullScreen', 'innerHeight', 'innerWidth',
        'length', 'isSecureContext', 'opener', 'origin', 'outerHeight', 'outerWidth', 'parent', 'print',
        'resizeBy', 'resizeTo', 'screen', 'screenLeft', 'screenTop', 'screenX', 'screenY', 'scroll',
        'scrollBy', 'scrollByLines', 'scrollByPages', 'scrollMaxX', 'scrollMaxY', 'scrollX', 'scrollY',
        'scrollbars', 'sidebar', 'sizeToContent', 'speechSynthesis', 'status', 'statusbar', 'stop', 'toolbar', 'top', 'u2f',
        'updateCommands', 'visualViewport', 'event']),
      {
        name: 'parseInt',
        message: 'Use parseSafeInteger from @sequelize/utils',
      },
      {
        name: 'parseFloat',
        message: 'Use parseNumber from @sequelize/utils',
      },
      {
        name: 'isNaN',
        message: 'Use Number.isNaN',
      },
      {
        name: 'isFinite',
        message: 'Use Number.isFinite',
      },
    ],
    'no-restricted-imports': ['error', {
      paths: ['decko'],
      patterns: [
        {
          group: ['lodash.*'],
          message: 'use lodash/* instead',
        },
        {
          /**
           * We're adding * at the end to match both:
           * - lodash/isUndefined
           * - lodash/isUndefined.js
           */
          group: ['lodash/isUndefined*'],
          message: `Use '=== undefined' instead (preferred), or use isUndefined from @sequelize/utils`,
        },
        {
          group: ['lodash/isNull*'],
          message: `Use '=== null' instead (preferred), or use isNull from @sequelize/utils`,
        },
        {
          group: [
            'lodash/isArray*',
            'lodash/isFinite*',
            'lodash/isNaN*',
            'lodash/isSafeInteger*',
            'lodash/isInteger*',
          ],
          message: 'Use the native method instead',
        },
        {
          group: [
            'lodash/parseInt*',
            'lodash/parseFloat*',
            'lodash/toInteger*',
            'lodash/toSafeInteger*',
            'lodash/toNumber*',
          ],
          message:
            'This number parsing method is unreliable, use parseNumber, parseSafeInteger, or parseBigInt functions from @sequelize/utils instead',
        },
        {
          group: [
            'lodash/isBoolean*',
            'lodash/isDate*',
            'lodash/isError*',
            'lodash/isFunction*',
            'lodash/isNumber*',
            'lodash/isPlainObject*',
            'lodash/isString*',
            'lodash/isSymbol*',
          ],
          message: `Use one of the isType methods from the @sequelize/utils package instead`,
        },
        {
          group: ['lodash/isNil*'],
          message: `Use isNullish from the @sequelize/utils package instead`,
        },
        {
          group: ['lodash/isObject*'],
          message: `Use isAnyObject from the @sequelize/utils package instead`,
        },
        {
          group: ['lodash/omit', 'lodash/omit.js'],
          message: 'Use omit from the @sequelize/utils package instead.',
        },
        {
          group: ['lodash/omitBy*'],
          message: 'Use omitByValue from the @sequelize/utils package instead if possible.',
        },
        {
          group: ['lodash/pick', 'lodash/pick.js'],
          message: 'Use pick from the @sequelize/utils package instead.',
        },
        {
          group: ['node:assert', 'node:assert/*'],
          message: 'Please use assert from @sequelize/utils, as it works in all envs',
        },
      ],
    }],
    'no-restricted-syntax': ['error',
      'ForInStatement',
      'WithStatement',
      'EmptyStatement',

      {
        selector:
          'CallExpression[callee.object.name=document] > Identifier.property[name=/^getElementsBy/]',
        message:
          'Prefer document.querySelectorAll instead of document.getElementsByX, as the latter returns a live list (getElementById is allowed).',
      },
      {
        selector: `UnaryExpression[operator='typeof']`,
        message: `Do not use 'typeof'. Use one of the isType helpers (isString, isPlainObject, etc…) from @sequelize/utils instead.
Trying to check whether a global exists? Use 'globalThis.<globalName>'`,
      },
      /** Forbid TypeScript's private in favor of EcmaScript's private */
      /** This rule is disabled because some places do not support native private due to being used in proxies */
      {
        /**
         * PropertyDefinition: Class properties
         * MethodDefinition: Class method
         * TSParameterProperty: TypeScript's Parameter Property (constructor variables that automatically create properties)
         */
        selector:
          ':matches(PropertyDefinition, MethodDefinition:not(:has(.key[name="constructor"])),TSParameterProperty)[accessibility="private"]',
        message:
          'Use native private class features instead: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields',
      },

      /**
       * 'void 0' is forbidden. Use 'undefined' instead.
       * 'void' can still be used to discard the output of a function.
       */
      {
        selector: `UnaryExpression[operator='void'][argument.type != 'CallExpression']`,
        message:
          'The "void x" operator is banned, unless it is used to discard the result of a function call. Use "undefined" instead.',
      },

      {
        selector: `CallExpression[callee.name='Number']`,
        message:
          'Number() is an unreliable way to parse numbers, use parseNumber, parseSafeInteger, or parseBigInt from @sequelize/utils instead.',
      },
      {
        selector: `CallExpression[callee.object.name='Number'][callee.property.name='parseInt']`,
        message:
          'Number.parseInt() is an unreliable way to parse numbers, use parseSafeInteger from @sequelize/utils instead.',
      },
      {
        selector: `CallExpression[callee.object.name='Number'][callee.property.name='parseFloat']`,
        message:
          'Number.parseFloat() is an unreliable way to parse numbers, use parseNumber from @sequelize/utils instead.',
      },

      {
        selector: `CallExpression[callee.name='BigInt']`,
        message:
          'BigInt() is an unreliable way to parse numbers, use parseBigInt from @sequelize/utils instead.',
      },

      {
        selector: `UnaryExpression[operator="!"] > CallExpression[callee.name=/isNot[A-Z].*/]`,
        message: 'Avoid double negations: !isNotXxx() is not allowed, use isXxx() instead',
      },

      {
        selector: `CallExpression[callee.object.name='Object'][callee.property.name='create'] > Literal[raw='null']`,
        message: 'Prefer pojo() to Object.create(null).',
      },
      {
        selector: 'ObjectExpression:not(:has(Property)):not(:has(SpreadElement))',
        message: `Objects created by the object literal ({}) inherit from Object.prototype, which includes harmful properties like __proto__ and are unsuitable as maps.
Here are your alternatives:
- pojo(): Creates an empty POJO without prototype. (@sequelize/utils)
- pojo({ /* properties */ }): Removes the prototype of the input. (@sequelize/utils)
- EMPTY_OBJECT: Is a constant, immutable, empty POJO without prototype. (@sequelize/utils)
- frozenDictionary({ /* properties */ }): Same as above, but shallow freezes. (@sequelize/utils)
- new Map(): A safe alternative to POJOs, but with worse ergonomics.`,
      },
      {
        selector: `CallExpression[callee.object.name='Date'][callee.property.name='parse']`,
        message: `Parsing a Date using "Date.parse()" is unreliable.
Here are your alternatives:
- If you need to parse a DateTimeOffset string or number as a timestamp, use parseIsoTimestamp.
- If you need to parse a DateTimeLocal string as a timestamp, use parseIsoTimestampLocal.`,
      },
      {
        selector: `NewExpression[callee.name='Date'][arguments.length>0]`,
        message: `Parsing a Date using "new Date()" is unreliable.
Here are your alternatives:
- If you need to clone a Date object, use cloneDate
- If you need to parse a DateTimeOffset string or number as a Date, use parseIsoDateTime.
- If you need to parse a DateTimeLocal string as a Date, use parseIsoDateTimeLocal.
- If you need to parse a DateOnly string as a Date, use parseIsoDateOnly.
Note that "new Date()" without arguments is still allowed to get the current DateTimeOffset.`,
      },
      {
        selector:
          'CallExpression[callee.property.name=/^toLocale/][arguments.length=0] > .callee > .property',
        message: 'Always specify the locale to use when using toLocaleX methods.',
      },
      {
        selector:
          'AwaitExpression > CallExpression > MemberExpression.callee > Identifier.property:matches([name="finally"], [name="then"], [name="catch"])',
        message:
          'Do not use .then, .catch, or .finally on something that is already awaited. Prefer using try..catch..finally blocks instead. We use .catch as a way to tell eslint that the promise does not need to be awaited.',
      },
      {
        selector:
          'CallExpression[callee.property.name="catch"] > ArrowFunctionExpression.arguments > Identifier:not(:has(TSUnknownKeyword))',
        message: '.catch is incorrectly typed as any. Type it explicitly as unknown instead.',
      },
    ],
    'no-return-assign': ['error', 'except-parens'],
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-setter-return': 'error',
    'no-sparse-arrays': 'error',
    'no-this-before-super': 'error',
    'no-unexpected-multiline': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': 'error',
    'no-unreachable': 'error',
    'no-unreachable-loop': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': ['error', {
      enforceForOrderingRelations: true,
    }],
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-warning-comments': ['error', { terms: ['!todo', '!fixme'] }],
    'no-with': 'error',
    'object-shorthand': ['error', 'always'],
    'one-var': ['error', 'never'],
    'padding-line-between-statements': [
      2,
      // always a space between `break;` and `case` statements
      {
        blankLine: 'always',
        prev: 'break',
        next: 'case',
      },

      // always a space before return, but not enforced after blocks
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
      {
        blankLine: 'any',
        prev: 'block-like',
        next: 'return',
      },

      // never a space after a return
      {
        blankLine: 'never',
        prev: 'return',
        next: '*',
      },

      // always a space before around declarations
      {
        blankLine: 'always',
        prev: '*',
        next: 'class',
      },
      {
        blankLine: 'always',
        prev: 'class',
        next: '*',
      },

      // always have a space around function declarations
      {
        blankLine: 'always',
        prev: '*',
        next: 'function',
      },
      {
        blankLine: 'always',
        prev: 'function',
        next: '*',
      },

      // always a space after blocks
      {
        blankLine: 'always',
        prev: 'block-like',
        next: '*',
      },

      // always a space after import groups
      {
        blankLine: 'always',
        prev: 'import',
        next: '*',
      },
      {
        blankLine: 'any',
        prev: 'import',
        next: 'import',
      },

      // always a space after directive groups
      {
        blankLine: 'always',
        prev: 'directive',
        next: '*',
      },
      {
        blankLine: 'any',
        prev: 'directive',
        next: 'directive',
      },
    ],
    'prefer-arrow-callback': 'error',
    'prefer-const': ['error', {
      destructuring: 'all',
    }],
    'prefer-numeric-literals': 'error',
    'prefer-object-has-own': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    radix: ['error', 'always'],

    'spaced-comment': ['error', 'always', {
      line: {
        exceptions: ['-', '+'],
        markers: ['=', '!'],
      },
      block: {
        exceptions: ['-', '+'],
        markers: ['=', '!'],
        balanced: true,
      },
    }],
    'symbol-description': 'error',
    'unicode-bom': 'error',
    'use-isnan': 'error',

    'valid-typeof': 'error',

    yoda: ['error', 'never', { exceptRange: true }],
  },

  languageOptions: {
    globals: {
      globalThis: true,
    },
  },

  // these rules only run on vanilla or flow files
  // typically because they're handled differently in TypeScript
  overrides: [{
    files: ['*.js', '*.jsx', '*.mjs', '*.cjs'],
    rules: {

      'no-undef': 'error',
      'no-unused-vars': ['error', {
        varsIgnorePattern: '^ignore',
        argsIgnorePattern: '^ignore|^_',
      }],
      'no-useless-constructor': 'error',
      'default-param-last': 'error',
      'no-shadow': ['error', {
        allow: ['i', 'j', 'k', 'l'],
      }],
      'no-redeclare': 'error',
      'no-loop-func': 'error',

      'dot-notation': 'error',

      'no-unused-expressions': ['error', {
        allowShortCircuit: true,
        allowTernary: true,
      }],
      'no-throw-literal': 'error',
      'no-loss-of-precision': 'error',

      'no-invalid-this': 'error',

      'no-implied-eval': 'error',
      'no-dupe-class-members': 'error',
      'no-array-constructor': 'error',
      'lines-between-class-members': ['error', 'always', {
        exceptAfterSingleLine: true,
      }],

      'sort-destructure-keys/sort-destructure-keys': ['error', { caseSensitive: false }],
    },
  }],
};

function commonlyNamedGlobals(names) {
  return names.map(name => {
    return {
      name,
      message: `Do not use global with common names implicitly. Use globalThis.${name}.`,
    };
  });
}
