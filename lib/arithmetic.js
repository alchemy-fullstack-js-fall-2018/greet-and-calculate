function add(x, y) {
    if(isNaN(x) || isNaN(y)) {
        throw new Error('must be a number');
    }
    return parseFloat(x) + parseFloat(y);
}

function sub(x, y) {
    if(isNaN(x) || isNaN(y)) {
        throw new Error('must be a number');
    }
    return parseFloat(x) - parseFloat(y);
}

module.exports = {
    add,
    sub
};
