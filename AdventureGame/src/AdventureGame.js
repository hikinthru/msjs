// ===========================================
// The Dragon's Quest - Text Adventure Game
// A progression-based learning project
// ===========================================

// Include readline for player input
import { question } from 'readline-sync';

console.log("=================================");
console.log("       The Dragon's Quest        ");
console.log("=================================");
console.log("\nYour quest: Defeat the dragon in the mountains!");

// Game state variables
let playerName = "";
let playerHealth = 100;
let playerGold = 20; // Starting gold
let playerInventory = [];

// Get player's name
playerName = question("\nWhat is your name, brave adventurer? ");
console.log(`\nWelcome, ${playerName}!`);
console.log(`You start with ${playerGold} gold.`);

// Weapon damage (starts at 0 until player buys a sword)
let weaponDamage = 0;      // Will increase to 10 when player gets a sword
console.log(`Starting weapon damage: ${weaponDamage}`);
console.log("When you buy a sword, weapon damage will increase to 10!");

// Monster defense (affects combat outcomes)
let monsterDefense = 5;    // Monster's defense value
console.log(`Monster defense: ${monsterDefense}`);
console.log("Monsters can withstand some damage in combat!");

// Healing potion restoration (matches final implementation)
let healingPotionValue = 30;  // How much health is restored
console.log(`Healing potion value: ${healingPotionValue}`);
console.log("A potion will restore 30 health!");

// Player location
let currentLocation = 'village'; // Starting location
let villageFirstVisit = true; // Track if village has been visited
let forestFirstVisit = true;  // Track if forest has been visited
let marketFirstVisit = true;  // Track if market has been visited
let blacksmithFirstVisit = true; // Track if blacksmith has been visited
let locationChoice = '';

// Function to display player status
function showStatus() {
  console.log("\n=== PLAYER STATUS ===");
  console.log(`\nName: ${playerName}`);
  console.log(`Health: ${playerHealth}`);
  console.log(`Gold: ${playerGold}`);
  console.log(`Inventory: ${playerInventory.length > 0 ? playerInventory.join(", ") : "Empty"}`);
  console.log(`Weapon Damage: ${weaponDamage > 0 ? weaponDamage : "(You need to buy a sword!)"}`);
}

// Check current location and show option choices
function setLocation() {
  if (currentLocation === 'village') {
  console.log("\n=== VILLAGE ===");
  console.log(
    "\nYou're in a bustling village. The blacksmith, forest, and market are nearby.",
  );
  if (villageFirstVisit) {
    console.log(
      "\nVillager: 'Welcome adventurer! Rumor has it that a fearsome dragon dwells in the mountains to the north...'",
    );
    villageFirstVisit = false; // Update visit status
  } else {
    console.log("\nYou return to the familiar village.");
  }
  console.log("\nWhat would you like to do?");
  console.log("1. Visit the blacksmith");
  console.log("2. Visit the market");
  console.log("3. Go to the forest");
  console.log("4. Check status");
  console.log("5. Quit the game");

  locationChoice = Number(question("\nEnter the number of your choice: "));
  if (
    Number.isNaN(locationChoice) ||
    locationChoice < 1 ||
    locationChoice > 5
  ) {
    console.log("Please enter a valid number.");
  }
  if (locationChoice === 1) {
    currentLocation = 'blacksmith';
  } else if (locationChoice === 2) {
    currentLocation = 'market';
  } else if (locationChoice === 3) {
    currentLocation = 'forest';
  } else if (locationChoice === 4) {
    showStatus();
  } else if (locationChoice === 5) {
    console.log("\nThank you for playing The Dragon's Quest!");
    process.exit();
  }
} else if (currentLocation === 'blacksmith') {
  console.log("\n=== BLACKSMITH ===");
		console.log(
			"\nYou're in a bustling blacksmith shop. The village, forest, and market are nearby.",
		);
		if (blacksmithFirstVisit) {
			console.log(
				"\nBlacksmith: 'Welcome adventurer! Rumor has it that a fearsome dragon dwells in the mountains to the north...'",
			);
			blacksmithFirstVisit = false; // Update visit status
		} else {
			console.log("\nYou return to the familiar blacksmith.");
		}
		console.log("\nWhat would you like to do?");
		console.log("1. Visit the village");
		console.log("2. Visit the market");
		console.log("3. Go to the forest");
		console.log("4. Check status");
		console.log("5. Quit the game");

		locationChoice = Number(question("\nEnter the number of your choice: "));
		if (
			Number.isNaN(locationChoice) ||
			locationChoice < 1 ||
			locationChoice > 5
		) {
			console.log("Please enter a valid number.");
		}
    if (locationChoice === 1) {
      currentLocation = 'village';
    } else if (locationChoice === 2) {
      currentLocation = 'market';
    } else if (locationChoice === 3) {
      currentLocation = 'forest';
    } else if (locationChoice === 4) {
      showStatus();
    } else if (locationChoice === 5) {
      console.log("\nThank you for playing The Dragon's Quest!");
      process.exit();
    }
  }
  return;
}

while (true) {
  setLocation();
}
