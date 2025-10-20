

function foobar() {
    console.log(arguments);
    if (arguments.length === 2) {
        return arguments[0] + arguments[1];
    }else if (arguments.length === 3) {
        return arguments[0] + arguments[1] + arguments[2];
    }
}
console.log(foobar(10,20));
console.log(foobar(10,20,30));


function asd(y,...x){
    console.log(x);
}

asd(1,2,3,4,5,true);