abstract class Strategy {
  init = (x: number, y: number): number[][] => Array(x).fill(Array(y).fill(0));

  isTurnValid = (board: number[][], x: number, y: number): boolean => {
    const value = board[x][y];
    return value === 0;
  };

  setValue = (board: number[][], x: number, y: number, playerId: number): void => {
    const line = board[x];
    line[y] = playerId;
    console.log(`setValue ${board}`);
  };

  abstract getName(): string;

  abstract checkWin(board: number[][]): number;
}

export default Strategy;
