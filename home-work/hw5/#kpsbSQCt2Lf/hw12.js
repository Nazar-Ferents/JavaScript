


let numbers = [22,33,44,55]

let swapper = (arr,i1,i2) => {
    let bin = arr[i1];
    arr[i1]=arr[i2];
    arr[i2]=bin;

    return arr;

}

console.log(swapper(numbers,1,2));