module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "react-app",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@fuegokit/fuegokit-react/recommended",
    "plugin:@atlaskit/design-system/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    //add customize rules here as per your project's needs
  },
  settings: {
    react: {
      version: "detect", // Detect react version
    },
  },
};
