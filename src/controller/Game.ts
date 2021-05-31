import Strategy from '../model/Strategy';
import Field from '../Field';
import Event from '../Event';

import { IGameProps, IPlayerProps } from '../@types/types';

class Game implements IGameProps {
  constructor(
    public players: IPlayerProps[],
    public strategy: Strategy,
    public field: Field,
    public board = strategy.init(field.size.x, field.size.y),
    public turn = 0,
    public currentPlayerIndex = 0,
    public isFinished = false,
    public winnerId = -1,
    public updateCellEvent = new Event(),
  ) { }

  makeMove(x: number, y: number): void {
    const isValid = this.strategy.isTurnValid(this.board, x, y);

    if (isValid) {
      if (!this.isFinished) {
        this.strategy.setValue(this.board, x, y, this.currentPlayerIndex);
        // this.updateCell(x, y, this.players[this.currentPlayerIndex].sign);
      }

      const winnerId = this.strategy.checkWin(this.board);

      if (winnerId < 0) {
        this.updateTurnAndNextPlayer();
      } else {
        this.winnerId = this.currentPlayerIndex;
        this.isFinished = true;
      }
    }
  }

  updateTurnAndNextPlayer(): void {
    this.currentPlayerIndex = (this.turn + 1) % this.players.length;
    this.turn += 1;
  }
}
export default Game;
