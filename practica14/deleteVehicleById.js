import fs from "fs";

const myDB = "./vehicles.json"

const deleteVehicleById = (id) => {

    fs.readFile(myDB, "utf-8" , (error, data) => {
        if (error) {
            console.error("hubo un problema al leer el archivo json : ", error);
            return;
        }

        const dataJson = JSON.parse(data)

        dataJson.vehicles = dataJson.vehicles.filter(vehicle => vehicle.id !== id)


        fs.writeFile(myDB, JSON.stringify(dataJson), (error) => {
            if (error) {
                console.error("hubo un problema al borrar el coche :", error);
                return;
            }

            console.log("coche eliminado exitosamente: ", dataJson);
            
        })

        
        
    })

}

export default deleteVehicleById