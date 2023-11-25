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

module.exports = { insertionSort };