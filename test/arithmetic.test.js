const assert = require('assert');
const { add, sub } = require('../lib/arithmetic');
describe(add, () => {

    it('adds two numbers together', () => {
        const sum = add(1, 2);
        assert.equal(sum, 3);
    });

    it('throws error if either argument is not a number', () => {
        assert.throws(() => {
            add(NaN, 1);
        }, Error);
    });
});

describe(sub, () => {

    it('subtracts second argument from first argument', () => {
        const difference = sub(3, 2);
        assert.equal(difference, 1);
    });

    it('throws error if either argument is not a number', () => {
        assert.throws(() => {
            sub(NaN, 2);
        }, Error);
    });

});
