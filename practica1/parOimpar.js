import leerlinea from "readline"

const interfaz = leerlinea.createInterface(
    process.stdin,
    process.stdout
)


const esParoImpar = (n1) => {

    if (n1 % 2) {
        return "es impar";
    }else{
        return "es par";
    }

}

const ReturnQuestion =() => {

    interfaz.question("desea realizar otra conversion?\n1-SI o 2-NO ", (op) => {
        if (op == 1) {
            RecursiveEvent()

        }else if(op == 2){
            console.log("gracias por usar el coversor insano");
            interfaz.close()
        }else {
            console.log("porfavor ingrese una opcion valida!!!");
            ReturnQuestion()
           
        }
    })

}

const killInterface = () => {
    interfaz.question("desea realizar otra conversion?\n1-SI o 2-NO ", (op) => {
        if (op == 1) {
            RecursiveEvent()

        }else if(op == 2){
            console.log("gracias por usar el coversor insano");
            interfaz.close()
        }else {
            console.log("porfavor ingrese una opcion valida!!!");
            ReturnQuestion()
           
        }
    })
}


const RecursiveEvent = () => {
    interfaz.question("porfavor ingrese el numero a analizar ", (n) => {
        const num = parseInt(n)
        let result = esParoImpar(num)

        if (isNaN(num)) {
            console.log("porfavor ingrese numeros validos!!!");
            killInterface()
        }else{
            console.log(`Tu numero ${num} es ${result}`);
            killInterface()
        }
        
    })
}

RecursiveEvent()