module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
    node: true
  },
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 11
  },
  rules: {
    'import/no-extraneous-dependencies': ['error']
  },
  overrides: [
    {
      files: [
        '**/tests/**/*.js'
      ],
      env: {
        jest: true
      }
    }
  ],
  settings: {
    react: {
      version: 'detect'
    }
  }
}