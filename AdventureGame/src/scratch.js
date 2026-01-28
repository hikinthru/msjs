const userInput = 'a5';

try {
  const number = Number.parseInt(userInput, 10);
  if (Number.isNaN(number)) {
    throw new Error("Please enter a valid number!");
  }
  console.log("You entered:", number);
} catch (error) {
  console.log(error.message);
}

// let counter = 0;
// for (let i = 0; i < 4; i++) {
//     counter += i;
//     console.log("Current counter:", counter);
// }
// console.log("Final value:", counter);

// let result = addNumbers(5, 10);
// console.log(output);

// function addNumbers(a, b) {
// 	return a + b;
// }

// let result = addNumbers(5, 10);
// console.log(output);

// function addNumbers(a, b) {
// 	return a + b;
// } // Output: ReferenceError: output is not defined

// let count = 0;
// while (count < 5) {
// 	console.log(count);
// 	count++;
// }

// function calculateTotal(price, tax) {
// 	return price * tax;
// }
// let total = calculateTotal(100);
// console.log(total);

// for (let i = 5; i > 0; i--) {
// 	console.log(i);
// }

// for (let i = 1; i <= 5; i++) {
// 	console.log(i);
// }

// for (let i = 0; i < 5; i++) {
// 	console.log(i);
// }
