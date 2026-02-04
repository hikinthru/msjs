import js from "@eslint/js";

export default [
  js.configs.recommended,

  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        console: "readonly",
        process: "readonly",
      },
    },

    rules: {
      // ───────────────
      // Catch real bugs
      // ───────────────
      "no-undef": "error",
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "no-redeclare": "error",
      "no-shadow": "error",
      "no-unreachable": "error",

      // ───────────────
      // Safer logic
      // ───────────────
      "eqeqeq": ["error", "always"],
      "no-implicit-coercion": "error",
      "no-unexpected-multiline": "error",

      // Avoid dangerous numeric checks
      "no-restricted-globals": ["error", "isNaN"],
      "radix": ["error", "always"],

      // ───────────────
      // Control flow
      // ───────────────
      "no-constant-condition": ["error", { checkLoops: false }],

      // ───────────────
      // Code quality
      // ───────────────
      "curly": ["error", "all"],
      "consistent-return": "error",

      // ───────────────
      // Learning mode
      // ───────────────
      // "no-console": "error",
    },
  },
];
