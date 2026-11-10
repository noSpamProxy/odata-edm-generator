import path from "node:path";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import";
import jsdoc from "eslint-plugin-jsdoc";
import mocha from "eslint-plugin-mocha";
import globals from "globals";

export default [
  {
    ignores: [
      "**/*.cjs",
      "**/*.d.ts",
      "**/*.js",
      "**/*.mjs",
      "tests/data/**",
      "dist/**",
      "tests_out/**",
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  mocha.configs.recommended,
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tseslint.parser,
      globals: globals.node,
      parserOptions: {
        project: path.resolve("./tsconfig.json"),
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      import: importPlugin,
      jsdoc,
    },
    rules: {
      "semi": ["error"],
      "no-shadow": "off",
      "quotes": ["warn", "single"],
      "object-shorthand": "error",
      "no-warning-comments": "warn",
      "@typescript-eslint/explicit-member-accessibility": ["error"],
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-unused-vars": ["warn", {
        "argsIgnorePattern": "^_",
      }],
      "@typescript-eslint/naming-convention": [
        "warn",
        {
          selector: "variableLike",
          format: ["camelCase"],
          leadingUnderscore: "allow",
        },
        {
          selector: "variable",
          types: ["boolean"],
          format: ["PascalCase"],
          prefix: ["is", "should", "has", "can", "did", "will"],
          filter: { regex: "^(?!(cancelled|canceled)).*$", match: true },
          leadingUnderscore: "allow",
        },
      ],
      "@typescript-eslint/no-shadow": ["error", { builtinGlobals: true, ignoreTypeValueShadow: true }],
      "@typescript-eslint/ban-ts-comment": [
        "error",
        {
          "ts-expect-error": "allow-with-description",
          "ts-ignore": "allow-with-description",
          "ts-nocheck": true,
          "ts-check": false,
          minimumDescriptionLength: 3,
        },
      ],
      "@typescript-eslint/unbound-method": ["error", { ignoreStatic: true }],
      "@typescript-eslint/restrict-template-expressions": ["error", { allowNumber: true, allowBoolean: true }],
      "@typescript-eslint/no-non-null-assertion": "off",
      "mocha/no-setup-in-describe": "off",
    },
  },
];
