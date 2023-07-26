# :nail_care: eslint-config-typescript
Shared ESLint configuration for TypeScript project

## Integrate into new project
 
Install this package with NPM:

```sh
npm install --save-dev @eleven-labs/eslint-config-typescript eslint prettier typescript
```

Install this package with Yarn:

```sh
yarn add -D @eleven-labs/eslint-config-typescript eslint prettier typescript
```

Use ESLint config in your project

Create a `.eslintrc` file in project root with the following content:

```json
{
  "extends": "@eleven-labs/eslint-config-typescript",
  "rules": {
    // Additional, per-project rules...
  }
}
```

Add `.prettierrc` to project:
```
{
  "singleQuote": true,
  "jsxSingleQuote": false,
  "semi": true,
  "tabWidth": 2,
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "arrowParens": "always",
  "trailingComma": "es5",
  "printWidth": 120
}
```

And add `.editorconfig` to project:
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
