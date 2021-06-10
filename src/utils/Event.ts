import { callbackFunc, IEvents } from '../@types/types';

interface IEvent {
  events: IEvents;
}

class Event implements IEvent {
  constructor(public events: IEvents = {}) {}

  subscribe(eventName: string, fn: callbackFunc): void {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(fn);
  }

  trigger(eventName: string, data: any): void {
    if (this.events[eventName]) {
      this.events[eventName].forEach((fn: callbackFunc) => {
        fn(data);
      });
    }
  }
}

export default Event;
