class Clima {
    constructor(celsius) {
        this.celsius = celsius
    }

    get fahrenheit() {
        return (this.celsius*9)/5+32;
    }

    set fahrenheit(fahrenheit){
        this.celsius = ((fahrenheit -32)*5)/9
    
    }

    get celsius(){
        return this.celsius
    }

    set celsius(celsius){
        this.celsius = celsius
    }
}

const clima = new Clima(25)

console.log(`El clima en fahrenheit ${clima.fahrenheit} ºF`);

clima.fahrenheit=86

console.log(`clima en celsius ${clima.celsius} ºC`);
