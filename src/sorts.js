const { swap } = require('./helpers');

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

/**
 * Time Complexity O(n^2)
 * Space Complexity O(1)
 * 
 * @param {*} list 
 * @returns sorted list
 */
const insertionSort = (list) => {
    for (let i = 1; i < list.length; i++) {
        let current = list[i];

        let j = i - 1;
        while(j >= 0 && list[j] > current) {
            list[j + 1] = list[j];
            list[j--] = current;
        }
    }

    return list;
};

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


module.exports = { bubbleSort, insertionSort, selectionSort };