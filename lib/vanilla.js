module.exports = {
  plugins: ['babel'],
  rules: {
    'babel/new-cap': 1,
    'babel/semi': [2, 'always'],
    'semi-style': [2, 'last'],
    'no-extra-semi': 2,
    'comma-dangle': [2, 'always-multiline'],
    'generator-star-spacing': [2, 'before'],
    'array-bracket-spacing': [2, 'never'],
    'object-curly-spacing': [2, 'always'],
    'template-tag-spacing': [2, 'never'],
    'semi-spacing': [2, {
      before: false,
      after: true,
    }],

    'arrow-parens': [2, 'as-needed'],
    'object-shorthand': [2, 'always'],

    'arrow-body-style': [0, 'as-needed', { requireReturnForObjectLiteral: false }],
    indent: [2, 2, { SwitchCase: 1 }],

    'max-len': [2, {
      code: 120,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreComments: true,
      ignoreRegExpLiterals: true,

      ignorePattern: '^\\s*import',
    }],

    'newline-per-chained-call': [2, { ignoreChainWithDepth: 3 }],
    'no-console': [1, {
      allow: ['warn', 'error', 'info'],
    }],

    'no-use-before-define': 0,
    'template-curly-spacing': [2, 'never'],
    'prefer-template': 2,

    'padded-blocks': 0,

    'require-yield': 1,

    'no-void': 0,
    'no-undefined': 2,

    'no-underscore-dangle': 0,

    'no-param-reassign': 0,
    'no-fallthrough': [2, { commentPattern: 'fallthrough' }],
    'consistent-return': 0,
    'no-continue': 0,

    'spaced-comment': [2, 'always'],
    'no-plusplus': 0,

    'no-extra-bind': 2,
    'no-invalid-this': 2,

    'no-implicit-coercion': [2, {
      boolean: true,
      number: true,
      string: true,
    }],

    curly: 2,
    'no-bitwise': 0,

    'no-mixed-operators': 0,
    'new-cap': 0,
    'eol-last': [2, 'always'],
    'linebreak-style': [2, 'unix'],
    'no-return-assign': [2, 'except-parens'],
    'no-else-return': 0,

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
    ],

    'array-element-newline': [2, {
      multiline: true,
      minItems: 2,
    }],
    'array-bracket-newline': [2, {
      multiline: true,
      minItems: 2,
    }],

    'switch-colon-spacing': [2, {
      after: true,
      before: false,
    }],

    'no-multiple-empty-lines': [2, { max: 1 }],

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
