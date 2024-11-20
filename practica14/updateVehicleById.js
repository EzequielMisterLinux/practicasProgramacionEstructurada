import fs from "fs";

const myJson = "./vehicles.json"

const updateVehicleById = (id, newDataCar) => {

    fs.readFile(myJson, "utf-8", (error, data) => {
        if (error) {
            console.error("hubo un error al leer el archivo json: ", error);
            return;
        }

        let dataVehicles = JSON.parse(data)
        console.log(dataVehicles);
        

        let index = dataVehicles.vehicles.findIndex(car => car.id === id)

        if (index >= 0) {
            dataVehicles.vehicles[index]={
                ...dataVehicles.vehicles[index],
                ...newDataCar
            }
        }

        fs.writeFile(myJson, JSON.stringify(dataVehicles), (error) => {
            if (error) {
                console.error("hubo un problema al actualizar al vehiculo ", error);
                return;
            }

            console.log("carro actualizado exitosamente", dataVehicles);
            
        })
        

    })

}

export default updateVehicleById