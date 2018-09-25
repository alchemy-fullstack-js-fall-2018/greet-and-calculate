const assert = require('assert');
const { add } = require('../lib/arithmetic');



describe('arithmetic', () => {
    it('throws error when you supply a non-number', () => {
        assert.throws(() => {
            add({});
        }, Error);
    });
    it('adds both numbers', () => {
        const sum = add(1, 2);
        assert.equal(sum, 3);
    });
});
