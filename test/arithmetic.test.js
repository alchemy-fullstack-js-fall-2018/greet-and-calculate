const assert = require('assert');
const { add } = require('../lib/arithmetic');
describe(add, () => {

    it('adds two numbers together', () => {
        const sum = add(1, 2);
        assert.equal(sum, 3);
    });

    it('throws error if if either argument is not a number', () => {
        assert.throws(() => {
            add(NaN, 1);
        }, Error);
    });

});
