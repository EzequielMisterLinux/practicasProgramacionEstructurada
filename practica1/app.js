import leerlinea from "readline"

const interfaz = leerlinea.createInterface(
    process.stdin,
    process.stdout
)


const sum =(n1, n2)=> {
    if (isNaN(n1) || isNaN(n2)) {
        console.log("porfavor ingrese numeros validos");
        
        
    }else{
        return n1 + n2
    }
}

const resta =(n1, n2)=> {
    return n1 - n2
}

const div =(n1, n2)=> {
    return n1 / n2
}
const mult =(n1, n2)=> {
    return n1 * n2
}


const ReturnQuestion =() => {

    interfaz.question("desea realizar otra operacion?\n1-SI o 2-NO ", (op) => {
        if (op == 1) {
            Calculator()

        }else if(op == 2){
            console.log("gracias por usar la calculadora");
            interfaz.close()
        }else {
            console.log("porfavor ingrese una opcion valida!!!");
            ReturnQuestion()
           
        }
    })

}

const killInterface = () => {
    interfaz.question("desea realizar otra operacion?\n1-SI o 2-NO ", (op) => {
        if (op == 1) {
            Calculator()

        }else if(op == 2){
            console.log("gracias por usar la calculadora");
            interfaz.close()
        }else {
            console.log("porfavor ingrese una opcion valida!!!");
            ReturnQuestion()
           
        }
    })
}


const Calculator =  () => {

    interfaz.question("porfavor ingrese el primer numero ", (n1)=> {
        interfaz.question("porfavor ingrese el segundo numero ", (n2) => {
            interfaz.question("porfavor ingrese su operacion \n1-sumar\n2-restar\n3-dividir\n4-multiplicar\n", (n3) => {

                const num1 = parseFloat(n1)
                const num2 = parseFloat(n2)
                const op = parseInt(n3)

                if (op == 1) {
                    console.log(`tu suma es ${sum(num1, num2)}`);
                    killInterface()
                }else if(op == 2){
                    console.log(`tu resta es ${resta(num1, num2)}`);
                    killInterface()
                }else if(op == 3){
                    console.log(`tu division es ${div(num1, num2)}`);
                    killInterface()
                }else if (op == 4){
                    console.log(`tu multiplicacion es ${mult(num1, num2)}`);
                    killInterface()
                }else{
                    console.log("porfavor ingrese una opcion valida");
                    killInterface()
                }
            })
        })
    })

}

Calculator()