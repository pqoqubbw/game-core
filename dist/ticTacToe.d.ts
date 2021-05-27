import Game from './model/game';
declare class TicTacToe extends Game {
    cells: NodeListOf<Element>;
    constructor(cells: NodeListOf<Element>);
    checkWin(): void;
}
export default TicTacToe;
