export interface IPlayer {
    player: {
        value: string;
    };
}
export default class Player implements IPlayer {
    player: {
        value: string;
        moves?: number[];
    };
    constructor(player: {
        value: string;
        moves?: number[];
    });
}
