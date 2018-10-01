function add(num1, num2) {
    if(isNaN(num1) || isNaN(num2)) {
        throw new Error('values must be numbers');
    }
    else {
        return (num1 + num2);
    }
}

function subtract(num1, num2) {
    if(isNaN(num1) || isNaN(num2)) {
        throw new Error('values must be numbers');
    }
    else { 
        return (num1 - num2);
    }
}


module.exports = {
    add,
    subtract
};
