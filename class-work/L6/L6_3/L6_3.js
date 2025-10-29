


let users = [
    {
    name: 'John',
        age: 30,
    email: 'john@gmail.com',
    password: 'password'
    },
    {
        name: 'Clark',
        age: 33,
        email: 'clark@gmail.com',
        password: 'password'

    },
    {
        name: 'January',
        age: 20,
        email: 'january@gmail.com',
        password: 'password'
    }
]

// users.forEach(value => console.log(value))
//
//
// let filteredUsers = users.filter(value => value.age > 30)
//
// console.log(filteredUsers)
//
// let mapUsers = users.map((value, index) =>{
//
//     return{id: index +1, name: value.name, age: value.age, email: value.email, password: value.password}
//
// })
// console.log(mapUsers)
//
//
// let find = users.find(value => value.name === "Clark")
// console.log(find)
//
// console.log(users.every(value => value.password))
//
//
// users.sort((a, b) =>{
//     console.log(a,b)
// })
//
// let sort = users.sort((u1,u2) =>{
//     if(u1.name > u2.name){
//         return 1
//     }
//     if(u1.name < u2.name){
//         return -1
//     }
//     if(u1.name === u2.name){
//         return 0
//     }
// })
// console.log(sort)


let reduce = users.reduce((previousValue, currentValue) => {

    if(currentValue.age > 30){
        previousValue.Old.push(currentValue)
    } else
    {
        previousValue.Young.push(currentValue)
    }
    return previousValue

},{Old:[],Young:[]})

console.log(reduce)