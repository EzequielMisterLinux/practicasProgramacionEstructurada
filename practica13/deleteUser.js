import fs from "fs";

const userDb= "./users.json"

const deleteuserByName = (name_user)=> {

    fs.readFile(userDb, "utf8", (error, data) => {
        if (error) {
            console.log("has problem ocurred read users", error);
            return;
        }

        const usersData = JSON.parse(data)

        usersData.users = usersData.users.filter(name => name.name !== name_user)

        fs.writeFile(userDb, JSON.stringify(usersData, null, 2), (error) => {
            if (error) {
                console.log("has problem ocurred at delete user" , error);
                return;
            }

            console.log("user delete successfully 200 OK : ", usersData);
            
        })

    })

}

deleteuserByName("Ezequiel")