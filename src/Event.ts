import { IEventProps } from './@types/types';

class Event implements IEventProps {
  constructor(
    public listeners = [] as any,
  ) { }

  addListener(listener: (param: string) => void): void {
    this.listeners.push(listener);
  }

  trigger(data: any): void {
    this.listeners.forEach((listener: (data: any) => void) => {
      listener(data);
    });
  }
}

export default Event;
