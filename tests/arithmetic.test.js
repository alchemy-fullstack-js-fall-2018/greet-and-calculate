const assert = require('assert');
const { add, subtract, multiply } = require('../lib/arithmetic');

describe('arithmetic', () =>{
    
    it('should add two numbers', () => {
        const sum = add(2, 5);
        assert.equal(sum, 7);
    });

    it('should subtract two numbers', () => {
        const difference = subtract(2, 5);
        assert.equal(difference, -3);
    });

    it('add should throw an error if given non-number input', () => {
        assert.throws(() => {
            add('cheese', 5);
        }, Error);
    });

    it('subtract should throw an error if given non-number input', () => {
        assert.throws(() => {
            subtract(2, 'bologna');
        }, Error);
    });

    it('should multiply two numbers', () => {
        const product = multiply(2, 5);
        assert.equal(product, 10);
    });

    it('multiply should throw an error if given non-number input', () => {
        assert.throws(() => {
            multiply('ham', 5);
        }, Error);
    });

});
