let form = document.getElementById('form');
let ageInput = document.getElementById('age');


form.onsubmit = function (ev) {
        ev.preventDefault();

        const age = +(ageInput.value);
        let p = document.querySelector('p') || document.createElement('p');
    if (age > 18){

            p.innerText = `access granted `;
        }
        else{

            p.innerText = `access denied `;
               }
    document.body.appendChild(p)
};