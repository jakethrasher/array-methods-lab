const reduceFunction = require('./reduceFunction');

describe('', ()=>{
    const numbersArray= [1,2,3,4,5,6,7,8,9,10]
    it('', ()=>{

        const sumTheNumbers = (accumulator, item)=>{

            const reduction = accumulator + item;

            return reduction
        }
        
        expect(reduceFunction(numbersArray, sumTheNumbers)).toEqual(55)
    })
});
