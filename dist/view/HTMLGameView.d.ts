import { IGameProps, IHTMLGameViewProps } from '../@types/types';
import FieldView from './FieldView';
declare class HTMLGameView implements IHTMLGameViewProps {
    game: IGameProps;
    view: FieldView;
    constructor(game: IGameProps, view?: FieldView);
}
export default HTMLGameView;
