import { IPlayersInfo, IStrategy, TableFilledSymbolType } from '../@types/types';
declare abstract class Strategy implements IStrategy {
    abstract getName(): string;
    abstract checkWin(board: TableFilledSymbolType[][]): boolean;
    abstract setPlayerToken(players: string[]): IPlayersInfo[];
    abstract setValue(board: TableFilledSymbolType[][], x: number, y: number, playerId: number): void;
    abstract isTurnValid(board: TableFilledSymbolType[][], x: number, y: number, symbolThanTableFilled: TableFilledSymbolType): boolean;
    init: (x: number, y: number, symbolThanTableFilled: TableFilledSymbolType) => number[][];
    checkFullCells: (board: TableFilledSymbolType[][], symbolThanTableFilled: TableFilledSymbolType) => boolean;
}
export default Strategy;
