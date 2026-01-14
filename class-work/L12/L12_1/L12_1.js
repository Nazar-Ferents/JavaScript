

 async function foo(){
    let result = await fetch('https://dummyjson.com/recipes')
        .then(res => res.json())
        console.log(result)
}