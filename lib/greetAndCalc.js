
function pleasantry(salutation, name) {
    if(name !== undefined && typeof name !== 'string') {
        throw new Error('supplied name must be a string');
    }
    name = name || 'stranger';
    return `${salutation} ${name}`;
}

function greet(name) {
    return pleasantry('hello', name);
}

function farewell(name) {
    return pleasantry('goodbye', name);
}

function add(x, y) {
    if(isNaN(x) || isNaN(y)) {
        throw new Error('variable is not a number');
    }
    return parseFloat(x + y);
}

function sub(x, y) {
    if(isNaN(x) || isNaN(y)) {
        throw new Error('variable is not a number');
    }
    return parseFloat(x - y);
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if(y === 0) {
        throw new Error('Cannot divide by zero');
    }
    return x / y;
}

module.exports = {
    greet,
    farewell,
    add,
    sub,
    multiply,
    divide,
};
