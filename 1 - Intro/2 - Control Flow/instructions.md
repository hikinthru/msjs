Coursera

Instructions
Lab instructions
1 of 9 completed
​
Context: 
In your adventure game, players will visit the village blacksmith to buy weapons. The blacksmith sells a magical sword that will help players defeat monsters and eventually face the dragon. When a player buys this sword, we need to track how much damage it can do. Until they get the sword, they'll be defenseless against monsters!

Later in the game, you'll see this in action:

game mechanics code block
4321
Blacksmith: 'Looking for weapons?'
You bought a sword!
You feel more powerful.

Steps:
Create a variable for weapon damage

Use let to create a variable called weaponDamage

Since the player starts with no weapon, set this to 0

Display the initial weaponDamage using console.log()

Preview the sword's power

Add a comment showing what weaponDamage will become when they buy the sword

Use console.log() to show: "When you buy a sword, weapon damage will increase to 10!"

🤖 GitHub Copilot Exploration: 
Type this comment and see what Copilot suggests: 

Github copilot code block
1
// Create variable to track weapon damage
⚙️ Test Your Work:
Run your code and verify:

weaponDamage starts at 0

Your preview message displays correctly


💡 Tip: If you ever need to reset the starting code of a lab go into the ? icon in the top right corner (help menu) and in that menu you will see a "Get Latest Version" button. This will pull down the starting files as they were when the lab was first opened.

2 of 9 completed
​
Context: 
Throughout your adventure, you'll encounter monsters in the forest and caves. These monsters have tough skin or armor that reduces the damage they take. We need to track how well they can defend themselves. This will be especially important when facing the dragon!

You'll see this defensive power in action when battling monsters:

task 2 output code block
1234
Monsters appear!
Without a weapon, you must retreat!
You lose 20 health escaping!

Steps:
Create a variable for monster defense

Use let to create a variable called monsterDefense

Early game monsters should have a defense of 5

This makes them tough but not impossible to defeat

Display the monsterDefense using console.log()

Document monster toughness

Add comments explaining what this defense means

Use console.log() to show: "Monsters can withstand some damage in combat!"

🤖 GitHub Copilot Exploration: 
Type this comment and see what Copilot suggests:

github copilot code block
1
 // Setup a simple monster defense value
⚙️ Test Your Work:
Run your code and verify:

monsterDefense is set to 5

Your explanation message displays correctly

3 of 9 completed

Context: 
The marketplace merchant sells healing potions that restore your health when you're injured. Players can buy these potions to recover from battle damage. When used, a potion will restore a specific amount of health - not too little that it's useless, but not so much that battles become too easy!

Here's how potions will work in your game:

task 3 output code block
12345
Merchant: 'Need any potions?'
You bought a health potion!
You drink the health potion.
Health restored to: 100

Steps:
Create a variable for potion healing

Use let to create a variable called healingPotionValue

Potions should restore 30 health

This is a good amount since players start with 100 health

Display the healingPotionValue using console.log()

Test the healing amount

Add comments explaining why 30 is a good healing amount

Use console.log() to show: "A potion will restore 30 health!"

🤖 GitHub Copilot Exploration: 
Type this comment and see what Copilot suggests: 

task 3 github copilot code block
1
// Set healing potion restoration value
⚙️ Test Your Work:
Run your code and verify:

healingPotionValue is set to 30

Your explanation message displays correctly

✅ Success Checklist

weaponDamage variable created and set to 0

monsterDefense variable created and set to 5

healingPotionValue variable created and set to 30

All values display correctly with console.log()

Comments explain how these values will be used

All preview messages show correctly

Common Issues & Solutions

Problem: Values showing as undefined Solution: Make sure you assigned a number value to each variable

Problem: Numbers displaying with quotes Solution: Make sure you didn't put the numbers in quotes (they should be actual numbers)

Key Points

Game values need careful balancing

Variables track important game mechanics

Comments help explain why values were chosen

console.log() helps verify our values

➡️ Next Steps

In future labs, you'll use these values to:

Calculate damage during monster battles

Check if players have enough health to fight

Handle healing during adventures

Create exciting dragon battles!

Reference solution:

```js
// ===========================================
// The Dragon's Quest - Text Adventure Game
// A progression-based learning project
// ===========================================

// Include readline for player input
const readline = require('readline-sync');

// Game state variables
let playerName = "";
let playerHealth = 100;
let playerGold = 20;  // Starting gold
let currentLocation = "village";
let gameRunning = true;
let inventory = [];

console.log("=================================");
console.log("       The Dragon's Quest        ");
console.log("=================================");
console.log("\nYour quest: Defeat the dragon in the mountains!");

// Get player's name
playerName = readline.question("\nWhat is your name, brave adventurer? ");
console.log("\nWelcome, " + playerName + "!");
console.log("You start with " + playerGold + " gold.");

// =========================================
// START Lab: Battle Calculator
// =========================================
// Weapon damage (starts at 0 until player buys a sword)
let weaponDamage = 0;      // Will increase to 10 when player gets a sword
console.log("Starting weapon damage: " + weaponDamage);
console.log("When you buy a sword, weapon damage will increase to 10!");

// Monster defense (affects combat outcomes)
let monsterDefense = 5;    // Monster's defense value
console.log("Monster defense: " + monsterDefense);
console.log("Monsters can withstand some damage in combat!");

// Healing potion restoration (matches final implementation)
let healingPotionValue = 30;  // How much health is restored
console.log("Healing potion value: " + healingPotionValue);
console.log("A potion will restore 30 health!");
// =========================================
// END Lab: Battle Calculator
// =========================================
```
