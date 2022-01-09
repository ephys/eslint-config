const { cjsRules } = require('./lib/commonjs-rules');

module.exports = {
  overrides: [{
    files: ['*.js', '*.ts'],
    rules: cjsRules,
  }],
};
