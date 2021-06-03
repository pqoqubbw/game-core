import {
  IFieldProps, IFieldViewProps, IGameInfo, IGameProps, IPlayersInfo,
} from '../@types/types';

import Field from './Field';
import Event from '../utils/Observer';

class Game implements IGameProps {
  constructor(
    public gameInfo: IGameInfo,
    public field: IFieldProps = { size: { x: 1, y: 1 }, board: [] },
    public players: IPlayersInfo[] = [],
    private turn = 0,
    private currentPlayerIndex = 0,
    private isFinished = false,
    public on = new Event(),
  ) {
    this.players = this.gameInfo.strategy.setPlayerToken(gameInfo.playersList);
    this.field = new Field(this.gameInfo.fieldSize);
    this.field.board = this.gameInfo.strategy.init(this.field.size.x, this.field.size.y);
  }

  makeMove({ x, y }: IFieldViewProps): void {

    console.log(this);

    const isValid = this.gameInfo.strategy.isTurnValid(this.field.board, x, y);

    if (!isValid) {
      return;
    }

    if (!this.isFinished) {
      this.on.trigger('update', { x, y, sign: this.players[this.currentPlayerIndex].sign })
      this.gameInfo.strategy.setValue(this.field.board, x, y, this.currentPlayerIndex);
    }

    const isPlayerWin = this.gameInfo.strategy.checkWin(this.field.board);
    const isCellsFulled = this.gameInfo.strategy.checkFullCells(this.field.board);

    if (isCellsFulled) this.on.trigger('draw', 'no one');
    if (isPlayerWin) this.on.trigger('win', this.players[this.currentPlayerIndex].name);

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
        this.field.board[i][j] = 0;
      }
    }

    this.isFinished = false;
    this.turn = 0;
    this.currentPlayerIndex = 0;
  }
}
export default Game;
