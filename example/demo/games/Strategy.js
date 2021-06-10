class Strategy {
    constructor() {
        this.init = (x, y, symbolThanTableFilled) => {
            const result = [];
            for (let i = 0; i < x; i += 1) {
                result.push(new Array(y).fill(symbolThanTableFilled));
            }
            return result;
        };
        this.checkFullCells = (board, symbolThanTableFilled) => board
            .slice()
            .flat()
            .every((cell) => cell !== symbolThanTableFilled);
    }
}
export default Strategy;
