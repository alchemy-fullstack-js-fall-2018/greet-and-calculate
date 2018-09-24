const assert = require('assert');
const { add } = require('../lib/arithmetic');

describe('addition', () => {
    
    it('adds two numbers supplied as arguments', () => {
        const sum = add(24, 41);
        assert.equal(sum, 65);
    });
    
    it('throws error when one or both of the arguments are NaN', () => {
        assert.throws(() => {
            add('a', 5);
        }, Error);
    });
    
    it('adds numbers in the form of strings when they are provided as arguments', () => {
        const sum = add('24', '41');
        assert.equal(sum, 65);
    });

    it('adds floating point numbers', () => {
        const sum = add(3.1789, 1.4567);
        assert.equal(sum, 4.6356);
    });
    
    it('adds floating point numbers in the form of strings when they are provided as arguments', () => {
        const sum = add('3.1789', '1.4567');
        assert.equal(sum, 4.6356);
    });

});
