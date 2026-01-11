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

// for (initialization; condition; increment)
for (let i = 1; i <= 5; i++) {
  console.log(`Count: ${i}`);
}

for (let i = 10; i >= 0; i--) {
  console.log(`Count: ${i}`);
}

for (let i = 1; i <=5; i++) {
  console.log(`The number is ${i}`);
}

// while (condition) {do something;}
console.log('Starting tasks with the while loop');
let taskNumber = 1;
while (taskNumber <= 5) {
  console.log(`Task ${taskNumber} completed`);
  taskNumber++; // Forgetting this will create an infinite loop
}
console.log('All tasks completed')
