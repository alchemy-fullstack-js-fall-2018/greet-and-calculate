const assert = require('assert');
const { greet } = require('../lib/greetings');



describe('greeting', () => {
    it('throws error when you supply a non-string value', () => {
        assert.throws(() => {
            greet({});
        }, Error);
    });

    it('greets hello world', () => {
        const greeting = greet('world');
        assert.equal(greeting, 'hello world!');
    });
});

