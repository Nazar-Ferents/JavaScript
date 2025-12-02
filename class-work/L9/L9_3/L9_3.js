

let target = document.getElementById('target')
console.log(target.innerText)

target.style.backgroundColor = 'silver'

console.log(target.classList)
target.classList.add('foo')
target.classList.add('bar')

console.log(target.classList.item(0))
console.log(target.classList.contains('bar'))

target.classList.toggle('asd')

console.log(target.getAttribute('xxx'))
console.log(target.getAttribute('id'))
console.log(target.getAttribute('style'))

console.log(target.previousElementSibling)
console.log(target.nextElementSibling)
console.log(target.children)
console.log(target.childNodes)

target.innerHTML = '<b>qdqwfwqfhu</b>'

console.log(target.outerHTML)


