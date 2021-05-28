import Strategy from './model/Strategy';

import { IPlayer } from './player';

class TicTacToe extends Strategy {
  constructor(public players: Array<IPlayer>) {
    super(players);
  }

  checkWin(cells: NodeListOf<Element>): void {
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

    const victory = lines.some((l) => cells[l[0]].textContent
      && cells[l[0]].textContent === cells[l[1]].textContent
      && cells[l[1]].textContent === cells[l[2]].textContent);

    if (!victory) {
      alert('it is a draw');
    }

    if (victory) {
      alert(`${this.currentPlayer} win!`);
      this.finished = true;
    }
  }
}

export default TicTacToe;
