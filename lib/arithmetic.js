function add(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('both arguments must be numbers');
    } else {
        return x + y;
    }
}

function sub(x, y) {
    return x - y;
}

module.exports = { 
    add, 
    sub 
};
