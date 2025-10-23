


console.log('start');

try {
    console.log(a);
}catch(e) {
    console.log(e);
}finally {
    console.log('finally block');
}
console.log('end');



function calc(a,b){
    if (b === 0){
        throw new Error('b is 0')
    }

    return a / b

}
console.log(calc(10,20)
);
