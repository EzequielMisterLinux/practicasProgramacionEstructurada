import readline from "readline"

const interfaz = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


const volverApreguntar =() =>interfaz.question("porfavor ingrese un numero mayor a 5 " ,(n) =>{
    let num = parseInt(n)
    do {
        console.log("se ejecuta una vez y si se cumple entonces muestra que la condicion se cumplio");
        
        console.log("el numero no es mayor a 5");
        
        
        
    } while (num < 5);
    console.log("el numero si es mayor a 5");
    console.log("entonces como se cumple puedo volver a preguntar");
    
    volverApreguntar()
})

volverApreguntar()