class Articulo {
    constructor(nombre, precio , stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    comprar(cantidad){
        if (cantidad > 0 && this.stock > 0 - cantidad >= 0) {
            this.stock -= cantidad;
            let total = cantidad * this.precio;

            if (cantidad > 1) {
                console.log(`usted ha comprado ${cantidad} unidades de producto ${this.nombre} su total es $${total}`);
                
            }else {

                console.log(`usted ha comprado una ${cantidad} unidad de producto ${this.nombre} su total es $${total}`);
            }
        }

        else if(this.stock <= 0){
            console.log(`EL producto ${this.nombre} se encuentra actualmente agotado`);
            
        }else if (this.stock - cantidad < 0) {
            console.log(`la cantidad que quiere comprar supera al nivel de stock actual , ${this.stock} solo hay de ese producto ${this.nombre}`);
            
        }else{
            console.log("la cantidad de productos debe ser mayor a cero");
            
        }



    }

    reabastecer(cantidad){
        if (cantidad > 0) {
            this.stock += cantidad

            console.log(`ha aumentado la cantidad de ${this.nombre} ha ${this.stock}`);
            
        }else{
            console.log("la cantidad asignada debe ser mayor a 0");
            
        }
    }
}



const article = new Articulo("manzana", 2 , 30)

article.comprar(20)
article.comprar(1)

article.reabastecer(20)