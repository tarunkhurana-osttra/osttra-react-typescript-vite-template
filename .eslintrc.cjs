module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'prettier/prettier',
    'plugin:prettier/recommended',
    'plugin:vitest/recommended',
    'plugin:testing-library/react',
  ],
  parser: '@typescript-eslint/parser',
  settings: {
    react: {
      version: 'detect'
    }
  },
  plugins: ['react-refresh', '@typescript-eslint', 'vitest'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'max-lines': [1, { max: 350 }],
    'no-console': 'error',
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    'testing-library/await-async-queries': 'error',
    'testing-library/no-await-sync-queries': 'error',
    'testing-library/no-debugging-utils': 'warn',
    'testing-library/no-dom-import': 'off',
  },
};
