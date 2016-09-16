module.exports = {
  plugins: ['babel'],
  rules: {
    'babel/func-params-comma-dangle': [2, 'always-multiline'],

    // Fix vanilla bugs
    'generator-star-spacing': 0,
    'babel/generator-star-spacing': [2, 'before'],

    'array-bracket-spacing': 0,
    'babel/array-bracket-spacing': [2, 'never'],

    'object-curly-spacing': 0,
    'babel/object-curly-spacing': [2, 'always'],

    'arrow-parens': 0,
    'babel/arrow-parens': [2, 'as-needed'],

    // TODO once supported https://github.com/babel/eslint-plugin-babel/pull/86
    'object-shorthand': [2, 'always', { avoidQuotes: true }],
    // "babel/object-shorthand": ["error", "consistent-as-needed"],

    'arrow-body-style': [2, 'as-needed', { requireReturnForObjectLiteral: false }],
    indent: ['error', 2, { SwitchCase: 1 }],

    'max-len': [2, {
      code: 120,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,

      ignorePattern: '^\\s*import',
    }],

    'newline-per-chained-call': [2, { ignoreChainWithDepth: 3 }],
    'no-console': [2, {
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

    'spaced-comment': ['error', 'always'],
  },
};
