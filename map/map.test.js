const mapIt = require('./map')

const halogens = ['chlorine','fluorine', 'bromine', 'iodine' ]

describe('map function',() => {

    it('it Takes an Array and callback and creates a new Array with the return value of each called callback', () => {

        const makeUpperCase = (string)=>{
            return string.toUpperCase();
        }
    
        expect(mapIt(halogens, makeUpperCase))
        .toEqual(['CHLORINE','FLUORINE', 'BROMINE','IODINE'])
        })

    it('it does not affect the original array', () => {
    
        expect(halogens).toEqual(['chlorine','fluorine', 'bromine', 'iodine' ])
    
        })
    })

