const { swap } = require('../helpers');

/**
 * Time Complexity O(n^2)
 * Space Complexity O(1)
 * 
 * @param {*} list 
 * @returns sorted list
 */
const selectionSort = (list) => {
    for (let i = 0; i < list.length; i++) {
        let currentMinimumIndex = i;
        for (let j = i; j < list.length; j++) {
            if (list[j] < list[currentMinimumIndex]) {
                currentMinimumIndex = j;
            }
        }

        swap(list, i, currentMinimumIndex);
    }

    return list;
};


module.exports = { selectionSort };