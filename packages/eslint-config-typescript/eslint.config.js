import { basePreset } from './dist/index.js';

export default [
  ...basePreset(`${import.meta.dirname}/tsconfig.json`),
  {
    ignores: ['**/dist/**'],
  },
];
