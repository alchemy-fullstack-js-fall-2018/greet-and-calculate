const assert = require('assert');
const greet = require('../lib/greet');

describe('greet', () => {
    
    it('should return "hello world"', () => {
        const greeting = greet('world');
        assert.equal(greeting, 'hello world');
    });

    it('should throw an error for non-string input', () => {
        assert.throws(() => {
            greet({});
        }, Error);
    });
});
