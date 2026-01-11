/*
The Dragon's Quest
This game will be a text-based adventure game where the player will be able to make choices that affect the outcome of the game. The player will be able to choose their own path and the story will change based on their decisions.
*/

import readline from 'readline-sync';

// Display the game title and a welcome message
console.log("\n=================================");
console.log("       The Dragon's Quest        ");
console.log("=================================");
console.log("\nYour quest: Defeat the dragon in the mountains!");
console.log("Prepare yourself for an epic journey!");

// Starting game state variables
let playerHealth = 100;
let playerGold = 20; 
let currentLocation = "village";
let gameRunning = true;
let inventory = [];
let weaponDamage = 0;
let monsterDefense = 5;
let healingPotionValue = 30;

// Get the player's name and greet them
const playerName = readline.question("\nWhat is your name, adventurer? ");
console.log(`Greetings, ${playerName}! Your adventure begins now!`);

// List the player's current stats
console.log(`Your health is currently ${playerHealth}.`);
console.log(`Your wealth is currently ${playerGold} gold.`);
console.log(`Your weapon damage is currently ${weaponDamage}.`);
console.log('When you buy a sword, weapon damage will increase by 10!');
console.log(`Monster defense is currently ${monsterDefense}.`);
console.log('Monsters can withstand some damage.');
console.log(`You can currently restore up to ${healingPotionValue} health with healing potions.`);
console.log('This is a good amount since players start with 100 health');
