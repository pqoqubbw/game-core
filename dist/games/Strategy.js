class Strategy {
    constructor() {
        this.init = (x, y) => {
            const result = [];
            for (let i = 0; i < x; i += 1) {
                result.push(new Array(y).fill(0));
            }
            return result;
        };
        this.isTurnValid = (board, x, y) => board[x][y] === 0;
        this.setValue = (board, x, y, playerId) => {
            board[x][y] = playerId + 1;
        };
        this.checkFullCells = (board) => board.slice().flat().every((cell) => cell !== 0);
    }
}
export default Strategy;
