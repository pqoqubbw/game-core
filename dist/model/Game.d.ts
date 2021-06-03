import { IFieldProps, IFieldViewProps, IGameInfo, IGameProps, IPlayersInfo } from '../@types/types';
import Event from '../utils/Observer';
declare class Game implements IGameProps {
    gameInfo: IGameInfo;
    field: IFieldProps;
    players: IPlayersInfo[];
    private turn;
    private currentPlayerIndex;
    private isFinished;
    on: Event;
    constructor(gameInfo: IGameInfo, field?: IFieldProps, players?: IPlayersInfo[], turn?: number, currentPlayerIndex?: number, isFinished?: boolean, on?: Event);
    makeMove({ x, y }: IFieldViewProps): void;
    updateTurnAndNextPlayer(): void;
    clearBoard(): void;
}
export default Game;
