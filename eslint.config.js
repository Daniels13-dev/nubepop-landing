const { defineConfig, globalIgnores } = require('eslint/config')
const nextVitals = require('eslint-config-next/core-web-vitals')
const nextTs = require('eslint-config-next/typescript')

module.exports = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    ignores: ['.next/**', 'node_modules/**', 'dist/**', 'build/**', '.vercel/**', 'public/**'],
    languageOptions: {
      parser: require('@typescript-eslint/parser'),
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        project: ['./tsconfig.json'],
      },
    },
    settings: { react: { version: 'detect' } },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/no-unescaped-entities': 'error',
      'jsx-a11y/anchor-is-valid': 'off',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
])
