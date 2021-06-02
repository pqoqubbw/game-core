import Event from '../utils/Event';
import { IFieldProps, IFieldViewProps, IGameProps, IPlayersInfo, IStrategy, PlayerProps } from '../@types/types';
declare class Game implements IGameProps {
    playersList: PlayerProps;
    strategy: IStrategy;
    fieldSize: IFieldViewProps;
    field: IFieldProps;
    players: IPlayersInfo[];
    board: number[][];
    turn: number;
    currentPlayerIndex: number;
    isFinished: boolean;
    winnerId: number;
    updateCellEvent: Event;
    winEvent: Event;
    constructor(playersList: PlayerProps, strategy: IStrategy, fieldSize: IFieldViewProps, field?: IFieldProps, players?: IPlayersInfo[], board?: number[][], turn?: number, currentPlayerIndex?: number, isFinished?: boolean, winnerId?: number, updateCellEvent?: Event, winEvent?: Event);
    makeMove(data: any): void;
    updateTurnAndNextPlayer(): void;
    clearBoard(): void;
}
export default Game;
