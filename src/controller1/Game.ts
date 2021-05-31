import Player from '../model1/Player';
import Strategy from '../model1/Strategy';
import Field from '../Field';
import FieldView from '../view/FieldView';
import Event from '../Event';

class Game {
  constructor(
    public players: Player [],
    public strategy: Strategy,
    public field: Field,
    public board = strategy.init(field.size.x, field.size.y),
    public view = new FieldView(field.size.x, field.size.y),
    public turn = 1,
    public currentPlayerIndex = 0,
    public isFinished = false,
    public winnerId = -1,
    public updateCellEvent = new Event(),
  ) { }

  init(): void {
    this.view.renderField();
    this.view.playEvent.addListener((x: number, y: number) => this.makeMove(x, y));
  }

  makeMove(x: number, y: number): void {
    const isValid = this.strategy.isTurnValid(this.board, x, y);

    if (isValid) {
      this.strategy.setValue(this.board, x, y, this.currentPlayerIndex);
      const winnerId = this.strategy.checkWin(this.board);

      if (winnerId < 0) {
        this.view.updateCell(x, y, this.players[this.currentPlayerIndex].sign);
        this.updateTurnAndNextPlayer();
      } else {
        this.winnerId = this.currentPlayerIndex;
        this.isFinished = true;
      }
    }
  }

  updateTurnAndNextPlayer(): void {
    this.currentPlayerIndex = this.turn % this.players.length;
    this.turn += 1;
  }
}
export default Game;
