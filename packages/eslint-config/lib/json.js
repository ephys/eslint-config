import jsonPlugin from 'eslint-plugin-json';

export const jsonConfigs = [
  {
    files: ['**/*.json', '**/.babelrc', '**/.eslintrc'],
    plugins: {
      json: jsonPlugin,
    },
    ...jsonPlugin.configs.recommended,
    rules: {
      'quote-props': ['error', 'always'],
    },
  },
];
