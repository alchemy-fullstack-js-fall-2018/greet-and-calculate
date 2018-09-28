function add(num1, num2) {
    if(typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('supplied name must be a number');
    }
    return num1 + num2; 
}

function sub(num1, num2) {
    if(typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('supplied name must be a number');
    }
    return num1 - num2;
}

module.exports = {
    add,
    sub
};
