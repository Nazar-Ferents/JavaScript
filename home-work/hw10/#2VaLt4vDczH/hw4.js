
let counter = document.querySelector('#counter p');

let currentValue = localStorage.getItem('counter');

if (currentValue === null) {
    currentValue = 0;
}else{
    currentValue = +currentValue;
}

currentValue++

counter.innerText = currentValue;

localStorage.setItem('counter', currentValue);





