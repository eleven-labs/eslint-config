# :nail_care: prettier-config
Shared Prettier configuration for project

## Integrate into new project

Install this package with NPM:

```sh
npm install --save-dev @eleven-labs/prettier-config
```

Install this package with Yarn:

```sh
yarn add -D @eleven-labs/prettier-config
```

Use Prettier config in your project

Add a reference it in your `package.json`:

```json
{
  ...
  "prettier": "@eleven-labs/prettier-config"
}
```

If you don’t want to use `package.json`, you can use config file (`.prettierrc`) to export a string:

```
@eleven-labs/prettier-config
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
