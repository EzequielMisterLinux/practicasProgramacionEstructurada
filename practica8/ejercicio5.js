import readline from "readline";

const interfaz = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

interfaz.question("ingrese una cadena de texto: ",(cadena) => {
    interfaz.question("ingrese la letra a contar: ", (letraSearch) => {
        let contadorLetras = 0
        let posicion = 0

        do {
            if (cadena[posicion].toLowerCase() === letraSearch.toLowerCase()) {
                contadorLetras++;
            }
            posicion++
        } while (posicion < cadena.length);

        console.log(`la letra ${letraSearch} aparece ${contadorLetras} veces en la cadena`);
        interfaz.close()
        
    })
})