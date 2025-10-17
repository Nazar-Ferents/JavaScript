function writer(productTitle, price, description) {
    document.write(`
    <div>
    <h2>productTitle ${price}</h2>
    <p>${description}</p>
     </div>
    `)
}
writer('milk', '32', 'some milk');


function array(array) {
    for (item of array) {

        console.log(item);
    }
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array(numbers);

function usersFactory(id, name, status) {

    let user = {
        id: id,
        name: name,
        status: status
    }

    return user;
}

let u1 = usersFactory(1, 'Nazar', true);
let u2 = usersFactory(2, 'Oleg', true);


console.log(u1);
console.log(u1);

