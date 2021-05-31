import { IEventProps } from './@types/types';
declare class Event implements IEventProps {
    listeners: any;
    constructor(listeners?: any);
    addListener(listener: () => void): void;
    triggerTwo(param1: number, param2: number): void;
}
export default Event;
