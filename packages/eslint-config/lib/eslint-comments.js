module.exports = {
  plugins: ['eslint-comments'],
  rules: {
    'eslint-comments/disable-enable-pair': 'error',
    'eslint-comments/no-aggregating-enable': 'error',
    'eslint-comments/no-duplicate-disable': 'error',
    // eslint-comments/no-unlimited-disable is part of unicorn plugin
    // eslint-comments/no-unused-disable is --report-unused-disable-directives
    'eslint-comments/no-unused-enable': 'error',
    'eslint-comments/require-description': 'error',
  },
};
