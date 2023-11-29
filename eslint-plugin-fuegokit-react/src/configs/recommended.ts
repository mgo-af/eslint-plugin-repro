import type { Linter } from "eslint";

const config: Linter.Config = {
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["fuegokit-react"],
  rules: {
    "fuegokit-react/enforce-foo-bar": "warn",
  },
  settings: {},
};

export = config;
