

localStorage.setItem('user',JSON.stringify({id:1,name:'Jon'}))

let userJSON = localStorage.getItem('user');
let user = JSON.parse(userJSON)
user.age = 29
let stringify = JSON.stringify(user)
localStorage.setItem('user',JSON.stringify(stringify))