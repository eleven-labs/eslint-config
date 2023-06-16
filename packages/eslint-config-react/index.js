module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "standard-with-typescript",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "prettier"
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": ["./tsconfig.json"]
  },
  "plugins": [
    "react",
    "jsx-a11y",
    "autofix"
  ],
  "rules": {
    "prettier/prettier": ["error", {
      "singleQuote": true,
      "jsxSingleQuote": false,
      "semi": true,
      "tabWidth": 2,
      "bracketSpacing": true,
      "jsxBracketSameLine": false,
      "arrowParens": "always",
      "trailingComma": "es5",
      "printWidth": 120
    }],
    "arrow-body-style": ["error", "as-needed"],
    "react/self-closing-comp": ["error", {
      "component": true,
      "html": true
    }],
    "autofix/no-unused-vars": ["error", {
      "argsIgnorePattern": "^_",
      "ignoreRestSiblings": true,
      "destructuredArrayIgnorePattern": "^_"
    }],
    "import/order": ["error", {
      "groups": [
        "builtin",
        "external",
        "parent",
        "sibling",
        "index",
        "object",
        "type"
      ],
      "pathGroups": [
        {
          "pattern": "@/**/**",
          "group": "parent",
          "position": "before"
        }
      ],
      "alphabetize": { "order": "asc" }
    }],
    "no-restricted-imports": ["error", {
      "patterns": ["../"]
    }],
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-misused-promises": ["error", { "checksVoidReturn": false }]
  },
  "settings": {
    "react": {
      "version": "detect"
    },
    "import/resolver": {
      "typescript": true,
      "node": true
    }
  },
  "overrides": [
    {
      "files": ["*.stories.tsx", "*.test.ts", "*.spec.ts"],
      "rules": {
        "@typescript-eslint/consistent-type-assertions": "off"
      }
    }
  ],
}
