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
let correctPassword = 'pass123';
let loginSuccess = (correctUsername === 'student23') && (correctPassword === 'pass123')
if (loginSuccess) {
  console.log('Login successful');
} else {
  console.log('Login unsuccessful');
}

// Shipping Calculator

let orderTotal = 51;
let destination = 'domestic';
let shipping = 0;
// Calculate shipping cost
if (destination === 'domestic') {
  if (orderTotal < 25) {
    shipping = 10;
  } else if (orderTotal >= 25 && orderTotal <= 50) {
    shipping = 5;
  } 
}

// Format the label
const labelWidth = 25;
const valueWidth = 16;

const left = text => String(text).padEnd(labelWidth);
const right = text => String(text).padStart(valueWidth);

// Display final costs
console.log(`${left(`Subtotal before shipping:`)}${right(`$${orderTotal.toFixed(2)}`)}`);
console.log(`${left(`Shipping cost:`)}${right(`$${shipping.toFixed(2)}`)}`);
console.log(`${left(`Total cost:`)}${right(`$${(orderTotal + shipping).toFixed(2)}`)}`);

console.log('');

// Menu Selection with a Switch
// let choice = 'burger';
// switch (choice) {
//   case 'burger':
//     console.log("You selected a burger.");
//     break;
//   case 'pizza':
//     console.log("You selected a pizza.");
//     break;
//   case 'salad':
//     console.log("You selected a salad.");
//     break;
//   default:
//     console.log("Invalid selection.");
//     break;
// }

// let choice = 'burger';
// switch(choice) {
//   case 'burger':
//     console.log('Burger: $10');
//     console.log('Preparation time: 15 minutes');
//     break;
//   case 'pizza':
//     console.log('Pizza: $12');
//     console.log('Preparation time: 20 minutes');
//     break;
//   case 'salad':
//     console.log('Salad: $8');
//     console.log('Preparation time: 10 minutes');
//   default:
//     console.log('Sorry, that item is not on our menu.');
//   }

// let direction = 'north';
// switch(direction) {
//   case 'north':
//     console.log('You head towards the mountains');
//     break;
//   case 'east':
//     console.log('You enter the forest');
//     break;
//   case 'south':
//     console.log('You travel to the sea');
//     break;
//   case 'west':
//     console.log('You approach the desert');
//     break;
//   default:
//     console.log('Invalid direction!');
// }

if (playerScore >= 100) {
  console.log('You win!');
} else {
  console.log('Try again!');
}