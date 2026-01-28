1.
Question 1
Which part of a try-catch-finally block will always execute, regardless of whether an error occurred?


The try block.



None of the above will always execute.



The catch block.



x The finally block.


Correct
Correct! The finally block always executes, whether or not an error occurred, providing a place for clean-up operations.

1 / 1 point
2.
Question 2
In JavaScript, how would you check if a variable inputValue is not empty before processing?


if (inputValue.length > 1)



if (inputValue == null)



x if (inputValue !== '')



if (inputValue != NaN)


Correct
Correct! This checks if the inputValue is not an empty string.

1 / 1 point
3.
Question 3
In JavaScript, how would you implement a conditional statement to check if two values are equal and both conditions A and B are true?


Use the === operator to assign values and the || operator to break conditions.



Use the < operator to concatenate strings and the ! operator for equality checks.



x Use the === operator to compare values and the && operator to combine conditions.



Use the != operator to increase a variable's value and the ++ operator to compare conditions.


Correct
Good try! Remember that the === operator checks for equality of values and the && operator is used to combine multiple conditions logically.

1 / 1 point
4.
Question 4
What is a recommended method to handle multiple related conditions in JavaScript?


x Use else if statements to check multiple conditions



Use nested if statements for clarity



!x Use a switch statement for all types of conditions



Use multiple if statements for each condition


Incorrect
Close, but switch is best for equality checks rather than complex conditions.

1 point
5.
Question 5
In a switch statement, what keyword is used to end a case and prevent fall-through?


stop



x break



end



exit


Correct
Well done! The break keyword is essential to control the flow in a switch statement.

1 / 1 point
6.
Question 6
What is the purpose of the condition in a while loop?


To establish how many times the loop will run



To increment the loop counter



To initialize variables used in the loop



x To determine whether the loop should continue running


Correct
Correct! The condition in a while loop controls whether the loop will execute again or stop.

1 / 1 point
7.
Question 7
Identify the common JavaScript errors in the provided code snippet:

12345678

```js
let result = addNumbers(5, 10);
console.log(output);

function addNumbers(a, b) {
    return a + b;
}
```

Select all that apply.


Type error due to incompatible data types



Syntax error in the function definition



x Reference error due to undeclared variable 'output'



No error in the given code


Correct
Correct! 'output' is used without being declared, leading to a reference error.

1 / 1 point
8.
Question 8
How can you use a for loop to sum integers from 1 to 10 in JavaScript?

x
```js
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
```




123456

let sum = 0;
for (let i = 0; i < 10; i++) {
    sum += i;
}




123456

let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum = i;
}




123456

let sum = 10;
for (let i = 1; i <= 10; i++) {
    sum = sum + i;
}



Correct
Correct! This loop correctly sums integers from 1 to 10 by incrementing i and adding each value to sum .

1 / 1 point

9.
Question 9
What is the role of the initialization statement in a 'for' loop?


x It sets up the loop control variable before the loop starts.



It updates the loop control variable after each iteration.



It contains the block of code to be executed in each iteration.



It checks the condition to continue or exit the loop.


Correct
Correct! The initialization statement prepares the loop control variable.

1 / 1 point
10.
Question 10
Write a try-catch block that attempts to convert the variable userInput to a number using parseInt(). If the conversion fails or results in NaN (Not a Number), the catch block should display the message "Please enter a valid number!" using console.log()

Tip: Add a Javascript Code Block by clicking the <> icon in your answer bar.

123456789
```js
try {
  const number = Number.parseInt(userInput, 10);
  if (Number.isNaN(number)) {
    throw new Error("Please enter a valid number!");
  }
  console.log("You entered:", number);
} catch (error) {
  console.log(error.message);
}
```

1.
Question 1
In a try-catch block, where should you place code that might throw an error?


After the try-catch block.



Inside the catch block.



x Inside the try block.



Inside a finally block.


Correct
Correct! Code that may throw an error should be placed inside the try block to properly handle any exceptions that occur.

1 / 1 point
2.
Question 2
When processing user input in JavaScript, what is the best method to check if a string input is empty?


Using input === undefined



x Using input.trim() === ''



Using input.length === 0



Using input == null


Correct
Correct! Using trim() removes whitespace, allowing you to accurately check if the string is truly empty.

1 / 1 point
3.
Question 3
Which JavaScript code snippet correctly assigns a grade based on the value of score using conditional statements?


if (score < 90) { grade = 'A'; } else { grade = 'B'; }



x if (score >= 90) { grade = 'A'; } else if (score >= 80) { grade = 'B'; } else { grade = 'C'; }



if (score = 90) { grade = 'A'; } else if (score = 80) { grade = 'B'; } else { grade = 'C'; }



if (score > 90) { grade = 'A'; } if (score > 80) { grade = 'B'; } else { grade = 'C'; }


Correct
Well done! This is a perfect example of using if , else if , and else to implement conditional logic based on score ranges.

1 / 1 point
4.
Question 4
What structure would you use to execute a block of code only if a certain condition is true?


Use a for loop



x Use an if statement



Use a function call



Use a while loop


Correct
Correct! An if statement is used to execute a block of code only if a specified condition is true.

1 / 1 point
5.
Question 5
What is the primary purpose of an if statement in JavaScript?


x To execute a block of code conditionally based on a true or false condition.



To define a block of code that runs without any conditions.



To repeat a block of code multiple times.



To declare variables.


Correct
Great job! You understand how conditional statements work to control code flow.

1 / 1 point
6.
Question 6
Consider the following JavaScript code snippet:

1234567

let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

What will be the output of this code?


x 0 1 2 3 4



The code has a syntax error



0 1 2 3 4 5



1 2 3 4 5


Correct
Correct! The loop starts at 0 and runs until count is less than 5, printing each value before incrementing.

1 / 1 point
7.
Question 7
Consider the following JavaScript code snippet:

1234567

function calculateTotal(price, tax) {
    return price * tax;
}
let total = calculateTotal(100);
console.log(total);

What type of error would be thrown by this code?


Reference error



x Logical error



Type error



Syntax error


Correct
Congratulations! Logical errors occur when the code doesn't perform the intended task, usually without throwing explicit errors. In this case, you get a logic error because the function is called with missing arguments, leading to unintended behavior (NaN)without breaking the code.

1 / 1 point
8.
Question 8
Which of the following code snippets correctly implements a for loop that iterates 5 times, incrementing the counter by 1 each time?


12345

for (let i = 1; i <= 5; i++) {
    console.log(i);
}




12345

for (let i = 5; i > 0; i--) {
    console.log(i);
}




12345

for (let i = 0; i < 5; i += 2) {
    console.log(i);
}




12345

x for (let i = 0; i < 5; i++) {
    console.log(i);
}



Correct
Great job! This loop starts at 0 and correctly increments by 1 until it reaches 5.

1 point
9.
Question 9
What component is necessary for both 'for' and 'while' loops to prevent infinite loops?


An initialization statement for the loop variable.

An increment statement for the control variable.


A block of code that changes the loop variable.



x A condition that eventually becomes false.


Correct
Correct! A terminating condition prevents infinite loops in both types.



