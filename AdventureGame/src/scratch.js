let userInput = '5a';

try {
  const number = parseInt(userInput, 10);
  if (Number.isNaN(number)) {
    throw new Error("Please enter a valid number!");
  }
  console.log("You entered:", number);
} catch (error) {
  console.log(error.message);
}

let counter = 0;
for (let i = 0; i < 4; i++) {
    counter += i;
    console.log("Current counter:", counter);
}
console.log("Final value:", counter);
