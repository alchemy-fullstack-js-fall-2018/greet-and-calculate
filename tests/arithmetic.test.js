const assert = require('assert');
const add = require('../lib/arithmetic');

describe('arithmetic', () =>{
    it('should add two numbers', () => {
        const sum = add(2, 5);
        assert.equal(sum, 7);
    });
});
