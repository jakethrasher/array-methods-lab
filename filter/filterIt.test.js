const filterIt = require('./filterIt');

describe('filterIt function', ()=> {
    it('Takes an Array and callback and creates a new Array with all items whose callback returned true or a truthy value.', ()=>{

        const numsArray =[1,2,3,4,5,6];

        const returnEvenNum = (num) => {
            if(num % 2 === 0) return true;
            else return false;
        }
        
        expect(filterIt(numsArray, returnEvenNum)).toEqual([2,4,6]);
    })
})