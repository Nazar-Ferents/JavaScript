

let user = {
    name: 'John',
    email: 'john@gmail.com'
}

Object.defineProperty(
    user,
    'id',
    {
        value:100,
        writable:false,
        enumerable:false,
        configurable:false
    })

console.log(user);