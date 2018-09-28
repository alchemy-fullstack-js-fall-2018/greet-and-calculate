const assert = require('assert');
const { add, sub } = require('../lib/arithmetic');



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
    it('throws error when you supply a non-number', () => {
        assert.throws(() => {
            sub({});
        }, Error);
    });
    it('subtracts both numbers', () => {
        const sum = sub(6, 2);
        assert.equal(sum, 4);
    });
});
