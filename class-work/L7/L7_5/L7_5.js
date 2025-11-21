

// let set = new Set()
//
// set.add('asd')
// set.add('qwe')
// set.add('asd')
// set.add('xxx')
//
// console.log(set);
// console.log(set.has('xxx'));
// set.delete('xxx')
// console.log(set);
// console.log(set.size);
// set.forEach((value) => console.log(value));
//
// let arrayFromSet = Array.from(set);

let numbers = [11,22,33,44,55,55]
console.log(numbers);

let set = new Set(numbers);
console.log(set);
let transform = Array.from(set);
console.log(transform);