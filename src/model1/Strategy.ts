abstract class Strategy {
  init = (x: number, y: number): number[][] => {
    const result = [];
    for (let i = 0; i < x; i += 1) {
      result.push(new Array(y).fill(null));
    }
    return result;
  };

  isTurnValid = (board: number[][], x: number, y: number): boolean => {
    const value = board[x][y];
    return value === null;
  };

  setValue = (board: number[][], x: number, y: number, playerId: number): void => {
    const playerValue = board;
    playerValue[x][y] = playerId;
  };

  abstract getName(): string;

  abstract checkWin(board: number[][]): number;
}

export default Strategy;
