import readline from "readline";

import {v4 as uuidv4} from "uuid";
import createNewDatabase from "./createJsonDB.js";
import createNewVehicle from "./createNewVechicle.js";
import updateVehicleById from "./updateVehicleById.js";
import deleteVehicleById from "./deleteVehicleById.js";
import readAllVehicles from "./readAllVehicles.js";
import countVehicles from "./countVehicles.js";

const newInterfaz = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const preguntar = () => newInterfaz.question("porfavor seleccione una accion: \n1-crear json\n2-crear vehiculo\n3-actualizar vehiculo\n4-borrar vehiculo\n5-contar vehiculos\n6-ver todos los vehiculos\n7-salir\n", (op) => {

    switch (parseInt(op)) {
        case 1:

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
        console.log("base de datos creada exitosamente\n");
        
        createNewDatabase(myData)
        preguntar()

            break;

        case 2:
            
        newInterfaz.question("porfavor ingrese el nombre del vehiculo " , (nombre) => {

            newInterfaz.question("porfavor ingrese el modelo del vehiculo ", (model) => {
                newInterfaz.question("porfavor ingrese el año del vehiculo ", (año) => {

                    const data = {
                        id: uuidv4(),
                        nombre : nombre,
                        model: model,
                        año: parseInt(año)
                    }

                    console.log("carro creado exitosamente\n");
                    
                    createNewVehicle(data)
                    preguntar()
                    
                })
            })

        })


            break;
        
        case 3:
            
        newInterfaz.question("porfavor ingrese el id del coche ", (id) => {

            newInterfaz.question("porfavor ingrese el nombre del vehiculo " , (nombre) => {

                newInterfaz.question("porfavor ingrese el modelo del vehiculo ", (model) => {
                    newInterfaz.question("porfavor ingrese el año del vehiculo ", (año) => {
    
                        const data = {
                            
                            nombre : nombre,
                            model: model,
                            año: parseInt(año)
                        }
    
                        console.log("carro actualizado exitosamente\n");
                        
                        updateVehicleById(id, data)
                        preguntar()
                        
                    })
                })
    
            })
        })

            break;

        case 4:

        newInterfaz.question("porfavor ingrese el id del carro: ", (id) => {

            console.log("coche borrado exitosamente\n");
            
            deleteVehicleById(id)
            preguntar()
        })
            

            break;
            
        case 5:
            

        countVehicles()
        console.log("\n");
        
        preguntar()
        
            break;

        case 6:
            readAllVehicles()
            console.log("\n");
        
            preguntar()
            break;

        case 7:
            
        console.log("gracias por usar el administrador de coches: adios");
        
        newInterfaz.close();

            break;
    
        default:
            console.log("porfavor ingrese una opcion valida!!!");
            preguntar()
            
            break;
    }
}) 

preguntar()