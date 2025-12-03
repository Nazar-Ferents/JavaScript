

// let h2 = document.createElement('h2')
// h2.innerText = 'some title'
// document.body.appendChild(h2)

// let allUsersDiv = document.getElementsByClassName('users')[0]
let users = [
    { name: "Alice", age: 22, status: true },
    { name: "Bob", age: 30, status: false },
    { name: "Charlie", age: 27, status: true },
    { name: "Diana", age: 19, status: false },
    { name: "Evan", age: 35, status: true },
    { name: "Fiona", age: 28, status: false },
    { name: "George", age: 24, status: true },
    { name: "Hanna", age: 32, status: false },
    { name: "Ian", age: 21, status: true },
    { name: "Julia", age: 29, status: false }
];

// for (const user of users) {
//     let div = document.createElement("div");
//     div.classList.add('user');
//     div.innerText = user.name;
//     allUsersDiv.appendChild(div);
//
// }
for (const user of users) {
    let userInfo = document.createElement("div");
    userInfo.classList.add("user-info");
    let h2 = document.createElement("h2");
    h2.innerText = user.name;
    let p = document.createElement("p");
    p.innerText = user.status + ' ' + user.age;

    userInfo.append(h2,p)

    document.body.appendChild(userInfo);
}
