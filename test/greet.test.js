const assert = require('assert');
const { greet } = require('../lib/greet');

describe('greeting', () => {
    it('greets supplied name', () => {
        const greeting = greet('world');
        assert.equal(greeting, 'hello world');
    });
});
