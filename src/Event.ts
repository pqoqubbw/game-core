import { IEventProps } from './@types/types';

class Event implements IEventProps {
  constructor(
    public listeners: any = [],
  ) { }

  addListener(listener: any): void {
    this.listeners.push(listener);
  }

  trigger(params: any): void {
    this.listeners.forEach(
      (listener: (params: any) => void) => listener(params),
    );
  }

  triggerTwo(param1: number, param2: number): void {
    this.listeners.forEach(
      (listener: (param1: number, param2: number) => void) => listener(param1, param2),
    );
  }
}

export default Event;
