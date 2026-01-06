
let hider = document.getElementsByTagName('button')[0];

let text = document.getElementById('text');

hider = hider.onclick = function (ev) {
    text.style.display = 'none';
}