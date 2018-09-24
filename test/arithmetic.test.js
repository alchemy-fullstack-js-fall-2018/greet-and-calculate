const assert = require('assert');
const { add, sub } = require('../lib/arithmetic');

describe('add', () => {

    it('receives two numbers', () => {
        assert.throws(() => {
            add({});
        }, Error);
    });

    it('returns sum of two numbers', () => {
        const sum = add(2, 3);
        assert.equal(sum, 5);
    });

});

describe('sub', () => {

    it('returns the difference of two numbers', () => {
        const diff = sub(3, 2);
        assert.equal(diff, 1);
    });

});
