# :nail_care: eslint-config
ESLint and Prettier config for JavaScript and TypeScript projects

## Install

Using NPM:
```
npm install --save-dev eslint @elevenlabs/eslint-config

```

Using Yarn:
```
yarn add --dev eslint @elevenlabs/eslint-config
```

Update your `.eslintrc`:

```json
{
  "extends": "@elevenlabs/eslint-config",
  "rules": {
    // Additional, per-project rules...
  }
}
```

Add `.editorconfig` to project:
```
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```
