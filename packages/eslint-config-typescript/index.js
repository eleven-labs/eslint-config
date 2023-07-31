module.exports = {
  env: {
    'browser': true,
    'es2021': true,
    'node': true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:unicorn/recommended',
    'plugin:perfectionist/recommended-natural',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: [
    '@typescript-eslint',
    'perfectionist',
    'autofix'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
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
       'prefer': 'type-imports'
      }
    ],
    'no-restricted-imports': ['error', {
      "patterns": ['../']
    }],
    'unicorn/prevent-abbreviations': [
      'error',
      {
        'replacements': {
          "env": false,
          "props": false
        },
        'ignore': [
          '\\.e2e'
        ]
      }
    ],
    "unicorn/filename-case": [
      "error",
      {
        "cases": {
          "camelCase": true,
          "pascalCase": true
        }
      }
    ],
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
    ]
  }
}
