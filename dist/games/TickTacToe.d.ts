import Strategy from './Strategy';
import { IPlayersInfo } from '../@types/types';
declare class TicTacToe extends Strategy {
    getName: () => string;
    checkWin: (board: number[][]) => number;
    setPlayerToken: (players: string[]) => IPlayersInfo[];
}
export default TicTacToe;
