const assert = require('assert');
const { greet } = require('../lib/greeting');

describe('greeting', () => {

    it('greets with supplied name', () => {
        const greeting = greet('world');
        assert.equal(greeting, 'hello world');
    });

    it('throws error when greet is not a string', () => {
        assert.throws(() => {
            greet(24);
        }, Error);
    });
});
