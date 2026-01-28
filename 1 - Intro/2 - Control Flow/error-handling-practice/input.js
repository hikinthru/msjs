// input.js

// // Include readline for user input
// import { question } from "readline-sync";

// // Get input from the user
// const name = question("What is your name? ");

// // Display the input
// console.log(`Hello, ${name}!`);

// // Try to multiply text (this will cause an error)
// try {
// 	const result = "three" * 5;
// 	console.log("Result:", result);
// } catch (error) {
// 	console.log("Oops! Something went wrong:", error.message);
// }
// console.log("The program continues running!");

// A Number Guessing Game
import { question } from 'readline-sync';

// Create a number for the user to guess
const secretNumber = 7;

// Get the user's guess
const userGuess = question('Guess a number between 1 and 10: ');

try {
  // Convert string to number
  const numberGuess = Number(userGuess);

  // Check if it is actually a number
  if (!Number.isInteger(numberGuess)) {
    throw new Error('Please enter a whole number.');
  }

  // Check if number is in range
  if (numberGuess < 1 || numberGuess > 10) {
    throw new Error('Number must be between 1 and 10.');
  }

  // Check if guess is correct
  if (numberGuess === secretNumber) {
    console.log(`Congratulations! ${numberGuess} is correct!`);
  }
  else {
    console.log(`Sorry, the number was ${secretNumber}`);
  }
}
catch (error) {
  console.log(error.message);
}
