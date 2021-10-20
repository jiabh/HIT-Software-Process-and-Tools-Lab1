const algorithm = require('../src/js/algorithm');
const gaussian_elimination = algorithm.gaussian_elimination;
const doolittle = algorithm.doolittle;

test('testing gaussian elimination', () => {
    let res;

    // 检查能否正确算出结果
    res = gaussian_elimination([
        [1, 1, 1, 1, 10],
        [-1, 2, -3, 1, -2],
        [3, -3, 6, -2, 7],
        [-4, 5, 2, -3, 0]
    ]);
    expect(res.xCNT).toBe(1);
    expect(res.x).toStrictEqual([1, 2, 3, 4]);

    // 检查过程是否符合预期
    res = gaussian_elimination([
        [1, 1, 4],
        [1, -1, 6]
    ]);
    expect(res.toString()).toBe(
        'steps:\n' +
        '0: [\n' +
        '\t[1, 1, 4]\n' +
        '\t[0, -2, 2]\n' +
        ']\n' +
        '1: [\n' +
        '\t[1, 0, 5]\n' +
        '\t[0, 1, -1]\n' +
        ']\n' +
        '2: [\n' +
        '\t[1, 0, 5]\n' +
        '\t[0, 1, -1]\n' +
        ']\n' +
        'result: [5, -1]'
    );

    // 测试无穷解的情况
    res = gaussian_elimination([
        [1, 1, 4],
        [-2, -2, -8]
    ]);
    expect(res.xCNT).toBe(Infinity);
    expect(res.x).toBe(undefined);

    // 测试无解的情况
    res = gaussian_elimination([
        [1, 1, 4],
        [-1, -1, 3]
    ]);
    expect(res.xCNT).toBe(0);
    expect(res.x).toBe(undefined);
});

test('testing doolittle', () => {
    let res;

    // 检查能否正确算出结果
    res = doolittle([
        [1, 1, 1, 1, 10],
        [-1, 2, -3, 1, -2],
        [3, -3, 6, -2, 7],
        [-4, 5, 2, -3, 0]
    ]);
    expect(res.xCNT).toBe(1);
    expect(res.x).toStrictEqual([1, 2, 3, 4]);
});
