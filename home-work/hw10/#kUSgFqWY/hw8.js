

let button = document.getElementsByTagName('button')[0];
let rows = document.getElementById('rows');
let columns = document.getElementById('columns');
let text = document.getElementById('text');
let table = document.getElementById('table');

button.onclick = function(ev){

    let countRows = rows.value;
    let countColumns = columns.value;
    let cellsText = text.value

    table.style.gridTemplateColumns = `repeat(${countColumns},1fr)`;

    for (let i = 0; i < countRows * countColumns; i++){
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.innerText = cellsText
        table.appendChild(cell);
    }
}