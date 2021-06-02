import Strategy from './Strategy';

import { IPlayersInfo } from '../@types/types';

class TicTacToe extends Strategy {
  getName = (): string => 'TicTacToe';

  checkWin = (board: number[][]): boolean => {
    const winCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    const cells = board.slice().flat();

    const isWinCombinations = winCombinations.some((line) => cells[line[0]]
      && cells[line[0]] === cells[line[1]]
      && cells[line[1]] === cells[line[2]]);

    if (isWinCombinations) return true;

    return false;
  };

  setPlayerToken = (players: string[]): IPlayersInfo[] => {
    const tokens = ['X', 'O'];
    return players.slice().map(
      (player: string | IPlayersInfo, i: number): IPlayersInfo => {
        let currentPlayer = player;
        currentPlayer = { name: player, sign: tokens[i] } as IPlayersInfo;

        return currentPlayer;
      },
    );
  };
}

export default TicTacToe;
