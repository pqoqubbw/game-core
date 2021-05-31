import Strategy from './model/Strategy';
import { IPlayer } from './player';
declare class TicTacToe extends Strategy {
    players: Array<IPlayer>;
    constructor(players: Array<IPlayer>);
    checkWin(cells: NodeListOf<Element>): void;
}
export default TicTacToe;
