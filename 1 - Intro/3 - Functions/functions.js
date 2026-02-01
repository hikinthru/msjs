// Import question from readline-sync
import { question } from 'readline-sync';

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

function getPositiveNumber(prompt) {
  while (true) {
    let input = question(prompt).trim();

    if (input.trim().toLowerCase() === 'x') {
      return null;
    }

    input = Number(input);

    if (
      Number.isNaN(input) || input <= 0) {
        console.log('Please enter a number that is above zero, or x to exit.');
        continue;
    }
    return input;
  }
}

function computeArea() {
  const width = getPositiveNumber('Enter the width: ');
  if (width === null) {
    console.log('Goodbye!');
    return;
  }

  const length = getPositiveNumber('Enter the length: ');
  if (length === null) {
    console.log('Goodbye!');
    return;
  }

  console.log(`The area is: ${width * length}`);
}

// computeArea();

function getValidatedNumber(prompt, min, max) {
    while (true) {

      const input = question(prompt).trim();

      if (input === "") {
        console.log("Input cannot be empty.");
        continue;
      }

      const value = Number(input);

      if (!Number.isInteger(value)) {
        console.log("Input must be a whole number.");
        continue;
      }

      if (value < min || value > max) {
        console.log(`Number must be between ${min} and ${max}.`);
        continue;
      }

      return console.log(value);
    }
  }

  getValidatedNumber('Enter a number from 1 to 10: ', 1, 10);
