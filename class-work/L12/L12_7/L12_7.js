

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json())
// .then(users => {
//     for(const user of users){
//         fetch("https://jsonplaceholder.typicode.com/posts?userId="+user.id)
//             .then(res => res.json())
//         .then(postOfUsers => {
//             user.posts = postOfUsers;
//         })
//         console.log(user);
//     }
// })
let users = fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
let posts = fetch("https://jsonplaceholder.typicode.com/posts?userId="+user.id)
    .then(res => res.json())
Promise.all([x,y])
