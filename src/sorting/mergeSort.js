/**
 * Time Complexity O(nlogn)
 * Space Complexity O(n)
 * 
 * @param {*} arr 
 * @returns sorted list
 */
const mergeSort = (arr) => {
    if (arr.length < 2) {
        return;
    }

    const middle = Math.floor(arr.length / 2);
    let leftArr = arr.slice(0, middle);
    let rightArr = arr.slice(middle);

    mergeSort(leftArr);
    mergeSort(rightArr);

    merge(leftArr, rightArr, arr);

    return arr;
};

const merge = (left, right, arr) => {
    let l = 0, r = 0, k = 0;

    while (l < left.length && r < right.length) {
        if (left[l] < right[r]) {
            arr[k++] = left[l++];
        } else {
            arr[k++] = right[r++];
        }
    }

    while (l < left.length) {
        arr[k++] = left[l++];
    }

    while (r < right.length) {
        arr[k++] = right[r++];
    }
};

module.exports = { mergeSort };