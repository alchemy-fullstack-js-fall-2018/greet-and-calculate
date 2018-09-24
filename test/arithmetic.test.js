const assert = require('assert');
const { add } = require('../lib/arithmetic');

describe('addition', () => {
    
    it('adds two numbers supplied as arguments', () => {
        const sum = add(24, 41);
        assert.equal(sum, 65);
    });

});
