'use strict';

module.exports = {
  overrides: [{
    plugins: ['json'],
    extends: ['plugin:json/recommended'],
    files: ['*.json', '.babelrc', '.eslintrc'],
    rules: {
      'quote-props': ['error', 'always'],
    },
  }],
};
