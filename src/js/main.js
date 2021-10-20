import {gaussian_elimination, doolittle} from './algorithm'

const App = {
    data() {
        return {
            selectedIndex: 0, // 选择的方法
            algoArray: [ // 计算方法
                {
                    name: '高斯消元法',
                    func: gaussian_elimination
                },
                {
                    name: 'Doolittle分解法',
                    func: doolittle
                },
            ],
            inputMatrix: [[0, 0, 0], [0, 0, 0]], // 用户输入的增广矩阵
            result: null, // 计算结果
        }
    },
    methods: {
        addRow() {
            const N = this.inputMatrix[0].length; // 列数
            this.inputMatrix.push(new Array(N).fill(0));
        },
        removeRow() {
            if (this.inputMatrix.length > 1)
                this.inputMatrix.pop();
        },
        addCol() {
            const M = this.inputMatrix.length;
            for (let i = 0; i < M; i++) {
                this.inputMatrix[i].splice(-1, 0, 0);
            }
        },
        removeCol() {
            const M = this.inputMatrix.length;
            const N = this.inputMatrix[0].length;
            if (N === 2)
                return;

            for (let i = 0; i < M; i++) {
                this.inputMatrix[i].splice(-2, 1);
            }
        },
        calculate() {
            const func = this.algoArray[this.selectedIndex].func;
            console.log(func)
            this.result = func(this.inputMatrix);
            console.log(this.result)
        }
    }
};

Vue.createApp(App).mount('#app');
