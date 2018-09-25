const assert = require('assert');
const greet = require('../lib/greet');

describe('greet', () => {
    
    it('greets supplied name', () => {
        const greeting = greet('world');
        assert.equal(greeting, 'hello world');
    });

    it('throws an error when name is not a string', () => {
        assert.throws(() => {
            greet({});
        }, Error);
    });
});


