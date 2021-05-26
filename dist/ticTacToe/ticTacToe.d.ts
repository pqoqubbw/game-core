import Game from '../game/index';
declare class TicTacToe extends Game {
    constructor();
    checkWin(cells: Array<HTMLElement>): boolean;
}
export default TicTacToe;
