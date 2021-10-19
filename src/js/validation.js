/**
 * 检查给定对象是否是一个数组
 * @param {object} o 对象
 */
export function isArray(o) {
    return Object.prototype.toString.call(o) === '[object Array]';
}

/**
 * 检查给定数组是否为一个矩阵
 * @param {array} array 待检查的数组
 * @returns {boolean} 是否是矩阵
 */
export function isMatrix(array) {
    if (!isArray(array))
        return false;

    if (array.length === 0) // 空矩阵
        return true;
    else if (!isArray(array[0]))
        return false;

    const M = array.length;
    const N = array[0].length;
    for (let i = 1; i < M; i++) {
        const line = array[i];
        if (!isArray(line) || line.length !== N)
            return false;
    }
    return true;
}
