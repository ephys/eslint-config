module.exports = {
  plugins: ['babel'],
  rules: {
    'babel/new-cap': 1,
    'comma-dangle': [2, 'always-multiline'],
    'generator-star-spacing': [2, 'before'],
    'array-bracket-spacing': [2, 'never'],
    'object-curly-spacing': [2, 'always'],
    'arrow-parens': [2, 'as-needed'],

    // TODO once supported https://github.com/babel/eslint-plugin-babel/pull/86
    'object-shorthand': [2, 'always'],
    // "babel/object-shorthand": ["error", "consistent-as-needed"],

    'arrow-body-style': [0, 'as-needed', { requireReturnForObjectLiteral: false }],
    indent: ['error', 2, { SwitchCase: 1 }],

    'max-len': [2, {
      code: 120,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,

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

    'class-methods-use-this': 0,
  },
};
