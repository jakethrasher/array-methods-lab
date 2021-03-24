const mapIt = (array,callback)=> {
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        newArray[i] = callback(array[i]);
    }
    return newArray
}
module.exports = mapIt;