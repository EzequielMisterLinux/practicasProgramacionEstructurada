/*

2-Crea un programa en JavaScript que solicite al usuario ingresar un
número del 1 al 12. Utiliza una estructura switch para determinar el
nombre del mes correspondiente al número ingresado. Si el número
está fuera del rango 1-12, muestra un mensaje indicando que el
número no es válido.

*/

import readline from "readline"

let interfaz = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


const repetirPregunta= ()=>interfaz.question("porfavor ingrese el numero del mes: " , (num) => {

    let mes = parseInt(num)
    let nombreMes = ""

    switch (mes) {
        case 1:
            nombreMes = "Enero"
            repetirPregunta()
            break;
        case 2:
            nombreMes = "Febrero"
            repetirPregunta()
            break;
        case 3:
            nombreMes = "marzo"
            repetirPregunta()
            break;
        case 4:
            nombreMes = "abril"
            repetirPregunta()
            break;
        case 5:
            nombreMes = "mayo"
            repetirPregunta()
            break;
        case 6:
            nombreMes = "junio"
            repetirPregunta()
            break;
        case 7:
            nombreMes = "julio"
            repetirPregunta()
            break;
        case 8:
            nombreMes = "agosto"
            repetirPregunta()
            break;
        case 9:
            nombreMes = "septiembre"
            repetirPregunta()
            break;
        case 10:
            nombreMes = "octubre"
            repetirPregunta()
            break;
        case 11:
            nombreMes = "noviembre"
            repetirPregunta()
            break;
        case 12:
            nombreMes = "diciembre"
            repetirPregunta()
            break;
        default:
            nombreMes = "mes invalido"
            repetirPregunta()
            break;
    }

    console.log(`el mes es : ${nombreMes}\n`);
    

})

repetirPregunta()