
console.log(1)
setTimeout(function(){
    console.log('1000ms')
},1000)
setTimeout(function(){
    console.log('200ms')
},200)

console.log(2)

let x = 1;

setTimeout(function(){
    x = 1000
})

console.log(x)
