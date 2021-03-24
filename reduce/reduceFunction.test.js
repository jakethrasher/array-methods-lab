const reduceFunction = require('./reduceFunction');

describe('reduceFunction', ()=>{
    const numbersArray= [1,2,3,4]
    it('should take in an array and a callback and return the sum of all the numbers', ()=>{
        
        const sumTheNumbers = (accumulator, item)=>{
            return accumulator += item;
        }

        expect(reduceFunction(numbersArray, sumTheNumbers)).toEqual(10)
    })

    it('should take the optional initialValue parameter as the initial value for the accumulator', ()=>{

        const sumTheNumbers = (accumulator, item)=>{
            return accumulator += item;
        }
        const initialValue = 10;

        expect(reduceFunction(numbersArray, sumTheNumbers,initialValue)).toEqual(20)
    })
});
