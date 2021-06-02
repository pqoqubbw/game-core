import {
  IFieldProps, IFieldViewProps, IGameInfo, IGameProps, IPlayersInfo,
} from '../@types/types';

import Field from './Field';
import Observer from '../utils/Observer';

class Game implements IGameProps {
  constructor(
    public gameInfo: IGameInfo,
    public field: IFieldProps = { size: { x: 1, y: 1 } },
    public players: IPlayersInfo[] = [],
    private board: number[][] = [],
    private turn = 0,
    private currentPlayerIndex = 0,
    private isFinished = false,
    public updateCellEvent = new Observer(),
    public winEvent = new Observer(),
  ) {
    this.players = this.gameInfo.strategy.setPlayerToken(gameInfo.playersList);
    this.field = new Field(this.gameInfo.fieldSize);
    this.board = this.gameInfo.strategy.init(this.field.size.x, this.field.size.y);
  }

  makeMove({ x, y }: IFieldViewProps): void {
    console.log(this);

    const isValid = this.gameInfo.strategy.isTurnValid(this.board, x, y);

    if (!isValid) {
      return;
    }

    if (!this.isFinished) {
      this.gameInfo.strategy.setValue(this.board, x, y, this.currentPlayerIndex);
      this.updateCellEvent.trigger({ x, y, sign: this.players[this.currentPlayerIndex].sign });
    }

    const isPlayerWin = this.gameInfo.strategy.checkWin(this.board);
    const isCellsFulled = this.gameInfo.strategy.checkDraw(this.board);

    if (isCellsFulled) this.winEvent.trigger('no one');
    if (isPlayerWin) this.winEvent.trigger(this.players[this.currentPlayerIndex].name);

    if (isPlayerWin || isCellsFulled) {
      this.isFinished = true;
      this.clearBoard();
    } else {
      this.updateTurnAndNextPlayer();
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
  }
}
export default Game;
