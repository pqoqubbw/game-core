import Observer from '../utils/Observer';
import { IFieldProps, IFieldViewProps, IGameInfo, IGameProps, IPlayersInfo } from '../@types/types';
declare class Game implements IGameProps {
    gameInfo: IGameInfo;
    field: IFieldProps;
    players: IPlayersInfo[];
    private board;
    private turn;
    private currentPlayerIndex;
    private isFinished;
    updateCellEvent: Observer;
    winEvent: Observer;
    constructor(gameInfo: IGameInfo, field?: IFieldProps, players?: IPlayersInfo[], board?: number[][], turn?: number, currentPlayerIndex?: number, isFinished?: boolean, updateCellEvent?: Observer, winEvent?: Observer);
    makeMove({ x, y }: IFieldViewProps): void;
    updateTurnAndNextPlayer(): void;
    clearBoard(): void;
}
export default Game;
