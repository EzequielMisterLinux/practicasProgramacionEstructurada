class CuentaBancaria {
    constructor(saldo) {
        this.saldo = saldo
    }

    get saldo(){
        return this.saldo
    }

    set saldo(cantidad){
        if (cantidad > 0) {
            this.saldo = cantidad
        } else {
            console.log(`saldo ${cantidad} no se puede establecer un saldo negativo`);
            
        }
    }
}

const cuenta = new CuentaBancaria(1000)

console.log(`saldo inicial ${cuenta.saldo}`);
