const map = require('./map')

describe('map function',() => {
    it('it Takes an Array and callback and creates a new Array with the return value of each called callback', () => {

    const halogens = ['chlorine','fluorine', 'bromine', 'iodine' ]

    const makeUpperCase = (string)=>{
        return string.toUpperCase();
    }

    expect(map(halogens, makeUpperCase)).toEqual(['CHLORINE','FLUORINE', 'BROMINE','IODINE'])
    })
})
