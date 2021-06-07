export interface IGameProps {
    gameInfo: {
        playersList: PlayerProps;
        strategy: IStrategy;
        fieldSize: IFieldViewProps;
    };
}
export interface IGameInfo {
    playersList: PlayerProps;
    strategy: IStrategy;
    fieldSize: IFieldViewProps;
}
export interface IStrategy {
    getName(): string;
    checkWin(board: number[][]): boolean;
    setPlayerToken(players: string[]): IPlayersInfo[];
    init(x: number, y: number): number[][];
    isTurnValid(board: number[][], x: number, y: number): boolean;
    setValue(board: number[][], x: number, y: number, playerId: number): void;
    checkFullCells(board: number[][]): boolean;
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
    board: number[][];
}
export interface callbackFunc {
    (data: any): any;
}
export interface IEvents {
    [key: string]: Array<(data?: any) => void>;
}
