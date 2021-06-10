import { IPlayersInfo, TableFilledSymbolType } from '../@types/types';
import Strategy from './Strategy';
declare class TicTacToe extends Strategy {
    getName: () => string;
    checkWin: (board?: TableFilledSymbolType[][]) => boolean;
    setPlayerToken: (players: string[]) => IPlayersInfo[];
    setValue: (board: TableFilledSymbolType[][], x: number, y: number, playerId: number) => void;
    isTurnValid: (board: TableFilledSymbolType[][], x: number, y: number, symbolThanTableFilled: TableFilledSymbolType) => boolean;
}
export default TicTacToe;
