import Event from '../Event';
import { IFieldProps, IFieldViewProps, IGameProps, IPlayersInfo, IStrategy, PlayerProps } from '../@types/types';
declare class Game implements IGameProps {
    playersArr: PlayerProps;
    strategy: IStrategy;
    fieldParam: IFieldViewProps;
    field: IFieldProps;
    players: IPlayersInfo[];
    board: number[][];
    turn: number;
    currentPlayerIndex: number;
    isFinished: boolean;
    winnerId: number;
    updateCellEvent: Event;
    winEvent: Event;
    constructor(playersArr: PlayerProps, strategy: IStrategy, fieldParam: IFieldViewProps, field?: IFieldProps, players?: IPlayersInfo[], board?: number[][], turn?: number, currentPlayerIndex?: number, isFinished?: boolean, winnerId?: number, updateCellEvent?: Event, winEvent?: Event);
    makeMove(data: any): void;
    updateTurnAndNextPlayer(): void;
    clearBoard(): void;
}
export default Game;
