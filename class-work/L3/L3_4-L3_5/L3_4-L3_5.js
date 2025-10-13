//L3_4
// let user =
//     {
//         name: "John",
//         email: "john@gmail.com",
//         password: "123456"};
//
// for (let fieldName in user) {
//     console.log(fieldName, user[fieldName]);
// }


// let users = [
//     {name: "John", email: "john@gmail.com", password: "123456"},
//     {name: "carl", email: "john@gmail.com", password: "123456"},
//     {name: "mike", email: "john@gmail.com", password: "123456"},
//     {name: "tom", email: "john@gmail.com", password: "123456"},
//     {name: "tony", email: "john@gmail.com", password: "123456"},
// ];
//
// for (const user of users) {
//
//     for (const fieldName in user) {
//
//         console.log(fieldName, user[fieldName]);
//
//     }
//
// }

//L3_5

let users = [
    {name: "John", email: "john@gmail.com", password: "123456"},
    {name: "carl", email: "john@gmail.com", password: "123456"},
    {name: "mike", email: "john@gmail.com", password: "123456"},
    {name: "tom", email: "john@gmail.com", password: "123456"},
    {name: "tony", email: "john@gmail.com", password: "123456"},
];

let i = 0;
while (i < users.length) {
    let user = users[i];
    console.log(user);
    i++
}