module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  overrides: [
    {
      files: ['**/vite.config.ts'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
  rules: {
    // REACT
    'react/forbid-prop-types': 0,
    'react/no-unused-prop-types': 2,
    'react/react-in-jsx-scope': 0,
    'react/require-default-props': 0,
    'react/jsx-props-no-spreading': 0,
    'react-hooks/exhaustive-deps': 0,
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-max-props-per-line': [
      'error',
      {
        when: 'always',
      },
    ],
    // TYPESCRIPT
    '@typescript-eslint/no-explicit-any': 0,
    'typescript-eslint/comma-dangle': 0,
    'no-unused-vars': 0,
    '@typescript-eslint/no-empty-interface': 1,
    '@typescript-eslint/no-unused-vars': 2,
    // PRETTIER
    'prettier/prettier': [2, { endOfLine: 'auto' }],
    // ESLINT
    'import/prefer-default-export': 0,
    'no-console': 0,
    'no-debugger': 0,
    'class-methods-use-this': 0,
    'no-param-reassign': 0,
  },
};
