function greet(name) {
    if(typeof name !== 'string') {
        throw new Error('supplied name must be a string');
    }
    return `hello ${name}`;
}

module.exports = {
    greet
};
