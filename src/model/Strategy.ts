import { IPlayersInfo, IStrategy } from '../@types/types';

abstract class Strategy implements IStrategy {
  abstract getName(): string;

  abstract checkWin(board: number[][]): number;

  abstract setSymbolPlayer(players: string[]): IPlayersInfo[];

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
    playerValue[x][y] = playerId + 1;
  };

  checkDraw = (board: number[][]): boolean => {
    const draw = board.slice().flat().every((cell: number): boolean => cell !== null);
    return draw;
  };
}

export default Strategy;
