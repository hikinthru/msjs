// ****************************************************
// Types of JavaScript Loops
// Besides the classic for loop, JavaScript offers
// other iteration methods: 
//
// for...in: Iterates over the enumerable properties
// (keys) of an object. It is not recommended for use 
// with arrays.
//
// for...of: Iterates over the values of iterable
// objects like arrays, strings, maps, and sets.
//
// Array.prototype.forEach(): A functional approach to
// iterate over elements in an array.
//
// while: Continues looping as long as a specified
// condition remains true. Used when the number of
// iterations is not known beforehand.
//
// do...while: Similar to while, but guarantees the
// code block is executed at least once before checking
// the condition. 
//*****************************************************

// // for (initialization; condition; increment)
// for (let i = 1; i <= 5; i++) {
//   console.log(`Count: ${i}`);
// }

// for (let i = 10; i >= 0; i--) {
//   console.log(`Count: ${i}`);
// }

// for (let i = 1; i <=5; i++) {
//   console.log(`The number is ${i}`);
// }

// // while (condition) {do something;}
// console.log('Starting tasks with the while loop');
// let taskNumber = 1;
// while (taskNumber <= 5) {
//   console.log(`Task ${taskNumber} completed`);
//   taskNumber++; // Forgetting this will create an infinite loop
// }
// console.log('All tasks completed');

// for (let count = 1; count <= 5; count++) {
//   console.log(`Count ${count}`);
// }
// console.log('Counting Complete!');

// // While loops
// let sum = 0;
// let target = 10;
// while (sum < target) {
//   sum = sum + 2;
//   console.log(`Sum is now ${sum}`);
// }
// console.log('Reached the target!');

// Write a loop that counts to 10
// let count = 1;
// let max = 10;
// while (count <= max) {
//   console.log(count);  
  
// // Add an if/else to show "Halfway!" at 5
//   if (count === max/2) {
//     console.log("Halfway!");
//   }
//   count++;
// }
// // Don't forget a completion message!
// console.log('Count complete!')

// The % operator gives you the remainder after division
// Example: 5 % 2 equals 1 (5 divided by 2 equals 2 with remainder 1)
// Even numbers have a remainder of 0 when divided by 2
// Write a loop to find even numbers from 1 to 6
// let num = 1;
// let max = 6;
// let evens = 0;


// while (num <= max) {
//   if (num % 2 === 0) {
//     console.log(`${num} is even!`)
//     evens++;
//   }
//   num++;
// }
// // Don't forget to show how many even numbers were found!
// console.log(`There were ${evens} even numbers!`)

// // Using a `for` loop
// let evenCount = 0;
// for (let number = 1; number <= 6; number++) {
//   if (number % 2 === 0) {
//     console.log(`${number} is even`);
//     evenCount++;
//   }
// }
// console.log(`There were ${evenCount} even numbers`);

// // Count to five using a `for` statement
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// let total = 0;
// let highest = 10;
// while (total <= highest) {
//   console.log(`The total is now ${total}`);
//   total+=2;
// }

// // Write a loop that counts to 10
// // Add an if/else to show "Halfway!" at 5
// // Your code here:
// for (let j = 1; j <= 10; j++) {
//   console.log(j);
//   if (j === 5) {
//     console.log('Halfway there!')
//   }
// }
// // Don't forget a completion message!
// console.log('Counting finished!')

// // Do the same thing with a while loop
// let k = 1;
// while (k <= 10) {
//   console.log(k);
//   if (k === 5) {
//     console.log('Halfway there!')
//   }
//   k++
// }
// console.log('Counting finished!')

// The % operator gives you the remainder after division
// Example: 5 % 2 equals 1 (5 divided by 2 equals 2 with remainder 1)
// Even numbers have a remainder of 0 when divided by 2
// Write a loop to find even numbers from 1 to 6
// Your code here:
// let evens = 0
// for (let num = 1; num <= 6; num++) {
//   if (num % 2 === 0) {
//     console.log(num);
//     evens++;
//   }
// }
// // Don't forget to show how many even numbers were found!
// console.log(`There were ${evens} even numbers`);
// let i = 1;
// let evenCount = 0;
// while (i <=6) {
//   if (i % 2 === 0) {
//     console.log(i);
//     evenCount++;
//   }
//   i++;
// }
// console.log(`There were ${evenCount} even numbers`);

// Write a loop that counts to 10
// Add an if/else to show "Halfway!" at 5
// Your code here:
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log(`${i} is halfway!`);
  } else {
    console.log(i);
  }
}
// Don't forget a completion message!
console.log('Counting done!')

let i = 1;
while (i <= 10) {
  if (i === 5) {
    console.log(`${parseInt(i)} is halfway!`)    
  } else {
    console.log(i);
  }
  i++;
}
console.log('Counting done!')

// The % operator gives you the remainder after division
// Example: 5 % 2 equals 1 (5 divided by 2 equals 2 with remainder 1)
// Even numbers have a remainder of 0 when divided by 2
// Write a loop to find even numbers from 1 to 6
// Your code here:
let num = 1;
let evens = 0;
while (num <= 10) {
  if (num % 2 === 0) {
    evens++;
    console.log(`${num} is even`);
  }
  num++;
}
// Don't forget to show how many even numbers were found!
console.log(`There are ${evens} even numbers`);

evens = 0;
for (let j = 0; j <= 10; j++) {
  if (j % 2 === 0) {
    console.log(`${j} is even`);
    evens++
  }
  j++
}
console.log(`There are ${evens} even numbers`);

evens = 0;
for (let j = 0; j <= 10; j++) {
  if (j % 2 === 0) {
    console.log(`${j} is even`);
    evens++
  }
  j++
}
console.log(`There are ${evens} even numbers`)

// Brushing 32 teeth
for (let t = 1; t <= 32; t++) {
  console.log(`You have brushed ${t} teeth`);
}
console.log('All teeth brushed');

// Eating a meal
let isFull = false;
let hungerLevel = 42;
while (isFull === false) {
  if (hungerLevel === 0) {
    isFull = true;
  }
  hungerLevel--;
}

