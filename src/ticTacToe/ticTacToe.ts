import Game from '../game/index';

class TicTacToe extends Game {
  constructor(
    public cells: NodeListOf<Element>,
  ) {
    super(['X', 'O']);
  }

  checkWin(): boolean {
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

    const victory = lines.some((l) => this.cells[l[0]].textContent
        && this.cells[l[0]].textContent === this.cells[l[1]].textContent
        && this.cells[l[1]].textContent === this.cells[l[2]].textContent);

    if (victory) {
      // eslint-disable-next-line no-alert
      alert(`${this.currentPlayer} win!`);
    }

    return victory;
  }
}

export default TicTacToe;
