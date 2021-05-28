import { IPlayer } from '../player';

export interface IPlayers {
  players: any,
  currentGame?: any,
}

abstract class Strategy implements IPlayers {
  constructor(
    public players: Array<IPlayer>,
    public currentGame?: any,
    public currentPlayer: string = players[0].player.value,
    public turn: number = 1,
    public finished: boolean = false,
  ) { }

  abstract checkWin(cells): void;

  // checkDraw(cells: NodeListOf<Element>): boolean {
  //   const draw = Array.from(cells).every((cell: ChildNode): boolean => cell.textContent !== '');

  //   if (draw) this.finished = true;

  //   return draw;
  // }

  init(cell): void {
    if (cell.textContent === '' && !this.finished) {
      cell.textContent = this.currentPlayer;
      this.nextTurn();
    }
  }

  nextTurn(): void {
    const currentPlayerIndex = this.players.indexOf(this.players[this.turn % this.players.length]);
    this.turn += 1;

    this.currentPlayer = this.players[currentPlayerIndex].player.value;
  }

  // setValue(cell: ChildNode, currentSymbol: string): void {
  //   const currentCell = cell;
  //   currentCell.textContent = currentSymbol;

  //   // this.checkWin();
  // }

  // restartGame(cells: NodeListOf<Element>): void {
  //   Array.from(cells).map((cell: ChildNode) => {
  //     const currentCell = cell;
  //     currentCell.textContent = '';

  //     return cell;
  //   });

  //   this.finished = false;

  //   const firtsPlayer = 0;
  //   this.currentPlayer = this.players[firtsPlayer];

  //   this.turn = 0;
  // }

  // setHandleMove(cells: NodeListOf<Element>): void {
  //   cells?.forEach((cell: ChildNode): void => {
  //     cell.addEventListener('click', () => this.init(cell, this.currentPlayer));
  //   });
  // }
}

export default Strategy;
