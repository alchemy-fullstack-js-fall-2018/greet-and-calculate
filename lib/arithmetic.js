function add(arithmetic) {
    if(arithmetic !== undefined && typeof greeting !== 'number') {
        throw new Error('supplied name must be a number');
    }
}

module.exports = {
    add
};
