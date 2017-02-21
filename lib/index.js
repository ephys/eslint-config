module.exports = {
  parser: 'babel-eslint',
  extends: [
    'eslint-config-airbnb',
    './flow',
    './jsdoc',
    './modules',
    './vanilla',
    './react',
    './lodash',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
};
