const assert = require('assert');
const { add, sub, multiply } = require('../lib/arithmetic.js');

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
