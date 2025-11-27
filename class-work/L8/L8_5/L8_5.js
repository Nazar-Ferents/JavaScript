

let base = {
    name:'Jhon',
    id: 1
}

let copy = Object.create(base);
console.log(base);
console.log(copy);
console.log(copy.id);
console.log(copy.name);

console.log(copy.hasOwnProperty('name'));

copy.id = 100
console.log(copy);
console.log(copy.hasOwnProperty('id'));

let obj = {}
obj.__proto__ = base;
console.log(obj);