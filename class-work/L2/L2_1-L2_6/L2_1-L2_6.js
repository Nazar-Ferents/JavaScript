//
// let arr;
//
// arr = [123,234,-999,5,true,'asd']
//
// console.log(arr);
// console.log(arr [2]);
// console.log(arr.length);
//
// arr[0] = 'new'
// console.log(arr)
//
// arr[6] = 'witcher'
// console.log(arr)
//
// arr[arr.length] = 'spidey'
// console.log(arr)

// let arr = [
//     [11,22,33],
//     [],
//     []
// ]
//
// let innerArray = arr[0];
// console.log(innerArray[1]);
// console.log(arr[0][2]);

// let user1 = {
//     id : 1,
//     name : "James",
//     age : 21,
//     skills : ['html','js','css'],
//     wife : {
//         name : "Katya",
//         age : 18
//     }
// }
//
// console.log(user1);
// console.log(user1.id);
// console.log(user1["name"]);
// console.log(user1.skills[1]);
// console.log(user1.wife.name);

// let users = [
//     {skills: ['html','css'] ,id : 1, name : 'Nazar', age : 23, status : true},
//     {skills: ['html','js'] ,id : 2, name : 'Polya', age : 22, status : true},
//     {skills: ['html','js'] ,id : 3, name : 'Oleh', age : 20, status : true},
//     {skills: ['html','css'] ,id : 4, name : 'Erika', age : 19, status : false}
// ];
//
// let user1 = users[1];
//
// console.log(users);
// console.log(users[0].name);
// console.log(user1['age']);
// console.log(users[3].skills[1]);

let user = {
    id: 1,
    name: 'John',

};
user.age = 22;
user['status'] = true;
console.log(user);

user.id = 5;

console.log(user);

delete user.id;
console.log(user);

