import {Solution} from './datatype';
import {isMatrix} from './validation';
import {copyMatrix} from './util'

/**
 * 使用高斯消元法求解Ax=b的解
 *
 * @param {[[number]]} Ab 方程组的增广矩阵
 * @returns Solution
 */
export function gaussian_elimination(Ab) {
    let mat = copyMatrix(Ab);

    if (!isMatrix(mat))
        throw mat + ' is not a matrix';

    let M = mat.length; // 行数
    const N = mat[0].length - 1; // 未知数个数

    const solution = new Solution(); // 中间过程

    // 消元
    for (let i = 0; i < M; i++) { // 对于第i行（由于需要判断最后一行是否全0，故需要让i === M - 1出现）
        // 首先判断是否为全0行
        const line = mat[i];
        if (line.slice(0, -1).filter((x) => {
            return x !== 0;
        }).length === 0) { // 当该行系数全为0时
            if (line[N] !== 0) { // 无解
                solution.xCNT = 0;
                return solution;
            } else { // 全0行，删去
                mat.splice(i, 1);
                i--;
                M--;
                continue;
            }
        }

        if (i === M - 1) { // 最后一行不需要更新之后的行（不存在），直接返回
            break;
        }

        for (let j = i + 1; j < M; j++) { // 对于剩余的每一个第j行
            const coefficient = mat[j][i] / mat[i][i];

            for (let k = 0; k < N + 1; k++) { // 对于第j行的第k个元素（包括增广列，故+1）
                // 减去第i行对应第k列的数
                mat[j][k] -= coefficient * mat[i][k];
            }
        }
        solution.add(mat); // 保存当前过程
    }

    // 设置解的个数（即solution.xCNT）

    if (M === N) { // 唯一解
        solution.xCNT = 1;
    } else { // 若无唯一解，无需回代，直接返回
        if (M > N) // 无解
            solution.xCNT = 0;
        else // 有无穷解
            solution.xCNT = Infinity;
        return solution;
    }

    // 回代
    let x = new Array(N); // 结果

    for (let i = N - 1; i >= 0; i--) {
        x[i] = mat[i][N] / mat[i][i];

        // 设置当前行
        mat[i][i] = 1;
        mat[i][N] = x[i];

        if (i > 0) {
            for (let j = 0; j < i; j++) { // 将其余行的该列置0
                mat[j][N] -= x[i] * mat[j][i];
                mat[j][i] = 0;
            }
        }

        solution.add(mat); // 保存当前过程
    }

    solution.finish(x);
    return solution;
}
