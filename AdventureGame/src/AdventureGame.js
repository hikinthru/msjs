// AdventureGame.js
// ===========================================
// The Dragon's Quest - Text Adventure Game
// A progression-based learning project
// ===========================================

// Include readline for player input
import { question } from "readline-sync";


console.log("\n=================================");
console.log("       The Dragon's Quest        ");
console.log("=================================");
console.log("\nYour quest: Defeat the dragon in the mountains!");

// Starting state variables
let playerName = "";
// biome-ignore lint/style/useConst: reason
let playerHealth = 100;
// biome-ignore lint/style/useConst: reason
let playerGold = 20; // Starting gold
// biome-ignore lint/style/useConst: reason
let inventory = [];

// Get player's name
playerName = question("\nWhat is your name, brave adventurer? ");
console.log(`\nWelcome, ${playerName}!`);
console.log(`You start with ${playerGold} gold.`);

// Weapon damage (starts at 0 until player buys a sword)
// biome-ignore lint/style/useConst: reason
let weaponDamage = 0; // Will increase to 10 when player gets a sword
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

// Game state variables
let gameRunning = true;
let currentLocation = 'village';
console.log(`Your starting location is the ${currentLocation}`)
let firstVisit = true;
// biome-ignore lint/style/useConst: temporary
let hasWeapon = false;
// biome-ignore lint/style/useConst: temporary
let hasPotion = false;
// biome-ignore lint/style/useConst: temporary
let hasArmor = false;

// Function to show status
function showStatus() {
	console.log(`\n=== ${playerName}'s Status ===`);
	console.log(`\n❤️  Health: ${playerHealth}`);
	console.log(`💰 Gold: ${playerGold}`);
	console.log(`📍 Location: ${currentLocation}`);
	console.log(
		`🗡️  Weapon Damage: ${weaponDamage > 0 ? weaponDamage : "(You need to buy a sword!)"}`,
	);
	console.log(`🧪 Healing Potion: ${healingPotionValue}`);
	console.log(`👹 Monster Defense: ${monsterDefense}`);
}

// Function to show inventory
function showInventory() {
	for (let slot = 1; slot <= 3; slot++) {
		console.log(`\nChecking item slot ${slot}...`);
		if (slot === 1 && hasWeapon) {
      console.log('Found Sword');
		} else if (slot === 2 && hasPotion) {
        console.log('Found Healing Potion');
    } else if (slot === 3 && hasArmor) {
        console.log('Found Shield');
    } else {
      console.log('Empty slot')
    }
	}
}

// Function to end the game
function endGame() {
  console.log("\nThank you for playing The Dragon's Quest! Farewell, adventurer!\n");
	gameRunning = false;
}

// Main game loop
while (gameRunning) { 
  // Display location and options

  // Location === village
  if (currentLocation === "village") {
    
    //Welcome
    console.log("\n=== VILLAGE ===");
    console.log(
      "\nYou're in a bustling village. The blacksmith, forest and market are nearby.",
    );
    if (firstVisit) {
      console.log(
        "\nVillager: Welcome, adventurer! Rumor has it there's a dragon in the mountains...",
      );
      firstVisit = false;
    }

    // Options
    console.log("\nWhere would you like to go?");
    console.log("\n1: Go to the Blacksmith");
    console.log("2: Go to the Market");
    console.log("3: Enter the Forest");
    console.log("4: Check your Status");
    console.log("5: Check your Inventory");
    console.log("6: End the Game");
  }

  // Location === blacksmith
  else if (currentLocation === "blacksmith") {
    // Welcome
    console.log("\n=== BLACKSMITH ===");
    console.log(
      "\nThe heat from the forge fills the air. Weapons and armor line the walls.",
    );

    // Options
    console.log("\nWhere would you like to go?");
    console.log("\n1: Go to the Village");
    console.log("2: Go to the Market");
    console.log("3: Enter the Forest");
    console.log("4: Check your Status");
    console.log("5: Check your Inventory");
    console.log("6: End the Game");
  }

  // Location === market
  else if (currentLocation === "market") {
    // Welcome
    console.log("\n=== MARKET ===");
    console.log(
      "\nMerchants sell their wares from colorful stalls. A potion seller catches your eye.",
    );

    // Options
    console.log("\nWhere would you like to go?");
    console.log("\n1: Go to the Village");
    console.log("2: Go to the Blacksmith");
    console.log("3: Enter the Forest");
    console.log("4: Check your Status");
    console.log("5: Check your Inventory");
    console.log("6: End the Game");
  }

  // Location === forest
  else if (currentLocation === "forest") {
    // Welcome
    console.log("\n=== FOREST ===");
    console.log(
      "\nA dark forest surrounds you. You hear strange noises from within...",
    );

    // A simple battle when entering the forest
    let inBattle = true;
    let monsterHealth = 3;
    console.log("\nYou are attacked by a monster!");
    while (inBattle) {
      console.log(`\nThe monster's health is ${monsterHealth}.`);
      console.log("You attack!");
      monsterHealth--;
      if (monsterHealth <= 0) {
        console.log("\nThe monster is defeated!");
        inBattle = false;
      }
    }
    console.log("\n...you return to the safety of the village in triumph!");
    currentLocation = "village";
  }

//   // Get player's choice
// try {
//     const choice = question("\nEnter choice num1ber: ");
//     if (isNaN(Number.parseInt(choice))) {
//       throw new Error("Input is not a number. Please enter a number from 1 to 6.");      
//     }
//     if (choice === "") {
//       throw new Error("Please enter a number from 1 to 6.");
//     }
// }
// catch (error) {
//   console.error(`An error occurred: ${error.message}`)
// }

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

  const choiceNum = getValidatedNumber(
    "\nPlease enter a number from 1 to 6: ", 1, 6
  );

 // Choice handling: if...

  // ...in the village
  if (currentLocation === "village") {
    if (choiceNum === 1) {
      console.log("\nYou enter the blacksmith's shop.");
      currentLocation = "blacksmith";
    } 
    else if (choiceNum === 2) {
      console.log("\nMerchants call out their wares");
      currentLocation = "market";
    } 
    else if (choiceNum === 3) {
      console.log("\nYou go into the forest.");
      currentLocation = "forest";
    } 
    else if (choiceNum === 4) {
      showStatus();
    } 
    else if (choiceNum === 5) {
      showInventory();
    } 
    else if (choiceNum === 6) {
      endGame();
    } 
    else {
      console.log("Invalid choice. Please enter a number from 1 to 6.");
    }
  }

  // ...in the blacksmith
  else if (currentLocation === "blacksmith") {
    if (choiceNum === 1) {
      console.log("\nYou return to the village.");
      currentLocation = "village";
    } 
    else if (choiceNum === 2) {
      console.log("\nMerchants call out their wares");
      currentLocation = "market";
    } 
    else if (choiceNum === 3) {
      console.log("\nYou go into the forest.");
      currentLocation = "forest";
    } 
    else if (choiceNum === 4) {
      showStatus();
    } 
    else if (choiceNum === 5) {
      showInventory();
    } 
    else if (choiceNum === 6) {
      endGame();
    } 
    else {
      console.log("Invalid choice. Please enter a number from 1 to 6.");
    }
  }

  // ...in the market
  else if (currentLocation === "market") {
    if (choiceNum === 1) {
      console.log("\nYou return to the Village.");
      currentLocation = "village";
    } 
    else if (choiceNum === 2) {
      console.log("\nYou enter the blacksmith's shop.");
      currentLocation = "blacksmith";
    } 
    else if (choiceNum === 3) {
      console.log("\nYou go into the forest.");
      currentLocation = "forest";
    } 
    else if (choiceNum === 4) {
      showStatus();
    } 
    else if (choiceNum === 5) {
      showInventory();
    } 
    else if (choiceNum === 6) {
      endGame();
    } 
    else {
      console.log("Invalid choice. Please enter a number from 1 to 6.");
    }
  }

  // ...in the forest
  else if (currentLocation === "forest") {
    if (choiceNum === 1) {
      console.log("\nYou return to the Village.");
      currentLocation = "village";
    } 
    else if (choiceNum === 2) {
      console.log("\nYou enter the blacksmith's shop.");
      currentLocation = "blacksmith";
    } 
    else if (choiceNum === 3) {
      console.log("\nYou go into the forest.");
      currentLocation = "forest";
    } 
    else if (choiceNum === 4) {
      showStatus();
    } 
    else if (choiceNum === 5) {
      showInventory();
    } 
    else if (choiceNum === 6) {
      endGame();
    } 
    else {
      console.log("Invalid choice. Please enter a number from 1 to 6.");
    }
  }
}

// End of game loop
