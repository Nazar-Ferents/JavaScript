
let date = new Date();

let sessionsList = JSON.parse(localStorage.getItem('sessionsList')) || [];

sessionsList.push({
    date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
    time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
})

localStorage.setItem('sessionsList', JSON.stringify(sessionsList))