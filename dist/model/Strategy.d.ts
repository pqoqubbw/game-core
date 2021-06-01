declare abstract class Strategy {
    abstract getName(): string;
    abstract checkWin(board: number[][]): number;
    init: (x: number, y: number) => number[][];
    isTurnValid: (board: number[][], x: number, y: number) => boolean;
    setValue: (board: number[][], x: number, y: number, playerId: number) => void;
    checkDraw: (board: number[][]) => boolean;
}
export default Strategy;
