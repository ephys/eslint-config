module.exports = {
  plugins: ['lodash'],
  rules: {
    'lodash/callback-binding': 2,
    'lodash/no-unbound-this': 2,
    'lodash/import-scope': [2, 'member'],
    'lodash/prefer-noop': 2,
  },
};
