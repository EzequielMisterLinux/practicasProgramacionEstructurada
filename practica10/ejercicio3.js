class CuentaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    static tipoCuenta(){
        return "cuenta de ahorros"
    }

    imprimirInformacion() {
        console.log(`Hola ${this.titular}, tienes ${this.saldo} de dinero en tu cuenta`);
        
    }
}


const cuenta = new CuentaBancaria("Ezequiel", 2100)

cuenta.imprimirInformacion()
console.log(CuentaBancaria.tipoCuenta());
