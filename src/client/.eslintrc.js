const path = require('path')
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: path.resolve(__dirname, './tsconfig.json'),
  },
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    process: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  plugins: ['react', 'prettier', '@typescript-eslint', 'react-hooks'],
  rules: {
    eqeqeq: ['error', 'smart'],
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/camelcase': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
