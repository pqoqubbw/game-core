import Strategy from './Strategy';
class TicTacToe extends Strategy {
    constructor() {
        super(...arguments);
        this.getName = () => 'TicTacToe';
        this.checkWin = (board = []) => {
            const winCombinations = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6],
            ];
            const cells = board?.slice().flat();
            const isWinCombinations = winCombinations.some((line) => cells[line[0]]
                && cells[line[0]] === cells[line[1]]
                && cells[line[1]] === cells[line[2]]);
            if (isWinCombinations)
                return true;
            return false;
        };
        this.setPlayerToken = (players) => {
            const tokens = ['X', 'O'];
            return players?.slice().map((player, i) => {
                let currentPlayer = player;
                currentPlayer = { name: player, sign: tokens[i] };
                return currentPlayer;
            });
        };
    }
}
export default TicTacToe;
