module.exports = {
  parser: '@babel/eslint-parser',
  extends: [
    './jsdoc',
    './modules',
    './vanilla',
    './switch-case',
    './regex',
    './lodash',
    './dom',
    './json',
  ].map(require.resolve),
  reportUnusedDisableDirectives: true,
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    requireConfigFile: false,
  },
};
