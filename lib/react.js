module.exports = {
  plugins: ['react'],
  rules: {
    'react/forbid-component-props': 0,
    'react/forbid-prop-types': 0,
    'react/no-danger': 2,
    'react/no-deprecated': 1,
    'react/prefer-stateless-function': 2,
    'react/prefer-es6-class': [2, 'always'],

    'react/jsx-closing-bracket-location': [2, {
      nonEmpty: 'line-aligned',
      selfClosing: 'line-aligned',
    }],

    'react/jsx-boolean-value': [2, 'never'],
    'react/jsx-wrap-multilines': 2,
    'react/jsx-uses-vars': 2,
    'react/jsx-uses-react': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-space-before-closing': [2, 'always'],
    'react/jsx-pascal-case': 2,
    'react/jsx-no-target-blank': 2,
    'react/jsx-no-literals': 0,
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-filename-extension': 0,
    'react/jsx-handler-names': [0, {
      eventHandlerPropPrefix: 'handle',
    }],
    'react/jsx-indent': [2, 2],
    'react/jsx-curly-spacing': [2, 'never'],
    'react/no-unescaped-entities': 0,
  },
};
