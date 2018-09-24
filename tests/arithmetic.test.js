const assert = require('assert');
const { add, subtract } = require('../lib/arithmetic');

describe('arithmetic', () =>{
    it('should add two numbers', () => {
        const sum = add(2, 5);
        assert.equal(sum, 7);
    });
    it('should subtract two numbers', () => {
        const difference = subtract(2, 5);
        assert.equal(difference, -3);
    });
});
