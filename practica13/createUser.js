import fs from "fs";


const myDatabase = "./users.json"

const newUser = {
    name: "Paola",
    lastname: "Castle",
    age: 21,
    country: "El Salvador"
}


const CreateNewUser = (newdata) => {

    fs.readFile(myDatabase, "utf8" ,(error, data) => {
        if (error) {
            console.log("has problem ocurred get all users");
            return;
        }

        const userData = JSON.parse(data)

        userData.users.push(newdata)

        fs.writeFile(myDatabase, JSON.stringify(userData, null , 2) , (error)=> {
            if (error) {
                console.log("has problem ocurred has create new user");
                return;
            }

            console.log("new user create successfully!! : ", userData.users);
            
        })
                
    })

}

CreateNewUser(newUser)