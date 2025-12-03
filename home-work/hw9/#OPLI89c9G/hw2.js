

let info = ['Main', 'Products', 'About us', 'Contacts']

let ulInfo = document.createElement('ul');

for (let item of info) {
    let li = document.createElement('li');
    li.innerText = item;
    ulInfo.appendChild(li);
}

document.body.appendChild(ulInfo);