/** @type {import("eslint").Linter.Config}*/
"use strict";

module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:eslint-plugin/recommended",
    "plugin:node/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  env: {
    node: true,
  },
  ignorePatterns: [
    "node_modules/",
    "build/",
    "dist/",
    "coverage/",
    "tests/**/*.js",
    "tests/**/*.ts",
  ],
  overrides: [
    {
      files: ["**/*.ts"],
      env: { mocha: true },
    },
  ],
};
