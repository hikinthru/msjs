/*
Adventure Game
This game will be a text-based adventure game where the player will be able to make choices that affect the outcome of the game. The player will be able to choose their own path and the story will change based on their decisions.
*/

import readline from 'readline-sync';

console.log("=================================");
console.log("       The Dragon's Quest        ");
console.log("=================================");
console.log("\nYour quest: Defeat the dragon in the mountains!");

// Ask for the player's name
const playerName = readline.question("What is your name, adventurer? ");

// Greet the player and show starting stats
console.log(`Greetings, ${playerName}! Your adventure begins now.`);
let playerGold = 100;
let playerHealth = 20;
console.log(`You start with ${playerGold} gold and ${playerHealth} health.`);
