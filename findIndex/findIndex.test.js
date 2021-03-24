const findIndex = require('./findIndex');

describe('findIndex function', ()=>{
    const things = ['tacos','beer','water','dragon', 'beer', 5]

    it('takes an array and a callback and returns the index of the first item whos callback value is truthy', ()=>{
        
        const callback = (item) => {
            if(item){
                return item;
            }
        }
        expect(findIndex(things,callback('tacos'))).toEqual(0)
        expect(findIndex(things,callback(5))).toEqual(5)
    })
    
    it('should return -1 when the item does not match anything in the array', ()=>{
        const things = ['tacos','beer','water','dragon', 'beer']
        
        const callback = (item) => {
            if(item){
                return item;
            }
        }
        expect(findIndex(things,callback(3))).toEqual(-1)
    })
})