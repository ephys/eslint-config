module.exports = {
  parser: 'babel-eslint',
  extends: [
    './flow',
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
  },
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
};
