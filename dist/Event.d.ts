import { IEventProps } from './@types/types';
declare class Event implements IEventProps {
    listeners: any;
    constructor(listeners?: any);
    addListener(listener: (param: string) => void): void;
    trigger(data: any): void;
}
export default Event;
