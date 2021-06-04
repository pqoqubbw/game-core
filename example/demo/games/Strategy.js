class Strategy {
    init = (x, y) => {
        const result = [];
        for (let i = 0; i < x; i += 1) {
            result.push(new Array(y).fill(0));
        }
        return result;
    };
    isTurnValid = (board, x, y) => board[x][y] === 0;
    setValue = (board, x, y, playerId) => {
        board[x][y] = playerId + 1;
    };
    checkFullCells = (board) => board.slice().flat().every((cell) => cell !== 0);
}
export default Strategy;
