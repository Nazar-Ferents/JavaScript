function calc(a, b) {
    let result = a + b;
    return result;
}

let r1 = calc(10, 20)
let r2 = calc(15, 25)
console.log(r1, r2);


function percentage(cash, perc) {
    return cash / 100 * perc;
}

function tax(sum) {
    let pdv = (percentage(sum, 20))
    let warTax = (percentage(sum, 1.5))
    return sum - pdv - warTax;
}

let number = tax(10000)
console.log(number)

function userFilter(users) {
    let filteredUsers = [];
    for (const user of users) {
        if (user.age > 30) {
            filteredUsers.push(user)
        }
    }
    return filteredUsers;
}

let users = [
    {
    name: 'vasya',
    age: 25,
    status: true,
    },
    {
        name: 'ira',
        age: 35,
        status: true,
    },
    {
       name: 'itan',
       age: 33,
       status: true,
    }
]

let filter = userFilter(users);
console.log(filter);
