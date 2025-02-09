import parser_ts from '@typescript-eslint/parser'
import plugin_ts from '@typescript-eslint/eslint-plugin'
import eslint from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'

export default [
  stylistic.configs['recommended-flat'],
  eslint.configs.recommended,
  {
    files: [
      'packages/**/*.{tsx,ts}',
      'packages/**',
    ],
    ignores: ['*.json', 'node_modules', 'doc/**'],
    languageOptions: {
      parser: parser_ts,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      plugin_ts,
      '@stylistic': stylistic,
    },
    rules: {
      // eslint
      'eqeqeq': ['error', 'always'],
      'no-undef': 'off',
      'no-empty-function': 'error',
      'no-implicit-coercion': 'warn',
      'no-async-promise-executor': 'error',
      'no-unused-vars': 'off',
      'no-redeclare': ['warn', { builtinGlobals: false }],
      // ts
      'plugin_ts/no-explicit-any': 'error',
      'plugin_ts/array-type': 'error',
      'plugin_ts/no-duplicate-enum-values': 'warn',
      // stylistic
      '@stylistic/quotes': 'warn',
      '@stylistic/jsx-quotes': ['warn', 'prefer-single'],
      '@stylistic/brace-style': ['error', '1tbs'],
      '@stylistic/quote-props': 'off',
    },
  },
]
