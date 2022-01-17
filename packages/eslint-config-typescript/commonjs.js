module.exports = {
  extends: ['@ephys/eslint-config/commonjs'],
  overrides: [{
    files: ['*.ts'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  }],
};
