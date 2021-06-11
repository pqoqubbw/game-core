import { IFieldProps, IFieldViewProps, IGameInfo, IGameProps, IPlayersInfo, TableFilledSymbolType } from '../@types/types';
import Event from '../utils/Event';
declare class Game implements IGameProps {
    gameInfo: IGameInfo;
    field: IFieldProps;
    players: IPlayersInfo[];
    turn: number;
    currentPlayerIndex: number;
    isFinished: boolean;
    event: Event;
    constructor(gameInfo: IGameInfo, field?: IFieldProps, players?: IPlayersInfo[], turn?: number, currentPlayerIndex?: number, isFinished?: boolean, event?: Event);
    makeMove({ x, y }: IFieldViewProps): void;
    updateTurnAndNextPlayer(): void;
    clearBoard(symbolThanTableFilled: TableFilledSymbolType): void;
}
export default Game;
