module.exports = {
  plugins: ['import'],
  rules: {
    'import/no-unresolved': 2,
    'import/named': 2,
    'import/default': 2,
    'import/no-absolute-path': 2,

    'import/export': 2,
    'import/no-named-as-default': 1,
    'import/no-named-as-default-member': 1,

    'import/no-deprecated': 1,
    'import/no-extraneous-dependencies': 0,

    'import/no-commonjs': 2,
    'import/no-amd': 2,

    'import/imports-first': 2,
    'import/no-duplicates': 2,

    'import/no-namespace': 0,
    'import/extensions': [2, { js: 'never' }],

    'import/newline-after-import': 2,
    'import/order': ['error', {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
    }],

    'import/prefer-default-export': 0,
    'import/max-dependencies': 0,
  },
};
