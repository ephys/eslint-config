const { cjsRules, esmRules } = require('./commonjs-rules');

module.exports = {
  parser: '@babel/eslint-parser',
  extends: [
    // './jsdoc', // TODO: replace with gajus/jsdoc
    './modules',
    './vanilla',
    './switch-case',
    './regex',
    './lodash',
    './dom',
    './json',
    './unicorn',
  ].map(path => require.resolve(path)),
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
  rules: esmRules,
  overrides: [{
    files: ['*.cjs', '*.cts'],
    rules: cjsRules,
  }],
};
