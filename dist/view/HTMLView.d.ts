import { IHTMLGameViewProps } from '../@types/types';
import Game from '../model/Game';
import FieldView from './FieldView';
import PlayerView from './PlayerView';
declare class HTMLView implements IHTMLGameViewProps {
    game: Game;
    view: FieldView;
    players: PlayerView;
    constructor(game: Game, view?: FieldView, players?: PlayerView);
    render(idElement: string): void;
}
export default HTMLView;
