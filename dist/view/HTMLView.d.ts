import Game from '../model/Game';
import Event from '../utils/Event';
import FieldView from './FieldView';
import PlayerView from './PlayerView';
declare class HTMLView {
    private game;
    private view;
    private players;
    on: Event;
    constructor(game: Game, view?: FieldView, players?: PlayerView, on?: Event);
    render(idElement: string): void;
}
export default HTMLView;
