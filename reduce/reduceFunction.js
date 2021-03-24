const reduceFunction = (array, callback, initialValue)=>{
    let total = 0;
    for(let i = 0; i < array.length; i++){
        total = callback(total, array[i])
    }
    return total;
};
module.exports = reduceFunction;