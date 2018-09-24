function greet(name) {
    if(typeof name !== 'string'){
        throw new Error('name must be a string');
    }
    return `hello ${name}`;
}

module.exports = greet;
