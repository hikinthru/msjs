// Import question from readline-sync
import { question } from 'readline-sync';

// Calculate area given width and length
function computeArea() {
  while (true) {
    const width = Number(question('Enter the width: '));
    const length = Number(question('Enter the length: '));

    if (width === 'x' || length === 'x') { 
      break; 
    } else if (
      Number.isNaN(width) ||
      Number.isNaN(length) ||
      width <= 0 ||
      length <= 0
    ) {
      console.log('That was not a valid measurement. Try again or type the letter x to exit');
      continue;
    }

    console.log(`The area is ${width * length}`);
    break;
  }
}

computeArea();