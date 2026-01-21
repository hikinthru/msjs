- [Error Handling](#error-handling)
  - [Common Error Types](#common-error-types)
    - [Syntax Errors](#syntax-errors)
  - [Runtime Errors](#runtime-errors)
    - [ReferenceError](#referenceerror)
    - [TypeError](#typeerror)
    - [RangeError](#rangeerror)
  - [Logical Errors](#logical-errors)
  - [Input Errors](#input-errors)
    - [Error Handling for Code Execution](#error-handling-for-code-execution)
    - [Input Validation](#input-validation)
    - [Error Handling for Code Execution](#error-handling-for-code-execution-1)

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

**Runtime errors** happen during execution, often due to unexpected conditions.  Runtime errors include: 

### ReferenceError

Occurs when a variable or function is used that hasn't been declared.

### TypeError

Occurs when an operation cannot be performed on the given value or data type, such as calling a method that does not exist on that type, or attempting to read a property from `null` or `undefined`. 

### RangeError

This error occurs when a value passed to a function is outside the range of allowed values. 

## Logical Errors

A logical error in JavaScript occurs when the code runs without error messages but produces an incorrect or unintended result due to a flaw in the program's logic. 

Examples:
- Using the wrong mathematical operator: The most classic example is using multiplication when addition was intended. The code is syntactically correct, but the output is wrong.
- Incorrect boolean logic or conditions: A misplaced condition or wrong operator (e.g., < instead of <=) can lead to the wrong code path being executed.
- Off-by-one errors in loops: This common error occurs when a loop iterates one time too many or too few, often when dealing with array indices.
- Using the wrong variable: Accidentally referencing an incorrect variable can lead to unexpected outcomes. 
- 
Key Characteristics:
- No error messages: The program runs without crashing or throwing exceptions, making the errors difficult to spot.
- Incorrect output: The program produces an output that deviates from the intended plan.
- Requires thorough debugging: Finding these errors often involves using console.log() statements to check variable values at different stages of execution or using debugger tools to step through the code.

## Input Errors

### Error Handling for Code Execution

Solutions for JavaScript input errors primarily involve input validation (using built-in HTML5 features and custom JavaScript logic) and robust error handling (using try...catch blocks for runtime errors). 

### Input Validation

The most common "input errors" are actually validation failures (e.g., a user entering text where a number is expected). 

- **Use HTML5 Validation Attributes**: Leverage built-in attributes for basic, automatic validation without extensive JavaScript.
  - **required**: Ensures a field is not empty.
  - **type**: Specifies expected input (e.g., email, number).
  - **pattern**: Validates input against a regular expression.
  - **min, max**: Sets limits for numerical inputs.

- **Custom JavaScript Validation**: For complex rules, use JavaScript to check input and provide feedback.
  - **Check Validity**: Use `element.checkValidity()` to see if an input is valid.
  - **Custom Messages**: Use `element.setCustomValidity("Your error message")` to provide specific feedback. An empty string means the input is valid.
  - **Display Errors**: Show/hide dedicated HTML elements (like <span> with error messages) based on the validity status. Use CSS pseudo-classes like `:invalid` to apply styling automatically.

**User Experience (UX) Best Practices**:
- Provide clear, specific error messages (e.g., "Please enter a value between 1 and 10" instead of "Invalid input").
- Validate on relevant events, such as blur (when a user leaves a field) or submit (for a final check), and clear the error on the input event (as the user starts typing the correction).
- Ensure accessibility by using aria-invalid and aria-describedby attributes so screen readers can narrate the errors. 

### Error Handling for Code Execution

For unexpected errors that occur during the execution of your JavaScript code (exceptions), the try...catch statement is the standard solution. 
- `try` block: Contains the code that might cause an error.
- `catch` block: Executes if an error is thrown in the try block. It receives an error object with details.
- `finally` block (optional): Executes after both try and catch, often used for cleanup tasks. 

```js
try {
  // Code that might throw an error, e.g., processing user input
  const userInput = document.getElementById("myInput").value;
  if (isNaN(Number(userInput))) {
    throw new Error("Input is not a valid number");
  }
  
  // Further processing...
} catch (error) {
  // Handle the error (e.g., display a user-friendly message)
  console.error("An error occurred:", error.message);
  // Update UI to show error message
  document.getElementById("errorMessage").textContent = error.message;
} finally {
  // Code that runs regardless of an error (e.g., hiding a loading spinner)
}
```

