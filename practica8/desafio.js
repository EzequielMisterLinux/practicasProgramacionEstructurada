import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const askUser = () => {
  rl.question("Adivina el número (entre 1 y 100): ", (input) => {
    const userGuess = parseInt(input, 10);
    attempts++;

    if (isNaN(userGuess)) {
      console.log("Por favor, introduce un número válido.");
    } else if (userGuess < randomNumber) {
      console.log("Demasiado bajo, intenta de nuevo.");
    } else if (userGuess > randomNumber) {
      console.log("Demasiado alto, intenta de nuevo.");
    } else {
      console.log(`¡Correcto! Has acertado en ${attempts} intentos.`);
      rl.close(); 
      return;
    }

    askUser(); 
  });
};

askUser();
