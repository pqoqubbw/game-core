import { IPlayersInfo, IStrategy } from '../@types/types';
declare abstract class Strategy implements IStrategy {
    abstract getName(): string;
    abstract checkWin(board: number[][]): boolean;
    abstract setPlayerToken(players: string[]): IPlayersInfo[];
    init: (x: number, y: number) => number[][];
    isTurnValid: (board: number[][], x: number, y: number) => boolean;
    setValue: (board: number[][], x: number, y: number, playerId: number) => void;
    checkFullCells: (board: number[][]) => boolean;
}
export default Strategy;