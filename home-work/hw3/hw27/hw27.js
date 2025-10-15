let numbers = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}

let none = [];
for (let j = 0; j < numbers.length; j++) {
    none.push(numbers[j]);
}
console.log(none);


let arr =  [ 'a', 'b', 'c']
let word = ''
// for (let k = 0; k < arr.length; k++) {
//     word += arr[k];
// }
// console.log(word);

// let k = 0;
// while (k < arr.length) {
//     word += arr[k];
//     k++;
// }
// console.log(word);

for (let letter of arr) {
    word += letter;
}
console.log(word);