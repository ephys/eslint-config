module.exports = {
  plugins: ['react', 'jsx-a11y'],
  rules: {
    'jsx-quotes': [2, 'prefer-double'],
    'react/require-default-props': 0,
    'react/forbid-component-props': 0,
    'react/forbid-prop-types': 0,
    'react/forbid-foreign-prop-types': 2,
    'react/no-danger': 2,
    'react/no-deprecated': 1,
    'react/prefer-stateless-function': 2,
    'react/prefer-es6-class': [2, 'always'],
    'react/button-has-type': 2,

    'react/jsx-closing-bracket-location': [2, 'line-aligned'],
    'react/jsx-closing-tag-location': 2,
    'react/no-redundant-should-component-update': 2,
    'react/default-props-match-prop-types': 2,

    'react/jsx-boolean-value': [2, 'never'],
    'react/jsx-wrap-multilines': 2,
    'react/jsx-uses-vars': 2,
    'react/jsx-uses-react': 2,
    'react/jsx-no-undef': 2,

    // 'react/jsx-space-before-closing': [2, 'always'],
    'react/jsx-tag-spacing': [2, {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
    }],
    'react/jsx-pascal-case': 2,
    'react/jsx-no-target-blank': 2,
    'react/jsx-no-literals': 0,
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-props-no-multi-spaces': 2,
    'react/jsx-filename-extension': 0,
    'react/jsx-indent': [2, 2],
    'react/jsx-curly-spacing': [2, 'never'],
    'react/jsx-curly-brace-presence': [2, 'never'],
    'react/jsx-child-element-spacing': 1,
    'react/void-dom-elements-no-children': 2,

    'jsx-a11y/accessible-emoji': 2,
    'react/no-will-update-set-state': [2, 'disallow-in-func'],
    'react/no-access-state-in-setstate': 2,

    'react/jsx-no-target-blank': [2, { enforceDynamicLinks: 'always' }],

    // disabled because they do not work well
    'react/jsx-handler-names': 0,
    'react/no-unescaped-entities': 0,
    'react/require-extension': 0,
    'react/sort-comp': 0,
  },
};
