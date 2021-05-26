interface IPlayers {
  players: Array<IUserInfo>
  currentPlayer: IUserInfo
}

interface IUserInfo {
  name: string,
  symbol: string,
  fields: Array<number>,
}

abstract class Game implements IPlayers {
  constructor(
    public players: Array<IUserInfo>,
    public currentPlayer: IUserInfo,
    public turn: number = 0,
    public finished: boolean = false,
    public indexCurrentPLayer: number = 0,
  ) { }

  abstract checkWin(): boolean;

  abstract checkDraw(): boolean;

  handleMove(this: any, currentSymbol: string): boolean {
    this.setValue(currentSymbol);

    this.finished = this.checkWin() || this.checkDraw();

    if (!this.finished) this.switchPlayer();

    return true;
  }

  switchPlayer(): void {
    this.indexCurrentPLayer = this.players.indexOf(this.players[this.turn % this.players.length]);
    this.currentPlayer = this.players[this.indexCurrentPLayer];
    this.turn += 1;
  }

  // setHandleMove(cells: Array<HTMLElement>): void {
  //   cells?.forEach((cell) => {
  //     cell.addEventListener('click', this.handleMove);
  //   });
  // }
}

export default Game;
