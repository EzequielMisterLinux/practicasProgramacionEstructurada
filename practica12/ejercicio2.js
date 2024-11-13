class Ciclista {
    constructor(distanciaRecorrida) {
        this._distanciaRecorrida = distanciaRecorrida;
    }

    get distanciaRecorrida(){
        if (this._distanciaRecorrida > 0) {
            console.log("El ciclista va run run en bicicleta");
            
        }else if (this._distanciaRecorrida == 0) {
            console.log("El ciclista esta en Stop");
            
        }
        return this._distanciaRecorrida;
    }

    set distanciaRecorrida(newDateDistance){
        if (newDateDistance > -1) {
            this._distanciaRecorrida = newDateDistance;
            console.log(`nueva distancia asignada ${newDateDistance}`);
            
        }else{
            console.log("la distancia debe ser mayor a 0");
            
        }
    }
}


const Bicicleta = new Ciclista(1);

console.log(Bicicleta.distanciaRecorrida);

Bicicleta.distanciaRecorrida = 10

console.log(Bicicleta.distanciaRecorrida);
