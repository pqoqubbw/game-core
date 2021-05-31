import Strategy from '../model/Strategy';
export interface IGameProps {
    players: IPlayerProps[];
    strategy: Strategy;
    field: IFieldProps;
}
export interface IHTMLGameViewProps {
    game: IGameProps;
}
export interface IPlayerProps {
    name: string;
    sign: string;
}
export interface IPlayerViewProps {
    name: string[];
}
export interface IFieldViewProps {
    x: number;
    y: number;
}
export interface IFieldProps {
    size: IFieldViewProps;
}
export interface IEventProps {
    listeners: string[];
}
