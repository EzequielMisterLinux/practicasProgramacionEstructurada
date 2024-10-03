import readline from "readline";

const interfaz = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function contarVocalesYDígitos(cadena) {
  let vocales = ['a', 'e', 'i', 'o', 'u'];
  let numVocales = 0;
  let numDígitos = 0;

  for (let i = 0; i < cadena.length; i++) {
    let letra = cadena[i].toLowerCase();

    if (vocales.includes(letra)) {
      numVocales++;
    }

    if (!isNaN(letra) && letra !== ' ') {
      numDígitos++;
    }
  }

  return { numVocales, numDígitos };
}

function solicitarCadena() {
  interfaz.question("Por favor, ingrese una cadena de texto: ", (cadena) => {

    while (cadena.trim() === "") {
      console.log("La cadena no puede estar vacía.");
      return solicitarCadena();
    }

    let { numVocales, numDígitos } = contarVocalesYDígitos(cadena);

    console.log(`Número de vocales: ${numVocales}`);
    console.log(`Número de dígitos: ${numDígitos}`);

    interfaz.close();
  });
}


solicitarCadena();
