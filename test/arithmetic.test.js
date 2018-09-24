const assert = require('assert');
const add = require('../lib/arithmetic');

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
