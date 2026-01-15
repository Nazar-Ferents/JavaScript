

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

// let users = fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => res.json())
// let posts = fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(res => res.json())
// Promise.all([users,posts]).then((result)=>{
//     let [users, posts] = result;
//
//     for(const user of users){
//         user.posts =[];
//
//         for(const post of posts){
//             if(user.id === post.userId){
//                 user.posts.push(post);
//             }
//         }
//     }
//     console.log(users);
//
// })

let users = fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
let posts = fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
Promise.any([users,posts]).then((value)=>{console.log(value)});
