//L2_7
// let a = 100;
// let b = a;
//
// b = b + 10;
// console.log(b);
// console.log(a);
//
// let user = {
//     id: 1,
//     name: 'John'
// };
//
// let user2 = user;
// console.log(user2);
// user2.age = 23;
// console.log(user2);
// console.log(user);

//L2_8
// if(true){
//     console.log('test');
// }
// if(false){
//     console.log('test');
// }

// let color = 'green';
//
// if (color === 'red'){
//     console.log('stop');
// }
// else if(color === 'green'){
//     console.log('go');
// }
//
// let age = + prompt('How old are you?');
// console.log(age);
//
// if(age>=18){
//     console.log('adult');
// }
// else if(age<18){
//     console.log('cartoon');
// }
//
// let color = prompt('what is your favorite color?');
// if(color === 'green'){
//     if (confirm('Is the road clear?')){
//         console.log('go');
//     }
//     else{
//         console.log('just wait');
//     }
// }
// else if(color === 'red'){
//     console.log('wait');
// }
// else if(color === 'yellow'){
//     console.log('wait');
// }
// else {
//     console.log('???');
// }

// let color = prompt('what color?');
// let isRoadClear = confirm('is road clear?');
// if (color === 'green' && isRoadClear) {
//     console.log('go');
// }
// else if(color === 'red'){
//     console.log('wait');
// }
// else if(color === 'yellow'){
//     console.log('wait');
// }
// else {
//     console.log('???');
// }

//L2_9
// let color = prompt('what color?');
// switch (color){
//     case 'green' :
//         confirm('is road clear?')
//         console.log('go');
//         break;
//         case 'red':
//             console.log('stop');
//             break;
//         case 'yellow':
//             console.log('wait');
//             break;
//         default:
//             console.log('???');
// }

//L2_10
let obj = {
    id: 1,
    name: 'John',
    age: 19
}

// let access;
//  if (obj.age > 18) {
//      access = true;
//  }else {
//      access = false;
//  }
//
//  console.log(access);

let access = obj.age >18 ? 'true' : 'false';

console.log(access);