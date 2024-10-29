class Usuario {
    constructor(username) {
        this.username = username;
    }

    get username(){
        return this.username
    }

    set username(username){
        if (username.length >= 3) {
            this.username = username
        } else {
            console.log(`El nombre de usuario ${username} debe tener al menos 3 caracteres`);
            
        }
    }

}

const usuario = new Usuario("Ezequiel")
console.log(`nombre valido ${usuario.username}`);
