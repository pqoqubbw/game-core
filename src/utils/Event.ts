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

  unsubscribe(eventName: string, func: callbackFunc): void {
    if (this.events[eventName]) {
      for (let i = 0; i < this.events[eventName].length; i++) {
        if (this.events[eventName][i] === func) {
          this.events[eventName].splice(i, 1);
          break;
        }
      }
    }
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
