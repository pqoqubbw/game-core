import { IPlayersInfo } from '../@types/types';
import Strategy from './Strategy';
declare class TicTacToe extends Strategy {
    getName: () => string;
    checkWin: (board: number[][]) => boolean;
    setPlayerToken: (players: string[]) => IPlayersInfo[];
}
export default TicTacToe;
