

// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//
//     // static greeting() {
//     //     console.log(this);
//     //     console.log(this.age);
//     //     return 'Hello ' + this.name + '!';
//     // }
//
//     work(){
//         return 'work in process'
//     }
// }
// let user = new User('Anna',20)
// console.log(user);
// console.log(user.greeting());

// console.log(User.greeting());

// class Customer extends User {
//
//     constructor(name, age, password) {
//         super(name, age);
//         this.password = password;
//     }
//     work() {
//         return 'smth else';
//     }
// }
//
// let customer = new Customer('Nazar',23,11111);
// console.log(customer);
// console.log(customer.work());

function User (name,age)  {
    this.name=name;
    this.age=age;
}

function Customer (name,age,password)  {
    User.apply(this, arguments);
    this.password=password;
}

let customer = new Customer('Anna',20,333)
console.log(customer);