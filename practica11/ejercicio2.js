class Persona {
    constructor(nombre, apellido) {
        this.nombre= nombre;
        this.apellido = apellido
    }
    get nombreCompleto() {
        return `${this.nombre} ${this.apellido}`
    }

    set nombreCompleto(nombreCompleto) {
        [this.nombre, this.apellido] = nombreCompleto.split(" ");
    }


}

const persona = new Persona("Ezequiel", "campos")
persona.nombreCompleto = "Humberto Zelaya"

console.log(persona.nombreCompleto);
