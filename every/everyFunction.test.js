const everyFunction = require('./everyFunction');

describe('everyFunction', ()=> {
    it('returns a boolean value based on whether or not all elements of an array meet the requirements of the callback', ()=>{
        
        const booleanArray = [true, true, false]
        const trueOrFalse = (boolean)=> {
            if(boolean) return true;
            else return false;
        }
        expect(everyFunction(booleanArray, trueOrFalse)).toBeFalsy();
    })
});
    
    
    