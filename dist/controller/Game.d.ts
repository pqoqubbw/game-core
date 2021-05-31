import Strategy from '../model/Strategy';
import Field from '../Field';
import Event from '../Event';
import { IGameProps, IPlayerProps } from '../@types/types';
declare class Game implements IGameProps {
    players: IPlayerProps[];
    strategy: Strategy;
    field: Field;
    board: number[][];
    turn: number;
    currentPlayerIndex: number;
    isFinished: boolean;
    winnerId: number;
    updateCellEvent: Event;
    constructor(players: IPlayerProps[], strategy: Strategy, field: Field, board?: number[][], turn?: number, currentPlayerIndex?: number, isFinished?: boolean, winnerId?: number, updateCellEvent?: Event);
    makeMove(x: number, y: number): void;
    updateTurnAndNextPlayer(): void;
}
export default Game;
