const assert = require('assert');
const { add, sub } = require('../lib/arithmetic.js');

describe('addition', () => {

    it('correctly adds two numbers', () => {
        const result = add(6, 9);
        assert.equal(result, 15);
    });

});

describe('subtraction', () => {

    it('correctly subtracts two numbers', () => {
        const result = sub(15, 9);
        assert.equal(result, 6);
    });

});
