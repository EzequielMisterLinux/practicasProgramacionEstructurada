import readline from "readline"

const interfaz = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let data = []

const mostrarMenu = () => interfaz.question("porfavor elija una opcion:\n1-Escribir\n2-Leer\n3-Salir\n" ,(opcion) =>{

    let op = parseInt(opcion)

    switch (op) {
        case 1:

            interfaz.question("porfavor ingrese una cadena de texto:\n",(texto) =>{
                
                data.push(texto)
                console.log("texto agregado: ", texto);
                
                mostrarMenu()

            })


            break;
        case 2:

            for(let nota of data){
                console.log(nota);
                mostrarMenu()
                
            }
            
            break;

        case 3:
            
            interfaz.close()
            break;
    
        default:
            break;
    }


})

mostrarMenu()