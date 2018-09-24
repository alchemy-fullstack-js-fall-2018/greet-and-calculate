function greet(name) {
    if(name !== undefined && typeof name !== 'string') {
        throw new Error('supplied name must be a string');
    }
    return `hello ${name}`;
}

module.exports = {
    greet
};
