import { IFieldProps, IFieldViewProps, IGameInfo, IGameProps, IPlayersInfo } from '../@types/types';
import Observer from '../utils/Observer';
declare class Game implements IGameProps {
    gameInfo: IGameInfo;
    field: IFieldProps;
    players: IPlayersInfo[];
    private turn;
    private currentPlayerIndex;
    private isFinished;
    updateCellEvent: Observer;
    winEvent: Observer;
    constructor(gameInfo: IGameInfo, field?: IFieldProps, players?: IPlayersInfo[], turn?: number, currentPlayerIndex?: number, isFinished?: boolean, updateCellEvent?: Observer, winEvent?: Observer);
    makeMove({ x, y }: IFieldViewProps): void;
    updateTurnAndNextPlayer(): void;
    clearBoard(): void;
}
export default Game;
