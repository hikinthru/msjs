- [Notes For All JavaScript Projects](#notes-for-all-javascript-projects)
  - [Install `readline-sync` for console input](#install-readline-sync-for-console-input)
  - [For New Project](#for-new-project)
    - [Initialize Node](#initialize-node)
    - [Install and Configure ESLint](#install-and-configure-eslint)
    - [✅ Five Quick Steps (Do These Every Time)](#-five-quick-steps-do-these-every-time)
  - [Remove CoPilot from VS Code](#remove-copilot-from-vs-code)

# Notes For All JavaScript Projects

## Install `readline-sync` for console input

```js
// Include readline for user input
import { question } from "readline-sync";
```

## For New Project 

→ `npm init` → ESLint → paste config → `@ts-check`

### Initialize Node

- 1️⃣ Create the project folder

```bash
mkdir my-project
cd my-project
```

- 2️⃣ Initialize npm (once per project)

```bash
npm init -y
```

Why: this gives ESLint a place to live (`package.json`).

### Install and Configure ESLint

- 3️⃣ Install ESLint

```bash
npm install --save-dev eslint
```

- 4️⃣ Initialize ESLint

```bash
npx eslint --init
```

Choose these answers (important):

* ✔ **JavaScript**
* ✔ **Browser** (or Node if applicable)
* ✔ **JSON config** (simplest)
* ✔ **Yes** to install dependencies

This creates `.eslintrc.json`.

- 5️⃣ Replace the config with a strict one

Open `.eslintrc.json` and **replace everything** with this:

```json
import js from "@eslint/js";

export default [
  js.configs.recommended,

  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        console: "readonly",
      },
    },

    env: {
      node: true,
      commonjs: true,
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
      "no-console": "error", // keep ON for learning
    },
  },
];
```

This is your **baseline strict config**.

- 6️⃣ Install the ESLint VS Code extension (once ever)

* Open **Extensions**
* Install **ESLint** by Microsoft
* Reload VS Code

You never do this again.

- 7️⃣ Add this to every `.js` file you write

```js
// @ts-check
```

This gives you:

* typo detection
* better IntelliSense
* extra safety

- 8️⃣ Quick sanity test (do this once per project)

Paste this into any `.js` file:

```js
sum = 5;
cosole.log(sum == "5");
```

You should see errors immediately.

If yes → 🎉 **You’re done.**
If no → stop and fix before coding.

- 🧠 What this setup protects you from

✔ Misspelled names (`cosole`)
✔ Accidental globals
✔ Silent logic errors
✔ Loose comparisons
✔ Dead code

### ✅ Five Quick Steps (Do These Every Time)

1. **Initialize the project**

   ```bash
   npm init -y
   ```

2. **Install ESLint**

   ```bash
   npm install --save-dev eslint
   ```

3. **Create ESLint config**

   ```bash
   npx eslint --init
   ```

   (Choose JavaScript + Browser/Node + `eslint:recommended`)

4. **Paste your strict config**
   Replace the contents of `.eslintrc.json` with your saved strict version.

5. **Add this to each `.js` file**

   ```js
   // @ts-check
   ``

## Remove CoPilot from VS Code

**In the GUI**

1. Open **Settings** (Cmd/Ctrl + ,)
2. Search for **@feature:chat** 
3. Scroll down to **Chat: Disable AI Features**
4. Check "Disable and hide built-in AI features provided by GitHub Copilot, including chant and inline suggestions."

**In "settings.json"**

1. Search for **chat.disableAIFeatures**
2. Set it to: "chat.disableAIFeatures": true
