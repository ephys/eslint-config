module.exports = {
  plugins: ['babel'],
  rules: {
    eqeqeq: [2, 'always', { null: 'ignore' }],
    'babel/new-cap': 1,
    'babel/semi': [2, 'always'],
    'semi-style': [2, 'last'],
    'no-extra-semi': 2,
    'comma-dangle': [2, 'always-multiline'],
    'comma-spacing': [2, {
      after: true,
      before: false,
    }],
    'comma-style': [2, 'last'],
    'generator-star-spacing': [2, 'before'],
    'yield-star-spacing': [2, {
      before: false,
      after: true,
    }],
    'array-bracket-spacing': [2, 'never'],
    'object-curly-spacing': [2, 'always'],
    'object-curly-newline': [2, {
      multiline: true,
      consistent: true,
    }],

    // 'object-property-newline': [2, {
    //
    // }],
    'template-tag-spacing': [2, 'never'],
    'computed-property-spacing': [2, 'never'],
    'func-call-spacing': [2, 'never'],
    'key-spacing': [2, {
      beforeColon: false,
      afterColon: true,
      mode: 'strict',
    }],
    'keyword-spacing': [2, {
      before: true,
      after: true,
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

    quotes: [2, 'single', { allowTemplateLiterals: true }],

    'quote-props': [2, 'as-needed', { unnecessary: true }],

    'arrow-parens': [2, 'as-needed'],

    // 'no-extra-parens': [2, 'all', { ignoreJSX: 'multi-line' }],
    'no-extra-parens': 0,

    'object-shorthand': [2, 'always'],

    'arrow-body-style': [0, 'as-needed', { requireReturnForObjectLiteral: false }],
    'prefer-arrow-callback': 2,
    indent: [2, 2, { SwitchCase: 1 }],

    'max-depth': [2, 4],
    'max-len': [2, {
      code: 120,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreComments: true,
      ignoreRegExpLiterals: true,

      ignorePattern: '^\\s*import',
    }],
    'max-statements-per-line': [2, { max: 1 }],

    'newline-per-chained-call': [2, { ignoreChainWithDepth: 3 }],
    'no-console': [1, { allow: ['warn', 'error', 'info'] }],

    'no-use-before-define': [2, { functions: false }],
    'template-curly-spacing': [2, 'never'],
    'prefer-template': 2,
    'no-multi-str': 2,

    'padded-blocks': 0,

    'require-yield': 1,

    'no-void': 0,
    'no-undefined': 2,
    'no-undef': 2,
    'no-unused-vars': 2,

    // Use private fields proposal (#)
    'no-underscore-dangle': 2,

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
    'lines-around-comment': [2, {
      beforeBlockComment: true,
      beforeLineComment: true,
      allowBlockStart: true,
      allowArrayStart: true,
    }],
    'no-plusplus': 0,

    'no-extra-bind': 2,

    // 'no-extra-label': 2,
    // 'no-label-var': 2,
    'no-labels': 2,
    'no-invalid-this': 2,
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

    'no-restricted-imports': [2, {
      paths: ['decko'],
      patterns: ['lodash.*'],
    }],

    'class-methods-use-this': 0,
    'require-await': 2,
    'no-return-await': 2,
    'no-await-in-loop': 2,
    'prefer-promise-reject-errors': 2,
    'no-extra-boolean-cast': 2,
    'prefer-numeric-literals': 2,
    'symbol-description': 2,
    'no-unsafe-negation': 2,
    'no-restricted-syntax': [2,
      'ForInStatement',
      'WithStatement',
      'EmptyStatement',
      'BinaryExpression[operator=\'in\']',
    ],

    'getter-return': 2,
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
    'no-dupe-class-members': 2,
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
    'array-callback-return': 2,
    'dot-location': [2, 'property'],
    'dot-notation': 2,
    'no-caller': 2,
    'no-implicit-globals': 2,
    'no-self-assign': 2,
    'no-unexpected-multiline': 2,
    'no-unreachable': 2,
    'no-unsafe-finally': 2,
    'no-empty-pattern': 2,
    'no-eval': 2,
    'no-implied-eval': 2,
    'no-extend-native': 2,
    'no-floating-decimal': 2,
    'no-global-assign': 2,
    'no-loop-func': 2,
    'no-multi-spaces': 2,
    'no-new': 0,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-new-symbol': 2,
    'no-array-constructor': 2,
    'no-new-object': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-redeclare': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-throw-literal': 0,
    'no-unmodified-loop-condition': 2,
    'no-unused-expressions': [2, {
      allowShortCircuit: true,
      allowTernary: true,
    }],
    'no-useless-call': 2,
    'no-useless-concat': 2,
    'no-useless-escape': 2,
    'no-useless-return': 2,
    'no-lonely-if': 2,
    'no-with': 2,
    radix: [2, 'always'],
    'wrap-iife': [2, 'outside', { functionPrototypeMethods: true }],
    yoda: [2, 'never', { exceptRange: true }],
    'no-shadow': [2, {
      allow: ['i', 'j', 'k', 'l'],
    }],
    'no-delete-var': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-trailing-spaces': 2,
    'no-tabs': 2,
    'no-multi-assign': 2,
    'no-whitespace-before-property': 2,
    'no-var': 2,
    'prefer-const': 2,
    'prefer-rest-params': 2,
    'prefer-spread': 2,
    'no-restricted-globals': [2,
      {
        name: 'event',
        message: 'Use local parameter instead.',
      },
      {
        name: 'fdescribe',
        message: 'Do not commit fdescribe. Use describe instead.',
      },
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
    'no-useless-constructor': 2,
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
    'brace-style': [2, '1tbs'],
    camelcase: [2, { properties: 'never' }],
    'space-before-function-paren': [2, {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': [2],
    'space-unary-ops': [
      2, {
        words: true,
        nonwords: false,
      }],

    // http://eslint.org/docs/rules/padding-line-between-statements
    // 'padding-line-between-statements': [
    //   2,
    //   // always a space between `break;` and `case` statements
    //   { blankLine: 'always', prev: 'break', next: 'case' },
    //
    //   // always a space before return
    //   { blankLine: 'always', prev: '*', next: 'return' },
    //   // never a space after a return
    //   { blankLine: 'never', prev: 'return', next: '*' },
    //
    //   // always a space before around declarations
    //   { blankLine: 'always', prev: '*', next: 'class' },
    //   { blankLine: 'always', prev: 'class', next: '*' },
    //
    //   // always have a space around function declarations
    //   { blankLine: 'always', prev: '*', next: 'function' },
    //   { blankLine: 'always', prev: 'function', next: '*' },
    //
    //   // always a space after blocks
    //   { blankLink: 'always', prev: 'block-like', next: '*' },
    //
    //   // always a space after import groups
    //   { blankLine: "always", prev: 'import', next: "*" },
    //   { blankLine: "any",    prev: 'import', next: 'import' },
    //
    //   // always a space after directive groups
    //   { blankLine: "always", prev: "directive", next: "*" },
    //   { blankLine: "any",    prev: "directive", next: "directive" },
    // ],
  },
};
