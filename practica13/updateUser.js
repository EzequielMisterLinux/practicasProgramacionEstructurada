import fs from "fs";

const myDB = "./users.json";

const newDataForUser = {
    name: "Ezequiel",
    lastname: "Campos",
    age: 21,
    country: "El Salvador"
};

const updateUserByName = (newDataUser, nameUser) => {
    fs.readFile(myDB, "utf8", (error, data) => {
        if (error) {
            console.error("Error reading the JSON file:", error);
            return;
        }

        try {
            const getUsers = JSON.parse(data); 
            let usersInfoObject = getUsers.users;

            const userIndex = usersInfoObject.findIndex(user => user.name === nameUser);

            if (userIndex === -1) {
                console.log(`User with name '${nameUser}' not found.`);
                return;
            }

            usersInfoObject[userIndex] = { 
                ...usersInfoObject[userIndex], 
                ...newDataUser };


            fs.writeFile(myDB, JSON.stringify({ users: usersInfoObject }, null, 2), (error) => {
                if (error) {
                    console.error("Error writing to the JSON file:", error);
                    return;
                }

                console.log("User updated successfully!");
            });
        } catch (parseError) {
            console.error("Error parsing JSON data:", parseError);
        }
    });
};

updateUserByName(newDataForUser, "Paola");
