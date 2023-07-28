module.exports = {
  "extends": [
    "@eleven-labs/eslint-config-typescript",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  "plugins": [
    "react",
    "jsx-a11y"
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
