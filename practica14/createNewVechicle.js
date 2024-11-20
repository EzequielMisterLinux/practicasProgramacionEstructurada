import fs from "fs";

const myJson = "./vehicles.json"

const createNewVehicle=(newCar) => {

    fs.readFile(myJson, "utf-8", (error, data) => {
        if (error) {
            console.error("hubo un problema al leer el archivo json ",error);
            return;
        }

        const actualData = JSON.parse(data)

        let newData = actualData
        newData.vehicles.push(newCar)

        fs.writeFile(myJson, JSON.stringify(newData), (error) => {
            if (error) {
                console.error("hubo un problema al crear el nuevo vehiculo ", error);
                return;
            }

            console.log("nuevo vehiculo agregado exitosamente ", newData);
            
        })
    
    })

}

export default createNewVehicle