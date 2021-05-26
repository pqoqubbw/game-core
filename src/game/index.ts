interface IPlayers {
  players: Array<string>,
  currentPlayer: number,
}

abstract class Game implements IPlayers {
  constructor(
    public players: Array<string>,
    public currentPlayer: number = 0,
    public turn: number = 0,
    public finished: boolean = false,
  ) { }

  abstract checkWin(): boolean;

  // abstract checkDraw(): boolean;

  play(this: any, currentSymbol: string): boolean {
    this.setValue(currentSymbol);

    this.finished = this.checkWin() || this.checkDraw();

    if (!this.finished) this.switchPlayer();

    return true;
  }

  setValue(this: HTMLElement, currentSymbol: string): void {
    if (this.textContent === 's') {
      this.textContent = currentSymbol;
    } else {
      alert('Ячейка занята');
    }
  }

  switchPlayer(): void {
    this.currentPlayer = this.players.indexOf(this.players[this.turn % this.players.length]);
    this.turn += 1;
  }

  setHandleMove(cells: Array<HTMLElement>, currentSymbol: string): void {
    cells?.forEach((cell) => {
      cell.addEventListener('click', () => this.play(currentSymbol));
    });
  }
}

export default Game;
