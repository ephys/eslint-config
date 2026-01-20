import { noFullImport } from './no-full-import.js';

export const noFullImportPlugin = {
  meta: {
    name: '@ephys/eslint-plugin-no-full-import',
    version: '20.1.4',
  },
  rules: {
    'no-full-import': noFullImport,
  },
  configs: {
    recommended: {
      plugins: {
        '@ephys/no-full-import': {
          rules: {
            'no-full-import': noFullImport,
          },
        },
      },
      rules: {
        '@ephys/no-full-import/no-full-import': 'error',
      },
    },
  },
};
