import { IFieldViewProps, IUpdateData } from '../@types/types';

import Game from '../model/Game';
import FieldView from './FieldView';
import PlayerView from './PlayerView';

class HTMLView {
  constructor(
    private game: Game,
    private view = new FieldView(game.field.size.x, game.field.size.y),
    private players = new PlayerView(),
  ) {
    this.view.playEvent.addListener(({ x, y }: IFieldViewProps) => this.game.makeMove({ x, y }));
    this.game.updateCellEvent
      .addListener(({ x, y, sign }: IUpdateData) => this.view.updateCell({ x, y, sign }));
    this.game.winEvent.addListener((winner: string) => this.view.showWin(winner));
  }

  render(idElement: string): void {
    this.view.renderField(idElement, 'table-bordered');
    this.players.renderPlayer(this.game.players, '.main');
  }
}
export default HTMLView;
