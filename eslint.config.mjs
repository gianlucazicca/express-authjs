import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import stylisticJs from '@stylistic/eslint-plugin-js'


export default [

  {
    files: ["**/*.{js,mjs,cjs,ts}"]
  },
  {
    languageOptions: {
      globals: globals.browser
      }
    },
  {
    plugins: {
      '@stylistic/js': stylisticJs
    },
    rules: {
      "@stylistic/js/array-bracket-newline": ["warn", {
        "multiline": true
      }],
      "@stylistic/js/array-bracket-spacing": ["warn", "always",
        {
          "objectsInArrays": true,
          "arraysInArrays": true
        }],
      "@stylistic/js/array-element-newline": ["warn", {
        "consistent": true,
        "multiline": true
      }],
      "@stylistic/js/arrow-parens": ["warn"],
      "@stylistic/js/arrow-spacing": ["warn"],
      "@stylistic/js/block-spacing": ["warn"],
      "@stylistic/js/brace-style": ["warn", "1tbs", {
        "allowSingleLine": true
      }],
      "@stylistic/js/comma-dangle": ["warn", {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "only-multiline",
        "exports": "only-multiline",
        "functions": "only-multiline"
      }],
      "@stylistic/js/comma-spacing": ["warn"],
      "@stylistic/js/comma-style": ["warn", "last"],
      "@stylistic/js/computed-property-spacing": ["warn", "never"],
      "@stylistic/js/dot-location": ["warn", "object"],
      "@stylistic/js/function-call-argument-newline": ["warn", "consistent"],
      "@stylistic/js/function-call-spacing": ["warn", "never"],
      "@stylistic/js/function-paren-newline": ["warn", "multiline-arguments"],
      "@stylistic/js/implicit-arrow-linebreak": ["warn", "beside"],
      "@stylistic/js/indent": ["warn", 4],
      "@stylistic/js/key-spacing": ["warn", { "beforeColon": false }],
      "@stylistic/js/keyword-spacing": ["warn", {
        "overrides": {
          "if": { "after": true },
          "for": { "after": true },
          "while": { "after": true }
        }
      }],
      "@stylistic/js/max-len": ["warn", 120],
      "@stylistic/js/semi": ["warn", "always"],
      "@stylistic/js/quotes": ["warn", "single"],
      "@stylistic/js/no-multiple-empty-lines": ["warn",  {
        "max": 1
      }],
      "@stylistic/js/object-curly-spacing": ["warn", "always"],

    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];