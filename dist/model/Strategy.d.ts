declare abstract class Strategy {
    init: (x: number, y: number) => number[][];
    isTurnValid: (board: number[][], x: number, y: number) => boolean;
    setValue: (board: number[][], x: number, y: number, playerId: number) => void;
    abstract getName(): string;
    abstract checkWin(board: number[][]): number;
}
export default Strategy;
