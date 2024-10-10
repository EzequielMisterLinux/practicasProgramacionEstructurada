import readline from "readline";

const interfaz = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let letra = "", veces = 0, cadena = "";

function preguntarLetra() {
    interfaz.question("¿Qué letra desea, X o Z? ", (inputLetra) => {
        letra = inputLetra.toUpperCase();  
        
        if (letra === "X" || letra === "Z") {
            preguntarVeces();  

        } else {
            console.log("Por favor, ingrese una letra válida (X o Z).");
            preguntarLetra(); 
        }
    });
}

function preguntarVeces() {
    interfaz.question("¿Cuántas repeticiones (1-15)? ", (inputVeces) => {
        veces = parseInt(inputVeces);
        if (veces >= 1 && veces <= 15) {
            generarCadena();
        } else {
            console.log("Por favor, ingrese un número de veces válido (1-15).");
            preguntarVeces();
        }
    });
}

function generarCadena() {
    while (veces > 0) {
        cadena += letra;
        veces--;
    }
    console.log("Resultado:", cadena);
    interfaz.close();
}

preguntarLetra();
