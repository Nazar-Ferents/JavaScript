

let user = {
    name: 'Jack',
    skills: ['html','js'],
    greeting:function(){}
}

// let userCopy = {...user};
// console.log(userCopy === user);
// console.log(userCopy.skills === user.skills);

// let userJasonClone = JSON.stringify(user)
// console.log(userJasonClone)
// console.log(user)
// let parse = JSON.parse(userJasonClone)
// console.log(parse)
// console.log(userJasonClone === parse)
// console.log(userJasonClone.skills === parse.skills)

let assign = Object.assign({},user);

console.log(assign);
console.log(assign === user);
console.log(assign.skills === user.skills);

