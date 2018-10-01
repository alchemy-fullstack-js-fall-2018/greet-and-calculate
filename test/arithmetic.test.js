const assert = require('assert');
const { add, subtract } = require('../lib/arithmetic');

describe('addition', () => {
    it('adds two numbers supplied as arguments', () => {
        const sum = add(2, 5);
        assert.equal(sum, 7);
    });

    it('throws an error if arguments are NaN', () => {
        assert.throws(() => {
            add('a', 4);
        }, Error);
    });
});

describe('subtract', () => {
    it('subtracts two numbers', () => {
        const difference = subtract(5, 2);
        assert.equal(difference, 3);
    });

    it('throws an error if arguments are NaN', () => {
        assert.throws(() => {
            subtract('q', 3);
        }, Error);
    });
});
