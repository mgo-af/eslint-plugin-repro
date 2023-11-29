import { RuleTester } from "eslint";
import { enforceFooBarRule } from "../src/rules";

const ruleTester = new RuleTester({
  parser: require.resolve("@typescript-eslint/parser"),
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
});

// Throws error if the tests in ruleTester.run() do not pass
ruleTester.run("enforce-foo-bar", enforceFooBarRule, {
  // 'valid' checks cases that should pass
  valid: [
    {
      code: 'const foo = "bar";',
    },
  ],
  // 'invalid' checks cases that should not pass
  invalid: [
    {
      code: 'const foo = "baz";',
      output: 'const foo = "bar";', // Add the expected fixed code here
      errors: [
        {
          message:
            'Value other than "bar" assigned to `const foo`. Unexpected value: baz.',
          line: 1,
          column: 7,
          endLine: 1,
          endColumn: 18,
        },
      ],
    },
  ],
});
