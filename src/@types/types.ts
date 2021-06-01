import Strategy from '../model/Strategy';

export interface IGameProps {
  players: PlayerProps,
  strategy: Strategy,
  field: IFieldProps,
}

export interface IHTMLGameViewProps {
  game: IGameProps,
}

export type PlayerProps = Array<string>;

export interface IPlayerViewProps {
  name: string[],
}

export interface IFieldViewProps {
  [key: string]: number,
}

export interface IFieldProps {
  size: {
    [key: string]: number
  },
}

export interface IEventProps {
  listeners: string[],
}
