
import fs from "fs";

const my_json_file = "./users.json"

const newData = {
    users:[
        {
            name: "Humberto Ezequiel",
            lastname: "Zelaya Campos",
            age: 21,
            country : "El Salvador"
        }
]

}


const newJsonFile = (data) => {

    fs.writeFile(my_json_file, JSON.stringify(data, null , 2) ,(error) => {
        if (error) {
            console.error("has problem ocurred create a new json file");
            return;
        }
        fs.readFile(my_json_file, "utf8", (error, data) => {
            if (error) {
                console.error("has problem ocurred the read your new Json file");
                return;
            }

            const objectData = JSON.parse(data)
            let result = objectData.users
            

            console.log(`you has create ha new json file`, result);
            
        })
    })

}

newJsonFile(newData)