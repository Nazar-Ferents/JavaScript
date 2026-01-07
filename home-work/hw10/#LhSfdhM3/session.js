

let box = document.getElementById('History')

let sessions = JSON.parse(localStorage.getItem('sessionsList')) || [];

for (let session of sessions) {
    let p = document.createElement('p');
    p.innerText = `Date:${session.date} | Time:${session.time}`;
    box.appendChild(p);
}