/**
 * 深拷贝一份矩阵
 * @param matrix 待拷贝的矩阵
 */
export function copyMatrix(matrix) {
    let newOne = [];
    for (const line of matrix) {
        newOne.push(Array.from(line));
    }
    return newOne;
}