let objeto = {
    get propiedad() {
        return "valor de la propiedad"
    },

    set propiedad (valor) {
        console.log(`asignando valor : ${valor}`);
        
    },
};

console.log(objeto.propiedad);


objeto.propiedad = "Nuevo valor"