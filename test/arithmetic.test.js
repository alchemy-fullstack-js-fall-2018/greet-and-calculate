const assert = require('assert');
const add = require('../lib/arithmetic');

describe('add', () => {


    it('receives two numbers', () => {
        assert.throws(() => {
            add({});
        }, Error);
    });

});
