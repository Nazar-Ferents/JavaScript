


Array.prototype.myForEach = function (callback){
    for (let i = 0; i < this.length; i++) {
        callback(this[i],i,this);
    }
}

Array.prototype.myFilter = function (callback){
    let result = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i],i,this)){
            result.push(this[i]);
        }
    }
    return result;
}
