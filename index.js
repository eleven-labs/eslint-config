module.exports = {
  "parser": "@babel/eslint-parser",
  "plugins": ["simple-import-sort"],
  "extends": [
    "react-app",
    "react-app/jest",
    "plugin:prettier/recommended",
    "prettier"
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
      "printWidth": 120,
    }],
    "import/no-anonymous-default-export": "off",
    "simple-import-sort/imports": "error"
  },
  "overrides": [
    {
      "files": ["**/*.{ts,tsx}"],
      "parser": "@typescript-eslint/parser",
      "extends": ["plugin:@typescript-eslint/eslint-recommended"],
      "plugins": ["@typescript-eslint"],
      "rules": {
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/no-use-before-define": "error",
        "@typescript-eslint/explicit-function-return-type": "error",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/quotes": ["error", "single", { "allowTemplateLiterals": true }]
      }
    }
  ]
}
