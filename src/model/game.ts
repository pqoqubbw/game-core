import TicTacToe from '../ticTacToe';
import FieldView from '../view/FieldView';

import { IField } from '../Field';
import { IPlayer } from '../player';

class Game {
  constructor(
    public game: {
      field: IField,
      players: Array<IPlayer>,
      Strategy: any,
    },
    public view?: any,
  ) {
    this.action = this.action.bind(this);
  }

  init(): void {
    this.view = new FieldView(this.game.field.size.x, this.game.field.size.y);
    this.view.renderField();
    this.view.clickFieldEl(this.action);

    this.game.Strategy = new TicTacToe(this.game.players);
  }

  action(e): void {
    const element = e.target;
    this.game.Strategy.init(element);
  }
}
export default Game;
