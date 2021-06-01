import Field from '../Field';
import Event from '../Event';

import {
  IFieldProps, IFieldViewProps, IGameProps, IPlayersInfo, IStrategy, PlayerProps,
} from '../@types/types';

class Game implements IGameProps {
  constructor(
    public playersArr: PlayerProps,
    public strategy: IStrategy,
    public fieldParam: IFieldViewProps,
    public field: IFieldProps = { size: { x: 1, y: 1 } },
    public players: IPlayersInfo[] = [],
    public board: number[][] = [],
    public turn = 0,
    public currentPlayerIndex = 0,
    public isFinished = false,
    public winnerId = -1,
    public updateCellEvent = new Event(),
    public winEvent = new Event(),
  ) {
    this.players = this.strategy.setSymbolPlayer(playersArr);
    this.field = new Field(this.fieldParam);
    this.board = this.strategy.init(this.field.size.x, this.field.size.y);
  }

  makeMove(data: any): void {
    const { x, y } = data;
    const isValid = this.strategy.isTurnValid(this.board, x, y);

    if (isValid) {
      if (!this.isFinished) {
        this.strategy.setValue(this.board, x, y, this.currentPlayerIndex + 1);
        this.updateCellEvent.trigger({ x, y, sign: this.players[this.currentPlayerIndex].sign });
      }

      const winnerId = this.strategy.checkWin(this.board);
      const isDraw = this.strategy.checkDraw(this.board);

      if (winnerId > 0 || isDraw) {
        this.winnerId = this.currentPlayerIndex + 1;
        this.isFinished = true;
        if (isDraw) this.winEvent.trigger('no one');
        if (winnerId > 0) this.winEvent.trigger(this.players[this.currentPlayerIndex].name);
        this.clearBoard();
      } else this.updateTurnAndNextPlayer();
    }
  }

  updateTurnAndNextPlayer(): void {
    this.currentPlayerIndex = (this.turn + 1) % this.players.length;
    this.turn += 1;
  }

  clearBoard(): void {
    for (let i = 0; i < this.field.size.x; i += 1) {
      for (let j = 0; j < this.field.size.y; j += 1) {
        this.board[i][j] = 0;
      }
    }

    this.isFinished = false;
    this.turn = 0;
    this.currentPlayerIndex = 0;
    this.winnerId = -1;
  }
}
export default Game;
