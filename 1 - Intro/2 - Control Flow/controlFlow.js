// A simple if statement

let age = 12
if (age >= 13) {
  console.log("Welcome! You can access the website.");
}
console.log("Age verification complete.");

// Comparison Operators

console.log(5 == "5");  // true - loose equality - type coercion
console.log(5 === "5"); // false - strict equality - no type coercion
console.log(5 === 5);   // true - strict equality
console.log(5 != "5");  // false - loose inequality
console.log(5 !== "5");  // true - strict inequality

// Logical Operators

// AND (&&)
console.log(true && true);  // true - both are true
console.log(true && false);  // false - they are not both true
// OR (||)
console.log(true || false);  // true - there is at least one true
console.log(false || false);  // false - there is no true
// NOT (!) 
console.log(!true);  // false - true is inverted
console.log(!false);  // true - false is inverted

// Combining operators

let correctUsername = 'student123';
