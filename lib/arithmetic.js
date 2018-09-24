function add(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('not a number');
    }
    else return x + y;
}

function subtract(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('not a number');
    }
    else return x - y;
}

function multiply(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('not a number');
    }
    else return x * y;
}

function divide(x, y) {
    return x / y;
}

module.exports =  { 
    add,
    subtract,
    multiply,
    divide
};
