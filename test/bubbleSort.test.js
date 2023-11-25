const { bubbleSort } = require('../src/sorting/bubbleSort');

describe("Bubble Sort Test Cases", () => {
    const list = [8, 1, 14, 0, 4, 63, 7, 33, 9, 10, 99];
    const sortedList = [...list].sort((a, b) => a - b);

    test("Bubble Sort", () => {
        const res = bubbleSort([...list]);

        expect(res).toEqual(sortedList);
    });
});