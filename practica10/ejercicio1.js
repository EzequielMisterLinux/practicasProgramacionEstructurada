class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    imprimirInformacion() {
        console.log(`Hola ${this.nombre}, tienes ${this.edad} de edad`);
        
    }
}


const persona = new Persona("Ezequiel", 21)

persona.imprimirInformacion()