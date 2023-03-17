# :nail_care: eslint-config-react
Shared ESLint and Prettier configuration for React TypeScript project

## Integrate into new project
 
Install this package as devDependency and peer dependencies of this package in your project as devDependencies.

```sh
npx install-peerdeps --dev @eleven-labs/eslint-config-react
npx install-peerdeps --dev eslint-config-standard-with-typescript
```

> To install peer dependencies automatically, use the tool [install-peerdeps](https://github.com/nathanhleung/install-peerdeps).

Instead, you can do this manually my adding all entries part of the peerDependencies property (see  `package.json`).

Use ESLint config in your project

Create a `.eslintrc` file in project root with the following content:

```json
{
  "extends": "@eleven-labs/eslint-config-react",
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
