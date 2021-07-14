'use strict';

module.exports = {
  overrides: [{
    files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    extends: [
      'plugin:jest/recommended',
      'plugin:jest/style',
    ],
    rules: {
      'jest/prefer-todo': 'error',
    },
    env: {
      jest: true,
    },
  }],
};
