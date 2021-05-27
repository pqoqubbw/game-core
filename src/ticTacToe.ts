import Game from './model/game';

class TicTacToe extends Game {
  constructor(
    public cells: NodeListOf<Element>,
  ) {
    super(['X', 'O']);
  }

  checkWin(): void {
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

    if (!victory && this.checkDraw(this.cells)) {
      // eslint-disable-next-line no-alert
      alert('it is a draw');
    }

    if (victory) {
      // eslint-disable-next-line no-alert
      alert(`${this.currentPlayer} win!`);
      this.finished = true;
    }

    if (this.finished) this.restartGame(this.cells);
  }
}

export default TicTacToe;
