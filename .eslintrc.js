module.exports = {
  extends: ['airbnb'],
  rules: {
    'linebreak-style': 'off',
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
  },
};
