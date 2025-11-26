


// let user = {
//     name: 'Jack',
//     age: 33
// }
//
// let {name,age} = user
// console.log(name)
// console.log(age)


// function user({name}){
//     console.log(name)
// }
//
// user({name: 'Jack',age:33, status:true})


// let name = 'Nazar'
// let age = 23
//
// let user = {
//     name: 'Jack',
//     age: 33,
//     wife : {
//         name:'Anna'
//     }
// }
//
// let {name:userName,age:userAge, wife:{name:wifeName},wife} = user
// console.log(userName)
// console.log(userAge)
// console.log(wifeName)
// console.log(wife)

// let numbers = [11,22,33]
//
// let [a,,c] = numbers
//
// console.log(a,c)

let users = [
    { name: "Anna", age: 22, status: true },
    { name: "Mark", age: 30, status: false },
    { name: "Olga", age: 25, status: true },
    { name: "Nazar", age: 28, status: false },
    { name: "Ira", age: 19, status: true },
    { name: "Oleh", age: 35, status: false },
    { name: "Tetiana", age: 27, status: true },
    { name: "Dmytro", age: 24, status: false },
    { name: "Sofia", age: 21, status: true },
    { name: "Max", age: 29, status: false }
];

let [{name,age,status},user2] = users;
console.log(user2);


