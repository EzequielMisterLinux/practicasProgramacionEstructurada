//DESCUENTO INSANO

import readline from "readline";

const interfaz = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const recursiveInterfaz = () => {
  interfaz.question(
    "Por favor, ingrese la categoría del cliente:\n1 - Común\n2 - Estándar\n3 - Premium\n",
    (categoria) => {
      if (isNaN(categoria) || categoria == null || categoria.trim() === "") {
        console.log("Por favor, ingrese la opción en números!!!!");
        recursiveInterfaz();
        return;
      }

      let category = parseInt(categoria);
      switch (category) {
        case 1:
          console.log("El cliente común tiene entre 3% y 10% de descuento dependiendo del total.");
          interfaz.question("Por favor, ingrese el total de la compra del cliente: ", (total) => {
            let to = parseFloat(total);
            if (to >= 50 && to <= 99) {
              console.log("Felicidades, obtuvo un descuento del 5%");
              let descuento = to - (to * 3) / 100;
              console.log(`Su total con descuento es: ${descuento}`);
            } else if (to >= 100) {
              console.log("Felicidades, obtuvo un descuento del 10%");
              let descuento = to - (to * 10) / 100;
              console.log(`Su total con descuento es: ${descuento}`);
            } else {
              console.log("No hay descuento disponible para este monto.");
            }
            interfaz.close();
          });
          break;

        case 2:
          console.log("El cliente estándar tiene entre 10% y 20% de descuento dependiendo del total.");
          interfaz.question("Por favor, ingrese el total de la compra del cliente: ", (total) => {
            let to = parseFloat(total);
            if (to >= 100 && to <= 199) {
              console.log("Felicidades, obtuvo un descuento del 10%");
              let descuento = to - (to * 10) / 100;
              console.log(`Su total con descuento es: ${descuento}`);
            } else if (to >= 200) {
              console.log("Felicidades, obtuvo un descuento del 20%");
              let descuento = to - (to * 20) / 100;
              console.log(`Su total con descuento es: ${descuento}`);
            } else {
              console.log("No hay descuento disponible para este monto.");
            }
            interfaz.close();
          });
          break;

        case 3:
          console.log("El cliente premium tiene entre 20% y 30% de descuento dependiendo del total.");
          interfaz.question("Por favor, ingrese el total de la compra del cliente: ", (total) => {
            let to = parseFloat(total);
            if (to >= 200 && to <= 299) {
              console.log("Felicidades, obtuvo un descuento del 20%");
              let descuento = to - (to * 20) / 100;
              console.log(`Su total con descuento es: ${descuento}`);
            } else if (to >= 300) {
              console.log("Felicidades, obtuvo un descuento del 30%");
              let descuento = to - (to * 30) / 100;
              console.log(`Su total con descuento es: ${descuento}`);
            } else {
              console.log("No hay descuento disponible para este monto.");
            }
            interfaz.close();
          });
          break;

        default:
          console.log("Categoría inválida. Intente de nuevo.");
          recursiveInterfaz();
          break;
      }
    }
  );
};

recursiveInterfaz();
