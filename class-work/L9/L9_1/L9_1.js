

// console.log(document)
// console.log(document.head.children)
// console.log(document.body.children)

// let ul1 = document.getElementById("ul1");
// console.log(ul1);
//
// let menuCollection = document.getElementsByClassName("menu");
// console.log(menuCollection);
//
// for (const menu of menuCollection) {
//     console.log(menu);
// }

// let tag = document.getElementsByTagName('li');
// console.log(tag);

// let ul1 = document.getElementById('ul1')
// console.log(ul1)
//
// let list = ul1.getElementsByTagName('li')
// console.log(list)

// console.log(document.querySelector('.menu'))
// console.log(document.querySelectorAll('.menu'))

console.log(document.querySelectorAll('.menu:nth-child(2)>li'))
let nodeListOf = document.querySelectorAll('#ul2>li')

console.log(nodeListOf)
for (const node of nodeListOf) {
    console.log(node)
}

