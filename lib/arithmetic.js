function add(x, y) {
    if(isNaN(x) || isNaN(y)){
        throw new Error('not a number');
    }
    else return x + y;
}

function subtract(x, y) {
    if(isNaN(x) || isNaN(y)){
        throw new Error('not a number');
    }
    else return x - y;
}

module.exports =  { 
    add,
    subtract
};
