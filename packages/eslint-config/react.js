module.exports = {
  env: {
    browser: true,
  },
  extends: [
    '@eleven-labs/eslint-config/base',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: [
    'react',
    'jsx-a11y'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'unicorn/prevent-abbreviations': ['error', {
      replacements: {
        args: false,
        arg: false,
        env: false,
        dev: false,
        prod: false,
        prop: false,
        props: false,
        ref: false
      }
    }],
  }
}
