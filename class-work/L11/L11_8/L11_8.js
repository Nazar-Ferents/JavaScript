

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (let {name,username} of users) {
            let userDiv = document.createElement('div');
            let p = document.createElement('p');
            p.innerText = `${name} ${username}`;
            userDiv.appendChild(p);
            document.body.appendChild(userDiv);
        }
        }
    )