import {v4 as uuidv4} from "uuid"
import fs from "fs";

const myDB = "./vehicles.json";


const createNewDatabase = (dataDB) => {

    fs.writeFile(myDB, JSON.stringify(dataDB),(error) => {
        if (error) {
            console.error("hubo un problema al guardar la base de datos ", error);
            return;
        }

        fs.readFile(myDB, "utf-8", (error, data) => {
            if (error) {
                console.error("hubo un problema al leer el archivo json ",error);
                return;
            }

            console.log("base de datos creada exitosamente, : ", data);
            
        })
    })

}

const myData = {
    vehicles: [
        {
            id:uuidv4(),
            nombre: "ferrari",
            model: "f45",
            año: 2002
        }
    ]
}


export default createNewDatabase