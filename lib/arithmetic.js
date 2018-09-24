function add(x, y) {
    if(numbersAreValid(x, y)) return x + y;
}

function sub(x, y) {
    if(numbersAreValid(x, y)) return x - y;
}

function multiply(x, y) {
    if(numbersAreValid(x, y)) return x * y;
}

function numbersAreValid(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('both arguments must be numbers');
    } else {
        return true;
    }
}

module.exports = { 
    add, 
    sub,
    multiply
};
