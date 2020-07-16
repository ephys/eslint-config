module.exports = {
  rules: {
    'no-case-declarations': 2,
    'no-duplicate-case': 2,

    'default-case': [2, {
      commentPattern: '^skip\\sdefault',
    }],
    'default-case-last': 2,

    'switch-colon-spacing': [2, {
      after: true,
      before: false,
    }],

    'no-fallthrough': [2, { commentPattern: 'fallthrough' }],
  },
};
