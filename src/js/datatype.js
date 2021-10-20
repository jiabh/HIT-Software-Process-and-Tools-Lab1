import {isArray, isMatrix} from './validation';
import {copyMatrix} from './util';

export function Solution() {
    this.step_array = [];
    this.x = undefined; // 解向量，有唯一解时为一个一维数组，否则为undefined
    this.xCNT = undefined; // 解的个数
}

/**
 * 添加一个步骤
 * @param {array} Ab 当前步骤的增广矩阵
 */
Solution.prototype.add = function (Ab) {
    if (!isMatrix(Ab)) {
        throw Ab + ' is not a matrix';
    }
    this.step_array.push(copyMatrix(Ab));
}

/**
 * 计算完毕，设置结果
 * @param {array} x 线性方程组的解
 */
Solution.prototype.finish = function (x) {
    if (!isArray(x)) {
        throw x + ' is not an array';
    }
    this.x = x;
}

Solution.prototype.toString = function () {
    const stepCNT = this.step_array.length;

    let str = 'steps:\n';

    for (let i = 0; i < stepCNT; i++) {
        const step = this.step_array[i];
        str += i + ': [\n';
        for (const line of step) {
            str += '\t[' + line.join(', ') + ']\n';
        }
        str += ']\n';
    }

    str += 'result: '
    switch (this.xCNT) {
        case 0: // 无解
            str += '0 solution';
            break;
        case 1: // 唯一解
            str += '[' + this.x.join(', ') + ']';
            break;
        case Infinity: // 无穷多解
            str += 'infinity solutions';
            break;
        default: // 未计算
            str += 'not calculated yet';
    }

    return str;
}
