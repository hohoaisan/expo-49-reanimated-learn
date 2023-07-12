module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'next',
    'next/core-web-vitals',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-console': ['error'],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    'react/react-in-jsx-scope': 'off',
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-dangle': [
      'error',
      {
        functions: 'never',
        imports: 'only-multiline',
        arrays: 'only-multiline',
        objects: 'only-multiline',
      },
    ],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'max-len': [
      'error',
      { code: 100, ignoreTemplateLiterals: true, ignoreStrings: true, ignoreUrls: true },
    ],
    'no-trailing-spaces': ['error'],
    'react/prop-types': 'off',
    'react/jsx-curly-spacing': [
      'warn',
      { when: 'never', attributes: { allowMultiline: true }, children: true },
    ],
    'react/jsx-equals-spacing': ['warn', 'never'],
    'react/jsx-tag-spacing': 'warn',
    'react/jsx-wrap-multilines': [
      'warn',
      {
        declaration: 'parens',
        assignment: 'parens',
        return: 'parens-new-line',
        arrow: 'parens',
        condition: 'ignore',
        logical: 'ignore',
        prop: 'ignore',
      },
    ],
    // Ignore LF/CRLF line endings
    'end-of-line': 'off',
    // disable error related to require(path) react-native
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^_',
        ignoreRestSiblings: true,
        // (unusedArg1, unusedArg2, arg3) while arg3 is only used is allowed
        args: 'after-used',
        // (arg1, arg2, _arg3) while _arg3 is unused is allowed
        argsIgnorePattern: '^_',
        // ({..._props}) while _props is unused is allowed
        destructuredArrayIgnorePattern: '^_',
      },
    ],
    'react/display-name': ['off'],
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  ],
}
