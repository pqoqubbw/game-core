export interface IGameProps {
    gameInfo: {
        playersList: PlayerProps;
        strategy: IStrategy;
        fieldSize: IFieldViewProps;
    };
    clearBoard: (symbolThanTableFilled: TableFilledSymbolType) => void;
}
export interface IGameInfo {
    playersList: PlayerProps;
    strategy: IStrategy;
    fieldSize: IFieldViewProps;
}
export interface IStrategy {
    getName(): string;
    checkWin(board: TableFilledSymbolType[][]): boolean;
    setPlayerToken(players: string[]): IPlayersInfo[];
    init(x: number, y: number, symbolThanTableFilled: TableFilledSymbolType): TableFilledSymbolType[][];
    isTurnValid(board: TableFilledSymbolType[][], x: number, y: number, symbolThanTableFilled: TableFilledSymbolType): boolean;
    setValue(board: TableFilledSymbolType[][], x: number, y: number, playerId: number): void;
    checkFullCells(board: TableFilledSymbolType[][], symbolThanTableFilled: TableFilledSymbolType): boolean;
}
export interface IHTMLGameViewProps {
    game: IGameProps;
}
export declare type PlayerProps = string[];
export interface IPlayerViewProps {
    name: string[];
}
export interface IPlayersInfo {
    name: string;
    sign: string;
}
export interface IPlayerProps {
    name: string;
}
export interface IFieldViewProps {
    x: number;
    y: number;
}
export interface IUpdateData {
    x: number;
    y: number;
    sign: string;
}
export interface IFieldProps {
    size: IFieldViewProps;
    board: TableFilledSymbolType[][];
}
export interface callbackFunc {
    (data: any): any;
}
export interface IEvents {
    [key: string]: Array<(data?: any) => void>;
}
export declare type TableFilledSymbolType = string | number | boolean | null;
