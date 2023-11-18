const { bubbleSort, insertionSort, selectionSort } = require('../src/sorts');
const { logTestResults } = require('./helpers');

const list = [8, 1, 14, 0, 4, 63, 7, 33, 9, 10, 99];
const sortedList = [...list].sort((a, b) => a - b);

describe("Bubble Sort Test Cases", () => {
    test("Bubble Sort", () => {
        const res = bubbleSort([...list]);

        expect(res).toEqual(sortedList);
    });
});

describe("Insertion Sort Test Cases", () => {
    test("Insertion Sort", () => {
        const res = insertionSort([...list]);

        expect(res).toEqual(sortedList);
    });
});

describe("Selection Sort Test Cases", () => {
    test("Selection Sort", () => {
        const res = selectionSort([...list]);

        expect(res).toEqual(sortedList);
    });
});