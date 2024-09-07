const fastFood = () => {

    return new Promise((resolve, reject) => {
        
        let pedido = 0

        setTimeout(() => {
            if (pedido > 0) {
                resolve("pedido recibido exitosamente")
            }else{
                reject("no hay pedidos para procesar")
            }
        }, 3000);
    })
}

fastFood()
    .then((info) => {
        console.log(info);
    })
    .catch((err)=> {
        console.error(err);
    })