function greet(name) {
    if(typeof name !== 'string') {
        throw new Error('give me a string');
    }
    return console.log(`hello ${name}`);
}

module.exports = greet;
