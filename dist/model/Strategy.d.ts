import { IPlayer } from '../player';
export interface IPlayers {
    players: any;
    currentGame?: any;
}
declare abstract class Strategy implements IPlayers {
    players: Array<IPlayer>;
    currentGame?: any;
    currentPlayer: string;
    turn: number;
    finished: boolean;
    constructor(players: Array<IPlayer>, currentGame?: any, currentPlayer?: string, turn?: number, finished?: boolean);
    abstract checkWin(cells: any): void;
    init(cell: any): void;
    nextTurn(): void;
}
export default Strategy;
