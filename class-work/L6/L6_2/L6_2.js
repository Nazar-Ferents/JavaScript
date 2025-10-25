


let arr = [];
console.log(Array.isArray(arr));
arr.push('new element1')
arr.push('new element2')
arr.push('new element3')
arr.push('new element4')
arr.push('new element5')
console.log(arr);
console.log(arr.pop());

arr.unshift('!!!')
console.log(arr);

arr.shift()
console.log(arr);

let join = arr.join(';')
console.log(join);

let nums = [1,2,3,4,5];

let together = arr.concat(nums)
console.log(together)

console.log(nums.reverse())

let slice = together.slice(0,5)
console.log(slice)
console.log(together)


console.log(together.indexOf(4))
together.splice(together.indexOf(4),1)
console.log(together)

console.log(together.includes(3))







