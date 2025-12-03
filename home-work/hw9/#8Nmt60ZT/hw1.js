

let div = document.createElement("div");
div.classList.add("wrap");
div.classList.add('collapse');
div.classList.add('alpha');
div.classList.add('beta');
div.style.backgroundColor = 'silver'
div.style.color = 'blue'
div.style.fontSize = '26px'
div.innerText= 'Hello World';

document.body.appendChild(div);

let divCopy = div.cloneNode(true);

document.body.appendChild(divCopy)

