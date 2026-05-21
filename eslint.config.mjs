import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs,jsx}"], 
    plugins: { js }, 
    extends: ["js/recommended"], 
    languageOptions: { 
      globals: {
        ...globals.browser,
        ...globals.node,  // <--- Dodano za Node.js (require, module...)
        ...globals.jest   // <--- Dodano za Jest testove (test, expect...)
      } 
    } 
  },
  pluginReact.configs.flat.recommended,
]);