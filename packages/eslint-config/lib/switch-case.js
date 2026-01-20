export const switchCaseConfig = {
  rules: {
    'no-case-declarations': 2,
    'no-duplicate-case': 2,

    'default-case': [2, {
      commentPattern: '^skip\\sdefault',
    }],
    'default-case-last': 2,

    'no-fallthrough': [2, { commentPattern: 'fallthrough' }],
  },
};
