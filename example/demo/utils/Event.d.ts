import { callbackFunc, IEvents } from '../@types/types';
declare class Event {
    events: IEvents;
    constructor(events?: IEvents);
    subscribe(eventName: string, fn: callbackFunc): void;
    trigger(eventName: string, data: any): void;
}
export default Event;
