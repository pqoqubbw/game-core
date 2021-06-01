import { IEventProps } from './@types/types';
declare class Event implements IEventProps {
    listeners: Array<(param: string) => void>;
    constructor(listeners?: Array<(param: string) => void>);
    addListener(listener: (param: string) => void): void;
    trigger(data: any): void;
}
export default Event;
