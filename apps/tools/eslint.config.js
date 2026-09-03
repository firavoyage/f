import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import tsParser from "@typescript-eslint/parser";
import { defineConfig } from "eslint/config";

const throw_err = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Enforce that 'throw' is followed by a function call named 'err'.",
    },
    messages: {
      mustUseErrFunction: "You must throw using the 'err()' function. Example: throw err('Message')",
    },
  },
  create(context) {
    return {
      // Targets 'throw' statements where the argument is NOT a CallExpression named 'err'
      "ThrowStatement:not(ThrowStatement[argument.type='CallExpression'][argument.callee.name='err'])"(node) {
        context.report({
          node,
          messageId: "mustUseErrFunction",
        });
      },
    };
  },
};

export default defineConfig(
  // Config
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  // Files
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
  },

  // Ignores
  {
    ignores: [
      "**/legacy/**",
      "**/build/**",
      "**/.build/**",
    ],
  },

  // Plugins
  {
    plugins: {
      local: {
        rules: {
          "throw-err": throw_err,
        },
      },
    },
  },

  // Base Rules
  eslint.configs.recommended,
  ...tseslint.configs.recommended,

  // Custom Rules
  {
    rules: {
      // ignore false positive (best prac irrelevant/unappliable in this context)
      "no-irregular-whitespace": "off",

      // do not over engineer for corp best prac
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-unsafe-function-type": "off",
      "@typescript-eslint/no-unused-expressions": "off",

      // avoid hidden timing issues
      "@typescript-eslint/no-floating-promises": "error",
      
      // keep error stack trace (which throw 'foo' does not provide)
      "local/throw-err": "warn",
    },
  },

  // Custom Dev Rules
  {
    rules: {
      // do not show errors halfway
      "no-empty": "off",
      'no-useless-assignment': 'off',
      '@typescript-eslint/no-unused-vars': 'off', // low opacity highlighting is enough
      'prefer-const': 'off',
      '@typescript-eslint/no-empty-object-type': 'off'
    },
  },
);
