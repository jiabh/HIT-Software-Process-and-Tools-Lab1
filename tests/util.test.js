const util = require('../src/js/util');
const assert = require('assert');

const copyMatrix = util.copyMatrix;

test('testing copyMatrix', () => {
    let array1 = [[1, 2], [3, 4]];

    let array2 = copyMatrix(array1);
    array2[0][0] = -10;

    assert.notStrictEqual(array1, array2);
});
