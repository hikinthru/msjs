// Import question from readline-sync
// import { question } from 'readline-sync';

// Calculate area given width and length
// function computeArea() {
//   while (true) {
//     const widthInput = question('Enter the width: ');
//     const lengthInput = question('Enter the length: ');

//     if (
//       widthInput.trim().toLowerCase() === 'x' || 
//       lengthInput.trim().toLowerCase() === 'x'
//     ) { 
//       console.log('Goodbye!');
//       break; 
//     } 
    
//     const width = Number(widthInput);
//     const length = Number(lengthInput);

//     if (
//       Number.isNaN(width) ||
//       Number.isNaN(length) ||
//       width <= 0 ||
//       length <= 0
//     ) {
//       console.log(
//         'That was not a valid measurement. Try again or type the letter x to exit'
//       );
//       continue;
//     }

//     console.log(`The area is ${width * length}`);
//     break;
//   }
// }

// function getPositiveNumber(prompt) {
//   while (true) {
//     let input = question(prompt).trim();

//     if (input.trim().toLowerCase() === 'x') {
//       return null;
//     }

//     input = Number(input);

//     if (
//       Number.isNaN(input) || input <= 0) {
//         console.log('Please enter a number that is above zero, or x to exit.');
//         continue;
//     }
//     return input;
//   }
// }

// function computeArea() {
//   const width = getPositiveNumber('Enter the width: ');
//   if (width === null) {
//     console.log('Goodbye!');
//     return;
//   }

//   const length = getPositiveNumber('Enter the length: ');
//   if (length === null) {
//     console.log('Goodbye!');
//     return;
//   }

//   console.log(`The area is: ${width * length}`);
// }

// // computeArea();

// function getValidatedNumber(prompt, min, max) {
//     while (true) {

//       const input = question(prompt).trim();

//       if (input === "") {
//         console.log("Input cannot be empty.");
//         continue;
//       }

//       const value = Number(input);

//       if (!Number.isInteger(value)) {
//         console.log("Input must be a whole number.");
//         continue;
//       }

//       if (value < min || value > max) {
//         console.log(`Number must be between ${min} and ${max}.`);
//         continue;
//       }

//       return console.log(value);
//     }
//   }

//   getValidatedNumber('Enter a number from 1 to 10: ', 1, 10);

// Create these two functions:
// 1. calculateTax(price) - returns the tax amount (10% of price)
function calculateTax(price) {
  return price * .10;
}
// 2. calculateTotal(price) - uses calculateTax() to return price + tax
function calculateTotal(price) {
  let total = calculateTax(price) + price;
  return total;
}
// Test your functions with a $50 item
console.log(`$${calculateTotal(50).toFixed(2)}`);

// Create a function that formats prices
// Parameters: price, currencySymbol, decimals
// Example output: $29.95 or €29.95
// Your code here:
function formatPrices(price, currencySymbol = '$', decimals = 2) {
  if (price < 0) {
    return 'Price cannot be negative.'
  }
  let formatted = price.toFixed(decimals);
  return currencySymbol + formatted;
}
// Test your function with different prices and currencies
console.log(formatPrices(29.95));
console.log(formatPrices(29.95, ''))
