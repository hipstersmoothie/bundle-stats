module.exports = {
  root: true,
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  env: {
    node: true,
    browser: true,
    'jest/globals': true,
  },
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' },
    ],
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': ['error', { peerDependencies: true }],
    'react/static-property-placement': 'off',
    'react/jsx-props-no-spreading': 'off',
    'prettier/prettier': 'warn',
    'no-unused-vars': ['warn', { varsIgnorePattern: '^[_]{1,}$' }],
  },
  plugins: ['jest'],
  overrides: [
    {
      files: '*.ts',
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      extends: ['airbnb-typescript/base'],
      plugins: ['@typescript-eslint'],
      rules: {
        'import/prefer-default-export': 'off',
        '@typescript-eslint/comma-dangle': 'warn',
        '@typescript-eslint/no-unused-vars': ['warn', { varsIgnorePattern: '^[_]{1,}$' }],
      },
    },
  ],
};
