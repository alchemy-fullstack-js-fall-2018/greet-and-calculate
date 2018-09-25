const assert = require('assert');
const add = require('../lib/arithmetic');
// const subtract = require('../lib/arithmetic');

describe('number test', () => {

    it('this should be a numeric value', () => {
        assert.throws(() => {
            add('1', '2');
        }, Error);
    });

    it('this adds two numbers', () => {
        const addition = add(2, 4);
        assert.equal(addition, 6);
    });

    it('this subtracts two numbers')
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
