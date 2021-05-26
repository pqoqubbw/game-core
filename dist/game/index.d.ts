interface IPlayers {
    players: Array<string>;
    currentPlayer: number;
}
declare abstract class Game implements IPlayers {
    players: Array<string>;
    currentPlayer: number;
    turn: number;
    finished: boolean;
    constructor(players: Array<string>, currentPlayer?: number, turn?: number, finished?: boolean);
    abstract checkWin(cells: Array<HTMLElement>): boolean;
    play(this: any, currentSymbol: string): boolean;
    setValue(this: HTMLElement, currentSymbol: string): void;
    switchPlayer(): void;
    setHandleMove(cells: Array<HTMLElement>, currentSymbol: string): void;
}
export default Game;
