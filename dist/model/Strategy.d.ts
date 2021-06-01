import { IPlayersInfo, IStrategy } from '../@types/types';
declare abstract class Strategy implements IStrategy {
    abstract getName(): string;
    abstract checkWin(board: number[][]): number;
    abstract setSymbolPlayer(players: string[]): IPlayersInfo[];
    init: (x: number, y: number) => number[][];
    isTurnValid: (board: number[][], x: number, y: number) => boolean;
    setValue: (board: number[][], x: number, y: number, playerId: number) => void;
    checkDraw: (board: number[][]) => boolean;
}
export default Strategy;
