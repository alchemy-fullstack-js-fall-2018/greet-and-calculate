function greet(greeting){
    if(greeting !== undefined && typeof greeting !== 'string') {
        throw new Error('supplied name must be a string');
    }
    return `hello ${greeting}!`;
}

module.exports = {
    greet
};
