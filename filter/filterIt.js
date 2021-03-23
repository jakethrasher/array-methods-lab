const filterIt = (array, callback)=>{

    let newArray = [];

    for (let i = 0; i < array.length; i++) {

        if(callback(array[i])){
            // newArray[newArray.length] = array[i];
            newArray = [...newArray, array[i]]
        }
      }

    return newArray;    
}
module.exports= filterIt;