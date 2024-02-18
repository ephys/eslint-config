module.exports = {
  plugins: ['import', 'small-import'],
  rules: {
    'import/export': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',

    'import/no-absolute-path': 'error',
    'import/no-amd': 'error',

    'import/no-commonjs': 'error',

    'import/no-default-export': 'error',
    'import/no-duplicates': 'error',

    'import/no-extraneous-dependencies': ['error', {
      peerDependencies: true,
    }],

    'import/no-useless-path-segments': ['error', {
      // we support native ESM which requires specifying the actual path (or using package.json)
      noUselessIndex: false,
    }],
    'no-import-assign': 'error',

    'small-import/no-full-import': ['error', {
      packages: {
        '@material-ui/core': '/',
        '@material-ui/icons': '/',
        '@mui/icons-material': '/',
        '@mui/material': '/',
        '@mui/styles': '/',
        '@mui/x-date-pickers': '/',
        'date-fns': '/',
        lodash: '/',
        rambda: '/src/',
      },
    }],

    'sort-imports': ['error', {
      ignoreDeclarationSort: true,
    }],
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
          '.mts',
          '.cts',
          '.d.ts',
        ],
      },
    },
  },
};
