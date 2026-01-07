
// localStorage.setItem('arrays' , JSON.stringify([{arrayName:'',array:[]}]));

function addToLocalStorage(arrayName,objToAdd){
    let arr = JSON.parse(localStorage.getItem('arrays')) || [];

    let arrItem = arr.find(item => item.arrayName === arrayName);

        if (arrItem){
            const currentArray = arrItem.array;
            currentArray.push(objToAdd);
        }
        else {
            arr.push({arrayName:arrayName,array:[objToAdd]})
        }



    localStorage.setItem('arrays' , JSON.stringify(arr));
}

