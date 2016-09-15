module.exports = {
  parser: 'babel-eslint',
  extends: [
    'eslint-config-airbnb',
    './flow',
    './jsdoc',
    './modules',
    './vanilla',
  ].map(require.resolve),
  rules: {},
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
};
