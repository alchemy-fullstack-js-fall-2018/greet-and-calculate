const assert = require('assert');
const numberTest = require('../lib/arithmetic');

describe('number test', () => {

    it('this should be a numeric value', () => {
        const number = numberTest('valid')
        assert.equal(number, 'this is a valid number')
    });

    it('throws an error when this is not a number', () => {
        const number = numberTest('invalid')
        assert.equal(number, 'this is not an invalid number')
    });
})


// describe('greet', () => {
    
//     it('greets supplied name', () => {
//         const greeting = greet('world');
//         assert.equal(greeting, 'hello world');
//     });

//     it('throws an error when name is not a string', () => {
//         assert.throws(() => {
//             greet({});
//         }, Error);
//     });
// });
