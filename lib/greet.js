function greeter(salutation, name) {
    if(name !== undefined && typeof name !== 'string') {
        throw new Error ('name must be a string');
    }
    name = name || 'unknown';
    return `${salutation} ${name}`;
}

function greet(name) {
    return greeter('hello', name);
}

module.exports = greet;

