import { IFieldViewProps, IUpdateData } from '../@types/types';

import Game from '../model/Game';
import Event from '../utils/Event';
import FieldView from './FieldView';
import PlayerView from './PlayerView';

class HTMLView {
  constructor(
    private game: Game,
    private view = new FieldView(game.field.size.x, game.field.size.y),
    private players = new PlayerView(),
    public event = new Event()
  ) {
    this.view.event.subscribe('move', ({ x, y }: IFieldViewProps) => this.game.makeMove({ x, y }));
    this.game.event.subscribe('update', ({ x, y, sign }: IUpdateData) =>
      this.view.updateCell({ x, y, sign })
    );
    this.game.event.subscribe('win', (winner: string) => this.view.showWin(winner));
    this.game.event.subscribe('draw', (winner: string) => this.view.showWin(winner));
  }

  render(idElement: string): void {
    this.view.renderField(idElement, 'table-bordered');
    this.players.renderPlayer(this.game.players, '.main');

    const buttonElement = document.createElement('button');
    buttonElement.innerHTML = 'start new game';
    buttonElement.onclick = () => {
      this.view.clearField();
      this.game.clearBoard(0);
    };
    document.body.appendChild(buttonElement);
  }
}
export default HTMLView;
