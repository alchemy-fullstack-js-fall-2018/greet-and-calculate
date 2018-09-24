function add(num1, num2) {
    if(typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('give me a string');
    }
    return num1 + num2;
}

module.exports = add;
