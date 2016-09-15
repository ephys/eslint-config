module.exports = {
  plugins: ['flowtype', 'babel'],
  rules: {
    'flowtype/boolean-style': [2, 'boolean'],
    'flowtype/define-flow-type': 1,
    'flowtype/use-flow-type': 1,

    'babel/flow-object-type': [2, 'comma'],
    'flowtype/delimiter-dangle': [2, 'always-multiline'],
    'flowtype/generic-spacing': [2, 'never'],
    'flowtype/no-dupe-keys': 2,
    'flowtype/no-weak-types': 0,
    'flowtype/require-parameter-type': 0,
    'flowtype/require-return-type': 0,

    'flowtype/require-valid-file-annotation': [2, 'never'],
    'flowtype/semi': [2, 'always'],
    'flowtype/space-before-type-colon': [2, 'never'],
    'flowtype/space-after-type-colon': [2, 'always'],
    'flowtype/space-before-generic-bracket': [2, 'never'],
    'flowtype/union-intersection-spacing': [2, 'always'],
    'flowtype/valid-syntax': 2,
  },
};

// TODO https://github.com/gajus/eslint-plugin-flowtype/issues/94
