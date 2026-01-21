// input.js

// Include readline for user input
import { question } from "readline-sync";

// Get input from the user
const name = question('What is your name? ');

// Display the input
console.log(`Hello, ${name}!`);
