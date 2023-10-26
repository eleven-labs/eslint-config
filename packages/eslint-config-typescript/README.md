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

To add the prettier config, please follow the [package documentation](https://github.com/eleven-labs/eslint-config/tree/master/packages/prettier-config).
