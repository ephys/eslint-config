module.exports = {
  plugins: ['import'],
  rules: {
    'import/no-unresolved': 2,
    'import/named': 2,
    'import/default': 2,
    'import/no-absolute-path': 2,
    'import/no-useless-path-segments': [2, {
      noUselessIndex: true,
    }],
    'import/no-self-import': 2,

    'import/export': 2,
    'import/no-named-as-default': 1,
    'import/no-named-as-default-member': 1,

    'import/no-deprecated': 1,
    'import/no-extraneous-dependencies': [2, {
      peerDependencies: true,
    }],

    'import/no-anonymous-default-export': ['error', {
      allowArray: true,
      allowObject: true,
      allowLiteral: true,
      allowArrowFunction: false,
      allowAnonymousClass: false,
      allowAnonymousFunction: false,
    }],

    'import/no-commonjs': 2,
    'import/no-amd': 2,

    'import/imports-first': 2,

    'import/no-namespace': 0,

    // TODO enable once this is available https://github.com/benmosher/eslint-plugin-import/pull/555
    'import/extensions': [0], // JS: Never, everything else: always

    'import/newline-after-import': 2,
    'import/order': ['error', {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      alphabetize: {
        order: 'asc',
        caseInsensitive: false,
      },
    }],

    'import/no-dynamic-require': 0,
    'import/prefer-default-export': 0,
    'import/max-dependencies': 0,

    'no-import-assign': 2,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.mjs',
          '.ts',
          '.tsx',
          '.d.ts',
        ],
      },
    },
  },

  // these rules only run on vanilla or flow files
  // typically because they're handled differently in TypeScript
  overrides: [{
    files: ['*.js', '*.jsx', '*.mjs'],
    rules: {
      // https://github.com/typescript-eslint/typescript-eslint/issues/3537
      'import/no-duplicates': 0,
      'no-duplicate-imports': 2,
    },
  }],
};
