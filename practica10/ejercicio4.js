class Animal {
    constructor(nombre) {
        this.nombre=nombre
    }

    imprimirNombre(){
        console.log(`el nombre del animal es ${this.nombre}`);
        
    }
}


class Perro extends Animal {
    
    hacerSonidoInsano(){
        console.log(`el perro ${this.nombre} esta ladrando`);
        
    }

}

const perroInsano = new Perro("Rocky")

perroInsano.hacerSonidoInsano()