function greet(name, options = { salutation: 'hello' }) {
    if(typeof name !== 'string') {
        throw new Error('give me a string');
    }

    const { salutation } = options;
    return `${salutation} ${name}`;
}

module.exports = greet;




