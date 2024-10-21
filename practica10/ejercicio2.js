class Coche {
    constructor(marca, modelo) {
        this.marca = marca,
        this.modelo = modelo
    }

    arrancar() {
        console.log(`el coche ${this.marca} con modelo ${this.modelo} ha empezado a andar`);
        
    }

    detener() {
        console.log(`el coche ${this.marca} con modelo ${this.modelo} se ha detenido`);
        
    }
}


const coche = new Coche("Mazda", "RX-7")

coche.arrancar()
coche.detener()