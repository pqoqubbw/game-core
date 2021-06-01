import { IHTMLGameViewProps } from '../@types/types';
import Game from '../model/Game';
import FieldView from './FieldView';
import PlayerView from './PlayerView';

class HTMLView implements IHTMLGameViewProps {
  constructor(
    public game: Game,
    public view = new FieldView(game.field.size.x, game.field.size.y),
    public players = new PlayerView(),
  ) {
    this.view.playEvent.addListener((data) => this.game.makeMove(data));
    this.game.updateCellEvent
      .addListener((data) => this.view.updateCell(data));
    this.game.winEvent.addListener((winner: string): void => this.view.showWin(winner));
  }

  render(idElement: string): void {
    this.view.renderField(idElement);
    this.players.renderPlayer(this.game.players);
  }
}
export default HTMLView;
