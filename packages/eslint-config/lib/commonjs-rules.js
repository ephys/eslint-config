// rules to be used only for commonjs

module.exports.cjsRules = {
  'unicorn/prefer-top-level-await': 'off',
  'unicorn/prefer-module': 'off',
  'import/no-commonjs': 'off',
};

module.exports.esmRules = {
  'unicorn/prefer-top-level-await': 'error',
  'unicorn/prefer-module': 'error',
  'import/no-commonjs': 'error',
};
