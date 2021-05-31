declare class Event {
    listeners: [];
    constructor();
    addListener(listener: any): void;
    trigger(params: any): void;
    triggerTwo(param1: any, param2: any): void;
}
export default Event;
