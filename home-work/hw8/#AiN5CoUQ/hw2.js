

function deepCloner (obj){
    if(obj){

        let functions = []
        for (let key in obj ){
            if (typeof obj[key] === 'function'){
                let functionClone = obj[key].bind ({})
                functions.push ({functionClone, key});
            }
        }
        let objClone = JSON.stringify(obj)
        let mainClone = JSON.parse(objClone)
        for (let func of functions){
            mainClone[func.key] = func.functionClone;
        }
        return mainClone

    }
    else {
        return 'It is wrong type of obj'
    }

}

console.log(deepCloner({name:"Jhon",age:34,greeting(){},foo(){}}))