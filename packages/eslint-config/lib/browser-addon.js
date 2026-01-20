import globals from 'globals';

export const browserAddon = {
  languageOptions: {
    globals: {
      ...globals.browser,
      __: true,
      CSSGroupingRule: true,
      CSSStyleRule: true,
      ParentNode: true,
    },
  },
  rules: {
    /**
     * alert is intended to be used for debugging during development
     */
    'no-alert': 'error',
  },
};
