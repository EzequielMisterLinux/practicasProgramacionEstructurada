let puntuaje = 85

let calificacion = ""

if (puntuaje >= 90) {
    calificacion = "A"
}else if (puntuaje >= 80) {
    calificacion = "B"
}else if (puntuaje >= 70) {
    calificacion = "C"
}else if (puntuaje >= 60) {
    calificacion ="E"
}else {
  calificacion = "F"  
}

console.log(`La calificacion es ${calificacion}`);
