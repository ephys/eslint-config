module.exports = {
  extends: ['./index'].map(require.resolve),
  globals: {
    __: true,
    CSSGroupingRule: true,
    CSSStyleRule: true,
    ParentNode: true
  },
  env: {
    browser: true,
  },
};
