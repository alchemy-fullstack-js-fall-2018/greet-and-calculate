function add(x, y) {
    if(isNaN(x) || isNaN(y)){
        throw new Error('not a number');
    }
    return x + y;
}

function subtract(x, y) {
    if(isNaN(x) || isNaN(y)){
        throw new Error('not a number');
    }
    return x - y;
}

module.exports =  { 
    add,
    subtract
};
