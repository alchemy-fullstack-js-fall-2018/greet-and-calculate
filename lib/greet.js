function greet(name) {
    if(typeof name !== 'string') {
        throw new Error('invalid input');
    }
    else return 'hello ' + name;
} 

module.exports = greet;
