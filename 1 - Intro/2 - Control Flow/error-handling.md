- [Error Handling](#error-handling)
  - [Common Error Types](#common-error-types)
    - [Syntax Errors](#syntax-errors)
  - [Runtime Errors](#runtime-errors)

# Error Handling

## Common Error Types

### Syntax Errors

**Syntax errors** occur when the code doesn't follow the language's rules. For example, if a parantheses is not closed in a math operation. 

```js
let price = 29.99;
let tax = 0.07;
let totalPrice = (price + tax;
console.log("Total Price: $" + totalPrice);

// Output:
// error-handling.js:3
// let totalPrice = (price + tax;
//                              ^
// SyntaxError: Unexpected token ';'
```

## Runtime Errors

**Runtime errors** happen during execution, often due to unexpected conditions. 