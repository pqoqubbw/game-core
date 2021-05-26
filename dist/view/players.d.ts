import { IPlayer } from '../player/index';
declare class PlayersView implements IPlayer {
    name: string;
    scores: number;
    constructor(name: string, scores?: number);
    renderPlayer(): string;
}
export default PlayersView;
