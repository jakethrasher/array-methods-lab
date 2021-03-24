const everyFunction = require('./everyFunction');

describe('everyFunction', ()=> {
    
    const booleanArray = [true, true, false]

    it('returns a boolean value if all elements of an array meet the requirements of the callback', ()=>{

        const trueOrFalse = (boolean)=> {

            if(boolean){
                return true;
            }
            else return false;
        }
    
        expect(everyFunction(booleanArray, trueOrFalse)).toBeFalsy();
    })
});
