

let array = [1, 2, 3,'a', 'b', 'c',true,false];

function foobar(anything){
    document.write(`<ul>`)
     for (let item of anything){

          document.write(`<li>${item}</li>`)
     }
    document.write(`</ul>`)
}

foobar(array);