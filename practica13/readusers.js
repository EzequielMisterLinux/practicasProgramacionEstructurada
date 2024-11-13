import fs from "fs";


const MyDB = "./users.json"

const ReadAllUsers = () => {
    fs.readFile(MyDB, "utf8", (error, data) => {
        if (error) {
            console.log("has problem ocurred the read all users", error);
            return;
        }

        const users = JSON.parse(data)

        
        console.log("get all users PASS 200 OK :\n");
        
        users.users.forEach(item => {
            console.log(`name: ${item.name}\nlastname: ${item.lastname}\nCountry: ${item.country}\n`);
            
        });
        

        
    })
}

ReadAllUsers()