import { IEventProps } from './@types/types';
declare class Event implements IEventProps {
    listeners: any;
    constructor(listeners?: any);
    addListener(listener: any): void;
    trigger(params: any): void;
    triggerTwo(param1: number, param2: number): void;
}
export default Event;
