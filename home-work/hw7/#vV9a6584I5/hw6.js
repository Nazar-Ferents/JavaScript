

function Car (model, maker, year_of_production, MaxSpeed, engine_capacity){
    this.model = model;
    this.maker = maker;
    this.year_of_production = year_of_production;
    this.MaxSpeed = MaxSpeed;
    this.engine_capacity = engine_capacity;
    this.drive= function (){
        console.log(`we drive at speed ${MaxSpeed} per hour`)
    }
    this.info = function(){
        for (const key in this){
            if (typeof this[key] !== "function"){
                console.log(key, this[key]);
            }
        }
    }
    this.increaseMaxSpeed = function(newSpeed){
        if (newSpeed > 0){
            MaxSpeed = MaxSpeed + newSpeed;
        }
        console.log(`increaseMaxSpeed(${MaxSpeed})`)
    }
    this.changeYear = function (newValue){
        if(newValue > year_of_production){
            year_of_production = newValue;
        }
        console.log(`changeYear(${year_of_production})`)
    }

    this.addDriver = function(driver){
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
car1.addDriver({name:'Carl',age:25,experience:5})

