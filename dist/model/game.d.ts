export interface IPlayers {
    players: Array<string>;
}
declare abstract class GameModel implements IPlayers {
    players: Array<string>;
    currentPlayer: string;
    turn: number;
    finished: boolean;
    constructor(players: Array<string>, currentPlayer?: string, turn?: number, finished?: boolean);
    abstract checkWin(): void;
    checkDraw(cells: NodeListOf<Element>): boolean;
    play(cell: ChildNode, currentSymbol: string): void;
    setValue(cell: ChildNode, currentSymbol: string): void;
    restartGame(cells: NodeListOf<Element>): void;
    switchPlayer(): void;
    setHandleMove(cells: NodeListOf<Element>): void;
}
export default GameModel;
