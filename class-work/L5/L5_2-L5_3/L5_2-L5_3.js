

let calc = (a,b) => {
    return a + b
};
console.log(calc(10,20));


let asd =  ( ) => console.log( 'HI' );
asd()


let user = {
    name: 'John',
    age: 32,
    greeting: function (msg) {
        console.log( `${msg} my name is ${this.name}`);
        return msg;
    },
    vitanya: (msg) => console.log( `${msg} I am  ${this.age} years old`)
}

console.log( user.greeting('hi') );
console.log( user.vitanya('Hello') );
