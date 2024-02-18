module.exports = {
  globals: {
    __: true,
    CSSGroupingRule: true,
    CSSStyleRule: true,
    ParentNode: true,
  },
  env: {
    browser: true,
  },
  rules: {
    /**
     * alert is intended to be used for debugging during development
     */
    'no-alert': 'error',
  }
};
