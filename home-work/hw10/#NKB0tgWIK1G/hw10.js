

let usersDiv = document.getElementById('users');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let array = [];

for (let i = 1; i <= 100; i++){

    array.push({index:i})
}

let page = 0;
const limit = 10;

function render(){

    usersDiv.innerHTML = '';

    let start = page  * limit;
    let end = start + limit;
    let slice = array.slice(start, end);

    for (let user of slice){
        let div = document.createElement('div');
        div.innerText = `${user.index}`;
        usersDiv.appendChild(div);
    }
}

next.onclick = function(ev){
    if ((page+1)*limit < array.length){
        page++;
        render();
    }
}

prev.onclick = function(ev){
    if (page > 0){
        page--;
        render();
    }
}

render();




