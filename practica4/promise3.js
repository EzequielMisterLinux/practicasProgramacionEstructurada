const solicitarDatosAlServidor =() => {
    return new Promise((resolve, reject)=> {
        let exito = false

        setTimeout(() => {
            if (exito) {
                resolve({
                    id:1,
                    nombre:"ezequiel campos",
                    edad: 21
                });
                
            }else{
                console.log("hubo un problema al obtener los datos");
            }
        }, 2000);
    })
}

solicitarDatosAlServidor()
    .then((datos) => {
        console.log("datos recibidos: ", datos);
    })
    .catch((err) => {
        console.error(err);
    })