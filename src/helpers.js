const swap = (array, i1, i2) => {
    const tmp = array[i1];
    array[i1] = array[i2];
    array[i2] = tmp;
}

module.exports = { swap };
