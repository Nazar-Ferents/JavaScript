

let user = {
    name: "John",
    age:25
};

let user2 = user

let userCopy = {...user}
console.log(userCopy)

let numbers = [11,22,33]

let numbersCopy = [...numbers];
console.log(numbersCopy)

numbersCopy[1] = 55
console.log(numbersCopy)
console.log(numbers)