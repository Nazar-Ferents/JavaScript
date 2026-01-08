

let price = document.querySelector('#price p');
let number = 100

let currentValue = +(localStorage.getItem('current')) || number;

let reLoad = +(localStorage.getItem('reLoad'));

let sec = Date.now()

if (reLoad > 0){
    if (sec - reLoad > 10000){
        currentValue += 10;
        localStorage.setItem('current', currentValue)
        localStorage.setItem('reLoad',sec)
    }
}else{
    localStorage.setItem('current', currentValue)
    localStorage.setItem('reLoad',sec)
}
price.innerText = `${currentValue}uah`;




