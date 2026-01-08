export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        prompt: 'readonly',
        alert: 'readonly',
        confirm: 'readonly',
      },
    },
    rules: {
      indent: ['error', 2],
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      'no-trailing-spaces': 'error',
      'eol-last': ['error', 'always'],
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      'no-extra-semi': 'error',
    },
  },
]
