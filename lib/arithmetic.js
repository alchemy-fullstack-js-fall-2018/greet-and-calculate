function add(x, y) {
    if(isNaN(x) || isNaN(y)) {
        throw new Error('must be a number');
    }
    return (x + y);
}

function sub(x, y) {
    if(isNaN(x) || isNaN(y)) {
        throw new Error('must be a number');
    }
    return (x - y);
}

module.exports = {
    add,
    sub
};
