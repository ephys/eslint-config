import globals from 'globals';

export const nodeAddon = [
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
];
