

function deepCloner (obj){

    if(obj){
        let functions = []
        for (const key in obj){
            if (typeof obj[key] === 'function'){

                let cloneOfFunction = obj[key].bind({})
                functions.push({cloneOfFunction,key})

            }
        }
        let demoClone = JSON.stringify(obj)
        let objCloner = JSON.parse(demoClone)
        for (let func of functions){
            objCloner[func.key] = func.cloneOfFunction

        }
        console.log(objCloner)
        return objCloner;
    }
    else {
        return 'This object has error';
    }


}

console.log(deepCloner({name:"John", age:20,greeting(){},foo(){}}));
console.log(deepCloner(0));