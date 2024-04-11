module.exports = {
  plugins: ['react', 'jsx-a11y', 'react-hooks'],
  rules: {
    'jsx-quotes': [2, 'prefer-double'],
    'react/require-default-props': 0,
    'react/forbid-component-props': 0,
    'react/forbid-prop-types': 0,
    'react/forbid-foreign-prop-types': 2,
    'react/no-danger': 2,
    'react/no-deprecated': 1,
    'react/prefer-stateless-function': 0,
    'react/prefer-es6-class': [2, 'always'],
    'react/button-has-type': 2,
    'react/no-string-refs': 2,
    'react/no-this-in-sfc': 2,
    'react/no-unused-state': 2,
    // 'react/react-in-jsx-scope': 2,
    'react/require-render-return': 2,
    'react/self-closing-comp': 2,

    'react/jsx-closing-tag-location': 2,
    'react/no-redundant-should-component-update': 2,
    'react/default-props-match-prop-types': 0,

    'react/jsx-boolean-value': [2, 'never'],
    'react/jsx-wrap-multilines': [2, {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'ignore',
    }],
    'react/jsx-uses-vars': 2,
    // 'react/jsx-uses-react': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-fragments': [2, 'syntax'],
    'react/jsx-no-useless-fragment': 2,

    'react/jsx-no-bind': [2, {
      ignoreDOMComponents: false,

      // use React.createRef
      ignoreRefs: false,
      allowArrowFunctions: true,
      allowFunctions: false,
      allowBind: false,
    }],

    // 'react/jsx-space-before-closing': [2, 'always'],
    'react/jsx-tag-spacing': [2, {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never',
    }],
    'react/jsx-equals-spacing': [2, 'never'],
    'react/jsx-pascal-case': 2,
    'react/jsx-no-literals': 0,
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-props-no-multi-spaces': 2,
    'react/jsx-filename-extension': 0,
    'react/jsx-indent': [2, 2],
    'react/jsx-curly-spacing': [2, {
      when: 'never',
    }],
    'react/jsx-curly-brace-presence': [2, 'never'],
    'react/jsx-curly-newline': [2, 'never'],
    'react/jsx-child-element-spacing': 1,
    'react/jsx-key': [2, { checkFragmentShorthand: true }],
    'react/void-dom-elements-no-children': 2,

    'jsx-a11y/accessible-emoji': 2,
    'jsx-a11y/control-has-associated-label': [2, {
      labelAttributes: ['title'],
    }],

    'react/no-will-update-set-state': [2, 'disallow-in-func'],
    'react/no-access-state-in-setstate': 2,

    'react/jsx-no-target-blank': [2, {
      enforceDynamicLinks: 'always',
    }],

    'react/hook-use-state': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // TODO: only if flow AND react are enabled!
    // TODO - enable once fixed https://github.com/yannickcr/eslint-plugin-react/issues/2472
    'react/prefer-read-only-props': 0,
    'react/state-in-constructor': [2, 'never'],

    // TODO:
    //  - https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-typos.md
    //  - sort-comp
    //  - no-unescaped-entities

    // disabled because they do not work well
    'react/jsx-handler-names': 0,
    'react/no-unescaped-entities': 0,
    'react/require-extension': 0,
    'react/sort-comp': 0,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
