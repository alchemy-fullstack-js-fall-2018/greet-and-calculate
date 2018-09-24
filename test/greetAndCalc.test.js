const assert = require('assert');
const { greet, farewell, add, sub, multiply, divide } = require('../lib/greetAndCalc');

describe('pleasantries', () => {
    it('greets with supplied name', () => {
        const greeting = greet('Joe');
        assert.equal(greeting, 'hello Joe');
    });
    it('greets with "stranger" when name is undefined', () => {
        const greeting = greet();
        assert.equal(greeting, 'hello stranger');
    });
    it('greets with "stranger" when empty string given', () => {
        const greeting = greet('');
        assert.equal(greeting, 'hello stranger');
    });
    it('throws error when name is not a string', () => {
        assert.throws(() => {
            greet({});
        }, Error);
    });
});

describe('farewell', () => {
    it('says goodbye to supplied name', () => {
        const seeYa = farewell('Joe');
        assert.equal(seeYa, 'goodbye Joe');
    });
    it('says goodbye to stranger when no name', () => {
        const seeYa = farewell();
        assert.equal(seeYa, 'goodbye stranger');
    });
});

describe('calculator', () => {

    it('adds two numbers', () => {
        const sum = add(3, 4);
        assert.equal(sum, 7);
    });

    it('throws an error if either variable is not a number', () => {
        assert.throws(() => {
            add(3, 'bob');
        }, Error);
    });

    it('subtracts two numbers', () => {
        const difference = sub(9, 3);
        assert.equal(difference, 6);
    });

    it('throws an error if either variable is not a number', () => {
        assert.throws(() => {
            sub(3, 'bob');
        }, Error);
    });

    it('multiplies two numbers', () => {
        const product = multiply(3, 4);
        assert.equal(product, 12);
    });

    it('divides two numbers', () => {
        const quotient = divide(6, 2);
        assert.equal(quotient, 3);
    });

    it('throw error when attempts to divide by 0', () => {
        try {
            divide(3, 0);
            assert.fail('Should have thrown error');
        }
        catch(err) {
            assert.equal(err.message, 'Cannot divide by zero');
        }
    });
});

