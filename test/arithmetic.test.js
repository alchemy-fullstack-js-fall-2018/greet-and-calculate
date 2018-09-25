const assert = require('assert');
const { add, subtract, multiply, division } = require('../lib/arithmetic');

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

    it('this subtracts two numbers', () => {
        const subtraction = subtract(10, 5);
        assert.equal(subtraction, 5);
    });

    it('this multiplies two numbers', () => {
        const multiplication = multiply(10, 5);
        assert.equal(multiplication, 50);
    });

    it('this divides two numbers', () => {
        const divide = division(100, 10);
        assert.equal(divide, 10);
    });
});


