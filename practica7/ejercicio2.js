let suma = 0

let iteracion = 0

while (suma < 1000) {
    
    let numeroAleatorio = Math.floor(Math.random() * 100) +1

    suma+=numeroAleatorio

    iteracion++

    console.log(`iteracion ${iteracion}, se ha añadido ${numeroAleatorio}, suma actual: ${suma}`);
    
}

console.log(`proceso completado ${iteracion}, suma total ${suma}`);
