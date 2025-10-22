


function swap(arr,i1,i2) {

    let cell = arr[i1];
    arr[i1]= arr[i2];
    arr[i2] = cell;

    return arr;

}


console.log(swap([11,22,33,44],2,3));