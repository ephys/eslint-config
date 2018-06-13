module.exports = {
  plugins: ['flowtype'],
  rules: {
    'flowtype/boolean-style': [2, 'boolean'],
    'flowtype/define-flow-type': 1,
    'flowtype/use-flow-type': 1,

    'flowtype/object-type-delimiter': [2, 'comma'],
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

    'flowtype/newline-after-flow-annotation': [2, 'always'],

    // free to choose between Array<simple> and simple[] for simple types
    // I prefer simple[] but it is not consistent with complex-types so I won't enforce it.
    'flowtype/array-style-simple-type': 0,

    // complex types may not be parsed as you think it will be, so force Array<complex>
    'flowtype/array-style-complex-type': [2, 'verbose'],

    'flowtype/no-types-missing-file-annotation': 0,
  },
};

// TODO https://github.com/gajus/eslint-plugin-flowtype/issues/94
