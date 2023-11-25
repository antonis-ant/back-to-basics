const { swap } = require('../helpers');

/**
 * Time Complexity O(n^2)
 * Space Complexity O(1)
 * 
 * @param {*} list 
 * @returns sorted list
 */
const bubbleSort = (list) => {
    for (let i = 0; i < list.length; i++) {
        for (let j = 1; j < list.length; j++) {
            if (list[j] < list[j-1]) {
                swap(list, j, j-1);
            }
        }
    }

    return list;
};

module.exports = { bubbleSort };
