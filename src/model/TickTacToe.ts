import Strategy from './Strategy';

class TicTacToe extends Strategy {
  getName = (): string => 'TicTacToe';

  checkWin = (board: number[][]): number => {
    const lines = [
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

    const victory = lines.some((l) => cells[l[0]]
      && cells[l[0]] === cells[l[1]]
      && cells[l[1]] === cells[l[2]]);

    if (victory) return 1;

    return -1;
  };

  // setSymbolPlayer = (players: any): any => {
  //   const symbols = ['X', 'O'];
  //   return players.map((el: string, i: number): any => el = { name: el, sign: symbols[i] });
  // };
}

export default TicTacToe;
