const { selectionSort } = require('../src/sorting/selectionSort');

describe("Insertion Sort Test Cases", () => {
    const list = [8, 1, 14, 0, 4, 63, 7, 33, 9, 10, 99];
    const sortedList = [...list].sort((a, b) => a - b);

    test("Insertion Sort", () => {
        const res = selectionSort([...list]);

        expect(res).toEqual(sortedList);
    });
});