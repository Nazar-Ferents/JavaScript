function iterator(arr, i) {
    console.log(arr[i]);
    ++i;
    if (i < arr.length) {
        iterator(arr, i);
    }
}

iterator([22, 33, 44], 0)


let arr = [11, 22, 33, [44, 55]];
let innerArr = [];

function flatter(array) {
    for (const item of array) {
        if (Array.isArray(item)) {
            flatter(item)

        } else
        {
            innerArr.push(item)

        }

    }

}
flatter(arr)
console.log(innerArr);