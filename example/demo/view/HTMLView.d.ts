import Game from '../model/Game';
import Event from '../utils/Event';
import FieldView from './FieldView';
import PlayerView from './PlayerView';
declare class HTMLView {
    private game;
    private view;
    private players;
    event: Event;
    constructor(game: Game, view?: FieldView, players?: PlayerView, event?: Event);
    render(idElement: string): void;
}
export default HTMLView;
