function errorOut(num1, num2) {
    if(typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('supplied parameters must be Number');
    }  
}

function add(num1, num2) {
    errorOut(num1, num2);       
    return num1 + num2;
}

function sub(num1, num2) {
    errorOut(num1, num2);
    return num1 - num2;
}

module.exports = {
    add,
    sub
};
