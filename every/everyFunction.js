const everyFunction = (array, callback) =>{
    // let testArray = []
    for (let i = 0; i < array.length; i++) {
        if(!callback(array[i])) 
        return false;
    } 
    return true;
};
module.exports = everyFunction; 
