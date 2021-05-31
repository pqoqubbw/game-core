import { IGameProps, IHTMLGameViewProps } from '../@types/types';

import FieldView from './FieldView';

class HTMLGameView implements IHTMLGameViewProps {
  constructor(
    public game: IGameProps,
    public view = new FieldView(game.field.size.x, game.field.size.y),
  ) {
    // this.view.playEvent.addListener((x: number, y: number) => this.makeMove(x, y));
    this.view.renderField();
  }
}

export default HTMLGameView;
