 let x = [];
//
// for (let i = 1; i <= 100; i++) {
//     if(i % 2 === 0){
//
//         x.push(i);
//
//     }
// }
//
//
// for (let j =1; j <= 100; j++) {
//     if(j % 2 !== 0){
//         x.push(j);
//     }
// }
//
// for (let k = 1; k <= 20; k++) {
//     x.push(Math.floor(Math.random()*100));
// }
//
// for (let p = 1; p <= 20; p++) {
//     x.push(Math.floor(Math.random()*(732 - 8 + 1))+8);
// }

// for (let q = 2 ; q < x.length; q+=3) {
//     console.log(x[q]);
// }

// let n = [];
// for (let q = 2; q < x.length ; q+=3) {
//     if (x[q] % 2 === 0){
//         n.push(x[q])
//
//     }
// }
// console.log(n);

// for (let l = 1; l < x.length -1 ; l++) {
//     if (x[l +1 ] % 2 === 0){
//         console.log(x[l]);
//     }
// }

//
// let purchases = [100,250,50,168,120,345,188]
// let sum = 0;
//
// for (let purchase of purchases ) {
//     sum  += purchase;
//
//
// }
// let average = sum / purchases.length;
// console.log(average);

// let numbers = [23, 45, 12, 67, 34, 89, 5, 76, 31, 50];
//
// let numbers5 = [];
// for (let number of numbers) {
//      number *= 5;
//      numbers5.push(number);
// };
//
// console.log(numbers5)

let mixedArray = ['apple', 42, true, 'hello', 3.14, false, 'world'];

for (let number of mixedArray) {
    if (typeof number === 'number') {
        console.log(number);
    }
}