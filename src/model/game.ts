export interface IPlayers {
  players: Array<string>,
}

abstract class GameModel implements IPlayers {
  constructor(
    public players: Array<string>,
    public currentPlayer: string = players[0],
    public turn: number = 1,
    public finished: boolean = false,
  ) { }

  abstract checkWin(): void;

  checkDraw(cells: NodeListOf<Element>): boolean {
    const draw = Array.from(cells).every((cell: ChildNode): boolean => cell.textContent !== '');

    if (draw) this.finished = true;

    return draw;
  }

  play(cell: ChildNode, currentSymbol: string): void {
    if (cell.textContent === '' && !this.finished) {
      this.setValue(cell, currentSymbol);

      this.switchPlayer();
    }
  }

  setValue(cell: ChildNode, currentSymbol: string): void {
    const currentCell = cell;
    currentCell.textContent = currentSymbol;

    this.checkWin();
  }

  restartGame(cells: NodeListOf<Element>): void {
    Array.from(cells).map((cell: ChildNode) => {
      const currentCell = cell;
      currentCell.textContent = '';

      return cell;
    });

    this.finished = false;

    const firtsPlayer = 0;
    this.currentPlayer = this.players[firtsPlayer];

    this.turn = 0;
  }

  switchPlayer(): void {
    const currentPlayerIndex = this.players.indexOf(this.players[this.turn % this.players.length]);
    this.turn += 1;

    this.currentPlayer = this.players[currentPlayerIndex];
  }

  setHandleMove(cells: NodeListOf<Element>): void {
    cells?.forEach((cell: ChildNode): void => {
      cell.addEventListener('click', () => this.play(cell, this.currentPlayer));
    });
  }
}

export default GameModel;
