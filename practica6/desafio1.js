/*
1 Crea un programa en JavaScript que solicite al usuario ingresar su
edad. Luego, utiliza una estructura selectiva (if-else if-else) para
verificar la edad y determinar si la persona es un niño (0-12), un
adolescente (13-17), un adulto joven (18-35), un adulto (36-59), o un
adulto mayor (60 en adelante). Finalmente, muestra un mensaje en
consola indicando la categoría correspondiente según la edad
ingresada.

*/

import readline from "readline"

let interfaz = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const repetirPregunta = () =>interfaz.question("porfavor ingresa tu edad: ",(edad)=> {
    let num = parseInt(edad)
    let categoria = ""
    if (num >= 0 && num <= 12) {
        categoria = "niño"
        console.log(`Hola eres un: ${categoria}  y tienes ${num}de edad`);
        repetirPregunta()
    }else if (num >= 13 && num <=17) {
        categoria= "adolescente"
        console.log(`Hola eres un ${categoria} y tienes ${num} de edad`);
        repetirPregunta()
    } else if (num >=18 && num <= 35) {
        categoria ="adulto joven"
        console.log(`Hola eres un ${categoria} y tienes ${num} de edad`);
        repetirPregunta()
    } else if (num >= 36 && num <= 59) {
        categoria = "adulto"
        console.log(`Hola eres un ${categoria} y tienes ${num} de edad`);
        repetirPregunta()
        
    } else if (num >= 60) {
        categoria = "aduto mayor"
        console.log(`Hola eres un ${categoria} y tienes ${num} de edad`);
        repetirPregunta()
    }
    else {
        console.log(`porfavor ingrese un valor valido`);
        repetirPregunta()
        
    }
    
})

repetirPregunta()