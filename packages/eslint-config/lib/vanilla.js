module.exports = {
  plugins: ['babel'],
  rules: {
    eqeqeq: [2, 'always', { null: 'ignore' }],
    'babel/new-cap': 1,
    'semi-style': [2, 'last'],
    'comma-style': [2, 'last'],
    'generator-star-spacing': [2, 'before'],
    'yield-star-spacing': [2, {
      before: false,
      after: true,
    }],
    'array-bracket-spacing': [2, 'never'],
    'object-curly-newline': [2, {
      multiline: true,
      consistent: true,
    }],

    // 'object-property-newline': [2, {
    //
    // }],
    'template-tag-spacing': [2, 'never'],
    'computed-property-spacing': [2, 'never'],
    'key-spacing': [2, {
      beforeColon: false,
      afterColon: true,
      mode: 'strict',
    }],
    'semi-spacing': [2, {
      before: false,
      after: true,
    }],
    'arrow-spacing': [2, {
      before: true,
      after: true,
    }],
    'rest-spread-spacing': [2, 'never'],

    'implicit-arrow-linebreak': [2, 'beside'],

    'quote-props': [2, 'as-needed', { unnecessary: true }],

    'arrow-parens': [2, 'as-needed'],

    'function-paren-newline': [2, 'consistent'],

    // 'no-extra-parens': [2, 'all', { ignoreJSX: 'multi-line' }],
    // disabled because parens sometimes make things clearer.
    'no-extra-parens': 0,

    'object-shorthand': [2, 'always'],

    'arrow-body-style': [0, 'as-needed', { requireReturnForObjectLiteral: false }],
    'prefer-arrow-callback': 2,
    indent: ['error', 2, {
      ignoredNodes: ['ConditionalExpression'],
      SwitchCase: 1,
    }],

    'max-depth': [2, 4],
    'max-len': [2, {
      code: 125,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreComments: true,
      ignoreRegExpLiterals: true,

      ignorePattern: '^\\s*import',
    }],
    'max-statements-per-line': [2, { max: 1 }],

    'newline-per-chained-call': [2, { ignoreChainWithDepth: 3 }],
    // people are still allowed (and encouraged!) to use console.log while debugging,
    // this rule is here to remind them to remove it once they're done.
    // using something else than "console.log" is treated as an intentional logging that can be published.
    'no-console': ['error', {
      allow: ['debug', 'info', 'warn', 'error'],
    }],

    // too often, this rule gets in the way.
    // 'no-use-before-define': [2, { functions: false }],
    'template-curly-spacing': [2, 'never'],
    'prefer-template': 2,
    'no-multi-str': 2,

    'padded-blocks': 0,

    'require-yield': 1,

    'no-void': 0,
    'no-undefined': 0, // allow using 'undefined'

    // Use private fields proposal (#)
    // TODO: enable when private fields are available everywhere
    'no-underscore-dangle': 0,

    'no-param-reassign': 0,
    'consistent-return': [2, { treatUndefinedAsUnspecified: true }],
    'consistent-this': [2, 'that'],
    'no-continue': 0,

    'spaced-comment': [2, 'always', {
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
    'line-comment-position': 0,
    'lines-around-comment': 0,
    // 'lines-around-comment': [2, {
    //   beforeBlockComment: true,
    //   beforeLineComment: true,
    //   allowBlockStart: true,
    //   allowArrayStart: true,
    //   allowObjectStart: true,
    //   allowClassStart: true,
    // }],
    'no-plusplus': 0,

    'no-extra-bind': 2,

    // 'no-extra-label': 2,
    // 'no-label-var': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,

    // not actual iterators, only spidermonkey's
    'no-iterator': 2,

    'no-implicit-coercion': [2, {
      boolean: true,
      number: true,
      string: true,
    }],

    curly: 2,
    'no-bitwise': 0,

    'no-mixed-operators': 0,
    'operator-linebreak': [2, 'before'],
    'new-cap': 0,
    'new-parens': 2,
    'eol-last': [2, 'always'],
    'linebreak-style': [2, 'unix'],
    'no-return-assign': [2, 'except-parens'],
    'no-else-return': 2,
    'no-dupe-else-if': 2,
    'no-lonely-if': 2,

    'no-restricted-imports': [2, {
      paths: ['decko'],
      patterns: ['lodash.*'],
    }],

    // Should we use a specific order? set first? get first?
    'grouped-accessor-pairs': [2, 'anyOrder'], // get() and set() must be grouped together if both are defined
    'getter-return': 2,
    'no-setter-return': 2,

    'class-methods-use-this': 0,
    // Rule is harmful as it ignores methods that return a promise (no await), and throw exceptions - https://github.com/eslint/eslint/issues/10000
    'require-await': 0,
    'no-await-in-loop': 2,
    'prefer-promise-reject-errors': 2,
    'no-promise-executor-return': 2,
    'no-async-promise-executor': 2,
    'no-extra-boolean-cast': 2,
    'prefer-numeric-literals': 2,
    'symbol-description': 2,
    'no-unsafe-negation': [2, {
      enforceForOrderingRelations: true,
    }],
    'no-restricted-syntax': [2,
      'ForInStatement',
      'WithStatement',
      'EmptyStatement',
    ],

    'no-compare-neg-zero': 2,
    'no-cond-assign': [2, 'except-parens'],
    'no-ex-assign': 2,
    'no-func-assign': 2,
    'no-class-assign': 2,
    'no-const-assign': 2,
    'no-constant-condition': 2,
    'no-debugger': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-useless-computed-key': 2,
    'no-empty': 2,
    'no-inner-declarations': 2,
    'no-irregular-whitespace': 2,
    'no-obj-calls': 2,
    'no-prototype-builtins': 2,
    'no-proto': 2,
    'no-sparse-arrays': 2,
    'use-isnan': 2,
    'valid-typeof': 2,
    'array-callback-return': [2, { allowImplicit: true }],
    'dot-location': [2, 'property'],
    'no-caller': 2,
    'no-implicit-globals': 2,
    'no-self-assign': 2,
    'no-unexpected-multiline': 2,
    'no-unreachable': 2,
    'no-unsafe-finally': 2,
    'no-empty-pattern': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-floating-decimal': 2,
    'no-global-assign': 2,
    'no-multi-spaces': 2,
    'no-new': 0,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-new-symbol': 2,
    'no-new-object': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-unmodified-loop-condition': 2,
    'no-unreachable-loop': 2,
    'no-useless-call': 2,
    'no-useless-concat': 2,
    'no-useless-escape': 2,
    'no-useless-return': 2,
    'no-with': 2,
    radix: [2, 'always'],
    'wrap-iife': [2, 'outside', { functionPrototypeMethods: true }],
    yoda: [2, 'never', { exceptRange: true }],
    'no-delete-var': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-trailing-spaces': 2,
    'no-tabs': 2,
    'no-multi-assign': 2,
    'no-whitespace-before-property': 2,
    'no-var': 2,
    'prefer-const': [2, {
      destructuring: 'all',
    }],
    'prefer-rest-params': 2,
    'prefer-spread': 2,
    'prefer-object-has-own': 2,
    'no-restricted-globals': [2,
      {
        name: 'event',
        message: 'Use local parameter instead.',
      },
      {
        name: 'fdescribe',
        message: 'Do not commit fdescribe. Use describe instead.',
      },
      // commonly named local variable
      ...commonlyNamedGlobals(['name', 'location', 'history', 'blur', 'caches', 'close', 'closed',
        'content', 'devicePixelRatio', 'focus', 'find', 'external', 'frames', 'fullScreen', 'innerHeight', 'innerWidth',
        'length', 'isSecureContext', 'opener', 'origin', 'outerHeight', 'outerWidth', 'parent', 'print',
        'resizeBy', 'resizeTo', 'screen', 'screenLeft', 'screenTop', 'screenX', 'screenY', 'scroll',
        'scrollBy', 'scrollByLines', 'scrollByPages', 'scrollMaxX', 'scrollMaxY', 'scrollX', 'scrollY',
        'scrollbars', 'sidebar', 'sizeToContent', 'speechSynthesis', 'status', 'statusbar', 'stop', 'toolbar', 'top', 'u2f',
        'updateCommands', 'visualViewport']),
      {
        name: 'parseInt',
        message: 'Use Number.parseInt',
      },
      {
        name: 'parseFloat',
        message: 'Use Number.parseFloat',
      },
      {
        name: 'isNaN',
        message: 'Use Number.isNaN',
      },
      {
        name: 'isFinite',
        message: 'Use Number.isFinite',
      },
      {
        name: 'NaN',
        message: 'Use Number.NaN',
      },
      {
        name: 'Infinity',
        message: 'Use Number.POSITIVE_INFINITY or Number.NEGATIVE_INFINITY',
      },
    ],
    'func-names': [2, 'always'],
    'no-unneeded-ternary': 2,
    'one-var': [2, 'never'],
    'unicode-bom': 2,
    'no-constructor-return': 2,
    'constructor-super': 2,
    'no-this-before-super': 2,
    'no-useless-rename': 2,

    // one-var-declaration-per-line

    // 'multiline-ternary': [2, 'always-multiline'],
    // 'nonblock-statement-body-position': [2, 'besides'],

    // 'array-element-newline': [2, {
    // multiline: true,
    // minItems: 2,
    // }],

    // 'array-bracket-newline': [2, {
    //   multiline: true,
    // minItems: 2,
    // }],

    'no-multiple-empty-lines': [2, { max: 1 }],
    'block-spacing': [2, 'always'],
    camelcase: [2, {
      properties: 'never',
      allow: ['^TEST_', '^UNSAFE_'],
    }],
    'space-in-parens': [2, 'never'],
    'space-unary-ops': [2, {
      words: true,
      nonwords: false,
    }],
    'no-useless-catch': 'error',
    'no-confusing-arrow': 'error',
    'prefer-regex-literals': 2,

    // http://eslint.org/docs/rules/padding-line-between-statements
    'padding-line-between-statements': [
      2,
      // always a space between `break;` and `case` statements
      { blankLine: 'always', prev: 'break', next: 'case' },

      // always a space before return, but not enforced after blocks
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'any', prev: 'block-like', next: 'return' },

      // never a space after a return
      { blankLine: 'never', prev: 'return', next: '*' },

      // always a space before around declarations
      { blankLine: 'always', prev: '*', next: 'class' },
      { blankLine: 'always', prev: 'class', next: '*' },

      // always have a space around function declarations
      { blankLine: 'always', prev: '*', next: 'function' },
      { blankLine: 'always', prev: 'function', next: '*' },

      // always a space after blocks
      { blankLine: 'always', prev: 'block-like', next: '*' },

      // always a space after import groups
      { blankLine: 'always', prev: 'import', next: '*' },
      { blankLine: 'any', prev: 'import', next: 'import' },

      // always a space after directive groups
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'any', prev: 'directive', next: 'directive' },
    ],

    // Cool feature where if you use one of the following terms, you will prevent committing the file until you remove it
    'no-warning-comments': ['error', { terms: ['!todo', '!fixme'] }],

    // TODO consider:
    //  - prefer-named-capture-group
    //  - function-call-argument-newline
  },

  globals: {
    globalThis: true,
  },

  // these rules only run on vanilla or flow files
  // typically because they're handled differently in TypeScript
  overrides: [{
    files: ['*.js', '*.jsx', '*.mjs'],
    rules: {

      'no-undef': 2,
      'no-unused-vars': [2, {
        varsIgnorePattern: '^ignore',
        argsIgnorePattern: '^ignore|^_',
      }],
      'no-useless-constructor': 2,
      'default-param-last': 'error',
      'space-before-function-paren': [2, {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      }],
      'no-shadow': [2, {
        allow: ['i', 'j', 'k', 'l'],
      }],
      'no-redeclare': 2,
      'no-loop-func': 2,
      'babel/semi': [2, 'always'],

      'no-extra-semi': 2,
      'dot-notation': 2,
      'space-infix-ops': 2,

      // 'no-return-await': 2,

      quotes: [2, 'single', { allowTemplateLiterals: true }],
      'object-curly-spacing': [2, 'always'],
      'no-unused-expressions': [2, {
        allowShortCircuit: true,
        allowTernary: true,
      }],
      'no-throw-literal': 2,
      'no-loss-of-precision': 2,

      'no-invalid-this': 0,
      'babel/no-invalid-this': 2,

      'no-implied-eval': 2,
      'no-dupe-class-members': 2,
      'no-array-constructor': 2,
      'lines-between-class-members': [2, 'always', {
        exceptAfterSingleLine: true,
      }],
      'func-call-spacing': [2, 'never'],
      'comma-spacing': [2, {
        after: true,
        before: false,
      }],
      'brace-style': [2, '1tbs'],
      'comma-dangle': [2, {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      }],
      'keyword-spacing': [2, {
        before: true,
        after: true,
      }],
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
