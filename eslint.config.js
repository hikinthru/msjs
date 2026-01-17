import js from "@eslint/js";

export default [
  js.configs.recommended,

  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        console: "readonly"
      }
    },

    rules: {
      // Catch bugs
      "no-undef": "error",
      "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
      "no-redeclare": "error",
      "no-shadow": "error",

      // Safer logic
      "eqeqeq": ["error", "always"],
      "no-implicit-coercion": "error",
      "no-unexpected-multiline": "error",

      // Control flow clarity
      "no-constant-condition": "error",
      "no-unreachable": "error",

      // Code quality
      "curly": ["error", "all"],
      "consistent-return": "error",

      // Learning-friendly strictness
      "no-console": "off" // keep ON for learning
    }
  }
];

