# ✅ ESLint Setup — Every New Project

### 1️⃣ Create the project folder

```bash
mkdir my-project
cd my-project
```

### 2️⃣ Initialize npm (once per project)

```bash
npm init -y
```

Why: this gives ESLint a place to live (`package.json`).

### 3️⃣ Install ESLint

```bash
npm install --save-dev eslint
```

### 4️⃣ Initialize ESLint

```bash
npx eslint --init
```

Choose these answers (important):

* ✔ **JavaScript**
* ✔ **Browser** (or Node if applicable)
* ✔ **JSON config** (simplest)
* ✔ **Yes** to install dependencies

This creates `.eslintrc.json`.

### 5️⃣ Replace the config with a strict one

Open `.eslintrc.json` and **replace everything** with this:

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": ["eslint:recommended"],
  "rules": {
    "no-undef": "error",
    "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "no-shadow": "error",
    "eqeqeq": ["error", "always"],
    "curly": ["error", "all"]
  }
}
```

This is your **baseline strict config**.

### 6️⃣ Install the ESLint VS Code extension (once ever)

* Open **Extensions**
* Install **ESLint** by Microsoft
* Reload VS Code

You never do this again.

### 7️⃣ Add this to every `.js` file you write

```js
// @ts-check
```

This gives you:

* typo detection
* better IntelliSense
* extra safety

### 8️⃣ Quick sanity test (do this once per project)

Paste this into any `.js` file:

```js
sum = 5;
cosole.log(sum == "5");
```

You should see errors immediately.

If yes → 🎉 **You’re done.**
If no → stop and fix before coding.

# 🧠 What this setup protects you from

✔ Misspelled names (`cosole`)
✔ Accidental globals
✔ Silent logic errors
✔ Loose comparisons
✔ Dead code

# 📌 Save this as your personal checklist

You can literally copy-paste this into a note and follow it every time.

### Optional (later, not now)

* Prettier (formatting)
* Shared ESLint config
* TypeScript

None are required to be productive.

### One-sentence summary

> New project → npm init → ESLint → paste config → `@ts-check` → code safely.

### ✅ 5 Quick Steps (Do These Every Time)

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
   ```


