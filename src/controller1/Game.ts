import Player from '../model1/Player';
import Strategy from '../model1/Strategy';
import Field from '../Field';
import FieldView from '../view/FieldView';
import Event from '../Event';

class Game {
  players: Player [];

  strategy: Strategy;

  field: Field;

  view?: FieldView;

  board: number [][];

  currentPlayerIndex: number;

  turn: number;

  isFinished = false;

  winnedId = -1;

  updateCellEvent = new Event();

  constructor(players: Player [], strategy: Strategy, field: Field) {
    this.players = players;
    this.strategy = strategy;
    this.field = field;
    // consider removing below this from constructor to init ();
    this.board = this.strategy.init(this.field.size.x, this.field.size.y);
    this.view = new FieldView(this.field.size.x, this.field.size.y);
    this.turn = 1;
    this.currentPlayerIndex = 0;
  }

  init():void {
    // this.board = this.strategy.init(this.field.size.x, this.field.size.y);
    // this.view = new FieldView(this.field.size.x, this.field.size.y);
    // this.currentPlayerIndex = 0;
    this.view.renderField();
    this.view.playEvent.addListener((x: number, y: number) => this.makeMove(x, y));

    // this.updateCellEvent.trigger(cellId: number);
  }

  makeMove(x: number, y: number): void {
    console.log(`makeMove invoked ${x} ${y}`);
    const isValid = this.strategy.isTurnValid(this.board, x, y);

    if (isValid) {
      this.strategy.setValue(this.board, x, y, this.currentPlayerIndex);
      // this.view. show Move (set value)
      const winnerId = this.strategy.checkWin(this.board);

      if (winnerId < 0) {
        this.view.updateCell(x, y, this.players[this.currentPlayerIndex].sign);
        this.updateTurnAndNextPlayer();
        console.log(this.board);
      } else {
        // this.view; // show winner message
        this.winnedId = this.currentPlayerIndex;
        this.isFinished = true;
      }
    }
  }

  updateTurnAndNextPlayer(): void {
    this.currentPlayerIndex = this.turn % this.players.length;
    this.turn += 1;
    console.log(`currentTurn ${this.turn} currPlayerIndex = ${this.currentPlayerIndex}`);
  }
}
export default Game;
