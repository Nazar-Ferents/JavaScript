


let array = [1,2,3,'a','b','c',true,false];

let creator = (arr) => {
    document.write(`<ul>`)
    for (let i = 0; i < arr.length; i++) {

        document.write(`<li>${arr[i]}</li>`)
    }
    document.write(`</ul>`)

}

creator(array);