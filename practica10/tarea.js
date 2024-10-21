import readline from "readline";

const interfaz = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

class Libro {
    constructor(titulo, autor, alo) {
        this.titulo=titulo,
        this.autor=autor,
        this.alo=alo
    }

    imprimirInformacionLibro(titulo, autor, alo) {
        console.log(`el titulo del libro es : ${titulo}, el autor es ${autor}, el año de publicacion es ${alo}`);
        
    }

}

const volverApreguntar = () => interfaz.question("porfavor ingrese el titulo " ,(titulo) => {
    interfaz.question("porfavor ingrese el nombre del autor ", (autor) => {
        interfaz.question("porfavor ingrese el año de publicacion ",(alo) => {

            const libro = new Libro(titulo, autor, alo)
            libro.imprimirInformacionLibro(titulo, autor, alo)

            const preguntarDeNuevo = () => interfaz.question("deseas crear otro libro? \n1-SI\n2-NO\n",(res) => {
                if (parseInt(res) == 1) {
                    volverApreguntar()
                } else if (parseInt(res) == 2) {
                    interfaz.close()
                }else {
                    console.log("porfavor ingrese una respuesta valida!!!");
                    preguntarDeNuevo()
                }

            })

            preguntarDeNuevo()

        })
    })
})

volverApreguntar()