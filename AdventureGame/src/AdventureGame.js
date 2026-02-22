// AdventureGame.js
// ===========================================
// The Dragon's Quest - Text Adventure Game
// A progression-based learning project
// ===========================================

// Include readline for player input
import { question } from "readline-sync";

// Utility functions 
// 
// Capitalize first letters
function capitalizeFirstLetter(string) {
	if (typeof string !== "string" || string.length === 0) {
		return ""; // Handle empty or non-string input
	}
	return string.charAt(0).toUpperCase() + string.slice(1);
}

// Validate menu selection
function getValidatedNumber(prompt, min, max) {
  while (true) {
    try {
      const input = question(prompt).trim();

      if (input === "") {
        throw new Error("Input cannot be empty.");
      }

      const value = Number(input);

      if (!Number.isInteger(value)) {
        throw new Error("Input must be a whole number.");
      }

      if (value < min || value > max) {
        throw new Error(`Number must be between ${min} and ${max}.`);
      }

      return value;
    } catch (err) {
      console.error(err.message);
    }
  }
}

console.log("\n=================================");
console.log("       The Dragon's Quest        ");
console.log("=================================");
console.log("\nYour quest: Defeat the dragon in the mountains!");

//
// Game state variables
//
let gameRunning = true;
let currentLocation = "village";
console.log(`Your starting location is the ${currentLocation}`);
// let firstVisit = true;
// biome-ignore lint/style/useConst: temporary
let hasWeapon = false;
// biome-ignore lint/style/useConst: temporary
let hasPotion = false;
// biome-ignore lint/style/useConst: temporary
let hasArmor = false;
let playerName = "";
// biome-ignore lint/style/useConst: reason
let playerHealth = 100;
// biome-ignore lint/style/useConst: reason
let playerGold = 20; // Starting gold
// let inventory = [];

// Get player's name
playerName = question("\nWhat is your name, brave adventurer? ");
console.log(`\nWelcome, ${playerName}!`);
console.log(`You start with ${playerGold} gold.`);

// Weapon damage (starts at 0 until player buys a sword)
// biome-ignore lint/style/useConst: reason
let weaponDamage = 0; 
console.log(`Starting weapon damage: ${weaponDamage}`);
console.log("When you buy a sword, weapon damage will increase to 10!");

// Monster defense (affects combat outcomes)
// biome-ignore lint/style/useConst: reason
let monsterDefense = 5; // Monster's defense value
console.log(`Monster defense: ${monsterDefense}`);
console.log("Monsters can withstand some damage in combat!");

// Healing potion restoration (matches final implementation)
// biome-ignore lint/style/useConst: reason
let healingPotionValue = 30; // How much health is restored
console.log(`Healing potion value: ${healingPotionValue}`);
console.log("A potion will restore 30 health!");

// ***************************** //
// Game Functions                //
// ***************************** //

// Function for battles
function doBattle() {
	if (hasWeapon && hasArmor) {
		// A simple battle when entering the forest
		let inBattle = true;
		let monsterHealth = 3;
		console.log("\nYou are suddenly attacked by a monster!");
		console.log("You attack!");

		while (inBattle) {
			console.log(`\nThe monster's health is ${monsterHealth}.`);
			console.log("You attack!");

			// Player damages the monster
			monsterHealth--;

			if (monsterHealth <= 0) {
				console.log("\nThe monster is defeated!");
				inBattle = false;
			}
		}
		console.log("\n...you return to the safety of the village in triumph!");
		currentLocation = "village";
		showLocation();
	}
	// let hasWeapon = false;
	// 	// biome-ignore lint/style/useConst: temporary
	// 	let hasPotion = false;
	// 	// biome-ignore lint/style/useConst: temporary
	// 	let hasArmor = false;
}

// Function to show location and choices
function showLocation() {
	// Location banner
	console.log(
    `\n====== ${currentLocation.toUpperCase()} ======`
  );

	// Choices for all locations but the village
	function locationNotVillage() {
		console.log("\nWhat would you like to do?");
		console.log("1: Return to the Village");
		console.log("2: Check your Status");
		console.log("3: Check your Inventory");
		console.log("4: Quit the game");
	}

	// Choices for the village
	if (currentLocation === "village") {
		console.log(
			"You're in a bustling village. The blacksmith and market are nearby.",
		);
		console.log("\nWhat would you like to do?");
		console.log("1: Go to the Blacksmith");
		console.log("2: Go to the Market");
		console.log("3: Enter the Forest");
		console.log("4: Check your Status");
		console.log("5: Check your Inventory");
		console.log("6: Quit the Game");
	}

	// Special note from the blacksmith
	else if (currentLocation === "blacksmith") {
		console.log(
			"The heat from the forge fills the air. Weapons and armor line the walls.",
		);
		locationNotVillage();
	}

	// Special note from the market
	else if (currentLocation === "market") {
		console.log(
			"Merchants sell their wares from colorful stalls. A potion seller catches your eye.",
		);
		locationNotVillage();
	}

	// Scenario for the forest with a battle
	else if (currentLocation === "forest") {
		console.log(  
			"\nA dark forest surrounds you. You hear strange sounds from within...",
		);

    // A battle ensues
    doBattle();
	}
}

// Function to show status
function showStatus() {
	console.log(`\n=== ${playerName}'s Status ===`);
	console.log(`\n❤️  Health: ${playerHealth}`);
	console.log(`💰 Gold: ${playerGold}`);
	console.log(`📍 Location: ${capitalizeFirstLetter(currentLocation)}`);
	console.log(
		`🗡️  Weapon Damage: ${weaponDamage > 0 ? weaponDamage : "(You need to buy a sword!)"}`,
	);
	console.log(`🧪 Healing Potion: ${healingPotionValue}`);
	console.log(`👹 Monster Defense: ${monsterDefense}`);
}

// Function to show inventory
function showInventory() {
	console.log("\nChecking Inventory...");
	for (let slot = 1; slot <= 3; slot++) {
		console.log(`\nChecking item slot ${slot}...`);
		if (slot === 1 && hasWeapon) {
			console.log("Found Sword");
		} else if (slot === 2 && hasPotion) {
			console.log("Found Healing Potion");
		} else if (slot === 3 && hasArmor) {
			console.log("Found Shield");
		} else {
			console.log("Empty slot");
		}
	}
}

// Get the player's choice and implement it 
function move() {
  	const choiceNum = getValidatedNumber("\nPlease make a selection: ", 1, 6);

    // Choice handling: if...
    if (currentLocation === "village") {

      // ...in the village
      if (choiceNum === 1) {
        console.log("\nYou enter the blacksmith's shop.");
        currentLocation = "blacksmith";
      } else if (choiceNum === 2) {
        console.log("\nMerchants call out their wares");
        currentLocation = "market";
      } else if (choiceNum === 3) {
        console.log("\nYou go into the forest.");
        currentLocation = "forest";
      } else if (choiceNum === 4) {
        showStatus();
      } else if (choiceNum === 5) {
        showInventory();
      } else if (choiceNum === 6) {
        endGame();
      } else {
        console.log("Invalid choice. Please make a selection.");
      }
    }

    // Else if anywhere else...
    else {
      if (choiceNum === 1) {
        console.log("\nYou go into the Village.");
        currentLocation = "village";
      } else if (choiceNum === 2) {
        showStatus();
      } else if (choiceNum === 3) {
        showInventory();
      } else if (choiceNum === 4) {
        endGame();
      }
    }
}



// Function to end the game
function endGame() {
	console.log(
		`\nThank you for playing The Dragon's Quest! Farewell ${playerName}!\n`,
	);
	gameRunning = false;
}

// Main game loop
while (gameRunning) {
	// Display location and action options
	showLocation();

  // Implement the player's choice
  move();

  // Check if player died
  if (playerHealth <= 0) {
    console.log("\nGame Over! Your health reached 0!");
    gameRunning = false;
  }
}

// End of game loop
