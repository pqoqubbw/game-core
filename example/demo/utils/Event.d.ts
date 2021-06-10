import { callbackFunc, IEvents } from '../@types/types';
interface IEvent {
    events: IEvents;
}
declare class Event implements IEvent {
    events: IEvents;
    constructor(events?: IEvents);
    subscribe(eventName: string, fn: callbackFunc): void;
    unsubscribe(eventName: string, func: callbackFunc): void;
    trigger(eventName: string, data: any): void;
}
export default Event;
