- [Notes For All JavaScript Projects](#notes-for-all-javascript-projects)
  - [Install `readline-sync` for console input](#install-readline-sync-for-console-input)
  - [For New Project](#for-new-project)
    - [Initialize Node](#initialize-node)
    - [Install and Configure ESLint](#install-and-configure-eslint)
    - [Initialize and configure Biome](#initialize-and-configure-biome)
    - [✅ Five Quick Steps (Do These Every Project)](#-five-quick-steps-do-these-every-project)
  - [Currency Symbols](#currency-symbols)

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

### Initialize and configure Biome

At the command prompt:

```bash
npm i -D -E @biomejs/biome
npx @biomejs/biome init
```

```bash
# Format all files
npx @biomejs/biome format --write

# Format specific files
npx @biomejs/biome format --write <files>

# Lint files and apply safe fixes to all files
npx @biomejs/biome lint --write

# Lint files and apply safe fixes to specific files
npx @biomejs/biome lint --write <files>

# Format, lint, and organize imports of all files
npx @biomejs/biome check --write

# Format, lint, and organize imports of specific files
npx @biomejs/biome check --write <files>
```

### ✅ Five Quick Steps (Do These Every Project)

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
5. 
   Replace the contents of `.eslintrc.json` with your saved strict version.

6. **Add this to each `.js` file**

   ```js
   // @ts-check
   ``

## Remove CoPilot from VS Code

Choose one method to disable CoPilot:

**In the GUI**

1. Open **Settings** (Cmd/Ctrl + ,)
2. Search for **@feature:chat** 
3. Scroll down to **Chat: Disable AI Features**
4. Check "Disable and hide built-in AI features provided by GitHub Copilot, including chat and inline suggestions."

**In "settings.json"**

1. Search for **chat.disableAIFeatures**
2. Set it to: "chat.disableAIFeatures": true

## Notes and Code for a Universal Number Validator

1. Issue the prompt and trim the answer
2. Check for empty input
3. Coerce string input to a Number or NaN
4. If integer input is needed, use:
   ```js
    if (!Number.isInteger(input)) {
    throw new Error("Input must be a whole number.");
    }
   ```
   If decimal input is allowed, use:
   ```js
   if (Number.isNaN(input)) {
     throw new Error("Invalid number");
   }
  ```
5. Check `min` and `max`

Full code (integer example):

```js
function getValidatedNumber(prompt, min, max) {
	while (true) {
		try {
			const input = question(prompt).trim();

			if (input === "") {
				throw new Error("Input cannot be empty.");
			}

			const value = Number(input);

			if (!Number.isInteger(value)) {
				throw new Error("Input must be a whole number.");
			}

			if (value < min || value > max) {
				throw new Error(`Number must be between ${min} and ${max}.`);
			}

			return value;
		} catch (err) {
			console.error(err.message);
		}
	}
}
```

## Currency Symbols

All currency should be formatted using the production-ready `Intl.NumberFormat()`.

```js
// US Dollar
const currencyFormatter = new Intl.NumberFormat('en-US, {
    style: 'currency',
    currency: 'USD'
});

// Euro Dollar
new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(price,),;

```
