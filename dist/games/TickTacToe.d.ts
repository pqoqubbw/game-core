import { IPlayersInfo, TableFilledSymbolType } from '../@types/types';
import Strategy from './Strategy';
declare class TicTacToe extends Strategy {
    getName: () => string;
    checkWin: (board?: TableFilledSymbolType[][]) => boolean;
    setPlayerToken: (players: string[]) => IPlayersInfo[];
}
export default TicTacToe;
