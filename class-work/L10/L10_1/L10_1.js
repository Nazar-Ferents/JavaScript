

// let target  = document.getElementById('target');
//
// target.onclick = function(ev) {
//     console.log('Click')
//     console.log(ev);
// }
//
// target.addEventListener('click', function(ev) {console.log('cocos')})
//
// target.onmouseover = function(ev) {
//     console.log('over')
// }
// target.onmouseleave = function(ev) {
//     console.log('leave')
// }

// target.onclick = function(ev) {
//     console.log('cocos')
//     console.log(ev);
// }


// target.onmousemove = function(ev) {
//     console.log(ev.clientX,ev.clientY);
//     let r = ev.clientX;
//     let g = ev.clientX;
//     let b = ev.clientY;
//     this.style.background = `rgb(${r}, ${g}, ${b})`;
// }


// let input = document.getElementById('i1');
//
// input.oninput = function (ev) {
//     console.log(this.value);
//
// }
//
// let f1 = document.forms.f1;
//
// f1.onsubmit = function (ev) {
//     ev.preventDefault();
//     console.log('hello');
//     let user = {name:this.username.value};
//     console.log(user.name);
// }

window.onload = function() {
    console.log('load')
}
document.onreadystatechange = function() {
    console.log(document.readyState);
}


