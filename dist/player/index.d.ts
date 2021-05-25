interface IPlayer {
    playerName: string;
    scores: number;
    id: string;
}
declare class Player {
    name: string;
    constructor(name?: string);
    createPlayer(): IPlayer;
    renderPlayer(): string;
}
export default Player;
