# :nail_care: eslint-config
Shared ESLint configuration for project

## Integrate into new project
 
Install this package with NPM:

```sh
npm install --save-dev eslint @eleven-labs/eslint-config
```

Install this package with Yarn:

```sh
yarn add -D eslint @eleven-labs/eslint-config
```

Use ESLint config in your project

Create an `.eslintrc` file at the root of the project and add the config that suits your project.

For a `JavaScript` project:

```json
{
  "extends": "@eleven-labs/eslint-config"
}
```

> All eslint configurations that follow inherit this configuration.

For a `TypeScript` project:

```json
{
  "extends": "@eleven-labs/eslint-config/typescript"
}
```

For a `React` project:

```json
{
  "extends": "@eleven-labs/eslint-config/react"
}
```

You can combine the configs if you have a `TypeScript` and `React` project:
```json
{
  "extends": ["@eleven-labs/eslint-config/typescript", "@eleven-labs/eslint-config/react"]
}
```

> Don't forget to specify the ecmascript version and other environments you are on in your configuration file
>
> For more information see the [documentation](https://eslint.org/docs/latest/use/configure/language-options#specifying-environments)

Example:

```json
{
  "env": {
    "es2022": true,
    "jest": true
  },
  "extends": [
    "@eleven-labs/eslint-config/typescript"
  ]
}
```

To add the prettier config, please follow the [package documentation](https://github.com/eleven-labs/eslint-config/tree/master/packages/prettier-config).
