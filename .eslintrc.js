module.exports = {
  root: true,
  parserOptions: {
    parser: '@babel/eslint-parser',
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['eslint-config-ali/vue', 'prettier', 'prettier/vue'],
  rules: {
    'no-param-reassign': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'no-new': 'off',
    radix: 'off',
    eqeqeq: 'off',
  },
}
