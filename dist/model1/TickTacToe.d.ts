import Strategy from './Strategy';
declare class TicTacToe extends Strategy {
    getName: () => string;
    checkWin: (board: number[][]) => number;
}
export default TicTacToe;
