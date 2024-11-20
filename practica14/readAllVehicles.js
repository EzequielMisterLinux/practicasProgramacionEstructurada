import fs from "fs";

const myDB = "./vehicles.json"

const readAllVehicles = () => {

    fs.readFile(myDB, "utf-8", (error, data) => {
        if (error) {
            console.error("hubo un problema al leer la base de datos: ", error);
            return;
        }

        const vehicles = JSON.parse(data)

        console.log("los vehiculos son: ", vehicles.vehicles);
        
    })

}


export default readAllVehicles