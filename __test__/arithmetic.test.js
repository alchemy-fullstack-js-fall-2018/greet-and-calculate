const assert = require('assert');
const { add, sub, multiply, divide } = require('../lib/arithmetic.js');

describe('addition', () => {

    it('correctly adds two numbers', () => {
        const result = add(6, 9);
        assert.equal(result, 15);
    });

    it('throws an error when first argument is not a number', () => {
        assert.throws(() => {
            add('notANumber', 5);
        }, Error);
    });

    it('throws an error when second argument is not a number', () => {
        assert.throws(() => {
            add(5, 'notANumber');
        }, Error);
    });

});

describe('subtraction', () => {

    it('correctly subtracts two numbers', () => {
        const result = sub(15, 9);
        assert.equal(result, 6);
    });

    it('throws an error when first argument is not a number', () => {
        assert.throws(() => {
            sub('notANumber', 5);
        }, Error);
    });

    it('throws an error when second argument is not a number', () => {
        assert.throws(() => {
            sub(5, 'notANumber');
        }, Error);
    });

});

describe('multiplication', () => {

    it('correctly multiplies two numbers', () => {
        const result = multiply(10, 13);
        assert.equal(result, 130);
    });

    it('throws an error when first argument is not a number', () => {
        assert.throws(() => {
            multiply('notANumber', 5);
        }, Error);
    });

    it('throws an error when second argument is not a number', () => {
        assert.throws(() => {
            multiply(5, 'notANumber');
        }, Error);
    });

});

describe('division', () => {

    it('correctly divides two numbers', () => {
        const result = divide(10, 5);
        assert.equal(result, 2);
    });

    it('throws an error when first argument is not a number', () => {
        assert.throws(() => {
            divide('notANumber', 5);
        }, Error);
    });

    it('throws an error when second argument is not a number', () => {
        assert.throws(() => {
            divide(5, 'notANumber');
        }, Error);
    });

    it('throws an error when second argument is a zero', () => {
        assert.throws(() => {
            divide(5, 0);
        }, Error);
    });

});
