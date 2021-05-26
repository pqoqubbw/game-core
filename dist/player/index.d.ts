export interface IPlayer {
    name: string;
    scores: number;
}
declare class Player implements IPlayer {
    name: string;
    scores: number;
    constructor(name: string, scores?: number);
}
export default Player;
