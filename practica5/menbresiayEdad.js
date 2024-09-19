let edad = 20

let membresia = "VIP"


if (edad < 18) {
    console.log("eres menor puedes acceder a la mebresia juvenil");
    
}else if (edad >= 18 && edad <= 60) {
    console.log("eres adulto puedes acceder a todas las membresias ");
    
} 
else {
    console.log("eres mayor de 60 años tienes un descuento especial");
    
}


switch (membresia) {
    case "basica":
        console.log("membresia basica acceso al entrenamiento basico");
        
        break;
    case "estandar":
        console.log("membresia estandar acceso a entrenamiento y clases grupales");
        break;

    case "VIP":
        console.log("membresia vip tiene acceso a todos los beneficios");
        break;
        

    default:
        console.log("membresia invalida no tiene acceso a ningun beneficio");
        
        break;
}