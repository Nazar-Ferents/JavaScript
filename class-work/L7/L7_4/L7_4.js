

let now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getTime());

let date1 = new Date(146464533);
console.log(date1);
let date2 = new Date('March 12 2002 03:56:70');
console.log(date2);
let date3 = new Date(2002, 2, 12,3,56,70,45);
console.log(date3);

date1.setFullYear(2005)
console.log(date1);

let user = {
    id: 1,
    name: 'John',
    bday: new Date('January 31 2002 03:56:70')
}

console.log(user);