import Game from '../model/Game';
import FieldView from './FieldView';
import PlayerView from './PlayerView';
declare class HTMLView {
    private game;
    private view;
    private players;
    constructor(game: Game, view?: FieldView, players?: PlayerView);
    render(idElement: string): void;
}
export default HTMLView;
