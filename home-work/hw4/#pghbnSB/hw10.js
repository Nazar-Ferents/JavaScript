let numbers = [1,2,3,4,5,6,7,8,9,10]

function MinNumber(item){
    let Min = numbers[0]
    for (let number of item){
        if (Min > number){
            Min = number
        }

    }
    return Min;
}

MinNumber(numbers)
console.log(MinNumber(numbers))
