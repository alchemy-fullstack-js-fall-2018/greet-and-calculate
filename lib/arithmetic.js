function add(num1, num2) {
    if(typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error ('this must be a numberic value');
    }
    return num1 + num2
}

module.exports = {
    add,
    subtract
}







// function greeter(salutation, name) {
//     if(name !== undefined && typeof name !== 'string') {
//         throw new Error ('name must be a string');
//     }
//     name = name || 'unknown';
//     return `${salutation} ${name}`;
// }

// function greet(name) {
//     return greeter('hello', name);
// }

// module.exports = greet;
