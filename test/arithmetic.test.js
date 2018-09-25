const assert = require('assert');
const { add, sub } = require('../lib/arithmetic');

describe('arithmetic', () => {

    it('takes number arguments', () => {
        assert.throws(() => {
            add('1', '2'); 
        }, Error);
    });

    it('returns sum of 2 numbers', () => {
        const addition = add(2, 4);
        assert.equal(addition, 6);
    });

    it('takes number arguments', () => {
        assert.throws(() => {
            sub('1', '2');
        }, Error);
    });

    it('returns sum of 2 numbers', () => {
        const subtraction = add(2, 4);
        assert.equal(subtraction, 6);
    });
});
