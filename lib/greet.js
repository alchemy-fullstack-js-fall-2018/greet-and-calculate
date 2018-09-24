function greet(name, options) {
    if(typeof name !== 'string') {
        throw new Error('give me a string');
    }
    options = options || {};
    options.salutation = options.salutation || 'hello';
    return `${options.salutation} ${name}`;
}

module.exports = greet;
