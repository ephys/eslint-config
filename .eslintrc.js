require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: [
    './packages/eslint-config-typescript',
    './packages/eslint-config/commonjs',
  ],
  rules: {
    'import/no-commonjs': 0,
  },
};
