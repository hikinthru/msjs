Here’s a clear, practical breakdown of **`var` vs `let` vs `const` in JavaScript**, with the key differences that actually matter in day-to-day coding.

---

## 1. `var` (old-school, mostly avoid)

### Scope

* **Function-scoped**, not block-scoped
* Ignores `{}` blocks like `if`, `for`, etc.

```js
if (true) {
  var x = 10;
}
console.log(x); // 10 😬 (leaks outside the block)
```

### Hoisting

* Hoisted to the top of the function
* Initialized as `undefined`

```js
console.log(a); // undefined
var a = 5;
```

### Re-declaration

* Allowed (dangerous)

```js
var count = 1;
var count = 2; // no error
```

### Problems

* Easy to accidentally overwrite variables
* Confusing scope behavior
* Causes subtle bugs

✅ **Use only when maintaining very old code**

---

## 2. `let` (modern, preferred for variables)

### Scope

* **Block-scoped** (`{}` matters)

```js
if (true) {
  let y = 10;
}
console.log(y); // ReferenceError ✅
```

### Hoisting

* Hoisted, but in the **Temporal Dead Zone**
* Cannot be used before declaration

```js
console.log(b); // ReferenceError
let b = 5;
```

### Re-declaration

* ❌ Not allowed in the same scope

```js
let total = 1;
let total = 2; // Error
```

### Reassignment

* ✅ Allowed

```js
let score = 10;
score = 15;
```

✅ **Use when the value will change**

---

## 3. `const` (default choice)

### Scope

* **Block-scoped**, like `let`

### Hoisting

* Same Temporal Dead Zone behavior as `let`

### Re-declaration

* ❌ Not allowed

### Reassignment

* ❌ Not allowed

```js
const pi = 3.14;
pi = 3.14159; // Error
```

### Objects & Arrays (important!)

`const` prevents reassignment, **not mutation**

```js
const user = { name: "Alice" };
user.name = "Bob"; // ✅ OK

user = {}; // ❌ Error
```

```js
const nums = [1, 2, 3];
nums.push(4); // ✅ OK
```

✅ **Use when the variable should never be reassigned**

---

## Side-by-Side Summary

| Feature              | `var`             | `let`     | `const`         |
| -------------------- | ----------------- | --------- | --------------- |
| Scope                | Function          | Block     | Block           |
| Hoisted              | Yes (`undefined`) | Yes (TDZ) | Yes (TDZ)       |
| Re-declarable        | Yes               | No        | No              |
| Reassignable         | Yes               | Yes       | No              |
| Modern Best Practice | ❌ Avoid           | ✅ Yes     | ✅ Yes (default) |

---

## Best Practices (What to Actually Do)

1. **Use `const` by default**
2. Use `let` **only if you need reassignment**
3. Avoid `var` entirely in new code

```js
const MAX_USERS = 100;

let currentUsers = 0;
currentUsers++;

if (currentUsers < MAX_USERS) {
  console.log("Still room!");
}
```

**Hoisting** is JavaScript’s behavior of **moving declarations to the top of their scope during compilation**, *before* the code actually runs.

What’s important: **only the declaration is hoisted — not the initialization.**

---

## The core idea (mental model)

When JavaScript reads your code, it does this in two phases:

1. **Creation phase**

   * Finds variable and function declarations
   * Sets up memory for them
2. **Execution phase**

   * Runs the code line by line

Hoisting happens in **phase 1**.

---

## `var` hoisting (the classic example)

```js
console.log(x); // undefined
var x = 5;
```

JavaScript *treats this as if* you wrote:

```js
var x;          // declaration hoisted
console.log(x);
x = 5;          // assignment stays in place
```

✔️ The variable exists
❌ The value isn’t assigned yet
➡️ Result: `undefined`

---

## `let` and `const` hoisting (Temporal Dead Zone)

`let` and `const` **are hoisted**, but they behave very differently.

```js
console.log(y); // ReferenceError
let y = 10;
```

Why?

* The variable exists
* But it is **unusable** until the declaration line runs

This period is called the **Temporal Dead Zone (TDZ)**.

### TDZ explained simply

> “The variable exists, but you’re not allowed to touch it yet.”

```js
{
  // TDZ starts
  let a = 3;
  // TDZ ends
}
```

Trying to access `a` anywhere before the declaration line throws an error.

---

## `const` is the same as `let` for hoisting

```js
console.log(z); // ReferenceError
const z = 42;
```

Same TDZ rules — plus you must assign a value immediately.

---

## Function hoisting (important distinction)

### Function declarations are fully hoisted

```js
sayHi(); // Works!

function sayHi() {
  console.log("Hi");
}
```

The **entire function** is hoisted, not just the name.

---

### Function expressions are NOT hoisted the same way

```js
sayBye(); // TypeError or ReferenceError

const sayBye = function () {
  console.log("Bye");
};
```

Here:

* `sayBye` follows `let/const` rules
* The function value is assigned later

---

## Quick comparison

| Type                   | Hoisted?             | Usable before declaration? |
| ---------------------- | -------------------- | -------------------------- |
| `var`                  | Yes                  | Yes (`undefined`)          |
| `let`                  | Yes                  | ❌ No (TDZ)                 |
| `const`                | Yes                  | ❌ No (TDZ)                 |
| `function` declaration | Yes                  | ✅ Yes                      |
| function expression    | Variable rules apply |                            |

---

## Why hoisting exists

Hoisting allows:

* Mutual recursion between functions
* Cleaner top-down code reading
* Predictable scope setup

But misuse (especially with `var`) leads to bugs — which is why modern JS favors `let` and `const`.

---

## One-sentence takeaway

Hoisting means JavaScript knows about declarations before it runs your code — but values appear only when execution reaches them.**
