import lodash from 'eslint-plugin-lodash';

export const lodashConfig = {
  plugins: {
    lodash,
  },
  rules: {
    // these two are handled by no-invalid-this + this is too slow
    // 'lodash/callback-binding': 2,
    // 'lodash/no-unbound-this': 2,
    'lodash/import-scope': [2, 'method'],
  },
};
