import { IPlayersInfo, IStrategy } from '../@types/types';

abstract class Strategy implements IStrategy {
  abstract getName(): string;

  abstract checkWin(board: number[][]): boolean;

  abstract setPlayerToken(players: string[]): IPlayersInfo[];

  init = (x: number, y: number): number[][] => {
    const result = [];
    for (let i = 0; i < x; i += 1) {
      result.push(new Array(y).fill(0));
    }
    return result;
  };

  isTurnValid = (board: number[][], x: number, y: number): boolean => board[x][y] === 0;

  setValue = (board: number[][], x: number, y: number, playerId: number): void => { board[x][y] = playerId + 1 };

  checkDraw = (board: number[][]): boolean => board.slice().flat().every((cell: number): boolean => cell !== 0);
}

export default Strategy;
