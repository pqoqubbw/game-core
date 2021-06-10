import { IPlayersInfo, IStrategy, TableFilledSymbolType } from '../@types/types';
declare abstract class Strategy implements IStrategy {
    abstract getName(): string;
    abstract checkWin(board: TableFilledSymbolType[][]): boolean;
    abstract setPlayerToken(players: string[]): IPlayersInfo[];
    init: (x: number, y: number, symbolThanTableFilled: TableFilledSymbolType) => number[][];
    isTurnValid: (board: TableFilledSymbolType[][], x: number, y: number, symbolThanTableFilled: TableFilledSymbolType) => boolean;
    setValue: (board: TableFilledSymbolType[][], x: number, y: number, playerId: number) => void;
    checkFullCells: (board: TableFilledSymbolType[][], symbolThanTableFilled: TableFilledSymbolType) => boolean;
}
export default Strategy;
