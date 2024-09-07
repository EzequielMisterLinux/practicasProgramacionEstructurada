const esperarTresSeconds = new Promise((resolve) => {

    setTimeout(() => {
        resolve("tiempo de espera de 3 segundos")
    }, 3000);
})


esperarTresSeconds
    .then((message) => {
        console.log(message);
    })
    .catch((err)=> {
        console.error(err);
    })