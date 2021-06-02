import Strategy from './Strategy';
import { IPlayersInfo } from '../@types/types';
declare class TicTacToe extends Strategy {
    getName: () => string;
    checkWin: (board: number[][]) => boolean;
    setPlayerToken: (players: string[]) => IPlayersInfo[];
}
export default TicTacToe;
