import { IPlayersInfo, IStrategy, TableFilledSymbolType } from '../@types/types';

abstract class Strategy implements IStrategy {
  abstract getName(): string;

  abstract checkWin(board: TableFilledSymbolType[][]): boolean;

  abstract setPlayerToken(players: string[]): IPlayersInfo[];

  init = (x: number, y: number, symbolThanTableFilled: TableFilledSymbolType): number[][] => {
    const result = [];
    for (let i = 0; i < x; i += 1) {
      result.push(new Array(y).fill(symbolThanTableFilled));
    }
    return result;
  };

  isTurnValid = (
    board: TableFilledSymbolType[][],
    x: number,
    y: number,
    symbolThanTableFilled: TableFilledSymbolType
  ): boolean => board[x][y] === symbolThanTableFilled;

  setValue = (board: TableFilledSymbolType[][], x: number, y: number, playerId: number): void => {
    board[x][y] = playerId + 1;
  };

  checkFullCells = (
    board: TableFilledSymbolType[][],
    symbolThanTableFilled: TableFilledSymbolType
  ): boolean =>
    board
      .slice()
      .flat()
      .every((cell: TableFilledSymbolType): boolean => cell !== symbolThanTableFilled);
}

export default Strategy;
