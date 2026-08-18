import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  // --------------------------------------------------------------------------
  // Ignored files
  // --------------------------------------------------------------------------

  globalIgnores([
    "dist/",
    "coverage/",
    "node_modules/",
    "*.config.js",
    "*.config.cjs",
  ]),

  // --------------------------------------------------------------------------
  // TypeScript / React
  // --------------------------------------------------------------------------

  {
    files: ["**/*.{ts,tsx}"],

    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],

    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",

      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },

    rules: {
      // Prevent unused variables from accumulating.
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],

      // React Fast Refresh expects component exports to remain predictable.
      "react-refresh/only-export-components": [
        "warn",
        {
          allowConstantExport: true,
        },
      ],
    },
  },
]);