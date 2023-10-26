module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: [
    '@typescript-eslint',
    'perfectionist',
    'autofix'
  ],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error', {
        argsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        ignoreRestSiblings: true
      }
    ],
    'arrow-body-style': ['error', 'as-needed'],
    '@typescript-eslint/consistent-type-imports': [
      'error', {
       prefer: 'type-imports'
      }
    ],
    'no-restricted-imports': ['error', {
      'patterns': ['../']
    }],
    'unicorn/no-null': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-thenable': 'off',
    'unicorn/prevent-abbreviations': ['error', {
      'replacements': {
        args: false,
        arg: false,
        env: false,
        dev: false,
        prod: false,
      }
    }],
    'perfectionist/sort-imports': [
      'error',
      {
        type: 'natural',
        order: 'asc',
        groups: [
          ['builtin', 'external', 'type'],
          ['internal', 'internal-type'],
          ['parent', 'sibling', 'index'],
          ['parent-type', 'sibling-type', 'index-type'],
          'object',
          'unknown',
        ],
        'internal-pattern': ['@/**'],
      }
    ],
    'perfectionist/sort-named-imports': [
      'error',
      {
        type: 'natural',
        order: 'asc'
      }
    ],
    'perfectionist/sort-named-exports': [
      'error',
      {
        type: 'natural',
        order: 'asc'
      }
    ],
    'perfectionist/sort-exports': [
      'error',
      {
        type: 'natural',
        order: 'asc'
      }
    ],
    'perfectionist/sort-classes': [
      'error',
      {
        type: 'natural',
        order: 'asc',
        groups: [
          'index-signature',
          'static-property',
          'property',
          'private-property',
          'constructor',
          ['get-method', 'set-method'],
          'method',
          'static-private-method',
          'private-method',
        ]
      }
    ],
    'complexity': ['error', { 'max':  15 }],
    'max-params': ['error', 3],
    'max-nested-callbacks': ['error', 3],
    'max-depth': ['error', 3]
  }
}
