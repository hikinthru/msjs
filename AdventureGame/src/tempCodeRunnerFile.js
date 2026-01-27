function getValidatedNumber(question, min, max) {
  while (true) {
    try {
      const input = question(`\nEnter a number (${min}–${max}): `).trim();

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

      return value; // ✅ valid → exit loop
    } catch (err) {
      console.error(err.message);
    }
  }
}

const question = 'Please enter a number from 1 to 6: ';
const choiceNum = getValidatedNumber(question, 1, 6);
