import { IFieldViewProps } from '../@types/types';

class Observer {
  constructor(
    private listeners: Array<(parametr: IFieldViewProps | string) => void> = [],
  ) { }

  addListener(listener: (param: any) => void): void {
    this.listeners.push(listener);
  }

  trigger(data: any): void {
    this.listeners.forEach((listener): void => listener(data))
  }
}

export default Observer;
