const reduceFunction = require('./reduceFunction');

describe('reduceFunction', ()=>{
    const numbersArray= [1,2,3,4]
    const sumTheNumbers =(a, b)=> a + b;
    
    it('should take in an array and a callback and return the sum of all the numbers', ()=>{
        
        expect(reduceFunction(numbersArray, sumTheNumbers)).toEqual(10)
    })

    it('should take the optional initialValue parameter as the initial value for the accumulator', ()=>{

        const initialValue = 10;

        expect(reduceFunction(numbersArray, sumTheNumbers,initialValue)).toEqual(20)
    })
});
