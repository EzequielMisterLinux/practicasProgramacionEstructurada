class Car {
    constructor(name , speed , increment_speed , decrement_speed) {
        this._name = name;
        this._speed = speed;
        this._increment_speed = increment_speed;
        this._decrement_speed = decrement_speed;
    }


    runCar(base_speed){

        if (base_speed > 0) {
            this._speed += base_speed;
            console.log(`the card ${this._name} has run at ${this._speed}`);
        }else{
            console.log("the speed must be gretter than 0");
        }

    }

    incrementSpeed(most_speed){
        if (most_speed > 0) {
            this._increment_speed += most_speed
            this._speed += this._increment_speed;

            console.log(`the speed increment at ${this._speed}`);
            
        }else{
            console.log("the speed must be gretter than 0");
            
        }
    }

    decrementSpeed(less_speed){
        if (less_speed >0) {
            this._decrement_speed += less_speed;
            this._increment_speed -= this._decrement_speed;
            this._speed -= this._decrement_speed
            
            console.log(`the speed the car less at ${this._speed}`);
            
        }else{
            console.log("this speed must be gretter than 0");
            
        }
    }

    stopCar(){
        this._speed -= this._speed;
        console.log("the card is stop");
        
    }


}

const car = new Car("xiaomi SU7" , 30, 0, 0)

car.runCar(10)

car.incrementSpeed(100)
car.decrementSpeed(130)

car.stopCar()

car.runCar(40)