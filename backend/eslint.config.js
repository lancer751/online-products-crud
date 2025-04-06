import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts}"], languageOptions: { globals: globals.node } },
  { files: ["**/*.{js,mjs,cjs,ts}"], plugins: { js }, extends: ["js/recommended"] },
  {
    rules: {
      "no-unused-vars": "warn",
			"no-undef": "warn",
      "quotes": ["error", "double"],
      "eqeqeq": ["error", "always"],
      "arrow-body-style": ["error", "as-needed"],
      "prefer-const": "error",
      "no-var": "error",
      "object-shorthand": "error",
    }
  },
  tseslint.configs.recommended,
]);