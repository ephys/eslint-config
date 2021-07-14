'use strict';

module.exports = {
  extends: [
    'plugin:jest/recommended',
    'plugin:jest/style'
  ],
  rules: {
    'jest/prefer-todo': 'error',
  },
  env: {
    jest: true,
  },
}
