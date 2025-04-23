import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.node } },
  { rules: {
    "semi" : ["error", "always"],
    "indent" : ["error", 2],
    "eqeqeq" : ["error", "always"],
    "for-direction" : ["error"],
    "no-cond-assign" : ["error", "always"]
  }}
]);