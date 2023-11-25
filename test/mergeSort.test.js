const { mergeSort } = require('../src/sorting/mergeSort');

describe("Merge Sort Test Cases", () => {
    const list = [8, 1, 14, 0, 4, 63, 7, 33, 9, 10, 99];
    const sortedList = [...list].sort((a, b) => a - b);

    test("Merge Sort", () => {
        const res = mergeSort([...list]);

        expect(res).toEqual(sortedList);
    });
});