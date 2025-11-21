

let map = new Map();
console.log(map);
let derek = {id:'derek'}
let domik = {id:'domik'}

map.set(derek,{name:'vitalik',age:23});
map.set(domik,{name:'dominik',age:23});
console.log(map);
console.log(map.get(domik));

// map.delete(domik);
// console.log(map);
// map.clear()

console.log(map.size);

let from = map.keys()
console.log(Array.from(from));
console.log(map.values());