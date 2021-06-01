import Strategy from './Strategy';
import Event from '../Event';
import { IGameProps, PlayerProps } from '../@types/types';
declare class Game implements IGameProps {
    players: PlayerProps;
    strategy: Strategy;
    field: any;
    board: number[][];
    turn: number;
    currentPlayerIndex: number;
    isFinished: boolean;
    winnerId: number;
    updateCellEvent: Event;
    winEvent: Event;
    constructor(players: PlayerProps, strategy: Strategy, field: any, board?: number[][], turn?: number, currentPlayerIndex?: number, isFinished?: boolean, winnerId?: number, updateCellEvent?: Event, winEvent?: Event);
    makeMove(data: any): void;
    updateTurnAndNextPlayer(): void;
    clearBoard(): void;
}
export default Game;
