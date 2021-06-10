import {
  IFieldProps,
  IFieldViewProps,
  IGameInfo,
  IGameProps,
  IPlayersInfo,
  TableFilledSymbolType,
} from '../@types/types';

import Field from './Field';
import Event from '../utils/Event';

class Game implements IGameProps {
  constructor(
    public gameInfo: IGameInfo,
    public field: IFieldProps = { size: { x: 1, y: 1 }, board: [] },
    public players: IPlayersInfo[] = [],
    public turn = 0,
    public currentPlayerIndex = 0,
    public isFinished = false,
    public on = new Event()
  ) {
    this.players = this.gameInfo.strategy.setPlayerToken(gameInfo.playersList);
    this.field = new Field(this.gameInfo.fieldSize);
    this.field.board = this.gameInfo.strategy.init(this.field.size.x, this.field.size.y, 0);
  }

  makeMove({ x, y }: IFieldViewProps): void {
    const isValid = this.gameInfo.strategy.isTurnValid(this.field.board, x, y, 0);

    if (!isValid) {
      return;
    }

    if (!this.isFinished) {
      this.on.trigger('update', { x, y, sign: this.players[this.currentPlayerIndex].sign });
      this.gameInfo.strategy.setValue(this.field.board, x, y, this.currentPlayerIndex);
    }

    const isPlayerWin = this.gameInfo.strategy.checkWin(this.field.board);
    const isCellsFulled = this.gameInfo.strategy.checkFullCells(this.field.board, 0);

    if (isCellsFulled) this.on.trigger('draw', 'no ones');
    if (isPlayerWin) this.on.trigger('win', this.players[this.currentPlayerIndex].name);

    if (isPlayerWin || isCellsFulled) {
      this.isFinished = true;
    } else {
      this.updateTurnAndNextPlayer();
    }
  }

  updateTurnAndNextPlayer(): void {
    this.currentPlayerIndex = (this.turn + 1) % this.players.length;
    this.turn += 1;
  }

  clearBoard(symbolThanTableFilled: TableFilledSymbolType): void {
    for (let i = 0; i < this.field.size.x; i += 1) {
      for (let j = 0; j < this.field.size.y; j += 1) {
        this.field.board[i][j] = symbolThanTableFilled;
      }
    }

    this.isFinished = false;
    this.turn = 0;
    this.currentPlayerIndex = 0;
  }
}
export default Game;
