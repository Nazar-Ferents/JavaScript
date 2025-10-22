


// function asd(){
//     let x = 10;
//     function inner (){
//         return ++x;
//     }
//     return inner;
// }
//
// let foobar = asd()
// console.log( foobar() );

function userBuilder(name,age){
    let user = {name,age}
    return {
        getName(){
            return user.name;

        },
        getAge(){
            return user.age;

        },
        setAge(age){
            if (age > 0){
                user.age = age;
            }
        }
    }
}



let builder = userBuilder('John',23);
console.log(builder.getAge());
console.log(builder.getName());
builder.setAge(33)
console.log(builder.getAge());
