/*
Adventure Game
This game will be a text-based adventure game where the player will be able to make choices that affect the outcome of the game. The player will be able to choose their own path and the story will change based on their decisions.
*/

import readline from 'readline-sync';

// Display the game title
console.log("Welcome to the Adventure Game!");

// Add a welcome message
console.log("Prepare yourself for an epic journey!");

// Ask for the player's name
let playerName = readline.question("What is your name, adventurer? ");

// Greet the player and show starting stats
console.log(`Greetings, ${playerName}! Your adventure begins now.`);
let amtGold = 100;
let playerHealth = 100;
console.log(`You start with ${amtGold} gold and ${playerHealth} health.`);
