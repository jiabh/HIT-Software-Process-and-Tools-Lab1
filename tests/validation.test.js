const validation = require('../src/js/validation');

const isArray = validation.isArray;
const isMatrix = validation.isMatrix;

test('testing isArray', () => {
    expect(isArray([])).toBe(true);
    expect(isArray([1, 2, 3])).toBe(true);
    expect(isArray({})).toBe(false);
    expect(isArray(null)).toBe(false);
    expect(isArray(1)).toBe(false);
    expect(isArray('hello')).toBe(false);
});


test('testing isMatrix', () => {
    // 测试合法矩阵
    expect(isMatrix([])).toBe(true);
    expect(isMatrix([[1]])).toBe(true);
    expect(isMatrix([[1, 2], [3, 4]])).toBe(true);

    // 测试非法矩阵
    expect(isMatrix([[1, 2], [3]])).toBe(false);
    expect(isMatrix([[1, 2], 3])).toBe(false);
    expect(isMatrix([[1, [2]], [3]])).toBe(false);
    expect(isMatrix(1)).toBe(false);
});
