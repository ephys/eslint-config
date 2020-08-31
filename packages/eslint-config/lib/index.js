module.exports = {
  parser: 'babel-eslint',
  extends: [
    './jsdoc',
    './modules',
    './vanilla',
    './switch-case',
    './regex',
    './react',
    './lodash',
    './dom',
  ].map(require.resolve),
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
};
