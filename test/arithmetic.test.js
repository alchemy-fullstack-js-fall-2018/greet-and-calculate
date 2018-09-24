const assert = require('assert');
const { add, sub, multiply } = require('../lib/arithmetic');

describe('add', () => {

    it('receives two numbers', () => {
        assert.throws(() => {
            add(4, 'I am not a number');
        }, Error);
    });

    it('returns sum of two numbers', () => {
        const sum = add(2, 3);
        assert.equal(sum, 5);
    });

});

describe('sub', () => {

    it('receives two numbers', () => {
        assert.throws(() => {
            sub(4, 'I am not a number');
        }, Error);
    });

    it('returns the difference of two numbers', () => {
        const diff = sub(3, 2);
        assert.equal(diff, 1);
    });

});

describe('multiply', () => {

    it('receives two numbers', () => {
        assert.throws(() => {
            multiply(4, 'I am not a number');
        }, Error);
    });

    it('returns the product of two numbers', () => {
        const prod = multiply(4, 5);
        assert.equal(prod, 20);
    });

});
