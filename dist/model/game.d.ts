import { IField } from '../Field';
import { IPlayer } from '../player';
declare class Game {
    game: {
        field: IField;
        players: Array<IPlayer>;
        Strategy: any;
    };
    view?: any;
    constructor(game: {
        field: IField;
        players: Array<IPlayer>;
        Strategy: any;
    }, view?: any);
    init(): void;
    action(e: any): void;
}
export default Game;
