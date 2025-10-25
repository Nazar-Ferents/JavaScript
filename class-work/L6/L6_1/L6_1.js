


let str = "Hello World";
console.log(str);

// for (let i of str){
//     console.log(i);
// }
//
// let s = str.concat('!!!')
// console.log(s);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.startsWith("He"));
console.log(str.endsWith("ld"));
console.log(str.substring(0,6));
console.log(str.indexOf('o'));
console.log(str.indexOf('o',5));
console.log(str.lastIndexOf('o'));
console.log(str.charAt(6));
console.log(str.replace('l',7));
console.log(str.replaceAll('l',7));

let split = str.split('W');
console.log(split);
