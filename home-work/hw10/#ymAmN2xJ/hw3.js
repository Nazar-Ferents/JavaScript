
let form = document.getElementById('users')
let nameInput = document.getElementById('name');
let surnameInput = document.getElementById('surname');
let ageInput = document.getElementById('age');

form.onsubmit= function (ev){
    ev.preventDefault();
    let user = {name: nameInput.value, surname: surnameInput.value, age: ageInput.value};
    console.log(user);
    let div = document.querySelector('div') || document.createElement('div');
    div.classList.add('user');
    div.innerHTML = `<p>name: ${nameInput.value}</p> <p>surname: ${surnameInput.value}</p> <p>age: ${ageInput.value}</p>`;
    div.style.border = '1px solid black';
    div.style.width = '200px';
    document.body.appendChild(div);
}