
class Car {
    constructor(model, maker, year_of_production, MaxSpeed, engine_capacity) {
        this.model = model;
        this.maker = maker;
        this.year_of_production = year_of_production;
        this.MaxSpeed = MaxSpeed;
        this.engine_capacity = engine_capacity;
    }

    drive() {
        console.log('we drive at speed ' + this.MaxSpeed + ' per hour')


    }
    info() {
        for (const key in this){
            console.log(key, this[key]);
        }
    }
    increaseMaxSpeed (newSpeed){
        if (newSpeed > 0)
            this.MaxSpeed = this.MaxSpeed + newSpeed;
        console.log(`increaseMaxSpeed to ${this.MaxSpeed}` )

    }
    changeYear(newYear){
        if (newYear > 1900){
            this.year_of_production = newYear;
            console.log(`changeYear to ${this.year_of_production}` )
        }
    }
    addDriver(driver){
        this.driver = driver;
        console.log(driver)
    }
}

car1 = new Car('A6','Audi',2018,250,'2.0')
console.log(car1);

car1.drive()
car1.info()
car1.increaseMaxSpeed(50)
car1.changeYear(2020)
car1.addDriver({name:'Carl',age:25,experience:5});

console.log(car1)
