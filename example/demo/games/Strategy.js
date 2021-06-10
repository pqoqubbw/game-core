class Strategy {
    constructor() {
        this.init = (x, y, symbolThanTableFilled) => {
            const result = [];
            for (let i = 0; i < x; i += 1) {
                result.push(new Array(y).fill(symbolThanTableFilled));
            }
            return result;
        };
        this.isTurnValid = (board, x, y, symbolThanTableFilled) => board[x][y] === symbolThanTableFilled;
        this.setValue = (board, x, y, playerId) => {
            board[x][y] = playerId + 1;
        };
        this.checkFullCells = (board, symbolThanTableFilled) => board
            .slice()
            .flat()
            .every((cell) => cell !== symbolThanTableFilled);
    }
}
export default Strategy;
