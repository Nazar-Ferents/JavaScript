

// function User(name,age){
//     this.name = name;
//     this.age = age;
// }
//
// let user = new User('Jhon',23);
//
// User.prototype.greeting = function () {
//     return `Hello ${this.name}!`;
// }
//
// console.log(user);
// console.log(user.greeting());

// function User(name,age){
//     this.name = name;
//     this.age = age;
// }
//
// let user = new User('Jhon',23);
// user.greeting = function (msg) {
//     return `${msg} Hello ${this.name}!`;
// }
// console.log(user.greeting('oh'));
// let user2 = new User('Anna',20)
// console.log(user.greeting.apply(user2,['Oh unbelivable']));

// console.log(user.greeting.apply(user2,['Oh unbelivable']));

// console.log(user.greeting.call(user2,'Oh unbelivable'));

// function User(name,age){
//     this.name = name;
//     this.age = age;
// }
//
// let user = new User('Jhon',23);
// user.greeting = function (msg) {
//     return `${msg} Hello ${this.name}!`;
// }
// let user2 = new User('Anna',20)
// let greetingCopy = user.greeting.bind(user2,'Oh')
// console.log(greetingCopy());
