function add(num1, num2) {
    if(isNaN(num1) || isNaN(num2)) {
        throw new Error('supplied values must both be numbers');
    }
    return parseFloat(num1) + parseFloat(num2);
}

function subtract(num1, num2) {
    if(isNaN(num1) || isNaN(num2)) {
        throw new Error('supplied values must both be numbers');
    }
    return parseFloat(num1) - parseFloat(num2);
}

module.exports = {
    add,
    subtract
};
