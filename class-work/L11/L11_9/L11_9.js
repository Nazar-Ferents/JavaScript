

let url = new URL('https://jsonplaceholder.typicode.com/posts')
url.searchParams.set('userId',8)
url.searchParams.set('asd','sadgfsdg')
url.searchParams.get('asd')

fetch(url)
.then(res => res.json())
.then(values => {
    console.log(values);
})