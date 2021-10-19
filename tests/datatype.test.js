const datatype = require('../src/js/datatype');
const Solution = datatype.Solution;

test('testing class Solution', () => {
    let s = new Solution();

    s.add([
        [1, 1, 4],
        [1, -1, 6]
    ]);
    s.add([
        [1, 1, 4],
        [1, -2, 2]
    ]);
    s.finish([2, 3]);

    expect(s.step_array).toStrictEqual(
        [
            [
                [1, 1, 4],
                [1, -1, 6]
            ],
            [
                [1, 1, 4],
                [1, -2, 2]
            ]
        ]
    );
    expect(s.x).toStrictEqual([2, 3]);
});
