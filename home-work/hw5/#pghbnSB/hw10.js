


let numbers = [4,6,7,8,2,-5,-77,16770]

let min = (arr) =>{
    let minNumber = numbers[0]
    for (let item of arr){
        if (minNumber > item){
            minNumber = item

        }
    }
    return minNumber
}

min(numbers)

console.log(min(numbers))