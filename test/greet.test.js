const assert = require('assert');
const greet = require('../lib/greet');

describe('greet', () => {

    it('throws error if input is not a string', () => {
        assert.throws(() => {
            greet({});
        }, Error);
    });

    it('returns "hello world" if "world" is input', () => {
        const greeting = greet('world');
        assert.equal(greeting, 'hello world');
    });

});
