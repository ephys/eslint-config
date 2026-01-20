import { basePreset } from '@ephys/eslint-config-typescript';

export default [
  ...basePreset,
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/coverage/**',
      '**/.yarn/**',
      '**/.pnp.*',
    ],
  },
];
