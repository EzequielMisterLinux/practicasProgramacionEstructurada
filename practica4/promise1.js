const doTask = (iteraciones) => {

    return new Promise((resolve, reject) => {
        const numbers = []

        for (let i = 0 ; i < iteraciones; i++){

            const number = 1 + Math.floor(Math.random() *6);

            numbers.push(number);

            if (number === 6) {
                reject({
                    error: true,
                    message: "se ha sacado un 6"
                });
                return;
            }

        }

        resolve({
            error:false,
            value:numbers
        })
    })
}


doTask(5)
    .then(result => console.log("tiradas correctas" , result.value))
    .catch(error => console.error("ha ocurrido algo" ,error.message))