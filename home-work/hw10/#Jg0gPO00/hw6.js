

let input = document.getElementById("kgInput")
let output = document.getElementById("convert")

input.oninput = function (ev) {
    const kg = parseFloat(input.value)
    if (!isNaN(kg) && kg > 0) {
        const lbs = kg * 2.20462;
        output.innerText = `Вага у фунтах = ${lbs}`
    }
    else{

       output.innerText = `Вага у фунтах = 0`


    }
}



